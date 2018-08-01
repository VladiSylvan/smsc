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
      <div class="main-add">
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
        <router-link :to="{ name: 'EditVendor'}"><button id="product" type="submit">Save Vendor</button></router-link>
        <router-link :to="{ name: 'Vendors'}"><button id="cancel" type="submit">Cancel</button></router-link>
        <div class="add-vendor">
          <div class="vendor-main">
            <div class="vendor-add-title">
              Edit Vendor Information
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Company Name
              </div>
              <input class="grid-input" type="text" v-model="user.companyName" placeholder="Company Name">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Contact
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Contact" class="grid-select" v-model="user.contact">
                <option value="Chad Sullivan">Chad Sullivan</option>
              </select>
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Type
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Type" class="grid-select" v-model="user.type">
                <option value="SMPP">SMPP</option>
              </select>
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Rate Email
              </div>
              <input class="grid-input" type="text" v-model="user.rateEmail" placeholder="Thomas">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Sales Email
              </div>
              <input class="grid-input" type="text" v-model="user.salesEmail" placeholder="Thomas">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                NOC Email
              </div>
              <input class="grid-input" type="text" v-model="user.nocEmail" placeholder="Thomas">
            </div>
          </div>
          <div class="vendor-second">
            <div class="grid-title">
              Change Photo
            </div>
            <div class="upload-edit">
              <div class="upload-image">
                <div class="upload-circle"></div>
              </div>
              <div class="upload-container">
                <div class="upload-title-edit">
                  Drop photo here or browse
                </div>
                <button class="upload-button-edit" type="submit">Upload photo</button>
              </div>
            </div>
          </div>
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
          isModalVisible: false,
          vendors: true,
                user:{
                companyName: 'Appolo Inc.',
                contact: 'Chad Sullivan',
                type: 'SMPP',
                rateEmail: 'Thomas',
                salesEmail: 'Thomas',
                nocEmail: 'Thomas',
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
.upload-circle{
  box-sizing: border-box;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #F0F1FA;
  margin: 5px;
}
.upload-image{
  border: 1px dashed #5171F3;
  border-radius: 50%;
  height: 90px;
  width: 90px;
  text-align: center;
  float: left;
  display: inline-block;
  margin-right: 15px;
}
.upload-edit{
  background-color: #FFFFFF;
  height: 220px;
}
.upload-container{
  float: left;
  display: inline-block;
  height: 90px;
  margin-top: 15px;
}
.upload-title-edit{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  text-align: center;
}
.upload-button-edit{
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
  width: 21.0672064777%;
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
  height: 40px !important;
  padding-left: 10px;
}
.grid-select{
  width: calc(100% + 13px);
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  height: 44px;
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
.add-vendor{
  float: left;
  display: inline-block;
  background-color: #FFFFFF;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
}
.vendor-main{
  display: inline-block;
  float: left;
  max-width: 66.8181818182%;
  width: 100%;
}
.vendor-second{
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
.vendor-add-title{
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
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
}
button#product{
  	height: 40px;
    width: 150px;
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
.main-add{
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
    .grid-1, .grid-2, .grid-3, .grid-4{
      width: calc(50% - 40px);
    }
    .vendor-main{
      max-width: 100%;
    }
    .vendor-second{
      margin-top: 0px;
      max-width: calc(100% - 30px);
      margin-left: 15px;
      margin-right: 15px;
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
    .main-add{
      max-width: 100%;
    }
}
@media only screen and (max-width: 390px) {
    .grid-1, .grid-2, .grid-3, .grid-4{
      width: calc(100% - 40px);
    }
}

</style>
