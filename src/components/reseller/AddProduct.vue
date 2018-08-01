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
        <li id="active">
          <router-link :to="{ name: 'ResellerProduct'}">
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
        <li>
          <router-link :to="{ name: 'ResellerFilters'}">
            <img class="image-box" src="@/assets/Icon/Filters.svg">
            <span v-if="show" class="side-link">Filters</span>
          </router-link>
        </li>
      </ul>
      </transition>
      <div class="main-add">
        <router-link :to="{ name: 'ResellerProduct'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Products
          </div>
        </router-link>
        <router-link :to="{ name: 'ResellerAddProduct'}"><button id="product" type="submit">Add Product</button></router-link>
        <router-link :to="{ name: 'ResellerProduct'}"><button id="cancel" type="submit">Cancel</button></router-link>
        <div class="product-add-main">
          <div class="add-product">
            <div class="product-add-title">
              Add Product Information
            </div>
            <div class="product-input-name">
              Product Name
            </div>
            <input class="product-input" type="text" v-model="user.productName" placeholder="Product Name">
            <table class="add-product-table" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>
                  <td class="add-product-country"><div class="product-input-name">Country</div></td>
                  <td class="add-product-operator"><div class="product-input-name">Operator</div></td>
                  <td class="add-product-sell-rate"><div class="product-input-name">Sell Rate</div></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="add-product-country">
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Country" class="country" v-model="user.country">
                      <option value="China">China</option>
                    </select>
                  </td>
                  <td class="add-product-operator">
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Operator" class="operator" v-model="user.operator">
                      <option value="China Unicom">China Unicom</option>
                    </select>
                  </td>
                  <td class="add-product-sell-rate">
                    <input class="product-input-sell-rate" type="text" v-model="user.sellRate" placeholder="Sell Rate">
                  </td>
                  <td><img class="delete-image" src="@/assets/Icon/Close.svg"></td>
                </tr>
              </tbody>
              <tbody v-bind:class="{'active-table': !vendors}" v-on:click="vendors = false">
                <tr>
                  <td class="add-product-country"><div class="product-input-name">Country</div></td>
                  <td class="add-product-operator"><div class="product-input-name">Operator</div></td>
                  <td class="add-product-sell-rate"><div class="product-input-name">Sell Rate</div></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="add-product-country">
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Country" class="country" v-model="user2.country">
                      <option value="China">China</option>
                    </select>
                  </td>
                  <td class="add-product-operator">
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Operator" class="operator" v-model="user2.operator">
                      <option value="China Mobile">China Mobile</option>
                    </select>
                  </td>
                  <td class="add-product-sell-rate">
                    <input class="product-input-sell-rate" type="text" v-model="user2.sellRate" placeholder="Sell Rate">
                  </td>
                  <td><img class="delete-image" src="@/assets/Icon/Close.svg"></td>
                </tr>
              </tbody>
              <tbody v-bind:class="{'active-table': vendors}" v-on:click="vendors = true">
                <tr>
                  <td class="add-product-country"><div class="product-input-name">Country</div></td>
                  <td class="add-product-operator"><div class="product-input-name">Operator</div></td>
                  <td class="add-product-sell-rate"><div class="product-input-name">Sell Rate</div></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="add-product-country">
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Country" class="country" v-model="user3.country">
                      <option value="United States">United States</option>
                    </select>
                  </td>
                  <td class="add-product-operator">
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Operator" class="operator" v-model="user3.operator">
                      <option value="AT & T">AT & T</option>
                    </select>
                  </td>
                  <td class="add-product-sell-rate">
                    <input class="product-input-sell-rate" type="text" v-model="user3.sellRate" placeholder="Sell Rate">
                  </td>
                  <td><img class="delete-image" src="@/assets/Icon/Close.svg"></td>
                </tr>
              </tbody>
            </table>
            <div class="add-operator">
              <div class="operator-image">
                <img src="@/assets/Icon/Plus.svg">
              </div>
              <div class="operator-text">
                Add Operator
              </div>
            </div>
          </div>
          <div class="product-vendor">
            <div v-if="vendors" class="vendor-title">
              Vendors for AT & T
            </div>
            <div v-if="!vendors" class="vendor-title">
              Vendors for China Mobile
            </div>
            <table v-if="vendors">
              <tbody>
                <tr>
                  <td>
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Vendor" class="vendor" v-model="vendor.vendorName1">
                      <option value="Vendor BB">Vendor BB</option>
                    </select>
                  </td>
                  <td>
                    <input class="product-input-vendor" type="text" v-model="vendor.vendorRate1" placeholder="Vendor">
                  </td>
                  <td>
                    <img class="delete-vendor-image" src="@/assets/Icon/Close.svg">
                  </td>
                </tr>
                <tr>
                  <td>
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Vendor" class="vendor" v-model="vendor.vendorName2">
                      <option value="Vendor CC">Vendor CC</option>
                    </select>
                  </td>
                  <td>
                    <input class="product-input-vendor" type="text" v-model="vendor.vendorRate2" placeholder="Vendor">
                  </td>
                  <td>
                    <img class="delete-vendor-image" src="@/assets/Icon/Close.svg">
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="add-vendor">
              <div class="vendor-image">
                <img src="@/assets/Icon/Plus.svg">
              </div>
              <div v-if="vendors" class="vendor-text">
                Add Vendor for AT & T
              </div>
              <div v-if="!vendors" class="vendor-text">
                Add Vendor for China Mobile
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
                productName: 'Caroline',
                country: 'China',
                operator: 'China Unicom',
                sellRate: '0.001'
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
.vendor-title{
  color: #BDBFD8;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 30px;
  text-transform: uppercase;
  margin-top: 15px;
  margin-left: 15px;
}
.add-operator{
  height: 60px;
  display: inline-block;
}
.add-vendor{
  height: 60px;
  display: inline-block;
}
.operator-text{
  float: left;
  display: inline-block;
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  margin-top: 20px;
}
.vendor-text{
  float: left;
  display: inline-block;
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  margin-top: 20px;
}
.operator-image{
  float: left;
  display: inline-block;
  margin-top: 17px;
  margin-right: 7px;
}
.vendor-image{
  float: left;
  display: inline-block;
  margin-top: 17px;
  margin-right: 7px;
  margin-left: 15px;
}
.add-product-table{
  max-width: 100%;
  width: 100%;
}
.active-table{
	background-color: #F8F9FE;
}
.add-product-country{
  width: 190px;
  padding-left: 15px;
}
.add-product-operator{
  width: 215px;
}
.add-product-sell-rate{
  width: 150px;
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
.product-add-main{
  float: left;
  display: inline-block;
  background-color: #FFFFFF;
  width: calc(100% - 70px);
  margin-left: 20px;
  margin-right: 20px;
  padding: 15px;
}
.add-product{
  display: inline-block;
  float: left;
  max-width: 59.1818181818%;
  width: 100%;
}
.product-vendor{
  display: inline-block;
  float: left;
  max-width: calc(100% - 59.1818181818%);
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
.product-add-title{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 15px;
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
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
}
.product-input{
  max-width: 570px;
  width: 100%;
  margin-bottom: 20px;
  height: 36px;
  padding-left: 10px;
}
.product-input-sell-rate{
  width: 150px;
  margin-right: 10px;
  margin-bottom: 10px;
  height: 36px;
  padding-left: 10px;
}
.product-input-vendor{
  width: 120px;
  height: 36px;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  padding-left: 10px;
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
.country{
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
    margin-top: 5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    margin-bottom: 10px;
}
.operator{
    width: 205px !important;
    height: 40px !important;
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
    margin-bottom: 10px;
}
.vendor{
    width: 230px !important;
    height: 40px !important;
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
    margin-left: 15px;
    margin-bottom: 5px;
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
    .main-add{
      max-width: 100%;
    }
    .product-main-add{
      max-width: 100%;
    }
}
</style>
