<template>
    <div class="container">
        <section class="content-header">
            <h1>
                Top Navigation
                <small>Example 2.0</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                <li><a href="#">Layout</a></li>
                <li class="active">Top Navigation</li>
            </ol>
        </section>

        <section class="content">
            
            <div class="box box-default">
                <div class="box-header with-border">
                    <h3 class="box-title">Blank Box</h3>
                </div>
                <div class="box-body">
                   <p>Name {{ authenticated.name }}</p>
                   <p>Email {{ authenticated.email }}</p>
                   <p>created at {{ authenticated.created_at }}</p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'

export default {
  computed: {
        ...mapState('user', {
            authenticated: state => state.authenticated
        })
       
    }  
}
</script>
