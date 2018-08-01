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
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Campaigns
          </div>
        </div>
        <div class="navbar">
          <div class="camp-nav-link-1">
            <router-link :to="{ name: 'CompanyCampaigns' }">
              <div class="nav-text">
                Dashboard
              </div>
            </router-link>
          </div>
          <div class="camp-nav-link-2">
            <div id="active" class="nav-text">
              All Campaigns
              <div class="camp-nav-line-bill-2"></div>
            </div>
          </div>
          <div class="camp-nav-link-3">
            <router-link :to="{ name: 'KeywordManager' }">
              <div class="nav-text">
                Keyword Manager
              </div>
            </router-link>
          </div>
        </div>
          <input class="did-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchDID" placeholder="Search for campaigns">
          <router-link :to="{ name: 'AddCampaign'}"><button id="campaign" type="submit">Add Campaign</button></router-link>
          <div class="main-container">
            <table class="camp-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr class="camp-table-th">
                  <th class="camp-active"></th>
                  <th class="camp-name">Campaign Name</th>
                  <th class="camp-type">Type</th>
                  <th class="camp-user">User</th>
                  <th class="camp-time">Start time</th>
                  <th class="camp-total">Total</th>
                  <th class="camp-messages">Messages</th>
                  <th class="camp-sent">Sent</th>
                  <th class="camp-suppressed">Suppressed</th>
                  <th class="camp-error">Error</th>
                  <th class="camp-cost">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr class="camp-online">
                  <td class="camp-active"><div class="camp-yellow"></div></td>
                  <td class="camp-name">Margretville</td>
                  <td class="camp-type">Auto</td>
                  <td class="camp-user">San Marino</td>
                  <td class="camp-time">10:44PM</td>
                  <td class="camp-total">491</td>
                  <td class="camp-messages">55</td>
                  <td class="camp-sent">42</td>
                  <td class="camp-suppressed">1</td>
                  <td class="camp-error">0</td>
                  <td class="camp-cost">$39.8</td>
                </tr>
                <tr class="camp-online">
                  <td class="camp-active"><div class="camp-green"></div></td>
                  <td class="camp-name">Kaliville</td>
                  <td class="camp-type">10-12-2018</td>
                  <td class="camp-user">Logan Russell</td>
                  <td class="camp-time">02:57AM</td>
                  <td class="camp-total">512</td>
                  <td class="camp-messages">44</td>
                  <td class="camp-sent">81</td>
                  <td class="camp-suppressed">0</td>
                  <td class="camp-error">1</td>
                  <td class="camp-cost">$8.65</td>
                </tr>
                <tr class="camp-online">
                  <td class="camp-active"><div class="camp-blue"></div></td>
                  <td class="camp-name">Jamalhaven</td>
                  <td class="camp-type">02-25-2018</td>
                  <td class="camp-user">Paul Todd</td>
                  <td class="camp-time">03:47PM</td>
                  <td class="camp-total">600</td>
                  <td class="camp-messages">33</td>
                  <td class="camp-sent">64</td>
                  <td class="camp-suppressed">1</td>
                  <td class="camp-error">1</td>
                  <td class="camp-cost">$61.67</td>
                </tr>
                <tr class="camp-online">
                  <td class="camp-active"><div class="camp-green"></div></td>
                  <td class="camp-name">New Prudenceburgh</td>
                  <td class="camp-type">05-17-2018</td>
                  <td class="camp-user">Lucas Wallace</td>
                  <td class="camp-time">10:31AM</td>
                  <td class="camp-total">380</td>
                  <td class="camp-messages">63</td>
                  <td class="camp-sent">3</td>
                  <td class="camp-suppressed">0</td>
                  <td class="camp-error">1</td>
                  <td class="camp-cost">$98.54</td>
                </tr>
                <tr class="camp-offline">
                  <td class="camp-active"><div class="camp-red"></div></td>
                  <td class="camp-name">New Theaville</td>
                  <td class="camp-type">06-19-2018</td>
                  <td class="camp-user">Willie Collins</td>
                  <td class="camp-time">08:21AM</td>
                  <td class="camp-total">416</td>
                  <td class="camp-messages">53</td>
                  <td class="camp-sent">48</td>
                  <td class="camp-suppressed">1</td>
                  <td class="camp-error">1</td>
                  <td class="camp-cost">$6.44</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="app">
          <modal v-show="isModalVisible" @close="closeModal"/>
        </div>
    </div>
</template>
<script>
import modal from '@/components/DIDsModal.vue'
import ProfileComponent from '@/components/ProfileComponent'

export default {
    name: 'app',
    data () {
        return {
          show: true,
          width: '60px',
          transitionName: 'fade',
          popup: false,
          test: false,
          del: false,
          isModalVisible: false,
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            },

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
.navbar{
  height: 50px;
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: inset 0 1px 0 0 #F8F9FE;
}
.nav-text{
  color: #BDBFD8;
  font-family: "Circular Std";
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  text-align: center;
  margin-top: 15px;
}
.nav-text#active{
  color: #51A3F3;
  font-weight: 500;
}
a{
  text-decoration: none;
}
.camp-nav-link-1{
  display: inline-block;
  float: left;
  height: 50px;
  width: 105px;
  margin-left: 20px;
}
.camp-nav-line-bill-2{
  border-bottom: 2px solid #51A3F3;
  width: 130px;
  margin-top: 13px;
}
.camp-nav-link-2{
  display: inline-block;
  float: left;
  height: 50px;
  width: 130px;
}
.camp-nav-link-3{
  display: inline-block;
  float: left;
  height: 50px;
  width: 170px;
}

.did-name-fix{
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
}
.did-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.undo-title{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  display: inline-block;
  float: right;
  margin-top: 5px;
  margin-right: 30px;
}
.undo-image{
  display: inline-block;
  float: right;
  margin-right: 15px;
}
.undo-undo{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  display: inline-block;
  float: right;
  margin-top: 5px;
  margin-right: 15px;
}
.svg-blue path{
  fill: #51A3F3;
}
.svg-active path{
  fill: white;
}
.camp-table{
  border: none;
  max-width: calc(100% - 10px);
  width: 100%;
  margin-top: 20px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  text-align: left;
}
.camp-table-th{
  height: 37px;
}
.camp-online{
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
  height: 50px;
}
.camp-offline{
  background-color: #F0F1FA;
  box-shadow: inset 0 -1px 0 0 rgba(189,191,216,0.36);
  height: 50px;
}
.camp-active{
  width: 20px;
  padding-left: 7px;
}
.camp-name{
  width: 210px;
}
.camp-type{
  width: 110px;
}
.camp-user{
  width: 188px;
}
.camp-time{
  width: 95px;
}
.camp-total{
  width: 70px;
}
.camp-messages{
  width: 80px;
}
.camp-sent{
  width: 60px;
}
.camp-suppressed{
  width: 100px;
}
.camp-error{
  width: 70px;
}
.camp-cost{
  width: 84px;
}

.camp-yellow{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #FFC941;
  float: left;
  margin-left: 3px;
}
.camp-green{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #24E2B8;
  float: left;
  margin-left: 3px;
}
.camp-blue{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #51A3F3;
  float: left;
  margin-left: 3px;
}
.camp-red{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #D2305B;
  float: left;
  margin-left: 3px;
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
.did-input-search{
  width: 302px;
  height: 40px !important;
  padding-left: 40px;
  margin-left: 20px;
  margin-top: 20px;
}
button#campaign{
  	height: 40px;
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
    margin-right: 20px;
    padding-right: 15px;
    padding-left: 15px;
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
.main{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
.main-container{
  float: left;
  display: inline-block;
  width: calc(100% - 30px);
  margin-left: 20px;
  margin-right: 20px;
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
@media only screen and (max-width: 1270px) {
  .cont-grid{
    max-width: 19.6363636364%;
    width: 100%;
  }
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
    .did-input-search{
      max-width: calc(100% - 80px);
    }
    .cont-grid{
      max-width: 24.5454545454%;
    }
}
@media only screen and (max-width: 990px) {
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
    .main{
      max-width: 100%;
    }
}
@media only screen and (max-width: 620px) {
  .cont-grid{
    max-width: 32.7272727273%;
  }
}
@media only screen and (max-width: 430px) {
  .cont-grid{
    max-width: 49.0909090909%;
  }
}
</style>
