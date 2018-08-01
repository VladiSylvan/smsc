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
      <ul v-bind:class="{'sidebar-hide': !show}" >
        <li>
          <router-link :to="{ name: 'Profile'}">
            <img class="image-box" src="@/assets/Icon/Users.svg">
            <span v-if="show" class="side-link">Profile</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ResellerSMSCenter'}">
            <img class="image-box" src="@/assets/Icon/Vendors.svg">
            <span v-if="show" class="side-link">SMS Center</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ResellerProduct'}">
            <img class="image-box" src="@/assets/Icon/Product.svg">
            <span v-if="show" class="side-link">Product</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'MailTemplateRegister'}">
            <img class="image-box" src="@/assets/Icon/Reseller.svg">
            <span v-if="show" class="side-link">Mail Template</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ResellerTemplate'}">
            <img class="image-box" src="@/assets/Icon/Template.svg">
            <span v-if="show" class="side-link">Templates</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ResellerBilling'}">
            <img class="image-box" src="@/assets/Icon/Billing.svg">
            <span v-if="show" class="side-link">Billing</span>
          </router-link>
        </li>
        <div v-if="show" class="side-title">
          Manage
        </div>
        <li>
          <router-link :to="{ name: 'ResellerUsers'}">
            <img class="image-box" src="@/assets/Icon/Users.svg">
            <span v-if="show" class="side-link">Users</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ResellerCompanies'}">
            <img class="image-box" src="@/assets/Icon/Companies.svg">
            <span v-if="show" class="side-link">Companies</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ResellerVendors'}">
            <img class="image-box" src="@/assets/Icon/Vendors.svg">
            <span v-if="show" class="side-link">Vendors</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ResellerDIDs'}">
            <img class="image-box" src="@/assets/Icon/DID.svg">
            <span v-if="show" class="side-link">DIDs</span>
          </router-link>
        </li>
        <li id="active">
          <router-link :to="{ name: 'ResellerFilters'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M24.1572549,6 L21.4976471,6 C21.0435294,6 20.6741176,6.3667623 20.6741176,6.81762295 L20.6741176,8.58555738 L18.3676078,8.58555738 C17.9134902,8.58555738 17.5440784,8.95231967 17.5440784,9.40318033 L17.5440784,11.1711148 L15.2374118,11.1711148 C14.7832941,11.1711148 14.4138824,11.537877 14.4138824,11.9887377 L14.4138824,13.7566721 L12.0838431,13.7566721 C11.6297255,13.7566721 11.2603137,14.1234344 11.2603137,14.5742951 L11.2603137,16.3422295 L8.95364706,16.3422295 C8.49952941,16.3422295 8.13011765,16.7089918 8.13011765,17.1598525 L8.13011765,18.927709 L5.82352941,18.927709 C5.36941176,18.927709 5,19.2944713 5,19.745332 L5,24.1044303 C5,24.5552131 5.36941176,24.9220533 5.82352941,24.9220533 L8.48305882,24.9220533 C8.56486275,24.9220533 8.64376471,24.90975 8.71835294,24.8876352 C8.79294118,24.9098279 8.87184314,24.9220533 8.95364706,24.9220533 L11.6132549,24.9220533 C11.6950588,24.9220533 11.7739608,24.90975 11.848549,24.8876352 C11.9231373,24.9098279 12.0020392,24.9220533 12.0838431,24.9220533 L14.7432941,24.9220533 C14.8294118,24.9220533 14.9122353,24.9088156 14.9902745,24.8843648 C15.0683137,24.9087377 15.1512157,24.9220533 15.2372549,24.9220533 L17.8968627,24.9220533 C17.9786667,24.9220533 18.0575686,24.90975 18.1321569,24.8876352 C18.2067451,24.9098279 18.2856471,24.9220533 18.367451,24.9220533 L21.026902,24.9220533 C21.1087059,24.9220533 21.1876078,24.90975 21.2621961,24.8876352 C21.3367843,24.9098279 21.4156863,24.9220533 21.4974902,24.9220533 L24.157098,24.9220533 C24.6112157,24.9220533 24.9806275,24.5552131 24.9806275,24.1044303 L24.9806275,6.81754508 C24.9807843,6.36684016 24.6113725,6 24.1572549,6 Z M6.17647059,20.0958197 L8.13011765,20.0958197 L8.13011765,23.7540984 L6.17647059,23.7540984 L6.17647059,20.0958197 Z M9.30658824,19.7454098 L9.30658824,17.5103402 L11.2603137,17.5103402 L11.2603137,23.7541762 L9.30658824,23.7541762 L9.30658824,19.7454098 Z M14.3904314,23.7540984 L12.4367843,23.7540984 L12.4367843,17.1598525 L12.4367843,14.9247828 L14.3903529,14.9247828 L14.3903529,23.7540984 L14.3904314,23.7540984 Z M15.5902745,12.3392254 L17.544,12.3392254 L17.544,23.7541762 L15.5902745,23.7541762 L15.5902745,12.3392254 Z M18.7204706,11.9888156 L18.7204706,9.75366803 L20.6740392,9.75366803 L20.6740392,23.7541762 L18.7204706,23.7541762 L18.7204706,11.9888156 Z M23.8043137,23.7540984 L21.8505882,23.7540984 L21.8505882,9.4032582 L21.8505882,7.16803279 L23.8043137,7.16803279 L23.8043137,23.7540984 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span v-if="show" class="side-link" id="active">Filters</span>
          </router-link>
        </li>
      </ul>
      </transition>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Filters
          </div>
        </div>
          <input class="filters-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchFilters" placeholder="Search for filter">
          <div class="main-container">
            <table class="filters-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr class="filters-table-th">
                  <th class="filter-active"></th>
                  <th class="filter-text">Text to block</th>
                  <th class="filter-option"></th>
                  <th class="filter-option"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="filters-online">
                  <td class="filter-active-td"><div class="product-active"></div></td>
                  <td class="filter-text">Computer Hardware Desktops And Notebooks And Handhelds Oh My</td>
                  <td class="filter-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                  <td class="filter-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="filters-offline">
                  <td class="filter-active-td"><div class="product-not-active"></div></td>
                  <td class="filter-text">Windows Registry Cleaner Checklist</td>
                  <td class="filter-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                  <td class="filter-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
              </tbody>
            </table>
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
.filters-table{
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
.filters-table-th{
  height: 37px;
  font-weight: 600;
}
.filters-online{
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
  height: 50px;
}
.filters-offline{
  background-color: #F0F1FA;
  box-shadow: inset 0 -1px 0 0 rgba(189,191,216,0.36);
  height: 50px;
}
.filter-active{
  width: 20px;
  padding-left: 7px;
}
.filter-active-td{
  width: 20px;
  padding-left: 7px;
  vertical-align: text-top;
  padding-top: 15px;
}
.filter-text{
  width: 970px;
  vertical-align: text-top;
}
.filter-option{
  width: 50px;
}
.blocked-text{
  padding: 3px;
}
.blocked-by{
  color: #55616E;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 20px;
  display: inline-block;
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
.did-control-info{
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
.filters-input-search{
  width: 302px;
  margin-left: 20px;
  margin-top: 20px;
  height: 40px !important;
  padding-left: 40px;
}
button#did{
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
    .filter-input-search{
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
