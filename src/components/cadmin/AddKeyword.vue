<template>
    <div class="container">
      <nav class="navigation">
        <div class="navi-logo">
          <div v-if="show" v-on:click="show = !show" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Menu/Close.svg') + ')' }" class="navi-circle-close"></div>
          <div v-if="show" v-on:click="show = !show" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Menu/Close.svg') + ')' }" class="navi-circle-open"></div>
          <div v-if="!show" v-bind:class="{'navi-circle-open-menu': !show}" v-on:click="show = !show" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Menu/Close.svg') + ')' }" class="navi-circle-open"></div>
          <img class="logo" src="@/assets/logo.png">
          <img class="logo-small" src="@/assets/logo-min.png">
        </div>
        <div class="navi-head">
          <div class="head-title">
            Campaigns
          </div>
        </div>
        <profile-component></profile-component>
      </nav>
      <transition name="fade">
      <ul v-bind:class="{'sidebar-hide': !show}" >
        <li>
          <router-link :to="{ name: 'Alert'}">
            <img class="image-box" src="@/assets/Icon/Alerts.svg">
            <span v-if="show" class="side-link">Alert</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'SMSCenter'}">
            <img class="image-box" src="@/assets/Icon/Vendors.svg">
            <span v-if="show" class="side-link">SMS Center</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'CompanyTemplate'}">
            <img class="image-box" src="@/assets/Icon/Template.svg">
            <span v-if="show" class="side-link">Templates</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'CompanyBilling'}">
            <img class="image-box" src="@/assets/Icon/Billing.svg">
            <span v-if="show" class="side-link">Billing</span>
          </router-link>
        </li>
        <div v-if="show" class="side-title">
          Manage
        </div>
        <li>
          <router-link :to="{ name: 'CompanyDIDs'}">
            <img class="image-box" src="@/assets/Icon/DID.svg">
            <span v-if="show" class="side-link">DIDs</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'CompanySMSWorkflow'}">
            <img class="image-box" src="@/assets/Icon/SMS Flow.svg">
            <span v-if="show" class="side-link">SMS Workflow</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'CompanyReminderWorkflow'}">
            <img class="image-box" src="@/assets/Icon/Alerts.svg">
            <span v-if="show" class="side-link">Reminder Workflow</span>
          </router-link>
        </li>
        <li id="active">
          <router-link :to="{ name: 'CompanyCampaigns'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M24.302168,8.01773234 L5.67750678,8.01773234 C5.30336043,8.01773234 5,8.32983271 5,8.71475836 L5,22.2642751 C5,22.649145 5.30336043,22.9613011 5.67750678,22.9613011 L24.302168,22.9613011 C24.6762602,22.9613011 24.9796748,22.649145 24.9796748,22.2642751 L24.9796748,8.71475836 C24.9796748,8.32988848 24.6762602,8.01773234 24.302168,8.01773234 Z M23.6246612,21.5673048 L6.35501355,21.5673048 L6.35501355,9.41178439 L23.6246612,9.41178439 L23.6246612,21.5673048 Z M8.1303523,12.695223 L14.6344173,16.8181041 C14.7433604,16.8871933 14.8665583,16.92171 14.9898103,16.92171 C15.1130623,16.92171 15.2362602,16.8871933 15.3452033,16.8181041 L21.8492683,12.695223 C22.1678049,12.4933086 22.2669919,12.0638848 22.0707317,11.736171 C21.8744715,11.4084572 21.4569648,11.3064126 21.1385366,11.5083829 L14.9898103,15.4059294 L8.84113821,11.5083829 C8.52271003,11.3065799 8.10531165,11.4084015 7.90894309,11.736171 C7.71262873,12.063829 7.81176152,12.4933086 8.1303523,12.695223 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span v-if="show" class="side-link" id="active">Campaigns</span>
          </router-link>
        </li>
      </ul>
      </transition>
      <div class="main-add">
        <div class="res-div">
          <div class="head-title">
            Campaigns
          </div>
        </div>
        <router-link :to="{ name: 'KeywordManager'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Keywords
          </div>
        </router-link>
        <router-link :to="{ name: 'AddKey'}"><button id="product" type="submit">Create</button></router-link>
        <router-link :to="{ name: 'KeywordManager'}"><button id="cancel" type="submit">Cancel</button></router-link>
        <div class="add-did">
          <div class="did-main">
            <div class="did-add-title">
              Create Keyword
            </div>
            <div class="keyw-grid">
              <div class="grid-title">
                Keyword
              </div>
              <input class="grid-input" type="text" v-model="user.keyword" placeholder="Enter campaign name">
            </div>
            <div class="keyw-grid-2">
              <div class="grid-title">
                Script
              </div>
              <textarea class="grid-input-2" type="text" v-model="user.script" placeholder="Enter script"></textarea>
            </div>
            <div class="keyw-grid">
              <div class="grid-title">
                Description
              </div>
              <textarea class="grid-input-3" type="text" v-model="user.description" placeholder="Enter description"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import modal from '@/components/modal.vue'
import ProfileComponent from '@/components/ProfileComponent'

export default {
    name: 'app',
    data () {
        return {
          show: true,
          width: '60px',
          transitionName: 'fade',
          popup: false,
          isModalVisible: false,
          vendors: true,
                user:{
                contact: 'Chad Sullivan',
                type: 'SMPP',
            },
            user2:{
              country: 'China',
              operator: 'China Mobile',
              sellRate: '0.0012'
            },
            user3:{
              country: 'United States',
              operator: 'AT & T',
              sellRate: '0.0003'
            },
            vendor:{
              vendorName1: 'Vendor BB',
              vendorName2: 'Vendor CC',
              vendorRate1: '0.0009',
              vendorRate2: '0.0008'
            }
        }
    },
    components:{
      modal,
      ProfileComponent,
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
.did-info{
  border-radius: 4px;
  background-color: #F8F9FE;
  padding: 10px 13px 10px 14px;
  margin-top: 20px;
}
.did-info-text{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 15px;
}
.upload{
  border: 1px dashed #5171F3;
  border-radius: 6px;
  background-color: #FFFFFF;
  height: 280px;
  text-align: center;
}
.upload-title{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  margin-top: 97px;
  margin-bottom: 10px;
}
.upload-button{
  border-radius: 4px;
  background-color: #51A3F3;
  color: #FFFFFF;
  font-family: "Helvetica Neue";
  font-size: 15px;
  font-weight: 500;
  line-height: 30px;
  height: 36px;
  width: 136px;
}
.keyw-grid{
  margin-left: 15px;
  max-width: calc(50% - 35px);
  display: inline-block;
  float: left;
  margin-bottom: 15px;
  width: 100%;
}
.keyw-grid-2{
  margin-right: 30px;
  max-width: calc(50% - 35px);
  display: inline-block;
  float: right;
  margin-bottom: 15px;
  width: 100%;
}
.grid-title{
  max-width: 100%;
  color: #000000;
  font-family: "Circular Std";
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.21px;
  line-height: 15px;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.grid-input{
  max-width: 100%;
  width: 100%;
  height: calc(40px - 4px);
  padding-left: 10px;
}
.grid-input-2{
  max-width: 100%;
  width: 100%;
  padding-left: 10px;
  height: calc(195px - 4px);
  line-height: 30px;
}
.grid-input-3{
  max-width: 100%;
  width: 100%;
  padding-left: 10px;
  height: calc(120px - 4px);
  line-height: 30px;
}
.grid-select{
  width: calc(100% + 13px);
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  height: 44px;
}
.svg path{
  fill: #51A3F3;
}
.svg-back{
  float: left;
  display: inline-block;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 20px;
  margin-right: 5px;
}
.back{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  float: left;
  display: inline-block;
  margin-top: 30px;
  margin-bottom: 30px;
}
.add-did{
  float: left;
  display: inline-block;
  background-color: #FFFFFF;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
}
.did-main{
  display: inline-block;
  float: left;
  max-width: 100%;
  width: 100%;
}
.product-did{
  display: inline-block;
  float: left;
  max-width: calc(100% - 58.1818181818%);
  width: 100%;
  background-color: #F8F9FE;
  height: 200px;
}
.delete-image{
  margin-top: -10px;
}
.delete-vendor-image{
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.did-add-title{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin: 15px;
}
.product-input-name{
  color: #000000;
  font-family: "Circular Std";
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.21px;
  line-height: 15px;
  text-transform: uppercase;
  margin-bottom: 5px;
  padding-top: 10px;
}
.side a{
  text-decoration: none;
  color: #55616E;
}
.side#active a{
  text-decoration: none;
  color: #FFFFFF;
}
input[type="text"]{
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
textarea{
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
  resize: none;
}
button#product{
  	height: 40px;
    width: 130px;
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
    margin-right: 20px;
    margin-bottom: 20px;
    float: right;
}
select{
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
}
button#cancel{
  height: 40px;
  width: 90px;
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
  margin-bottom: 20px;
  margin-right: 15px;
  float: right;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.col-md-6{
  width: 45.83%;
}
.col-md-3{
  width: 20.8%;
}
.main-add{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
.side#active svg g{
  fill: white;
}
.side-link{
  	height: 20px;
    width: 220px;
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 20px;
    display: inline-block;
    margin-top: 10px;
}
.side-link#active{
  	color: #FFFFFF;
}
ul{
	height: 100vh;
	max-width: 300px;
  width: 100%;
	background-color: #F0F1FA;
  display: inline-block;
  float: left;
  margin: 0;
  padding: 0;
}
li a{
  text-decoration: none;
  color: #55616E;
  cursor: pointer;
}
.sidebar-hide {
	height: 100vh;
	width: 60px;
	background-color: #F0F1FA;
  display: inline-block;
  float: left;
  margin-right: 75px;
}
li{
  height: 40px;
  width: 100%;
  color: #55616E;
  display: inline-block;
  cursor: pointer;
}
.side-hide{
  height: 40px;
  width: 60px;
  color: #55616E;
  display: inline-block;
}
.side-hide#active{
	border-radius: 0 4px 4px 0;
	background: linear-gradient(135deg, #51A3F3 0%, #51B5F3 100%);
  color: #FFFFFF;
  fill: #FFFFFF;
}
li#active{
	border-radius: 0 4px 4px 0;
	background: linear-gradient(135deg, #51A3F3 0%, #51B5F3 100%);
  color: #FFFFFF;
  fill: #FFFFFF;
}
li:first-child{
  margin-top: 10px;
}
.image-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 10px;
}
.control-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
}
.side-title{
  	height: 30px;
    width: 270px;
    color: #BDBFD8;
    font-family: "Circular Std";
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 30px;
    display: inline-block;
    text-transform: uppercase;
    margin-left: 15px;
    margin-top: 21px;
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
.navi-circle-open-menu{
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
.navi-head{
  max-width: 560px;
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
}
.res-div{
  display: none;
  width: 100%;
}
.res-select{
  display: inline-block;
  width: calc(100% - 15px);
  margin-left: 15px;
}
@media only screen and (max-width: 1200px) {
    .navi-head{
      display: none;
    }
    .navi-logo{
      max-width: 40.8333333333%;
      width: 100%;
    }
    .res-div{
      display: inline-block;
    }
    .grid-1, .grid-2, .grid-3, .grid-4{
      width: calc(50% - 35px);
    }
    .did-main{
      max-width: 100%;
    }
    .did-second{
      margin-top: 0px;
      max-width: calc(100% - 30px);
      margin-left: 15px;
      margin-right: 15px;
    }
}
@media only screen and (max-width: 750px) {
    .logo{
      display: none;
    }
    .logo-small{
      display: inline-block;
    }
    .navi-logo{
      max-width: 38.8333333333%;
      width: 100%;
    }
    .navi-circle-open{
      display: inline-block;
    }
    .navi-circle-close{
      display: none;
    }
    ul, .sidebar-hide{
      display: none;
    }
    .main-add{
      max-width: 100%;
    }
}
@media only screen and (max-width: 390px) {
    .grid-1, .grid-2, .grid-3, .grid-4{
      width: calc(100% - 40px);
    }
    .keyw-grid, .keyw-grid-2{
      max-width: calc(100% - 40px);
    }
    .keyw-grid-2{
      max-width: calc(100% - 40px);
      float: left;
      margin-left: 15px;
    }
}
</style>
