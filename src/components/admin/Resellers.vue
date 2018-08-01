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
            Resellers
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
        <li id="active">
          <router-link :to="{ name: 'Resellers'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M24.302168,8.01773234 L5.67750678,8.01773234 C5.30336043,8.01773234 5,8.32983271 5,8.71475836 L5,22.2642751 C5,22.649145 5.30336043,22.9613011 5.67750678,22.9613011 L24.302168,22.9613011 C24.6762602,22.9613011 24.9796748,22.649145 24.9796748,22.2642751 L24.9796748,8.71475836 C24.9796748,8.32988848 24.6762602,8.01773234 24.302168,8.01773234 Z M23.6246612,21.5673048 L6.35501355,21.5673048 L6.35501355,9.41178439 L23.6246612,9.41178439 L23.6246612,21.5673048 Z M8.1303523,12.695223 L14.6344173,16.8181041 C14.7433604,16.8871933 14.8665583,16.92171 14.9898103,16.92171 C15.1130623,16.92171 15.2362602,16.8871933 15.3452033,16.8181041 L21.8492683,12.695223 C22.1678049,12.4933086 22.2669919,12.0638848 22.0707317,11.736171 C21.8744715,11.4084572 21.4569648,11.3064126 21.1385366,11.5083829 L14.9898103,15.4059294 L8.84113821,11.5083829 C8.52271003,11.3065799 8.10531165,11.4084015 7.90894309,11.736171 C7.71262873,12.063829 7.81176152,12.4933086 8.1303523,12.695223 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span v-if="show" class="side-link" id="active">Resellers</span>
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
            Resellers
          </div>
        </div>
          <input class="reseller-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchReseller" placeholder="Search for reseller">
          <router-link :to="{ name: 'AddReseller'}"><button id="reseller" type="submit">Add Reseller</button></router-link>
          <div class="main-container">
            <table class="resellers-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <th class="reseller-name-th">Name</th>
                  <th class="reseller-balance-th">Balance</th>
                  <th class="reseller-clients-th">Clients</th>
                  <th class="reseller-member-since-th">Member Since</th>
                  <th class="reseller-option-th"></th>
                  <th class="reseller-option-th"></th>
                  <th class="reseller-option-th"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="!del">
                  <td class="reseller-name"><div class="reseller-avatar"></div> <div class="reseller-name-fix">San Marino</div></td>
                  <td class="reseller-balance"><b>$38</b></td>
                  <td class="reseller-clients">12</td>
                  <td class="reseller-member-since">10-03-2018</td>
                  <td class="reseller-option"><div class="product-control-info"><router-link :to="{ name: 'EditReseller'}"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="reseller-option"><div v-on:click="del = !del" class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="reseller-option">
                    <div v-on:click="test = !test" class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div>
                    <div v-if="test" class="reseller-menu">
                      <div class="reseller-menu-link">
                        <router-link :to="{ name: 'PaymentHistory'}">Payment History</router-link>
                        <div v-on:click="test = !test" class="reseller-menu-button">
                          <svg class="svg-blue" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M10,16 C9.44771525,16 9,15.5522847 9,15 C9,14.4477153 9.44771525,14 10,14 C10.5522847,14 11,14.4477153 11,15 C11,15.5522847 10.5522847,16 10,16 Z M15,16 C14.4477153,16 14,15.5522847 14,15 C14,14.4477153 14.4477153,14 15,14 C15.5522847,14 16,14.4477153 16,15 C16,15.5522847 15.5522847,16 15,16 Z M20,16 C19.4477153,16 19,15.5522847 19,15 C19,14.4477153 19.4477153,14 20,14 C20.5522847,14 21,14.4477153 21,15 C21,15.5522847 20.5522847,16 20,16 Z" id="path-1">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <div class="reseller-menu-link">
                        <router-link :to="{ name: 'InvoiceHistory'}">Invoice History</router-link>
                      </div>
                      <div class="reseller-menu-link">
                        <router-link :to="{ name: 'TransactionHistory'}">Transaction History</router-link>
                      </div>
                      <div class="reseller-menu-add">
                        <div class="reseller-span">
                          Add Manual Payment
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr v-if="del">
                  <td class="reseller-name-del"><div class="reseller-avatar"></div> <div class="reseller-name-fix">San Marino</div></td>
                  <td class="reseller-balance-del"><b>$38</b></td>
                  <td class="reseller-clients-del">12</td>
                  <td class="reseller-options-del" colspan="4">
                    <div v-on:click="del = !del" class="undo-undo">
                      Undo
                    </div>
                    <div v-on:click="del = !del" class="undo-image">
                      <svg class="svg-blue" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M24.8570085,16.0184789 L23.2528205,13.9230423 C23.0359829,13.6396056 22.7180342,13.4770986 22.3805983,13.4770986 C22.0431624,13.4770986 21.7252137,13.6396901 21.5083761,13.9229577 L19.904188,16.0184789 C19.6905983,16.2976901 19.7461538,16.6951268 20.0284615,16.9063944 C20.3108547,17.1175775 20.712735,17.0625634 20.9264957,16.7836056 L21.8009402,15.6411549 C21.4876923,19.5962535 18.1326496,22.7198028 14.0535043,22.7198028 C9.76837607,22.7198028 6.28205128,19.2727606 6.28205128,15.035831 C6.28205128,10.7988169 9.76837607,7.35177465 14.0535897,7.35177465 C14.9361538,7.35177465 15.8017094,7.49678873 16.6264103,7.78267606 C16.9605128,7.8984507 17.3263248,7.72453521 17.4434188,7.39428169 C17.5605983,7.06402817 17.3847009,6.70233803 17.0505983,6.58647887 C16.0893162,6.2531831 15.0809402,6.08416901 14.0535897,6.08416901 C9.06145299,6.08416901 5,10.0998592 5,15.035831 C5,19.9717183 9.06145299,23.9874085 14.0535897,23.9874085 C18.7886325,23.9874085 22.6857265,20.3745634 23.0747009,15.7906479 L23.8347863,16.7836056 C23.9609402,16.9481408 24.1524786,17.0349296 24.3464103,17.0348451 C24.4811111,17.0348451 24.6170085,16.9930141 24.732735,16.9063944 C25.0150427,16.6951268 25.0705983,16.2976901 24.8570085,16.0184789 Z" id="path-1">
                        </path>
                      </svg>
                    </div>
                    <div class="undo-title">
                      Reseller Removed
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="reseller-name"><div class="reseller-avatar"></div> <div class="reseller-name-fix">Henrietta McDaniel</div></td>
                  <td class="reseller-balance"><b>$38</b></td>
                  <td class="reseller-clients">70</td>
                  <td class="reseller-member-since">10-03-2018</td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div></td>
                </tr>
                <tr>
                  <td class="reseller-name"><div class="reseller-avatar"></div> <div class="reseller-name-fix">Mollie Garrett</div></td>
                  <td class="reseller-balance"><b>$38</b></td>
                  <td class="reseller-clients">19</td>
                  <td class="reseller-member-since">10-03-2018</td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div></td>
                </tr>
                <tr>
                  <td class="reseller-name"><div class="reseller-avatar"></div> <div class="reseller-name-fix">Martha Vasquez</div></td>
                  <td class="reseller-balance"><b>$38</b></td>
                  <td class="reseller-clients">81</td>
                  <td class="reseller-member-since">10-03-2018</td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div></td>
                </tr>
                <tr>
                  <td class="reseller-name"><div class="reseller-avatar"></div> <div class="reseller-name-fix">Stanley Burgess</div></td>
                  <td class="reseller-balance"><b>$38</b></td>
                  <td class="reseller-clients">78</td>
                  <td class="reseller-member-since">10-03-2018</td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div></td>
                </tr>
                <tr>
                  <td class="reseller-name"><div class="reseller-avatar"></div> <div class="reseller-name-fix">Leona Duncan</div></td>
                  <td class="reseller-balance"><b>$38</b></td>
                  <td class="reseller-clients">27</td>
                  <td class="reseller-member-since">10-03-2018</td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div></td>
                </tr>
                <tr>
                  <td class="reseller-name"><div class="reseller-avatar"></div> <div class="reseller-name-fix">Alex Elliott</div></td>
                  <td class="reseller-balance"><b>$38</b></td>
                  <td class="reseller-clients">26</td>
                  <td class="reseller-member-since">10-03-2018</td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="reseller-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div></td>
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
.reseller-name-fix{
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
}
.reseller-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
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
.resellers-table{
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
.reseller-name-th{
  width: 189px;
  padding-left: 15px;
  height: 37px;
}
.reseller-balance-th{
  width: 171px;
  height: 37px;
}
.reseller-clients-th{
  width: 190px;
  height: 37px;
}
.reseller-member-since-th{
  width: 383px;
  height: 37px;
}
.reseller-option-th{
  width: 49px;
  height: 37px;
}

.reseller-name{
  width: 189px;
  padding-left: 15px;
  height: 50px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.reseller-balance{
  width: 171px;
  height: 50px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.reseller-clients{
  width: 190px;
  height: 50px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.reseller-member-since{
  width: 383px;
  height: 50px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.reseller-option{
  width: 49px;
  height: 50px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}

.reseller-name-del{
  width: 169px;
  padding-left: 15px;
  background-color: #F0F1FA;
}
.reseller-balance-del{
  width: 171px;
  background-color: #F0F1FA;
}
.reseller-clients-del{
  width: 190px;
  background-color: #F0F1FA;
}
.reseller-member-since-del{
  width: 303px;
  background-color: #F0F1FA;
}
.reseller-options-del{
  width: 149px;
  background-color: #F0F1FA;
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
.reseller-input-search{
  width: 302px;
  height: 40px !important;
  padding-left: 40px;
  margin-left: 20px;
  margin-top: 20px;
}
button#reseller{
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
