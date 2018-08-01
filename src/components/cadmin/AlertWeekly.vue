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
            Alert
          </div>
        </div>
        <profile-component></profile-component>
      </nav>
      <transition name="fade">
      <ul v-bind:class="{'sidebar-hide': !show}" >
        <li id="active">
          <router-link :to="{ name: 'Alert'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M19.8262299,7.70449973 C19.8262299,7.00926901 19.530506,6.25481123 19.0728188,5.7824317 C18.8866147,5.59019366 18.9031334,5.29387093 19.1097507,5.12062554 C19.316368,4.94744261 19.6348554,4.96281166 19.8210595,5.15498723 C20.4455446,5.79967502 20.8334641,6.77660912 20.8334641,7.7045622 C20.8334641,8.64119941 20.4384269,9.62550566 19.8025264,10.2733797 C19.7032131,10.374528 19.5671022,10.4259456 19.4305212,10.4259456 C19.3091831,10.4259456 19.1876435,10.3854613 19.0910161,10.3033681 C18.8856747,10.1288732 18.8712376,9.83248799 19.0587846,9.64137452 C19.5249998,9.166371 19.8262299,8.40610297 19.8262299,7.70449973 Z M17.5635119,9.49955445 C17.3581705,9.32499706 17.3438677,9.02861186 17.531549,8.83749838 C17.7713379,8.59340543 17.9521029,8.10771855 17.9521029,7.70774847 C17.9521029,7.31121456 17.7746282,6.82890137 17.5392712,6.5858705 C17.3530671,6.39363246 17.3696529,6.09737221 17.5762702,5.92412682 C17.7828204,5.75081894 18.1013078,5.76625047 18.2875119,5.95855098 C18.7515782,6.43774038 18.9592699,7.18238945 18.9592699,7.70774847 C18.9592699,8.23804307 18.7476836,8.98843992 18.2750222,9.46969102 C18.1756417,9.57090181 18.039598,9.62219445 17.9030842,9.62219445 C17.7818132,9.62219445 17.6600721,9.58171013 17.5635119,9.49955445 Z M10.4821857,10.4259456 C10.3445303,10.4259456 10.2074122,10.3737783 10.1079646,10.2710681 C9.48341227,9.62625537 9.09549281,8.64938374 9.09549281,7.72143067 C9.09549281,6.78479345 9.49053006,5.80048721 10.1264306,5.15261315 C10.3139776,4.96149967 10.6325322,4.94806737 10.8379408,5.12256229 C11.0432823,5.2970572 11.0577193,5.5934424 10.8701723,5.78455588 C10.4039572,6.25962187 10.102727,7.0198899 10.102727,7.72143067 C10.102727,8.41659891 10.3984509,9.17118164 10.8561381,9.64368612 C11.0423422,9.83592416 11.0258235,10.1321844 10.8192062,10.3054298 C10.7229146,10.3861485 10.6023151,10.4259456 10.4821857,10.4259456 Z M11.6416465,9.46744189 C11.177513,8.98825249 10.9698213,8.24360342 10.9698213,7.71830688 C10.9698213,7.18801228 11.1814076,6.43755295 11.6542034,5.95630185 C11.8418847,5.76531333 12.1604392,5.75206846 12.3657136,5.92656337 C12.5709879,6.10118324 12.5852906,6.39750596 12.3976765,6.58855696 C12.1578876,6.83258744 11.9770555,7.31827432 11.9770555,7.7182444 C11.9770555,8.11477831 12.1545301,8.5970915 12.3898872,8.84012237 C12.5760912,9.03236041 12.5595054,9.32862066 12.3528881,9.50186605 C12.2566637,9.58258479 12.1360642,9.6223194 12.0159347,9.6223194 C11.8782122,9.6223194 11.7410941,9.5701521 11.6416465,9.46744189 Z M20.9752155,24.3865383 C21.0611662,24.6326305 20.9163931,24.8969656 20.6518934,24.9769346 C20.6001215,24.9925536 20.5476782,24.9999882 20.4961078,24.9999882 C20.28385,24.9999882 20.0864321,24.8740994 20.0172687,24.6761136 L19.2439143,22.4620962 C18.1958536,21.6787746 16.6596871,21.2306981 14.9998995,21.2306981 C13.3393061,21.2306981 11.8032069,21.6788371 10.7560191,22.4622836 L9.98266467,24.6761136 C9.89671402,24.9222683 9.61267399,25.0569036 9.34804,24.9769346 C9.08360745,24.8969656 8.93883433,24.632568 9.02478498,24.3864758 L9.83312397,22.0724971 C9.83876448,22.0517551 9.84581512,22.0313255 9.85447734,22.0113957 L14.2938284,9.30275567 C13.664307,9.04810431 13.2228027,8.46408052 13.2228027,7.78578074 C13.2228027,6.87407137 14.019995,6.13235866 14.9998995,6.13235866 C15.9797369,6.13235866 16.7769292,6.87407137 16.7769292,7.78578074 C16.7769292,8.46395557 16.3356263,9.04785441 15.7063064,9.30256825 L20.1459261,22.0123954 C20.1540511,22.0312631 20.1606988,22.0505056 20.1660707,22.0700605 L20.9752155,24.3865383 Z M17.0404217,16.153977 L15.000101,10.3129269 L12.959646,16.1540395 C13.6103193,16.0036602 14.3018191,15.9253156 15.0004367,15.9253156 C15.6986514,15.9253156 16.3898827,16.0035977 17.0404217,16.153977 Z M14.9998995,7.06949568 C14.5753839,7.06949568 14.2300369,7.39080873 14.2300369,7.78578074 C14.2300369,8.18075276 14.5753839,8.50206581 14.9998995,8.50206581 C15.424348,8.50206581 15.769695,8.18075276 15.769695,7.78578074 C15.769695,7.39080873 15.424348,7.06949568 14.9998995,7.06949568 Z M14.9998995,20.2936236 C16.3700737,20.2936236 17.6761207,20.5702664 18.7583603,21.0721346 L17.4194775,17.2392441 C16.6803019,16.9934643 15.8486622,16.8624526 15.0004367,16.8624526 C14.1517412,16.8624526 13.3198329,16.9934019 12.5805902,17.2393066 L11.2417745,21.0718846 C12.3236112,20.570204 13.6294567,20.2936236 14.9998995,20.2936236 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span v-if="show" class="side-link" id="active">Alert</span>
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
        <li>
          <router-link :to="{ name: 'CompanyCampaigns'}">
            <img class="image-box" src="@/assets/Icon/Reseller.svg">
            <span v-if="show" class="side-link">Campaigns</span>
          </router-link>
        </li>
      </ul>
      </transition>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Alert
          </div>
        </div>
        <div class="navbar-profile">
          <div class="nav-link-profile">
            <router-link :to="{ name: 'Alert' }">
              <div class="nav-text-profile">
                Daily Usage
              </div>
            </router-link>
          </div>
          <div class="nav-link-profile">
              <div id="active" class="nav-text-profile">
                Weekly Usage
                <div class="nav-line-profile"></div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="cont-1-alert">
            <div class="chart-1-alert">
              <alert-weekly-line :options="{responsive: false, maintainAspectRatio: false}" :width="1000" :height="280"></alert-weekly-line>
              <input class="alert-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.search" placeholder="Search">
              <button class="alert-filter" type="submit">Filter</button>
              <table class="alert-table" cellspacing="0" cellpadding="0">
                <thead>
                  <tr>
                    <th class="company">Company</th>
                    <th class="date">Date</th>
                    <th class="sms">SMS</th>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">97322</td>
                  </tr>
                  <tr>
                    <td class="company">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="sms">86906</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">49288</td>
                  </tr>
                  <tr>
                    <td class="company">Littelfort</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">18248</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">97322</td>
                  </tr>
                  <tr>
                    <td class="company">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="sms">86906</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">49288</td>
                  </tr>
                  <tr>
                    <td class="company">Littelfort</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">18248</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">97322</td>
                  </tr>
                  <tr>
                    <td class="company">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="sms">86906</td>
                  </tr>
                  <tr>
                    <td class="company">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="sms">86906</td>
                  </tr>
                </thead>
              </table>
              <div class="show-more">
                <a href="#" id="show-more">Show more</a>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import AlertWeeklyLine from '@/components/cadmin/AlertWeeklyLine'
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
          isModalVisible: false,
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            },

        }
    },
    components:{
      AlertWeeklyLine,
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
button{
    border: 1px
    solid #BDBFD8;
    border-radius: 4px;
    background-color: #FFFFFF;
    font-family: "Helvetica Neue";
    font-size: 15px;
    font-weight: 300;
    line-height: 30px;
    text-align: center;
}
.alert-filter{
  height: 36px;
  width: 80px;
  margin-right: 15px;
  float: right;
}
.cont-1-alert{
  width: calc(100% - 40px);
  float: left;
}
.chart-1-alert{
  width: 100%;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-left: 20px;
}
.chart-1-title-alert{
  height: 30px;
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 10px;
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
.alert-search{
  height: 36px !important;
  max-width: calc(37.9090909091% - 43px);
  margin-left: 13px;
  padding-left: 40px;
  width: 100%;
}
.alert-table{
  margin-left: 20px;
  border: none;
  max-width: calc(100% - 40px);
  width: 100%;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.company{
  width: 174px;
  padding-left: 15px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.date{
  width: 170px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.sms{
  width: 701px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.show-more{
  text-align: center;
  margin-top: 5px;
  margin-bottom: 23px;
}
a#show-more{
  	height: 15px;
    width: 69px;
    color: #51A3F3;
    font-family: "SF Pro Text";
    font-size: 13px;
    line-height: 15px;
    text-decoration: none;
}
.svg-blue path{
  fill: #51A3F3;
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
  width: 120px;
  margin-left: 20px;
}
.nav-line-profile{
  border-bottom: 2px solid #51A3F3;
  width: 125px;
  margin-top: 13px;
}
.side a{
  text-decoration: none;
  color: #55616E;
}
.side#active a{
  text-decoration: none;
  color: #FFFFFF;
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
.main{
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
.billing-control-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
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
    .main{
      max-width: 100%;
    }
}
</style>
