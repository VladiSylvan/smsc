<template>
  <div class="container">
    <nav class="navigation">
      <div class="navi-logo">
        <div class="navi-circle">
        </div>
        <img class="logo" src="@/assets/logo.png">
      </div>
      <div class="navi-head">
        <div class="head-title">
          Dashboard
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
    data () {
        return {
          user:{
          system: 'Overall system',
          days: 'Last 30 days'
        },
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
  max-width: 100%;
  height: 60px;
  background-color: #FFFFFF;
}
.navi-logo{
  width: 300px;
  display: inline-block;
}
.navi-circle{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  margin-right: 10px;
}
.navi-head{
  width: 300px;
  display: inline-block;
}
.head-title{
    display: inline-block;
    vertical-align: top;
    vertical-align: top;
    color: #55616E;
    font-family: "Circular Std";
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    margin-left: 15px;
    margin-top: 15px;
    margin-right: 32px;
}
.logo{
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-right: 20px;
}
@media only screen and (max-width: 605px) {
    .logo{
      display: none;
    }
    .navi-logo{
      max-width: 20.8333333333%;
      width: 100%;
    }
}
</style>
