<template>
  <div class="container">
    <nav class="navigation">
      <div class="navi-logo">
        <div :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Menu/Close.svg') + ')' }" class="navi-circle-close"></div>
        <div :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Menu/Close.svg') + ')' }" class="navi-circle-open"></div>
        <img class="logo" src="@/assets/logo.png">
        <img class="logo-small" src="@/assets/logo-min.png">
      </div>
      <div class="navi-head">
        <div class="head-title">
          Dashboard
        </div>
        <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="System" class="system" v-model="user.system">
          <option value="Overall system">Overall system</option>
        </select>
        <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Days" class="days" v-model="user.days">
          <option value="Last 30 days">Last 30 days</option>
        </select>
      </div>
      <div class="navi-user">
        <div v-if="popup" class="user-menu">
          <div v-on:click="popup = !popup" class="username">
            Linnie Weaver
          </div>
          <div v-on:click="popup = !popup" class="user-circle"></div>
        </div>
        <div v-on:click="popup = !popup" class="username">
          Linnie Weaver
        </div>
        <div v-on:click="popup = !popup" class="user-circle"></div>
      </div>
    </nav>
    <div class="res-div">
      <div class="head-title">
        Dashboard
      </div>
      <div class="res-select">
        <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="System" class="system" v-model="user.system">
          <option value="Overall system">Overall system</option>
        </select>
        <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Days" class="days" v-model="user.days">
          <option value="Last 30 days">Last 30 days</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
          popup: false,
          user:{
          system: 'Overall system',
          days: 'Last 30 days',
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
.user-menu{
	height: 210px;
	width: 228px;
	background-color: #FFFFFF;
	box-shadow: 0 10px 40px 0 rgba(0,0,0,0.1);
  vertical-align: top;
  position: fixed;
  z-index: 999999;
  float: right;
}
.navigation{
  max-width: 100%;
  height: 60px;
  background-color: #FFFFFF;
}
.navi-logo{
  max-width: 300px;
  display: inline-block;
  width: 100%;
}
.navi-circle-open{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: none;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  margin-right: 10px;
  transform: rotate(180deg);
}
.navi-circle-close{
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
.user-circle{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 10px;
  margin-bottom: 15px;
  margin-right: 15px;
  float: left;
}
.username{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 15px;
  line-height: 20px;
  text-align: left;
  margin-top: 20px;
  float: left;
  margin-left: 63px;
}
.navi-head{
  max-width: 560px;
  display: inline-block;
  width: auto;
}
.navi-user{
  max-width: 228px;
  float: right;
  display: inline-block;
  width: auto;
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
.logo-small{
  display: none;
  vertical-align: top;
  margin-top: 15px;
  margin-right: 20px;
  margin-left: 10px;
}
.res-div{
  display: none;
  width: 100%;
}
.res-select{
  display: inline-block;
  width: 100%;
}
.system{
    width: 180px;
    height: 40px;
    border: 1px solid #EDEEF3;
    border-radius: 4px;
    background-color: #FFFFFF;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 25px;
    font-family: "Helvetica Neue";
    color: #55616E;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
    margin-right: 10px;
}
.days{
    width: 210px;
    height: 40px;
    border: 1px solid #EDEEF3;
    border-radius: 4px;
    background-color: #FFFFFF;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 25px;
    font-family: "Helvetica Neue";
    color: #55616E;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
}
select{
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
}
@media only screen and (max-width: 1200px) {
    .navi-head{
      display: none;
    }
    .navi-logo{
      max-width: 30.8333333333%;
      width: 100%;
    }
    .res-div{
      display: inline-block;
    }
    .system, .days{
      width: 47.5%;
    }
}
@media only screen and (max-width: 605px) {
    .logo{
      display: none;
    }
    .logo-small{
      display: inline-block;
    }
    .navi-logo{
      max-width: 40.8333333333%;
      width: 100%;
    }
    .navi-circle-open{
      display: inline-block;
    }
    .navi-circle-close{
      display: none;
    }
}
@media only screen and (max-width: 390px) {
    .username{
      display: none;
    }
}
</style>
