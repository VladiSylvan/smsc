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
            Users
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
        <li id="active">
          <router-link :to="{ name: 'Users'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M19.3070588,15.3745636 L18.5167157,15.3745636 C20.0434804,14.3694763 21.0561275,12.6217456 21.0561275,10.6378055 C21.0561275,7.52907731 18.5704412,5 15.515049,5 C12.4596569,5 9.97397059,7.52907731 9.97397059,10.6378055 C9.97397059,12.6217456 10.9865196,14.3694763 12.5133824,15.3745636 L11.7230392,15.3745636 C9.69196078,15.3745636 8.03955882,17.0557107 8.03955882,19.1222444 L8.03955882,24.3573067 C8.03955882,24.7016459 8.31392157,24.9807481 8.65230392,24.9807481 L22.3777941,24.9807481 C22.7161765,24.9807481 22.9905392,24.7016459 22.9905392,24.3573067 L22.9905392,19.1221945 C22.9905392,17.0557107 21.3381373,15.3745636 19.3070588,15.3745636 Z M11.1994608,10.6378055 C11.1994608,8.21665835 13.1353922,6.24688279 15.515049,6.24688279 C17.8946569,6.24688279 19.8306373,8.21665835 19.8306373,10.6378055 C19.8306373,13.0589027 17.8946569,15.0286284 15.515049,15.0286284 C13.1353922,15.0286284 11.1994608,13.0589027 11.1994608,10.6378055 Z M17.3078431,15.9724688 L15.515049,17.7966085 L13.7222549,15.9725187 C14.2848529,16.1687781 14.8878922,16.2755112 15.515049,16.2755112 C16.1422059,16.2755112 16.7452941,16.1687781 17.3078431,15.9724688 Z M21.765049,23.7338155 L20.0983824,23.7338155 L20.0983824,20.7383541 C20.0983824,20.394015 19.8240196,20.1149127 19.4856373,20.1149127 C19.1472549,20.1149127 18.8728922,20.394015 18.8728922,20.7383541 L18.8728922,23.7338155 L12.1572059,23.7338155 L12.1572059,20.7383541 C12.1572059,20.394015 11.8828431,20.1149127 11.5444608,20.1149127 C11.2060784,20.1149127 10.9317157,20.394015 10.9317157,20.7383541 L10.9317157,23.7338155 L9.26504902,23.7338155 L9.26504902,19.1221945 C9.26504902,17.7432918 10.3676961,16.6213965 11.7230392,16.6213965 L12.6269118,16.6213965 L15.0817647,19.1190524 C15.2014216,19.240798 15.3582353,19.3016459 15.515049,19.3016459 C15.6718627,19.3016459 15.8285784,19.240798 15.9483333,19.1190524 L18.4031863,16.6213965 L19.3070588,16.6213965 C20.6623529,16.6213965 21.765049,17.743192 21.765049,19.1221945 L21.765049,23.7338155 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span v-if="show" class="side-link" id="active">Users</span>
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
            Users
          </div>
        </div>
          <div class="main-header">
            <input class="user-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchUser" placeholder="Search for user">
            <div class="user-header-title">
              Filter by:
            </div>
            <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Company" class="company" v-model="user.company">
              <option value="Company">Company</option>
            </select>
            <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Choose Company" class="company2" v-model="user.chooseCompany">
              <option value="Choose Company">Choose Company</option>
            </select>
            <router-link :to="{ name: 'AddUser'}"><button id="users" type="submit">Add User</button></router-link>
          </div>
          <div class="main-container">
            <table class="users-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <th class="users-avatar-th"></th>
                  <th class="users-name-th">Name</th>
                  <th class="users-username-th">Username</th>
                  <th class="users-company-th">Company</th>
                  <th class="users-reseller-th">Reseller</th>
                  <th class="users-start-th">Start from</th>
                  <th class="users-role-th">Role</th>
                  <th class="users-option-th"></th>
                  <th class="users-option-th"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="users-avatar"><div class="user-avatar"></div></td>
                  <td class="users-name">Nellie Ferguson</td>
                  <td class="users-username">nellief</td>
                  <td class="users-company">San Marino</td>
                  <td class="users-reseller">Mason Carroll</td>
                  <td class="users-start">29 Apr 2018</td>
                  <td class="users-role">Default</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'EditUser' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr>
                  <td class="users-avatar"><div class="user-avatar"></div></td>
                  <td class="users-name">Frances Ruiz</td>
                  <td class="users-username">Peanut</td>
                  <td class="users-company">Latvia</td>
                  <td class="users-reseller">Connor Phillips</td>
                  <td class="users-start">20 Feb 2018</td>
                  <td class="users-role">Premium</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'EditUser' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr>
                  <td class="users-avatar"><div class="user-avatar"></div></td>
                  <td class="users-name">Keith Gardner</td>
                  <td class="users-username">Samson</td>
                  <td class="users-company">Grenada</td>
                  <td class="users-reseller">Tom Terry</td>
                  <td class="users-start">05 May 2018</td>
                  <td class="users-role">VIP</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'EditUser' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr>
                  <td class="users-avatar"><div class="user-avatar"></div></td>
                  <td class="users-name">Abbie Obrien</td>
                  <td class="users-username">Madison</td>
                  <td class="users-company">Pakistan</td>
                  <td class="users-reseller">Martha Duncan</td>
                  <td class="users-start">23 Sep 2018</td>
                  <td class="users-role">Default</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'EditUser' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr>
                  <td class="users-avatar"><div class="user-avatar"></div></td>
                  <td class="users-name">Willie Neal</td>
                  <td class="users-username">Jack</td>
                  <td class="users-company">India</td>
                  <td class="users-reseller">Ada Beck</td>
                  <td class="users-start">02 Jun 2018</td>
                  <td class="users-role">Premium</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'EditUser' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
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
                days: 'Last 30 days',
                company: 'Company',
                chooseCompany: 'Choose Company',
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
.reseller-menu{
	height: 210px;
	width: 228px;
	background-color: #FFFFFF;
	box-shadow: 0 10px 40px 0 rgba(0,0,0,0.1);
  display: inline-block;
  vertical-align: top;
  position: fixed;
  z-index: 1;
  float: right;
  margin-left: -220px;
  margin-top: -35px;
}
.reseller-menu-link{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  margin-left: 15px;
  margin-right: 15px;
}
.reseller-menu-link:first-child{
  margin-top: 35px;
}
.reseller-span{
  padding-top: 10px;
  padding-left: 15px;
}
.reseller-menu-add{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  background-color: #F8F9FE;
}
.reseller-menu-button{
  float: right;
  display: inline-block;
  margin-top: -5px;
  margin-right: -7px;
}
.svg-active path{
  fill: white;
}
.users-table{
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
.user-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
}
.users-avatar-th{
  width: 45px;
  padding-left: 8px;
  height: 37px;
}
.users-name-th{
  width: 204px;
  height: 37px;
}
.users-username-th{
  width: 169px;
  height: 37px;
}
.users-company-th{
  width: 182px;
  height: 37px;
}
.users-reseller-th{
  width: 190px;
  height: 37px;
}
.users-start-th{
  width: 120px;
  height: 37px;
}
.users-role-th{
  width: 80px;
  height: 37px;
}
.users-option-th{
  width: 54px;
  height: 37px;
}


.users-avatar{
  width: 45px;
  padding-left: 8px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.users-name{
  width: 204px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.users-username{
  width: 169px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.users-company{
  width: 182px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.users-reseller{
  width: 190px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.users-start{
  width: 120px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.users-role{
  width: 80px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.users-option{
  width: 54px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.product-control-info{
  width: 30px;
  height: 30px;
  float: left;
  margin-top: -10px;
  margin-left: 15px;
}
.user-header-title{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  float: left;
  margin-left: 20px;
  display: inline-block;
  margin-top: 30px;
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
.user-input-search{
  max-width: 26.3636363636%;
  width: 100%;
  height: 40px !important;
  padding-left: 40px;
  margin-left: 20px;
  margin-top: 20px;
  float: left;
}
button#users{
  	height: 40px;
    max-width: 11.8181818182%;
    width: 100%;
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
select{
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
}
.company{
    max-width: 13.6363636364%;
    width: 100%;
    height: 40px !important;
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
    float: left;
    margin-top: 20px;
    margin-left: 10px;
}
.company2{
    max-width: 16.3636363636%;
    width: 100%;
    height: 40px !important;
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
    float: left;
    margin-top: 20px;
    margin-left: 10px;
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
    .user-input-search{
      max-width: calc(100% - 80px);
    }
    .company, .company2{
      max-width: 30%;
      width: 100%;
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
