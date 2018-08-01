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
        <router-link :to="{ name: 'Vendors'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Vendors
          </div>
        </router-link>
        <div class="add-vendor-rate">
          <div class="vendor-rate-main">
            <div class="vendor-add-title">
              Rate deck
            </div>
            <table class="vendors-rate-table">
              <thead>
                <tr class="vendor-rate-tr">
                  <th class="vendor-rate-active"></th>
                  <th class="vendor-country">Country</th>
                  <th class="vendor-operator">Operator</th>
                  <th class="vendor-sell-rate">Sell Rate</th>
                  <th class="vendor-vendors-th">Vendors</th>
                </tr>
              </thead>
              <tbody>
                <tr class="vendor-rate-tr">
                  <th class="vendor-rate-active"><div class="vendor-active-circle"></div></th>
                  <td class="vendor-country">China</td>
                  <td class="vendor-operator">China Mobile</td>
                  <td class="vendor-sell-rate">0.001</td>
                  <td class="vendor-vendors">
                    <div class="vendor-table">
                      <div class="vendor-table-text">
                        Vendor BB
                      </div>
                      <div class="vendors-info-bar">0.0008</div>
                      <div class="vendor-table-text">
                        Vendor CC
                      </div>
                      <div class="vendors-info-bar">0.0009</div>
                    </div>
                  </td>
                </tr>
                <tr class="vendor-rate-tr">
                  <th class="vendor-rate-active"><div class="vendor-active-circle"></div></th>
                  <td class="vendor-country">China</td>
                  <td class="vendor-operator">China Unicom</td>
                  <td class="vendor-sell-rate">0.0012</td>
                  <td class="vendor-vendors">
                    <div class="vendor-table">
                      <div class="vendor-table-text">
                        Vendor BB
                      </div>
                      <div class="vendors-info-bar">0.0008</div>
                      <div class="vendor-table-text">
                        Vendor CC
                      </div>
                      <div class="vendors-info-bar">0.0009</div>
                    </div>
                  </td>
                </tr>
                <tr class="vendor-rate-tr">
                  <th class="vendor-rate-active"><div class="vendor-not-active-circle"></div></th>
                  <td class="vendor-country">United States</td>
                  <td class="vendor-operator">AT & T</td>
                  <td class="vendor-sell-rate">0.0003</td>
                  <td class="vendor-vendors">
                    <div class="vendor-table">
                      <div class="vendor-table-text">
                        Vendor BB
                      </div>
                      <div class="vendors-info-bar">0.0008</div>
                      <div class="vendor-table-text">
                        Vendor CC
                      </div>
                      <div class="vendors-info-bar">0.0009</div>
                    </div>
                  </td>
                </tr>
                <tr class="vendor-rate-tr">
                  <th class="vendor-rate-active"><div class="vendor-active-circle"></div></th>
                  <td class="vendor-country">China</td>
                  <td class="vendor-operator">China Unicom</td>
                  <td class="vendor-sell-rate">0.0012</td>
                  <td class="vendor-vendors">
                    <div class="vendor-table">
                      <div class="vendor-table-text">
                        Vendor BB
                      </div>
                      <div class="vendors-info-bar">0.0008</div>
                      <div class="vendor-table-text">
                        Vendor CC
                      </div>
                      <div class="vendors-info-bar">0.0009</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div id="app">
        <modal v-show="isModalVisible" @close="closeModal"/>
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
.vendor-table{
  width: 145px;
}
.vendor-table-text{
  display: inline-block;
  float: left;
  width: 80px;
  margin-bottom: 5px;
}
.vendors-info-bar{
  	height: 18px;
    width: 60px;
    border: 1px solid #BDBFD8;
    border-radius: 4px;
    background-color: #FFFFFF;
    color: #55616E;
    font-family: "Circular Std";
    font-size: 11px;
    font-weight: 300;
    line-height: 15px;
    text-align: center;
    display: inline-block;
    float: left;
    margin-bottom: 5px;
}
.svg path{
  fill: #51A3F3;
}
.svg-back{
  float: left;
  display: inline-block;
  margin-top: 25px;
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
}
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
.add-vendor-rate{
  float: left;
  display: inline-block;
  background-color: #FFFFFF;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
}
.vendor-rate-main{
  display: inline-block;
  float: left;
  max-width: 100%;
  width: 100%;
}
.vendor-add-title{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin: 15px;
}
.svg-active path{
  fill: white;
}
.vendor-rate-table{
  border: none;
  max-width: 100%;
  width: 100%;
}
.vendor-rate-tr{
  height: 44px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}

.online{
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.offline{
  background-color: #F0F1FA;
  box-shadow: inset 0 -1px 0 0 rgba(189,191,216,0.36);
}
.vendor-rate-active{
  width: 18px;
  padding-left: 8px;
  vertical-align: text-top;
}
.vendor-country{
  width: 133px;
  vertical-align: text-top;
  padding-top: 14px;
}
.vendor-operator{
  width: 150px;
  vertical-align: text-top;
}
.vendor-sell-rate{
  width: 121px;
  vertical-align: text-top;
}
.vendor-vendors{
  width: 661px;
}
.vendor-vendors-th{
  width: 661px;
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
input[type="text"]#vendor-search{
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
</style>
