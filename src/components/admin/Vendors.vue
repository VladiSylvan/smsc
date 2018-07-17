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
            Vendors
          </div>
        </div>
        <div class="navi-user">
          <div v-if="popup" class="user-menu">
            <div v-on:click="popup = !popup" class="username">
              Linnie Weaver
            </div>
            <div v-on:click="popup = !popup" class="user-circle"><span id="avatar">A</span></div>
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
          <div v-on:click="popup = !popup" class="username">
            Linnie Weaver
          </div>
          <div v-on:click="popup = !popup" class="user-circle"><span id="avatar">A</span></div>
        </div>
      </nav>
      <transition name="fade">
      <ul v-bind:class="{'sidebar-hide': !show}">
        <li>
          <router-link :to="{ name: 'Dashboard'}">
            <img class="image-box" src="@/assets/Icon/Dashboard.svg">
            <span v-if="show" class="side-link">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Reporting'}">
            <img class="image-box" src="@/assets/Icon/Reporting.svg">
            <span v-if="show" class="side-link">Reporting</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Product'}">
            <img class="image-box" src="@/assets/Icon/Product.svg">
            <span v-if="show" class="side-link">Product</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Template'}">
            <img class="image-box" src="@/assets/Icon/Template.svg">
            <span v-if="show" class="side-link">Template Approval</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Billing'}">
            <img class="image-box" src="@/assets/Icon/Billing.svg">
            <span v-if="show" class="side-link">Billing</span>
          </router-link>
        </li>
        <div v-if="show" class="side-title">
          Manage
        </div>
        <li>
          <router-link :to="{ name: 'Resellers'}">
            <img class="image-box" src="@/assets/Icon/Reseller.svg">
            <span v-if="show" class="side-link">Resellers</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Users'}">
            <img class="image-box" src="@/assets/Icon/Users.svg">
            <span v-if="show" class="side-link">Users</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Companies'}">
            <img class="image-box" src="@/assets/Icon/Companies.svg">
            <span v-if="show" class="side-link">Companies</span>
          </router-link>
        </li>
        <li id="active">
          <router-link :to="{ name: 'Vendors'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M21.4696919,6.01274052 L8.50140056,6.01274052 C6.57070028,6.01274052 5,7.56586589 5,9.47489504 L5,17.3839913 C5,19.2930204 6.57070028,20.8460904 8.50140056,20.8460904 L16.7615126,20.8461458 L20.7156303,24.7558251 C20.8496359,24.8883819 21.0286835,24.9586764 21.2109804,24.9586764 C21.3011765,24.9586764 21.3921569,24.9413936 21.4787675,24.9058863 C21.7404482,24.7987551 21.9110924,24.5463819 21.9110924,24.2662566 L21.9110924,20.8187259 C23.6342857,20.6035219 24.9710924,19.1452303 24.9710924,17.3839913 L24.9710924,9.47489504 C24.9710924,7.56586589 23.4003922,6.01274052 21.4696919,6.01274052 Z M23.5705322,17.3840466 C23.5705322,18.5294752 22.6281232,19.4613061 21.4696919,19.4613061 L21.2108123,19.4613061 C20.8240896,19.4613061 20.5105322,19.7713994 20.5105322,20.1537259 L20.5105322,22.5945889 L17.5467787,19.664102 C17.4154622,19.5342041 17.237423,19.4613061 17.0515966,19.4613061 L8.50140056,19.4613061 C7.34296919,19.4613061 6.40056022,18.5294752 6.40056022,17.3840466 L6.40056022,9.47495044 C6.40056022,8.32952187 7.34296919,7.39769096 8.50140056,7.39769096 L21.4696919,7.39769096 C22.6281232,7.39769096 23.5705322,8.32952187 23.5705322,9.47495044 L23.5705322,17.3840466 Z M20.1396078,10.915793 L9.83148459,10.915793 C9.4447619,10.915793 9.13120448,11.2257755 9.13120448,11.6082128 C9.13120448,11.9905948 9.4447619,12.3006327 9.83148459,12.3006327 L20.1396078,12.3006327 C20.5263305,12.3006327 20.839888,11.9905948 20.839888,11.6082128 C20.839888,11.2257755 20.5263866,10.915793 20.1396078,10.915793 Z M20.1396078,14.793344 L9.83148459,14.793344 C9.4447619,14.793344 9.13120448,15.1033265 9.13120448,15.4857638 C9.13120448,15.8682012 9.4447619,16.1781837 9.83148459,16.1781837 L20.1396078,16.1781837 C20.5263305,16.1781837 20.839888,15.8681458 20.839888,15.4857638 C20.839888,15.1033819 20.5263866,14.793344 20.1396078,14.793344 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span v-if="show" class="side-link" id="active">Vendors</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'DID'}">
            <img class="image-box" src="@/assets/Icon/DID.svg">
            <span v-if="show" class="side-link">DID</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Filters'}">
            <img class="image-box" src="@/assets/Icon/Filters.svg">
            <span v-if="show" class="side-link">Filters</span>
          </router-link>
        </li>
      </ul>
      </transition>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Vendors
          </div>
        </div>
        <input class="vendor-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.search" placeholder="Search for vendor">
        <router-link :to="{ name: 'AddVendor'}"><button id="product" type="submit">Add Vendor</button></router-link>
        <div class="vendors-main">
          <table class="vendors-table" cellspacing="0" cellpadding="0">
            <thead>
              <tr class="vendors-table-th">
                <th class="vendor-active"></th>
                <th class="vendor-company">Company Name</th>
                <th class="vendor-contact">Contact Name</th>
                <th class="vendor-type">Type</th>
                <th class="vendor-person">Contact Person</th>
                <th class="vendor-noc">NOC Email</th>
                <th class="vendor-sales">Sales Email</th>
                <th class="vendor-rate">Rate Email</th>
                <th class="vendor-options"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="online">
                <td class="vendor-active"><div class="vendor-active-circle"></div></td>
                <td class="vendor-company"><div class="vendor-avatar"></div> <div class="vendor-name-fix">Appolo Inc.</div></td>
                <td class="vendor-contact">Chad Sullivan</td>
                <td class="vendor-type">SMPP</td>
                <td class="vendor-person">Eula Hernandez</td>
                <td class="vendor-noc">tri…ue@yahoo.com</td>
                <td class="vendor-sales">tri…ue@yahoo.com</td>
                <td class="vendor-rate">tri…ue@yahoo.com</td>
                <td class="vendor-options"><router-link :to="{ name: 'VendorsRate'}"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Reporting.svg"></div></router-link></td>
              </tr>
              <tr class="online">
                <td class="vendor-active"><div class="vendor-active-circle"></div></td>
                <td class="vendor-company"><div class="vendor-avatar"></div> <div class="vendor-name-fix">Appolo Inc.</div></td>
                <td class="vendor-contact">Herbert Williamson</td>
                <td class="vendor-type">SMPP</td>
                <td class="vendor-person">Eula Hernandez</td>
                <td class="vendor-noc">tri…ue@yahoo.com</td>
                <td class="vendor-sales">tri…ue@yahoo.com</td>
                <td class="vendor-rate">tri…ue@yahoo.com</td>
                <td class="vendor-options"><router-link :to="{ name: 'VendorsRate'}"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Reporting.svg"></div></router-link></td>
              </tr>
              <tr class="online">
                <td class="vendor-active"><div class="vendor-active-circle"></div></td>
                <td class="vendor-company"><div class="vendor-avatar"></div> <div class="vendor-name-fix">Appolo Inc.</div></td>
                <td class="vendor-contact">Erik Adams</td>
                <td class="vendor-type">SMPP</td>
                <td class="vendor-person">Eula Hernandez</td>
                <td class="vendor-noc">tri…ue@yahoo.com</td>
                <td class="vendor-sales">tri…ue@yahoo.com</td>
                <td class="vendor-rate">tri…ue@yahoo.com</td>
                <td class="vendor-options"><router-link :to="{ name: 'VendorsRate'}"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Reporting.svg"></div></router-link></td>
              </tr>
              <tr class="online">
                <td class="vendor-active"><div class="vendor-active-circle"></div></td>
                <td class="vendor-company"><div class="vendor-avatar"></div> <div class="vendor-name-fix">Appolo Inc.</div></td>
                <td class="vendor-contact">Rosie Collins</td>
                <td class="vendor-type">SMPP</td>
                <td class="vendor-person">Eula Hernandez</td>
                <td class="vendor-noc">tri…ue@yahoo.com</td>
                <td class="vendor-sales">tri…ue@yahoo.com</td>
                <td class="vendor-rate">tri…ue@yahoo.com</td>
                <td class="vendor-options"><router-link :to="{ name: 'VendorsRate'}"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Reporting.svg"></div></router-link></td>
              </tr>
              <tr class="offline">
                <td class="vendor-active"><div class="vendor-not-active-circle"></div></td>
                <td class="vendor-company"><div class="vendor-avatar"></div> <div class="vendor-name-fix">Appolo Inc.</div></td>
                <td class="vendor-contact">Chad Sullivan</td>
                <td class="vendor-type">SMPP</td>
                <td class="vendor-person">Eula Hernandez</td>
                <td class="vendor-noc">tri…ue@yahoo.com</td>
                <td class="vendor-sales">tri…ue@yahoo.com</td>
                <td class="vendor-rate">tri…ue@yahoo.com</td>
                <td class="vendor-options"><router-link :to="{ name: 'VendorsRate'}"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Reporting.svg"></div></router-link></td>
              </tr>
              <tr class="offline">
                <td class="vendor-active"><div class="vendor-not-active-circle"></div></td>
                <td class="vendor-company"><div class="vendor-avatar"></div> <div class="vendor-name-fix">Appolo Inc.</div></td>
                <td class="vendor-contact">George Fitzgerald</td>
                <td class="vendor-type">SMPP</td>
                <td class="vendor-person">Eula Hernandez</td>
                <td class="vendor-noc">tri…ue@yahoo.com</td>
                <td class="vendor-sales">tri…ue@yahoo.com</td>
                <td class="vendor-rate">tri…ue@yahoo.com</td>
                <td class="vendor-options"><router-link :to="{ name: 'VendorsRate'}"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Reporting.svg"></div></router-link></td>
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
.vendor-name-fix{
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
}
.vendor-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.vendors-main{
  float: left;
  display: inline-block;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
}
.svg-active path{
  fill: white;
}
.vendors-table{
  border: none;
  max-width: 100%;
  width: 100%;
  margin-top: 20px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  text-align: left;
}
.online{
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
  height: 44px;
}
.offline{
  background-color: #F0F1FA;
  box-shadow: inset 0 -1px 0 0 rgba(189,191,216,0.36);
  height: 44px;
}
.vendors-table-th{
  height: 37px;
}
.vendor-active{
  width: 25px;
  padding-left: 8px;
}
.vendor-company{
  width: 158px;
}
.vendor-contact{
  width: 168px;
}
.vendor-type{
  width: 70px;
}
.vendor-person{
  width: 167px;
}
.vendor-noc{
  width: 145px;
}
.vendor-sales{
  width: 145px;
}
.vendor-rate{
  width: 165px;
}
.vendor-options{
  width: 50px;
}

.vendor-active-circle{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #24E2B8;
  float: left;
  margin-left: 3px;
}
.vendor-not-active-circle{
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
.vendor-input-search{
  width: 317px;
  height: 40px;
  padding-left: 40px;
  margin-left: 20px;
  margin-top: 20px;
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
    margin-right: 20px;
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
.side#active svg g{
  fill: white;
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


.user-menu{
	height: auto;
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
.popup-logout{
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-bottom: 15px;
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
    .vendor-input-search{
      max-width: calc(100% - 80px);
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
@media only screen and (max-width: 390px) {
    .username{
      display: none;
    }
}
</style>
