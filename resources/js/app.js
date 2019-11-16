require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import router from './router.js'
import App from './App.vue'
import store from './store.js'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import { mapActions, mapGetters, mapState } from 'vuex'


new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    computed: {
        ...mapGetters(['isAuth']),
        ...mapState(['token']),
        ...mapState('user', {
            user_authenticated: state => state.authenticated
        })
    },
    methods: {
        ...mapActions('user', ['getUserLogin']),
        initialLister() {
            if (this.isAuth) {
               
            }
        }
    },
    watch: {
        token() {
            this.initialLister()
        },
        user_authenticated() {
            this.initialLister()
        }
    },
    created() {
        if (this.isAuth) {
            this.getUserLogin()
        }
    }
})
