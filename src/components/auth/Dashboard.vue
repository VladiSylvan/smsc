<template>
    <div class="container">
      <nav class="navigation">
        <img class="logo" src="@/assets/logo.png">
        <div class="title">Dashboard</div>
      </nav>
    </div>
</template>

<script>
export default {
    data () {
        return {
                user:{
                firstName: '',
                secondName: '',
                companyName: '',
                email: '',
                phoneNumber: '',
                address: '',
                country: 'Luxembourg',
                state: 'Nebraska',
                city: '',
                zipCode: '',
                password: '',
                rePassword: ''
            }
        }
    },
    methods:{
        sendForm(){
            event.preventDefault()
        }
    },
}
</script>
<style>
.navigation{
    width: 1440px;
    height: 60px;
    background-color: red;
}
.logo {
    display: inline-block;
    vertical-align: top;
    margin-top: 15px;
    margin-right: 20px;  /* if you want it vertically middle of the navbar. */
}
.title {
    display: inline-block;
    vertical-align: top;
    vertical-align: top;
    margin-left: 320px;
    height: 30px;
    width: 90px;
    color: #55616E;
    font-family: "Circular Std";
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    margin-top: 15px;
}
</style>
