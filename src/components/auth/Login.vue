<template>
    <div class="container">
        <div class="row">
            <div class="logo">
                <img src="@/assets/logo.png">
            </div>
            <div class="login">
                <div class="content">
                    <h1>Log In</h1>
                    <form v-on:submit="sendForm()">
                        <label>Email</label>
                        <input class="input-email" type="text" v-model="user.email" placeholder="elyse_sauer@yahoo.com">
                        <label>Password</label>
                        <input class="input-password" type="text" v-model="user.password" placeholder="********">
                        <button type="submit">Log In</button>
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
import axios from 'axios'
export default {
    data () {
        return {
                user:{
                user_name: '',
                password: ''
            }
        }
    },
    methods:{
        sendForm(){


            axios.post('http://88.198.106.121/api_smsc/v1/auth', this.user).then(function(res){
              console.log(res)
            }).catch(function(err){
              console.log(err)
            })
        }
    },
}
</script>
<style>
    .logo{
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
    h1{
        color: #000000;
        font-family: "Circular Std Medium";
        font-size: 24px;
        font-weight: bold;
        line-height: 24px;
        text-align: center;
        margin-bottom: 30px;
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
    .input-email, .input-password{
      width: 100%;
      padding: 10px 15px;
      margin-bottom: 20px;
      margin-top: 5px;
    }
    label{
    	color: #000000;	font-family: "Circular Std Book";
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 0.21px;
        line-height: 15px;
        text-transform: uppercase;
    }
    button{
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
