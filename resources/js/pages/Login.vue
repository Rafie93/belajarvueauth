<!-- HTML SECTION -->
<template>
    <div class="container">
        <div class="login-box">
            <div class="login-logo">
                <router-link :to="{ name: 'home' }"><b>Hallo</b>Hallo</router-link>
            </div>
            <div class="login-box-body">
                <p class="login-box-msg">Sign in to start your session</p>

                <div class="form-group has-feedback">
                    <input type="email" class="form-control" required placeholder="Email" v-model="data.username">
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback" >
                    <input type="password" class="form-control" placeholder="Password" v-model="data.password" required>
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    <p class="text-danger"></p>
                </div>
              
                <div class="row">
                    <div class="col-xs-8">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" v-model="data.remember_me"> Remember Me
                            </label>
                        </div>
                    </div>
                    <div class="col-xs-4">
                        <button type="submit" class="btn btn-primary btn-block btn-flat" @click.prevent="postLogin">Login</button>
                    </div>
                </div>

                <a href="#">I forgot my password</a><br>
            </div>
        </div>
    </div>
</template>

<!-- JAVASCRIPT SECTION -->
<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
export default {
    data() {
        return {
            
            data: {
                username: '',
                password: '',
                grant_type:'password',
                client_id:2,
                client_secret:'paF0SoSq61XXapzK5L6D0vt3yfiYaHA9PCvnl0XE',
            }
        }
    },
    created() {
        if (this.isAuth) {
            //MAKA DI-DIRECT KE ROUTE DENGAN NAME home
            this.$router.push({ name: 'home' })
        }
    },
    computed: {
        ...mapGetters(['isAuth']),
      	...mapState(['errors'])
    },
    methods: {
        ...mapActions('auth', ['submit']),
        ...mapMutations(['CLEAR_ERRORS']),
      
        postLogin() {
            this.submit(this.data).then(() => {
                if (this.isAuth) {
                    this.CLEAR_ERRORS()
                    //MAKA AKAN DI-DIRECT KE ROUTE DENGAN NAME home
                    this.$router.push({ name: 'home' })
                }
            })
        }
    }
}
</script>