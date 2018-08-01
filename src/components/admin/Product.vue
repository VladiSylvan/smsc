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
            Product
          </div>
        </div>
        <profile-component></profile-component>
      </nav>
      <transition name="fade">
      <ul v-bind:class="{'sidebar-hide': !show}" class="sidebar">
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
        <li id="active">
          <router-link :to="{ name: 'Product'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M23.4256131,9.45680858 L19.2124251,9.45680858 L19.2124251,8.68064356 C19.2124251,7.76533663 18.4892098,7.02064686 17.600109,7.02064686 L12.3855041,7.02064686 C11.4965123,7.02064686 10.773188,7.76528053 10.773188,8.68064356 L10.773188,9.45680858 L6.5600545,9.45680858 C5.69983651,9.45680858 5,10.1772607 5,11.0628317 L5,22.358462 C5,23.244033 5.69983651,23.9645413 6.5600545,23.9645413 L23.4255586,23.9645413 C24.2857766,23.9645413 24.9856131,23.244033 24.9856131,22.358462 L24.9856131,11.0628317 C24.9856676,10.1773168 24.2858856,9.45680858 23.4256131,9.45680858 Z M12.1356403,8.68064356 C12.1356403,8.53875248 12.2477929,8.42328713 12.3855586,8.42328713 L17.6001635,8.42328713 C17.7379292,8.42328713 17.8500817,8.53875248 17.8500817,8.68064356 L17.8500817,9.45680858 L12.1356403,9.45680858 L12.1356403,8.68064356 Z M6.56010899,10.8594488 L23.4256131,10.8594488 C23.5346049,10.8594488 23.6232698,10.9506766 23.6232698,11.0628317 L23.6232698,14.7432475 C21.5122071,15.5494851 18.3279564,16.0257096 14.9870845,16.0257096 C11.6535695,16.0257096 8.47367847,15.5511122 6.36239782,14.7475677 L6.36239782,11.0628317 C6.36245232,10.9506766 6.45111717,10.8594488 6.56010899,10.8594488 Z M23.4256131,22.561901 L6.56010899,22.561901 C6.45111717,22.561901 6.36245232,22.4706733 6.36245232,22.358462 L6.36245232,16.2335809 C8.29476839,16.8898482 10.8353134,17.3000363 13.6039782,17.4028218 C13.6038147,17.4109571 13.6028338,17.4188119 13.6028338,17.4270594 L13.6028338,17.7363696 C13.6028338,18.3162211 14.0610354,18.7879571 14.6243052,18.7879571 L15.3614714,18.7879571 C15.9247411,18.7879571 16.3829428,18.3162211 16.3829428,17.7363696 L16.3829428,17.4270594 C16.3829428,17.4188119 16.3818529,17.4107327 16.3817984,17.4024851 C19.1522071,17.298802 21.6923706,16.8874356 23.6233787,16.2298779 L23.6233787,22.3585182 C23.6232698,22.4706733 23.5346049,22.561901 23.4256131,22.561901 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span v-if="show" class="side-link" id="active">Product</span>
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
            Product
          </div>
        </div>
        <input class="product-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.search" placeholder="Search for product">
        <router-link :to="{ name: 'AddProduct'}"><button id="product" type="submit">Add Product</button></router-link>
        <div class="product-main">
          <table class="product-table" cellspacing="0" cellpadding="0">
            <thead>
              <tr class="product-tr">
                <th class="product-table-active"></th>
                <th class="name">Product Name</th>
                <th class="created">Created On</th>
                <th class="created-by">Created By</th>
                <th class="owned-by">Owned By</th>
                <th class="options"></th>
                <th class="options"></th>
                <th class="options"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="online">
                <td class="product-table-active"><div class="product-active"></div></td>
                <td class="name">Parkerport</td>
                <td class="created">10-03-2018</td>
                <td class="created-by"><div class="product-avatar"></div> <div class="product-name-fix">San Marino</div></td>
                <td class="owned-by"><div class="product-avatar"></div> <div class="product-name-fix">Appolo Inc.</div></td>
                <td class="options"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/DID.svg"></div></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
              </tr>
              <tr class="online">
                <td class="product-table-active"><div class="product-active"></div></td>
                <td class="name">Blickview</td>
                <td class="created">08-19-2018</td>
                <td class="created-by"><div class="product-avatar"></div> <div class="product-name-fix">San Marino</div></td>
                <td class="owned-by"><div class="product-avatar"></div> <div class="product-name-fix">Appolo Inc.</div></td>
                <td class="options"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/DID.svg"></div></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
              </tr>
              <tr class="offline">
                <td class="product-table-active"><div class="product-not-active"></div></td>
                <td class="name">Lake Woodrow</td>
                <td class="created">01-04-2018</td>
                <td class="created-by"><div class="product-avatar"></div> <div class="product-name-fix">San Marino</div></td>
                <td class="owned-by"><div class="product-avatar"></div> <div class="product-name-fix">Appolo Inc.</div></td>
                <td class="options"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/DID.svg"></div></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
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
.product-name-fix{
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
}
.product-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.product-main{
  float: left;
  display: inline-block;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
}
.svg-active path{
  fill: white;
}
.product-table{
  border: none;
  max-width: 100%;
  width: 100%;
  margin-top: 20px;
}
.product-tr{
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
  height: 44px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.offline{
  background-color: #F0F1FA;
  box-shadow: inset 0 -1px 0 0 rgba(189,191,216,0.36);
  height: 44px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.product-table-active{
  width: 18px;
}
.name{
  width: 169px;
}
.created{
  width: 334px;
}
.created-by{
  width: 227px;
}
.owned-by{
  width: 200px;
}
.options{
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
.product-search{
  width: 302px;
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
