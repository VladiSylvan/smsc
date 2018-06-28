<template>
    <div class="container">
      <nav class="navigation">
        <div class="logo-place">
          <div :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Left.svg') + ')' }" class="circle"></div>
          <img class="head-logo" src="@/assets/logo.png">
        </div>
        <div class="title">Dashboard</div>
        <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="System" class="system" v-model="user.system">
          <option value="Overall system">Overall system</option>
        </select>
        <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Days" class="days" v-model="user.days">
          <option value="Last 30 days">Last 30 days</option>
        </select>
        <div class="username">Linnie Weaver</div>
        <div class="circle"><span id="avatar">A</span></div>
      </nav>
      <div class="sidebar">
        <div id="active" class="side">
          <div class="image-box">
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
                    <g id="Color-/-Dark-4" mask="url(#mask-2)" fill="#55616E">
                        <rect id="Rectangle" x="0" y="0" width="30" height="30"></rect>
                    </g>
                </g>
            </svg>
          </div>
          <span id="side-link">Dashboard</span>
        </div>
        <div class="side">
          <img class="image-box" src="@/assets/Icon/Reporting.svg">
          <span id="side-link">Reporting</span>
        </div>
        <div class="side">
          <img class="image-box" src="@/assets/Icon/Product.svg">
          <span id="side-link">Product</span>
        </div>
        <div class="side">
          <img class="image-box" src="@/assets/Icon/Template.svg">
          <span id="side-link">Template Approval</span>
        </div>
        <div class="side">
          <img class="image-box" src="@/assets/Icon/Billing.svg">
          <span id="side-link">Billing</span>
        </div>
        <div class="side-title">
          Manage
        </div>
        <div class="side">
          <img class="image-box" src="@/assets/Icon/Reseller.svg">
          <span id="side-link">Resellers</span>
        </div>
        <div class="side">
          <img class="image-box" src="@/assets/Icon/Users.svg">
          <span id="side-link">Users</span>
        </div>
        <div class="side">
          <img class="image-box" src="@/assets/Icon/Companies.svg">
          <span id="side-link">Companies</span>
        </div>
        <div class="side">
          <img class="image-box" src="@/assets/Icon/Vendors.svg">
          <span id="side-link">Vendors</span>
        </div>
        <div class="side">
          <img class="image-box" src="@/assets/Icon/DID.svg">
          <span id="side-link">DID</span>
        </div>
        <div class="side">
          <img class="image-box" src="@/assets/Icon/Filters.svg">
          <span id="side-link">Filters</span>
        </div>
      </div>
      <div class="main">
        <div class="chart-1">
          <div class="chart-1-title">
            Leads and Sales
          </div>
          <div class="chart-box">
            <img src="@/assets/Icon/Arrow/Up.svg">
          </div>
          <commit-chart :options="{responsive: false, maintainAspectRatio: false}" :width="789" :height="273"></commit-chart>
        </div>
        <div class="chart-2">
          <div class="chart-2-title">
            Visits
          </div>
          <div class="chart-box">
            <img src="@/assets/Icon/Arrow/Up.svg">
          </div>
          <bar-chart :options="{responsive: false, maintainAspectRatio: false}" :width="230" :height="100"></bar-chart>
        </div>
        <div class="chart-2" id="second">
          <div class="chart-2-title">
            Activity
          </div>
          <div class="chart-box">
            <img src="@/assets/Icon/Arrow/Up.svg">
          </div>
          <bar-chart :options="{responsive: false, maintainAspectRatio: false}" :width="230" :height="100"></bar-chart>
        </div>
        <div class="chart-3">
          <div class="chart-3-title">
            Resellers
          </div>
          <div class="chart-box">
            <img src="@/assets/Icon/Arrow/Up.svg">
          </div>
          <commit-chart :options="{responsive: false, maintainAspectRatio: false}" :width="510" :height="226.22"></commit-chart>
        </div>
        <div class="chart-3" id="second">
          <div class="chart-3-title">
            Companies
          </div>
          <div class="chart-box">
            <img src="@/assets/Icon/Arrow/Up.svg">
          </div>
          <commit-chart :options="{responsive: false, maintainAspectRatio: false}" :width="510" :height="201.71"></commit-chart>
        </div>
      </div>
    </div>
</template>

<script>
import CommitChart from '@/components/auth/CommitChart'
import BarChart from '@/components/auth/BarChart'
export default {
    data () {
        return {
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            }
        }
    },
    components:{
      CommitChart,
      BarChart
    },
    methods:{
        sendForm(){
            event.preventDefault()
        }
    },
}
</script>
<style>
.main{
  width: 1140px;
  height: 964px;
  display: inline-block;
  vertical-align: top;
  margin-left: 300px;
  margin-top: -964px;
}
.chart-1{
  height: 360px;
  width: 820px;
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
  width: 760px;
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
  height: 170px;
  width: 260px;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-left: 10px;
}
.chart-2-title{
  height: 30px;
  width: 200px;
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
.chart-2#second{
  margin-top: -170px;
  margin-left: 855px;
}
.chart-3{
  height: 300px;
  width: 540px;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
  margin-left: 20px;
}
.chart-3-title{
  height: 30px;
  width: 480px;
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
  margin-top: 5px;
  margin-left: 10px;
}
.side#active svg g{
  fill: white;
}
.navigation{
    width: 1440px;
    height: 60px;
}
.head-logo{
    display: inline-block;
    vertical-align: top;
    margin-top: 15px;
    margin-right: 20px;
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
  width: 300px;
}
.system{
    width: 180px !important;
    height: 40px !important;
    border: 1px solid #EDEEF3;
    border-radius: 4px;
    background-color: #FFFFFF;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 25px;
    font-family: "Helvetica Neue";
    color: #55616E;
    margin-bottom: 20px;
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
    width: 210px !important;
    height: 40px !important;
    border: 1px solid #EDEEF3;
    border-radius: 4px;
    background-color: #FFFFFF;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 25px;
    font-family: "Helvetica Neue";
    color: #55616E;
    margin-bottom: 20px;
    margin-top: 5px;
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
  height: 40px !important;
}
.username {
	color: #55616E;
	font-family: "Helvetica Neue";
	font-size: 15px;
	line-height: 20px;
	text-align: right;
  margin-left: 415px;
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-right: -8px;
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
	height: 964px;
	width: 300px;
	background-color: #F0F1FA;
  display: inline-block;
}
.side{
  height: 40px;
  width: 290px;
  color: #55616E;
  display: inline-block;
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
