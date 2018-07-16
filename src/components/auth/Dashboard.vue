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
        <li id="active">
          <router-link :to="{ name: 'Dashboard'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M24.7133515,13.5075766 L15.4490463,5.20674095 C15.1919891,4.97649025 14.8079564,4.97649025 14.5509537,5.20674095 L5.2866485,13.5075766 C5.00376022,13.7610585 4.97542234,14.2010585 5.22337875,14.4903621 C5.47133515,14.7794986 5.90179837,14.8085237 6.18468665,14.5549861 L6.90201635,13.912312 L6.90201635,24.2696379 C6.90201635,24.6542061 7.20697548,24.9660167 7.58321526,24.9660167 L12.7457766,24.9660167 L17.2542234,24.9660167 L22.4167302,24.9660167 C22.79297,24.9660167 23.0979292,24.6542061 23.0979292,24.2696379 L23.0979292,13.9123677 L23.8152589,14.5550975 C23.9445777,14.6708635 24.1046866,14.7277994 24.2639782,14.7277994 C24.453406,14.7277994 24.6418529,14.6475209 24.7765123,14.4904178 C25.0246322,14.2010585 24.9962943,13.7611142 24.7133515,13.5075766 Z M13.4269755,23.5733148 L13.4269755,17.8366574 L16.57297,17.8366574 L16.57297,23.5733148 L13.4269755,23.5733148 Z M21.7356403,12.6969916 L21.7356403,23.5732591 L17.9355313,23.5732591 L17.9355313,17.1402786 C17.9355313,16.7557103 17.6304632,16.4438997 17.2543324,16.4438997 L12.7458856,16.4438997 C12.3697003,16.4438997 12.0646866,16.7557103 12.0646866,17.1402786 L12.0646866,23.5733148 L8.26446866,23.5733148 L8.26446866,12.6969916 C8.26446866,12.6952089 8.26425068,12.6935376 8.26425068,12.6918106 L15,6.65643454 L21.7358583,12.6917549 C21.7359128,12.6935933 21.7356403,12.6952089 21.7356403,12.6969916 Z M13.4741144,11.5592201 C13.4741144,11.943844 13.7790736,12.2555989 14.1553134,12.2555989 L15.8446866,12.2555989 C16.2208719,12.2555989 16.5258856,11.943844 16.5258856,11.5592201 C16.5258856,11.1745961 16.2208719,10.8628412 15.8446866,10.8628412 L14.1553134,10.8628412 C13.7791281,10.8628412 13.4741144,11.1745961 13.4741144,11.5592201 Z" id="path-1">
                </path>
              </svg>
          </div>
          <span v-if="show" class="side-link" id="active">Dashboard</span>
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
        <li>
          <router-link :to="{ name: 'Vendors'}">
            <img class="image-box" src="@/assets/Icon/Vendors.svg">
            <span v-if="show" class="side-link">Vendors</span>
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
        <div class="cont-1">
          <div class="chart-1">
            <div class="chart-1-title">
              Leads and Sales
            </div>
            <div class="chart-box">
              <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
            </div>
            <commit-chart :options="{responsive: false, maintainAspectRatio: false}" :width="789" :height="273"></commit-chart>
          </div>
        </div>
        <div class="cont-2">
          <div class="chart-2">
            <div class="chart-2-title">
              Visits
            </div>
            <div class="chart-box">
              <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
            </div>
            <bar-chart :options="{responsive: false, maintainAspectRatio: false}" :width="230" :height="100"></bar-chart>
          </div>
        </div>
        <div class="cont-2">
          <div class="chart-2">
            <div class="chart-2-title">
              Activity
            </div>
            <div class="chart-box">
              <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
            </div>
            <bar-chart2 :options="{responsive: false, maintainAspectRatio: false}" :width="230" :height="100"></bar-chart2>
          </div>
        </div>
        <div class="cont-3">
          <div class="chart-3">
            <div class="chart-3-title">
              Resellers
            </div>
            <div class="chart-box">
              <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
            </div>
            <resellers-line-chart :options="{responsive: false, maintainAspectRatio: false}" :width="510" :height="201.71"></resellers-line-chart>
          </div>
        </div>
        <div class="cont-3">
          <div class="chart-3" id="second">
            <div class="chart-3-title">
              Companies
            </div>
            <div class="chart-box">
              <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
            </div>
            <companies-chart :options="{responsive: false, maintainAspectRatio: false}" :width="510" :height="201.71"></companies-chart>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import CommitChart from '@/components/auth/CommitChart'
import BarChart from '@/components/auth/BarChart'
import BarChart2 from '@/components/auth/BarChart2'
import ResellersLineChart from '@/components/auth/ResellersLineChart'
import CompaniesChart from '@/components/auth/CompaniesChart'

export default {
    data () {
        return {
          show: true,
          width: '60px',
          transitionName: 'fade',
          popup: false,
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
      ResellersLineChart,
      CompaniesChart
    },
    methods:{
        sendForm(){
            event.preventDefault()
        }
    },
}
</script>

<style>
.svg-active path{
  fill: white;
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
.cont-1{
  width: 74%;
  float: left;
}
.cont-2{
  width: 21%;
  float: left;
}
.cont-3{
  width: 47.5%;
  float: left;
}
.main{
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
.chart-1{
  height: auto;
  width: 100%;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-left: 20px;
}
.chart-1-title{
  height: 30px;
  width: calc(100% - 60px);
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
.chart-box{
  height: 30px;
  width: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
}
.chart-2{
  height: auto;
  width: 100%;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-left: 40px;
  position: relative;
}
.chart-2-title{
  height: 30px;
  width: calc(100% - 60px);
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
.chart-3{
  height: auto;
  width: 100%;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-left: 20px;
}
.chart-3-title{
  height: 30px;
  width: calc(100% - 60px);
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
.chart-3#second{
  margin-top: 20px;
  margin-left: 40px;
}
li#active svg g{
  fill: white;
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
    margin-top: 5px;
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
    .system{
      width: 47.8%;
    }
    .days{
      width: 47.8%;
    }
    .cont-1, .cont-2, .cont-3{
      width: calc(100% - 30px);
    }
    .chart-1, .chart-2, .chart-3, .chart-3#second{
      margin-left: 15px;
      margin-right: 15px;
    }
}
@media only screen and (max-width: 990px) {
    .system{
      width: 46.5%;
    }
    .days{
      width: 46.5%;
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
    .system{
      width: 46.5%;
    }
    .days{
      width: 46.5%;
    }
}
@media only screen and (max-width: 390px) {
    .username{
      display: none;
    }
    .system{
      width: calc(100% - 15px);
    }
    .days{
      width: calc(100% - 15px);
    }
}
</style>
