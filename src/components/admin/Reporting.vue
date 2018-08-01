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
            Reporting
          </div>
        </div>
        <profile-component></profile-component>
      </nav>
      <transition name="fade">
        <ul v-bind:class="{'sidebar-hide': !show}">
          <li>
          <router-link :to="{ name: 'Dashboard'}">
            <img class="image-box" src="@/assets/Icon/Dashboard.svg">
            <span v-if="show" class="side-link">Dashboard</span>
          </router-link>
        </li>
        <li id="active">
          <router-link :to="{ name: 'Reporting'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M24.3333333,22.6234595 L7.1656,22.6234595 L9.95824,16.9509189 L12.8546667,18.8602162 C13.03872,18.9815676 13.2700267,19.0032973 13.47296,18.9181081 C13.6759467,18.8331351 13.8245333,18.6521622 13.8701867,18.4344865 L15.0018133,13.0466486 L18.1837867,14.6959459 C18.4528,14.8354595 18.78064,14.7740541 18.9827733,14.5463784 L21.6315733,11.5637297 L21.71488,12.467027 C21.7470933,12.8172432 22.0377067,13.0799459 22.37792,13.0799459 C22.3986667,13.0799459 22.4196267,13.078973 22.4406933,13.076973 C22.8073067,13.0422703 23.0766933,12.712973 23.0425067,12.3414054 L22.8059733,9.774 C22.7716267,9.40243243 22.4470933,9.12924324 22.0802133,9.16405405 L19.5470933,9.40367568 C19.1805333,9.43837838 18.91104,9.76767568 18.9452267,10.1391892 C18.9796267,10.5107568 19.3035733,10.7838919 19.67104,10.7491351 L20.6428267,10.6571892 L18.33472,13.2562703 L14.8345067,11.442 C14.6498667,11.3462162 14.43168,11.3431351 14.24448,11.4334595 C14.0571733,11.5237838 13.92208,11.6972973 13.87888,11.9029189 L12.7682667,17.1910811 L10.0589333,15.4051351 C9.89962667,15.3001081 9.70362667,15.2689189 9.52037333,15.3195676 C9.33701333,15.3701081 9.18368,15.4975135 9.09893333,15.6697838 L6.33333333,21.2874054 L6.33333333,6.70086486 C6.33333333,6.32767568 6.03482667,6.02518919 5.66666667,6.02518919 C5.29850667,6.02518919 5,6.32767568 5,6.70086486 L5,23.2991351 C5,23.6722703 5.29850667,23.9748108 5.66666667,23.9748108 L24.3333333,23.9748108 C24.70144,23.9748108 25,23.6722703 25,23.2991351 C25,22.926 24.70144,22.6234595 24.3333333,22.6234595 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span v-if="show" class="side-link" id="active">Reporting</span>
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
            Reporting
          </div>
        </div>
        <div class="cont-1-rep">
            <div class="chart-1-reporting">
              <div class="chart-1-title-reporting">
                Resellers
              </div>
              <div class="chart-box">
                <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
              </div>
              <resellers-line :options="{responsive: false, maintainAspectRatio: false}" :width="510" :height="280"></resellers-line>
              <input class="reporting-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.search" placeholder="Search">
              <button type="submit">Filter</button>
              <table class="reporting-table" cellspacing="0" cellpadding="0">
                <thead>
                  <tr>
                    <th class="resellers">Resellers</th>
                    <th class="date">Date</th>
                    <th class="status">Status</th>
                  </tr>
                  <tr>
                    <td class="resellers">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="resellers">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="status"><div class="not-active">Not Active</div></td>
                  </tr>
                  <tr>
                    <td class="resellers">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="resellers">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="resellers">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="status"><div class="not-active">Not Active</div></td>
                  </tr>
                  <tr>
                    <td class="resellers">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="resellers">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="status"><div class="not-active">Not Active</div></td>
                  </tr>
                  <tr>
                    <td class="resellers">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                </thead>
              </table>
              <div class="show-more">
                <a href="#" id="show-more">Show more</a>
              </div>
            </div>
          </div>
          <div class="cont-2-rep">
            <div class="chart-2-reporting">
              <div class="chart-2-title-reporting">
                Visits
              </div>
              <div class="chart-box">
                <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
              </div>
              <bar-chart :options="{responsive: false, maintainAspectRatio: false}" :width="230" :height="100"></bar-chart>
            </div>
          </div>
          <div class="cont-2-rep">
            <div class="chart-2-reporting" id="second">
              <div class="chart-2-title-reporting">
                Activity
              </div>
              <div class="chart-box">
              <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
              </div>
              <bar-chart2 :options="{responsive: false, maintainAspectRatio: false}" :width="230" :height="100"></bar-chart2>
            </div>
          </div>
          <div class="cont-1-rep">
            <div class="chart-3-reporting">
              <div class="chart-3-title-reporting">
                Companies
              </div>
              <div class="chart-box">
                <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
              </div>
              <companies-line :options="{responsive: false, maintainAspectRatio: false}" :width="510" :height="280"></companies-line>
            </div>
          </div>
          <div class="cont-2-rep">
            <div class="chart-2-reporting">
              <div class="chart-2-title-reporting">
                Visits
              </div>
              <div class="chart-box">
                <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
              </div>
              <bar-chart :options="{responsive: false, maintainAspectRatio: false}" :width="230" :height="100"></bar-chart>
            </div>
          </div>
          <div class="cont-2-rep">
            <div class="chart-2-reporting" id="second">
              <div class="chart-2-title-reporting">
                Activity
              </div>
              <div class="chart-box">
                <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
              </div>
              <bar-chart2 :options="{responsive: false, maintainAspectRatio: false}" :width="230" :height="100"></bar-chart2>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import CommitChart from '@/components/admin/CommitChart'
import BarChart from '@/components/admin/BarChart'
import BarChart2 from '@/components/admin/BarChart2'
import ResellersLine from '@/components/admin/ResellersLine'
import CompaniesLine from '@/components/admin/CompaniesLine'
import ProfileComponent from '@/components/ProfileComponent'

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
      ResellersLine,
      CompaniesLine,
      ProfileComponent,
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
.reporting-table{
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
.resellers{
  width: 174px;
  padding-left: 15px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.date{
  width: 189px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.status{
  width: 132px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}

.active{
  box-sizing: border-box;
  height: 24px;
  width: 59px;
  border: 2px solid #FFFFFF;
  border-radius: 100px;
  background-color: #24E2B8;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  padding-top: 2px;
}
.not-active{
  box-sizing: border-box;
  height: 24px;
  width: 85px;
  border: 2px solid #FFFFFF;
  border-radius: 100px;
  background-color: #D2305B;
  color: #FFFFFF;
  font-family: "SF Pro Text";
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  padding-top: 2px;
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
.reporting-search{
  height: 36px !important;
  width: calc(69.621421976% - 30px);
  margin-left: 13px;
  padding-left: 40px;
}
button{
  	height: 36px;
    width: calc(16.7737765466% + 10px);
    border: 1px
    solid #BDBFD8;
    border-radius: 4px;
    background-color: #FFFFFF;
    font-family: "Helvetica Neue";
    font-size: 15px;
    font-weight: 300;
    line-height: 30px;
    text-align: center;
    margin-top: 15px;
    margin-left: 10px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.cont-1-rep{
  width: 47.5%;
  float: left;
}
.cont-2-rep{
  width: 22.9%;
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
.chart-1-reporting{
  width: 100%;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-left: 20px;
}
.chart-1-title-reporting{
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
.chart-3-reporting{
  height: auto;
  width: 100%;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-left: 40px;
}
.chart-3-title-reporting{
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
.chart-2-reporting{
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
.chart-2-title-reporting{
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
.chart-2-reporting#second{
  margin-left: 60px;
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
    .cont-1-rep, .cont-2-rep{
      width: calc(100% - 30px);
    }
    .chart-1-reporting, .chart-2-reporting, .chart-2-reporting#second, .chart-3-reporting, .chart-3#second{
      margin-left: 15px;
      margin-right: 15px;
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
}
</style>
