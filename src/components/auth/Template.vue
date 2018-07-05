<template>
    <div class="container">
      <nav class="navigation">
        <div class="logo-place">
          <div v-if="show" v-on:click="show = !show" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Menu/Close.svg') + ')' }" class="circle"></div>
          <div v-if="!show" v-on:click="show = !show" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Menu/Open.svg') + ')' }" class="circle"></div>
          <img v-if="show" class="head-logo" src="@/assets/logo.png">
          <img v-if="!show" class="head-logo-min" src="@/assets/logo-min.png">
        </div>
        <div v-bind:class="{'header-min': !show}" class="header">
          <div class="title">Template Approval</div>
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
        <div v-bind:class="{'side-hide': !show}" class="side" id="active">
          <router-link :to="{ name: 'Template'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M21.8241579,6.62015748 L19.3376842,6.62015748 L19.3376842,5.65616798 C19.3376842,5.29375328 19.0431053,5 18.6797895,5 C18.3164737,5 18.0218947,5.29375328 18.0218947,5.65616798 L18.0218947,6.62015748 L15.6534737,6.62015748 L15.6534737,5.65616798 C15.6534737,5.29375328 15.3588947,5 14.9955789,5 C14.6322632,5 14.3376842,5.29375328 14.3376842,5.65616798 L14.3376842,6.62015748 L11.9692632,6.62015748 L11.9692632,5.65616798 C11.9692632,5.29375328 11.6746842,5 11.3113684,5 C10.9480526,5 10.6534737,5.29375328 10.6534737,5.65616798 L10.6534737,6.62015748 L8.167,6.62015748 C7.80368421,6.62015748 7.50910526,6.91396325 7.50910526,7.27632546 L7.50910526,24.3350131 C7.50910526,24.6973753 7.80368421,24.9911811 8.167,24.9911811 L21.8241579,24.9911811 C22.1874737,24.9911811 22.4820526,24.6973753 22.4820526,24.3350131 L22.4820526,7.27632546 C22.4820526,6.91396325 22.1874737,6.62015748 21.8241579,6.62015748 Z M21.1662632,23.6788451 L8.82489474,23.6788451 L8.82489474,7.93249344 L10.6534737,7.93249344 L10.6534737,8.6983727 C10.6534737,9.0607874 10.9480526,9.35454068 11.3113684,9.35454068 C11.6746842,9.35454068 11.9692632,9.0607874 11.9692632,8.6983727 L11.9692632,7.93249344 L14.3376842,7.93249344 L14.3376842,8.6983727 C14.3376842,9.0607874 14.6322632,9.35454068 14.9955789,9.35454068 C15.3588947,9.35454068 15.6534737,9.0607874 15.6534737,8.6983727 L15.6534737,7.93249344 L18.0218947,7.93249344 L18.0218947,8.6983727 C18.0218947,9.0607874 18.3164737,9.35454068 18.6797895,9.35454068 C19.0431053,9.35454068 19.3376842,9.0607874 19.3376842,8.6983727 L19.3376842,7.93249344 L21.1662632,7.93249344 L21.1662632,23.6788451 Z M18.8903158,12.336378 L11.1008421,12.336378 C10.7375263,12.336378 10.4429474,12.6301837 10.4429474,12.9925459 C10.4429474,13.3549081 10.7375263,13.6487139 11.1008421,13.6487139 L18.8903158,13.6487139 C19.2536316,13.6487139 19.5482105,13.3549081 19.5482105,12.9925459 C19.5482105,12.6301837 19.2536316,12.336378 18.8903158,12.336378 Z M18.8903158,16.0109186 L11.1008421,16.0109186 C10.7375263,16.0109186 10.4429474,16.3047769 10.4429474,16.6670866 C10.4429474,17.0294488 10.7375263,17.3232546 11.1008421,17.3232546 L18.8903158,17.3232546 C19.2536316,17.3232546 19.5482105,17.0294488 19.5482105,16.6670866 C19.5482105,16.3047244 19.2536316,16.0109186 18.8903158,16.0109186 Z M18.8903158,19.6854593 L11.1008421,19.6854593 C10.7375263,19.6854593 10.4429474,19.9793176 10.4429474,20.3416273 C10.4429474,20.7039895 10.7375263,20.9977953 11.1008421,20.9977953 L18.8903158,20.9977953 C19.2536316,20.9977953 19.5482105,20.7039895 19.5482105,20.3416273 C19.5482105,19.9792651 19.2536316,19.6854593 18.8903158,19.6854593 Z" id="path-1">
                </path>
              </svg>
            </div>
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
        <div class="side">
          <img class="image-box" src="@/assets/Icon/Users.svg">
          <span v-if="show" id="side-link">Users</span>
        </div>
        <div class="side">
          <img class="image-box" src="@/assets/Icon/Companies.svg">
          <span v-if="show" id="side-link">Companies</span>
        </div>
        <div class="side">
          <img class="image-box" src="@/assets/Icon/Vendors.svg">
          <span v-if="show" id="side-link">Vendors</span>
        </div>
        <div class="side">
          <img class="image-box" src="@/assets/Icon/DID.svg">
          <span v-if="show" id="side-link">DID</span>
        </div>
        <div class="side">
          <img class="image-box" src="@/assets/Icon/Filters.svg">
          <span v-if="show" id="side-link">Filters</span>
        </div>
      </div>
      </transition>
      <div class="main">
          <input id="template-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchTemplate" placeholder="Search for template">

          <table cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th id="active"></th>
                <th id="template-name">Template Name</th>
                <th id="template-created">Created On</th>
                <th id="template-created-by">Created By</th>
                <th id="template-sms-text">Owned By</th>
                <th id="replacible">Replacible</th>
                <th id="options"></th>
              </tr>
            </thead>
            <tbody>
              <tr id="online">
                <td id="active"><div class="product-active"></div></td>
                <td id="name">Parkerport</td>
                <td id="created">10-03-2018</td>
                <td id="created-by">San Marino</td>
                <td id="owned-by">Appolo Inc.</td>
                <td id="options"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/DID.svg"></div></td>
                <td id="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                <td id="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
              </tr>
              <tr id="online">
                <td id="active"><div class="product-active"></div></td>
                <td id="name">Blickview</td>
                <td id="created">08-19-2018</td>
                <td id="created-by">San Marino</td>
                <td id="owned-by">Appolo Inc.</td>
                <td id="options"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/DID.svg"></div></td>
                <td id="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                <td id="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
              </tr>
              <tr id="offline">
                <td id="active"><div class="product-not-active"></div></td>
                <td id="name">Lake Woodrow</td>
                <td id="created">01-04-2018</td>
                <td id="created-by">San Marino</td>
                <td id="owned-by">Appolo Inc.</td>
                <td id="options"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/DID.svg"></div></td>
                <td id="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                <td id="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="app">
          <modal v-show="isModalVisible" @close="closeModal"/>
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
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            },

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
.svg-active path{
  fill: white;
}
table{
  margin-left: 20px;
  border: none;
  max-width: calc(100% - 30px);
  width: 100%;
}
tr{
  height: 44px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
tr#online{
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
tr#offline{
  background-color: #F0F1FA;
  box-shadow: inset 0 -1px 0 0 rgba(189,191,216,0.36);
}
td#active{
  width: 18px;
}
td#name{
  width: 169px;
}
td#created{
  width: 334px;
}
td#created-by{
  width: 227px;
}
td#owned-by{
  width: 200px;
}
td#options{
  width: 50px;
}

th#active{
  width: 18px;
}
th#name{
  width: 169px;
}
th#created{
  width: 334px;
}
th#created-by{
  width: 227px;
}
th#owned-by{
  width: 200px;
}
th#options{
  width: 50px;
}
.product-active{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #24E2B8;
  float: left;
  margin-left: 3px;
}
.product-not-active{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #D2305B;
  float: left;
  margin-left: 3px;
}
.product-control-info{
  width: 30px;
  height: 30px;
  float: left;
  margin-top: -10px;
  margin-left: 15px;
}
.side a{
  text-decoration: none;
  color: #55616E;
}
.side#active a{
  text-decoration: none;
  color: #FFFFFF;
}
input[type="text"]#template-search{
  width: 345px;
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-repeat: no-repeat;
  background-position-x: 5px;
  background-position-y: 5px;
  height: 40px !important;
  padding-left: 40px;
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  margin-left: 20px;
  margin-top: 20px;
  height: 40px !important;
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
.main{
  max-width: calc(100% - 310px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
  margin-right: 10px;
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
    width: 100%;
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
    width: 100%;
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
	max-width: 300px;
  width: 100%;
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
</style>
