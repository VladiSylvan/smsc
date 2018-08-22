<template>
    <div class="container">
        <div class="row">
            <div class="login-logo">
                <img src="@/assets/logo.png">
            </div>
            <div class="login">
                <div class="content">
                    <h1>Log In</h1>
                    <div v-if="error">
                        <h5 style="color: red; text-align: center;">{{ errorMsg }}</h5>
                    </div>
                    <div v-if="this.$route.params.successMsg != null">
                      <h5 style="color: green; text-align: center;">
                        {{ this.$route.params.successMsg }}
                      </h5>
                    </div>
                    <form v-on:submit="login()">
                        <label>Email</label>
                        <input required class="input-email" type="text" v-model="user.user_name" placeholder="elyse_sauer@yahoo.com">
                        <label>Password</label>
                        <input required class="input-login-password" type="password" v-model="user.password" placeholder="********">
                        <input type="checkbox"> Remember me<br>
                        <button id="login" type="submit">Log In</button>
                        <div class="no-account">
                            Don't have an account? <router-link :to="{ name: 'Register'}">Register</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            user:{
              user_name: 'soupra@denovolab.com',
              password: '125447'
            },
            error: false,
            errorMsg: '',
        }
    },
    mounted(){
      console.log(localStorage.getItem("token"))
   },
    methods:{
        login(){
            var app = this

            this.axios.post('auth', app.user).then( res => {
                localStorage.setItem('token', res.data.payload.token)
                localStorage.setItem('token-exp', res.data.payload.exp)
                console.log('Token: ' + localStorage.getItem('token'))
                console.log('Token expiry date: ' + localStorage.getItem('token-exp'))
                this.$router.push({ name: 'Alert', params: { successMsg: 'OK' }})
            }).catch( err => {
                var app = this

                app.errorMsg = err.response.data.error.message
                app.error = true
                console.log(err.response)
            })
        }
    },
}
</script>
<style>
    .login-logo{
        text-align: center;
        margin-top: 45px;
    }
    .login{
        width: 540px;
        border-radius: 4px;
        background-color: #FFFFFF;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
        margin: auto;
        margin-top: 75px;
    }
    .content{
        padding: 60px;
    }
    input[type="text"], input[type="password"]{
      border: 1px solid #EDEEF3;
      border-radius: 4px;
      background-color: #FFFFFF;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-repeat: no-repeat;
      background-position-x: 5px;
      background-position-y: 5px;
      color: #55616E;
      font-family: "Helvetica Neue";
      font-size: 14px;
      line-height: 25px;
    }
    .input-email, .input-login-password{
      width: 100%;
      padding: 10px 15px;
      margin-bottom: 20px;
      margin-top: 5px;
    }
    label{
        color: #000000; font-family: "Circular Std Book";
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 0.21px;
        line-height: 15px;
        text-transform: uppercase;
    }
    button#login{
        height: 40px;
        width: 90px;
        border-radius: 4px;
        background-color: #51A3F3;
        color: #FFFFFF;
        font-family: "Helvetica Neue";
        font-size: 15px;
        font-weight: 300;
        line-height: 30px;
        text-align: center;
        margin-top: 15px;
    }
    .no-account{
        float: right;
        color: #55616E;
        font-family: "Helvetica Neue";
        font-size: 16px;
        line-height: 20px;
        margin-top: 25px;
    }
    .no-account a{
        color: #51A3F3;
        font-family: "Helvetica Neue";
        font-size: 16px;
        line-height: 20px;
        text-decoration: none;
    }
</style>
