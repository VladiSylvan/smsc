<template>
    <div class="container">
      <nav class="navigation">
        <div class="logo-place">
          <div v-if="show" v-on:click="show = !show" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Menu/Close.svg') + ')' }" class="circle"></div>
          <div v-if="!show" v-on:click="show = !show" style="transform: rotate(180deg);" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Menu/Close.svg') + ')' }" class="circle"></div>
          <img v-if="show" class="head-logo" src="@/assets/logo.png">
          <img v-if="!show" class="head-logo-min" src="@/assets/logo-min.png">
        </div>
        <div v-bind:class="{'header-min': !show}" class="header">
          <div class="title">Users</div>
        </div>
        <div v-if="!popup" v-on:click="popup = !popup" class="user">
          <div class="username">Linnie Weaver</div>
          <div class="circle"><span id="avatar">A</span></div>
        </div>
        <div v-if="popup" class="popup-menu">
          <div v-on:click="popup = !popup" class="username-popup">Linnie Weaver</div>
          <div v-on:click="popup = !popup" class="circle"><span id="avatar">A</span></div>
          <img class="popup-image-box" src="@/assets/Icon/Users.svg">
          <span id="popup-link">Profile</span>
          <img class="popup-image-box" src="@/assets/Icon/Settings.svg">
          <span id="popup-link">Settings</span>
          <div class="popup-title">
            Switch to
          </div>
          <div class="popup-image-box">
            <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>Icon / Dashboard</title>
                <desc>Created with Sketch.</desc>
                <defs>
                    <path d="M24.7133515,13.5075766 L15.4490463,5.20674095 C15.1919891,4.97649025 14.8079564,4.97649025 14.5509537,5.20674095 L5.2866485,13.5075766 C5.00376022,13.7610585 4.97542234,14.2010585 5.22337875,14.4903621 C5.47133515,14.7794986 5.90179837,14.8085237 6.18468665,14.5549861 L6.90201635,13.912312 L6.90201635,24.2696379 C6.90201635,24.6542061 7.20697548,24.9660167 7.58321526,24.9660167 L12.7457766,24.9660167 L17.2542234,24.9660167 L22.4167302,24.9660167 C22.79297,24.9660167 23.0979292,24.6542061 23.0979292,24.2696379 L23.0979292,13.9123677 L23.8152589,14.5550975 C23.9445777,14.6708635 24.1046866,14.7277994 24.2639782,14.7277994 C24.453406,14.7277994 24.6418529,14.6475209 24.7765123,14.4904178 C25.0246322,14.2010585 24.9962943,13.7611142 24.7133515,13.5075766 Z M13.4269755,23.5733148 L13.4269755,17.8366574 L16.57297,17.8366574 L16.57297,23.5733148 L13.4269755,23.5733148 Z M21.7356403,12.6969916 L21.7356403,23.5732591 L17.9355313,23.5732591 L17.9355313,17.1402786 C17.9355313,16.7557103 17.6304632,16.4438997 17.2543324,16.4438997 L12.7458856,16.4438997 C12.3697003,16.4438997 12.0646866,16.7557103 12.0646866,17.1402786 L12.0646866,23.5733148 L8.26446866,23.5733148 L8.26446866,12.6969916 C8.26446866,12.6952089 8.26425068,12.6935376 8.26425068,12.6918106 L15,6.65643454 L21.7358583,12.6917549 C21.7359128,12.6935933 21.7356403,12.6952089 21.7356403,12.6969916 Z M13.4741144,11.5592201 C13.4741144,11.943844 13.7790736,12.2555989 14.1553134,12.2555989 L15.8446866,12.2555989 C16.2208719,12.2555989 16.5258856,11.943844 16.5258856,11.5592201 C16.5258856,11.1745961 16.2208719,10.8628412 15.8446866,10.8628412 L14.1553134,10.8628412 C13.7791281,10.8628412 13.4741144,11.1745961 13.4741144,11.5592201 Z" id="path-1"></path>
                </defs>
                <g id="Icon-/-Dashboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <mask id="mask-2" fill="white">
                        <use xlink:href="#path-1"></use>
                    </mask>
                    <g id="Combined-Shape" fill-rule="nonzero"></g>
                    <g id="Color-/-Dark-4" mask="url(#mask-2)" fill="#51A3F3">
                        <rect id="Rectangle" x="0" y="0" width="30" height="30"></rect>
                    </g>
                </g>
            </svg>
        </div>
          <span id="popup-link-active">System Admin</span>
          <img class="popup-image-box" src="@/assets/Icon/Reseller.svg">
          <span id="popup-link">Reseller Portal</span>
          <img class="popup-image-box" src="@/assets/Icon/Companies.svg">
          <span id="popup-link">Appolo Inc.</span>
          <div class="popup-logout">
            <img class="popup-image-box" src="@/assets/Icon/Arrow/Right.svg">
            <span id="popup-link">Log out</span>
          </div>
        </div>
      </nav>
      <transition name="fade">
      <div v-bind:class="{'sidebar-hide': !show}" class="sidebar">
        <div class="side">
          <router-link :to="{ name: 'Dashboard'}">
            <img class="image-box" src="@/assets/Icon/Dashboard.svg">
            <span v-if="show" id="side-link">Dashboard</span>
          </router-link>
        </div>
        <div class="side">
          <router-link :to="{ name: 'Reporting'}">
            <img class="image-box" src="@/assets/Icon/Reporting.svg">
            <span v-if="show" id="side-link">Reporting</span>
          </router-link>
        </div>
        <div class="side">
          <router-link :to="{ name: 'Product'}">
            <img class="image-box" src="@/assets/Icon/Product.svg">
            <span v-if="show" id="side-link">Product</span>
          </router-link>
        </div>
        <div class="side">
          <router-link :to="{ name: 'Template'}">
            <img class="image-box" src="@/assets/Icon/Template.svg">
            <span v-if="show" id="side-link">Template Approval</span>
          </router-link>
        </div>
        <div class="side">
          <router-link :to="{ name: 'Billing'}">
            <img class="image-box" src="@/assets/Icon/Billing.svg">
            <span v-if="show" id="side-link">Billing</span>
          </router-link>
        </div>
        <div v-if="show" class="side-title">
          Manage
        </div>
        <div class="side">
          <router-link :to="{ name: 'Resellers'}">
            <img class="image-box" src="@/assets/Icon/Reseller.svg">
            <span v-if="show" id="side-link">Resellers</span>
          </router-link>
        </div>
        <div v-bind:class="{'side-hide': !show}" class="side" id="active">
          <router-link :to="{ name: 'Users'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M19.3070588,15.3745636 L18.5167157,15.3745636 C20.0434804,14.3694763 21.0561275,12.6217456 21.0561275,10.6378055 C21.0561275,7.52907731 18.5704412,5 15.515049,5 C12.4596569,5 9.97397059,7.52907731 9.97397059,10.6378055 C9.97397059,12.6217456 10.9865196,14.3694763 12.5133824,15.3745636 L11.7230392,15.3745636 C9.69196078,15.3745636 8.03955882,17.0557107 8.03955882,19.1222444 L8.03955882,24.3573067 C8.03955882,24.7016459 8.31392157,24.9807481 8.65230392,24.9807481 L22.3777941,24.9807481 C22.7161765,24.9807481 22.9905392,24.7016459 22.9905392,24.3573067 L22.9905392,19.1221945 C22.9905392,17.0557107 21.3381373,15.3745636 19.3070588,15.3745636 Z M11.1994608,10.6378055 C11.1994608,8.21665835 13.1353922,6.24688279 15.515049,6.24688279 C17.8946569,6.24688279 19.8306373,8.21665835 19.8306373,10.6378055 C19.8306373,13.0589027 17.8946569,15.0286284 15.515049,15.0286284 C13.1353922,15.0286284 11.1994608,13.0589027 11.1994608,10.6378055 Z M17.3078431,15.9724688 L15.515049,17.7966085 L13.7222549,15.9725187 C14.2848529,16.1687781 14.8878922,16.2755112 15.515049,16.2755112 C16.1422059,16.2755112 16.7452941,16.1687781 17.3078431,15.9724688 Z M21.765049,23.7338155 L20.0983824,23.7338155 L20.0983824,20.7383541 C20.0983824,20.394015 19.8240196,20.1149127 19.4856373,20.1149127 C19.1472549,20.1149127 18.8728922,20.394015 18.8728922,20.7383541 L18.8728922,23.7338155 L12.1572059,23.7338155 L12.1572059,20.7383541 C12.1572059,20.394015 11.8828431,20.1149127 11.5444608,20.1149127 C11.2060784,20.1149127 10.9317157,20.394015 10.9317157,20.7383541 L10.9317157,23.7338155 L9.26504902,23.7338155 L9.26504902,19.1221945 C9.26504902,17.7432918 10.3676961,16.6213965 11.7230392,16.6213965 L12.6269118,16.6213965 L15.0817647,19.1190524 C15.2014216,19.240798 15.3582353,19.3016459 15.515049,19.3016459 C15.6718627,19.3016459 15.8285784,19.240798 15.9483333,19.1190524 L18.4031863,16.6213965 L19.3070588,16.6213965 C20.6623529,16.6213965 21.765049,17.743192 21.765049,19.1221945 L21.765049,23.7338155 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span v-if="show" id="side-link">Users</span>
          </router-link>
        </div>
        <div class="side">
          <router-link :to="{ name: 'Companies'}">
            <img class="image-box" src="@/assets/Icon/Companies.svg">
            <span v-if="show" id="side-link">Companies</span>
          </router-link>
        </div>
        <div class="side">
          <router-link :to="{ name: 'Vendors'}">
            <img class="image-box" src="@/assets/Icon/Vendors.svg">
            <span v-if="show" id="side-link">Vendors</span>
          </router-link>
        </div>
        <div class="side">
          <router-link :to="{ name: 'DID'}">
            <img class="image-box" src="@/assets/Icon/DID.svg">
            <span v-if="show" id="side-link">DID</span>
          </router-link>
        </div>
        <div class="side">
          <router-link :to="{ name: 'Filters'}">
            <img class="image-box" src="@/assets/Icon/Filters.svg">
            <span v-if="show" id="side-link">Filters</span>
          </router-link>
        </div>
      </div>
      </transition>
      <div class="main-add">
        <router-link :to="{ name: 'Users'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Users
          </div>
        </router-link>
        <router-link :to="{ name: 'AddUser'}"><button id="product" type="submit">Add User</button></router-link>
        <router-link :to="{ name: 'Users'}"><button id="cancel" type="submit">Cancel</button></router-link>
        <div class="add-user">
          <div class="user-main">
            <div class="user-add-title">
              Add User
            </div>
            <div class="grid-4">
              <div class="grid-title">
                First Name
              </div>
              <input class="grid-input" type="text" v-model="user.firstName" placeholder="Caroline">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Last Name
              </div>
              <input class="grid-input" type="text" v-model="user.lastName" placeholder="Thomas">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                username
              </div>
              <input class="grid-input" type="text" v-model="user.username" placeholder="Enter username">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Email
              </div>
              <input class="grid-input" type="text" v-model="user.email" placeholder="Thomas">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Password
              </div>
              <input class="grid-input" type="text" v-model="user.password" placeholder="********">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Re-Enter Password
              </div>
              <input class="grid-input" type="text" v-model="user.rePassword" placeholder="********">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Role
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Role" class="grid-select" v-model="user.role">
                <option value="Choose Role">Choose Role</option>
              </select>
            </div>
          </div>
          <div class="user-second">
            <div class="grid-title">
              Choose Photo
            </div>
            <div class="upload">
              <div class="upload-title">
                Drop photo here or browse
              </div>
              <button class="upload-button" type="submit">Upload photo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import CommitChart from '@/components/auth/CommitChart'
import BarChart from '@/components/auth/BarChart'
import BarChart2 from '@/components/auth/BarChart2'
import modal from '@/components/modal.vue'

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
                role: 'Choose Role',
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
      CommitChart,
      BarChart,
      BarChart2,
      modal
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
.grid-1{
  margin-left: 15px;
  width: 29.3%;
  display: inline-block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
}
.grid-2{
  margin-left: 15px;
  width: 69%;
  display: inline-block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
}
.grid-3{
  margin-left: 15px;
  width: 22.2672064777%;
  display: inline-block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
}
.grid-4{
  margin-left: 15px;
  width: 45.5%;
  display: inline-block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
}
.grid-title{
  width: 100%;
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
  width: 100%;
}
.grid-select{
  width: calc(100% + 13px);
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  height: 44px;
}
table{
  max-width: 100%;
  width: 100%;
}
.active-table{
	background-color: #F8F9FE;
}
td#add-country{
  width: 190px;
  padding-left: 15px;
}
td#add-operator{
  width: 215px;
}
td#add-sell-rate{
  width: 150px;
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
.add-user{
  float: left;
  display: inline-block;
  background-color: #FFFFFF;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
}
.user-main{
  display: inline-block;
  float: left;
  max-width: 66.8181818182%;
  width: 100%;
}
.user-second{
  display: inline-block;
  float: left;
  max-width: 31.8%;
  width: 100%;
  margin-top: 60px;
}
.product-vendor{
  display: inline-block;
  float: left;
  max-width: calc(100% - 58.1818181818%);
  width: 100%;
  background-color: #F8F9FE;
  height: 458px;
}
.delete-image{
  margin-top: -10px;
}
.delete-vendor-image{
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.user-add-title{
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
  height: 40px !important;
  padding-left: 10px;
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
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
.user{
  display: inline-block;
  vertical-align: top;
  float: right;
}
.popup-menu{
	height: 380px;
	width: 228px;
	background-color: #FFFFFF;
	box-shadow: 0 10px 40px 0 rgba(0,0,0,0.1);
  display: inline-block;
  vertical-align: top;
  position: absolute;
  z-index: 1;
  float: right;
  margin-left: 32px;
}
.username-popup {
	color: #51A3F3;
	font-family: "Helvetica Neue";
	font-size: 15px;
	line-height: 20px;
	text-align: right;
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-left: 66px;
  margin-right: -8px;
}
.popup-logout{
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
}
#popup-link{
  	height: 20px;
    width: 158px;
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 20px;
    display: inline-block;
    margin-top: 15px;
    cursor: pointer;
}
#popup-link-active{
  	height: 20px;
    width: 158px;
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 20px;
    display: inline-block;
    margin-top: 15px;
    color: #51A3F3;
}

.popup-image-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 10px;
}
.popup-title{
  	height: 30px;
    width: 198px;
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
.main-add{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
.header{
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 61.1111111111%;
  float: left;
}
.header-min{
  display: inline-block;
  vertical-align: top;
  margin-left: -150px;
  margin-right: 150px;
  position: relative;
  z-index: 1000;
}
.side#active svg g{
  fill: white;
}
.navigation{
    height: 60px;
    background-color: #FFFFFF;
}
.head-logo{
    display: inline-block;
    vertical-align: top;
    margin-top: 15px;
    margin-right: 20px;
}
.head-logo-min{
    display: inline-block;
    vertical-align: top;
    margin-top: 15px;
    margin-left: 25px;
}
.title {
    display: inline-block;
    vertical-align: top;
    vertical-align: top;
    margin-left: 15px;
    height: 30px;
    width: 90px;
    color: #55616E;
    font-family: "Circular Std";
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    margin-top: 15px;
    margin-right: 32px;
}
.circle{
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
.logo-place{
  margin: 0;
  display: inline-block;
  width: 20.8333333333%;
  float: left;
}
.username {
	color: #55616E;
	font-family: "Helvetica Neue";
	font-size: 15px;
	line-height: 20px;
	text-align: right;
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-right: -3px;
  float: left;
}
#avatar{
  	font-family: "Helvetica Neue";
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 15px;
    text-align: center;
    margin-left: 11px;
    margin-top: 7px;
    display: inline-block;
}
#side-link{
  	height: 20px;
    width: 220px;
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 20px;
    display: inline-block;
    margin-top: 10px;
}
.sidebar {
	height: 100vh;
	width: 300px;
	background-color: #F0F1FA;
  display: inline-block;
  float: left;
}
.sidebar-hide {
	height: 100vh;
	width: 60px;
	background-color: #F0F1FA;
  display: inline-block;
  float: left;
  margin-right: 75px;
}
.side{
  height: 40px;
  width: 290px;
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
.side#active{
	border-radius: 0 4px 4px 0;
	background: linear-gradient(135deg, #51A3F3 0%, #51B5F3 100%);
  color: #FFFFFF;
  fill: #FFFFFF;
}
.side:first-child{
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
</style>
