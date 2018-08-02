<template>
    <div class="container">
      <navigation-component title="Product"></navigation-component>
      <div class="main-add">
        <div class="res-div">
          <div class="head-title">
            Product
          </div>
        </div>
        <router-link :to="{ name: 'Product'}">
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
        <router-link :to="{ name: 'AddProduct'}"><button id="product" type="submit">Add Product</button></router-link>
        <router-link :to="{ name: 'Product'}"><button id="cancel" type="submit">Cancel</button></router-link>
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
                  <td class="add-product-icon"></td>
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
                  <td class="add-product-icon">
                    <img class="delete-image" src="@/assets/Icon/Close.svg">
                  </td>
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
                  <td class="add-product-icon">
                    <img class="delete-image" src="@/assets/Icon/Close.svg">
                  </td>
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
                  <td class="add-product-icon">
                    <img class="delete-image" src="@/assets/Icon/Close.svg">
                  </td>
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
          <div class="product-page-vendor">
            <div v-if="vendors" class="vendor-title">
              Vendors for AT & T
            </div>
            <div v-if="!vendors" class="vendor-title">
              Vendors for China Mobile
            </div>
            <table v-if="vendors" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>
                  <td class="vendor-select">
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Vendor" class="vendor" v-model="vendor.vendorName1">
                      <option value="Vendor BB">Vendor BB</option>
                    </select>
                  </td>
                  <td class="vendor-input">
                    <input class="product-input-vendor" type="text" v-model="vendor.vendorRate1" placeholder="Vendor">
                  </td>
                  <td class="vendor-icon">
                    <img class="delete-vendor-image" src="@/assets/Icon/Close.svg">
                  </td>
                </tr>
                <tr>
                  <td class="vendor-select">
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
import NavigationComponent from '@/components/NavigationComponent'

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
      NavigationComponent,
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
.vendor-select{
  width: 250px;
  padding-right: 20px;
}
.vendor-input{
  width: 120px;
}
.vendor-icon{
  width: 30px;
}
.add-product-country{
  width: 150px;
  padding-left: 15px;
  padding-right: 15px;
}
.add-product-operator{
  width: 170px;
  padding-right: 15px;
}
.add-product-sell-rate{
  width: 140px;
}
.add-product-icon{
  width: 40px;
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
  float: left;
  max-width: 58.4112149533%;
  width: 100%;
}
.product-page-vendor{
  float: left;
  max-width: 41.5887850467%;
  width: 100%;
  background-color: #F8F9FE;
  height: 458px;
}
.delete-image{
  margin-top: -10px;
  margin-left: 5px;
}
.delete-vendor-image{
  display: inline-block;
  vertical-align: top;
  margin-left: 15px;
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
  max-width: 90.0142601538%;
  width: 100%;
  margin-bottom: 20px;
  height: 36px;
  padding-left: 10px;
}
.product-input-sell-rate{
  max-width: 150px;
  margin-right: 10px;
  margin-bottom: 10px;
  height: 36px;
  width: 100%;
}
.product-input-vendor{
  max-width: 120px;
  width: 100%;
  height: 36px;
  margin-top: 5px;
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
    max-width: 180px;
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
    margin-top: 5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    margin-bottom: 10px;
}
.operator{
    max-width: 205px;
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
    margin-top: 5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    margin-bottom: 10px;
}
.vendor{
    max-width: 245px;
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
    .res-div{
      display: inline-block;
    }
    .grid-1, .grid-2, .grid-3, .grid-4{
      width: calc(50% - 40px);
    }
    .company-main{
      max-width: 100%;
    }
    .company-second{
      margin-top: 0px;
      max-width: calc(100% - 30px);
      margin-left: 15px;
      margin-right: 15px;
    }
}
@media only screen and (max-width: 1000px) {
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
