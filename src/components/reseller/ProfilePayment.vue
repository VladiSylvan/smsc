<template>
    <div class="container">
      <reseller-navigation-component title="Profile"></reseller-navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Profile
          </div>
        </div>
        <div class="navbar-profile">
          <div class="nav-link-profile">
            <router-link :to="{ name: 'Profile' }">
              <div class="nav-text-profile">
                Portal Customization
              </div>
            </router-link>
          </div>
          <div class="nav-link-profile">
            <div id="active" class="nav-text-profile">
              Payment Gateway
            </div>
            <div class="nav-line-profile"></div>
          </div>
        </div>
        <div class="profile-main">
          <router-link :to="{ name: 'Profile'}"><button id="preview" type="submit">Prev: Portal Customization</button></router-link>
          <router-link :to="{ name: 'Profile'}"><button id="payment" type="submit">Finish</button></router-link>
        </div>
        <div class="profile-payment-title">
          Payment Gateway
        </div>
        <div class="profile-payment-content">
          <div v-on:click="active = 1" v-bind:class="{'profile-payment-item-active': active == 1}" class="profile-payment-item">
            <label class="profile-payment-container"><img class="profile-payment-image" id="paypal" src="@/assets/paypal.png">
              <input type="radio" checked="checked" name="radio">
              <span class="checkmark"></span>
            </label>
          </div>
          <div v-on:click="active = 2" v-bind:class="{'profile-payment-item-active': active == 2}" class="profile-payment-item">
            <label class="profile-payment-container"><img class="profile-payment-image" id="stripe" src="@/assets/stripe.png">
              <input type="radio" name="radio">
              <span class="checkmark"></span>
            </label>
          </div>
          <div v-on:click="active = 3" v-bind:class="{'profile-payment-item-active': active == 3}" class="profile-payment-item">
            <label class="profile-payment-container"><img class="profile-payment-image" id="mastercard" src="@/assets/mastercard.png">
              <input type="radio" name="radio">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="profile-payment-input">
          <input class="profile-input" type="text" v-model="user.email" placeholder="Enter your paypal email">
        </div>
      </div>
    </div>
</template>
<script>
import modal from '@/components/modal.vue'
import ResellerNavigationComponent from '@/components/ResellerNavigationComponent'

export default {
    name: 'app',
    data () {
        return {
          show: true,
          width: '60px',
          transitionName: 'fade',
          popup: false,
          test: false,
          active: 1,
          isModalVisible: false,
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            },

        }
    },
    components:{
      modal,
      ResellerNavigationComponent,
    },
    methods:{
        sendForm(){
            event.preventDefault()
        },
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        }
    },
}
</script>
<style>
/* The container */
.profile-payment-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default radio button */
.profile-payment-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 22px;
    border: 1px solid #BDBFD8;
    background-color: #FFF;
    border-radius: 50%;
    margin-top: 23px;
    margin-left: 15px;
}

/* On mouse-over, add a grey background color */
.profile-payment-container:hover input ~ .checkmark {
    background-color: #FFF;
}

/* When the radio button is checked, add a blue background */
.profile-payment-container input:checked ~ .checkmark {
    background-color: #FFF;
    border: 2px solid #51A3F3;
    margin-top: 22px;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the indicator (dot/circle) when checked */
.profile-payment-container input:checked ~ .checkmark:after {
    display: block;
}

/* Style the indicator (dot/circle) */
.profile-payment-container .checkmark:after {
 	top: 3px;
	left: 3px;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background: #51A3F3;
}

.profile-payment-container input:checked ~ .profile-payment-item {
  border: 2px solid #51A3F3;
}

.profile-payment-input{
    display: inline-block;
    width: 100%;
    float: left;
}
.profile-payment-content{
    display: inline-block;
    width: 100%;
    float: left;
}

.profile-payment-title{
  clear:both;
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  display: inline-block;
  float: left;
  margin-top: 20px;
  margin-left: 20px;
  width: 100%;
}
.profile-payment-image{
  margin-left: 20px;
  margin-right: 20px;
}
.profile-payment-image#paypal{
  margin-top: 22px;
}
.profile-payment-image#stripe{
  margin-top: 16px;
}
.profile-payment-image#mastercard{
  margin-top: 20px;
}
.profile-payment-item{
  	box-sizing: border-box;
    height: 74px;
    width: auto;
    border-radius: 4px;
    background-color: #FFFFFF;
    display: inline-block;
    float: left;
    margin-top: 15px;
    margin-left: 20px;
    border: 2px solid #FFFFFF;
}
.profile-payment-item-active{
    box-sizing: border-box;
    height: 74px;
    width: auto;
    border-radius: 4px;
    background-color: #FFFFFF;
    display: inline-block;
    float: left;
    margin-top: 15px;
    margin-left: 20px;
    border: 2px solid #51A3F3;
}
input[type="radio"]{
  border: 1px solid #BDBFD8;
  width: 24px;
  height: 24px;
}
a{
  text-decoration: none;
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
}
.navbar-profile{
  height: 50px;
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: inset 0 1px 0 0 #F8F9FE;
}
.profile-main{
  float: left;
  display: inline-block;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
}
.nav-text-profile{
  color: #BDBFD8;
  font-family: "Circular Std";
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  text-align: center;
  margin-top: 15px;
}
.nav-text-profile#active{
  color: #51A3F3;
  font-weight: 500;
}
a{
  text-decoration: none;
}
.nav-link-profile{
  display: inline-block;
  float: left;
  height: 50px;
  width: 170px;
  margin-left: 20px;
}
.nav-line-profile{
  border-bottom: 2px solid #51A3F3;
  width: 170px;
  margin-top: 13px;
}
.profile-input{
  max-width: 500px;
  width: 100%;
  height: 40px;
  padding-left: 20px;
  margin-left: 20px;
  margin-top: 20px;
}

button#payment{
  	height: 40px;
    width: auto;
    border-radius: 4px;
    background-color: #51A3F3;
    border-radius: 4px;
    color: #fff;
    font-family: "Helvetica Neue";
    font-size: 15px;
    font-weight: 300;
    line-height: 30px;
    text-align: center;
    margin-top: 20px;
    float: right;
    padding-left: 15px;
    padding-right: 15px;
}
button#preview{
  	height: 40px;
    width: auto;
    border: 1px solid #BDBFD8;
    border-radius: 4px;
    background-color: #FFFFFF;
    color: #55616E;
    font-family: "Circular Std";
    font-size: 15px;
    font-weight: 500;
    line-height: 19px;
    text-align: center;
    margin-top: 20px;
    float: left;
    padding-left: 15px;
    padding-right: 15px;
}
.main{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
@media only screen and (max-width: 750px) {
    .main{
      max-width: 100%;
    }
}
</style>
