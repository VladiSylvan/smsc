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
            Billing
          </div>
        </div>
        <div class="navi-user">
          <div v-if="popup" class="user-menu">
            <div v-on:click="popup = !popup" class="username">
              Linnie Weaver
            </div>
            <div v-on:click="popup = !popup" class="user-circle"><span id="avatar">A</span></div>
            <img class="popup-image-box" src="@/assets/Icon/Users.svg">
            <span id="popup-link">Profile</span>
            <img class="popup-image-box" src="@/assets/Icon/Settings.svg">
            <span id="popup-link">Settings</span>
            <div class="popup-title">
              Switch to
            </div>
            <div class="popup-image-box">
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
                      <g id="Color-/-Dark-4" mask="url(#mask-2)" fill="#51A3F3">
                          <rect id="Rectangle" x="0" y="0" width="30" height="30"></rect>
                      </g>
                  </g>
              </svg>
          </div>
            <span id="popup-link-active">System Admin</span>
            <img class="popup-image-box" src="@/assets/Icon/Reseller.svg">
            <span id="popup-link">Reseller Portal</span>
            <img class="popup-image-box" src="@/assets/Icon/Companies.svg">
            <span id="popup-link">Appolo Inc.</span>
            <div class="popup-logout">
              <img class="popup-image-box" src="@/assets/Icon/Arrow/Right.svg">
              <span id="popup-link">Log out</span>
            </div>
          </div>
          <div v-on:click="popup = !popup" class="username">
            Linnie Weaver
          </div>
          <div v-on:click="popup = !popup" class="user-circle"><span id="avatar">A</span></div>
        </div>
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
        <li id="active">
          <router-link :to="{ name: 'Billing'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M24.2624044,8.95795211 L9.82234973,8.95795211 L8.99054645,7.0429662 C8.90540984,6.84697183 8.73005464,6.70241127 8.5184153,6.6536 L5.83961749,6.03628732 C5.47240437,5.95140282 5.10464481,6.17458592 5.01830601,6.53430141 C4.93185792,6.89396338 5.1595082,7.25410704 5.52677596,7.33872394 L7.86885246,7.87853803 L13.8646448,21.6829211 C13.6789617,22.0041014 13.5722951,22.3747887 13.5722951,22.769507 C13.5722951,23.9894141 14.5856284,24.9819099 15.8310929,24.9819099 C17.076612,24.9819099 18.0899454,23.9894676 18.0899454,22.769507 C18.0899454,22.4630451 18.0259016,22.1710338 17.9104372,21.9054085 L20.3700546,21.9054085 C20.2545902,22.1709803 20.1905464,22.4629915 20.1905464,22.769507 C20.1905464,23.9894141 21.2039344,24.9819099 22.4495082,24.9819099 C23.6949727,24.9819099 24.7082514,23.9894676 24.7082514,22.769507 C24.7082514,21.549493 23.6949727,20.5570507 22.4495082,20.5570507 L14.8647541,20.5673803 L13.929235,18.4135296 L24.262459,18.4135296 C24.6397268,18.4135296 24.9455191,18.1139718 24.9455191,17.7445155 L24.9455191,9.6269662 C24.9454645,9.25750986 24.6396721,8.95795211 24.2624044,8.95795211 Z M22.4508743,21.8957746 C22.9438251,21.8957746 23.3434426,22.2871211 23.3434426,22.7699352 C23.3434426,23.2526958 22.9438798,23.6440958 22.4508743,23.6440958 C21.9579235,23.6440958 21.5583607,23.2526958 21.5583607,22.7699352 C21.5583607,22.2871211 21.9579235,21.8957746 22.4508743,21.8957746 Z M15.8345355,21.8957746 C16.3274863,21.8957746 16.7271038,22.2871211 16.7271038,22.7699352 C16.7271038,23.2526958 16.3274863,23.6440958 15.8345355,23.6440958 C15.3415847,23.6440958 14.9420219,23.2526958 14.9420219,22.7699352 C14.9420219,22.2871211 15.3416393,21.8957746 15.8345355,21.8957746 Z M23.5793443,13.0167268 L19.0518033,13.0167268 C18.6745902,13.0167268 18.3687432,13.3162845 18.3687432,13.6857408 C18.3687432,14.0551972 18.6745902,14.3547549 19.0518033,14.3547549 L23.5793443,14.3547549 L23.5793443,17.0755014 L13.3481421,17.0755014 L10.4034426,10.2959803 L23.5793443,10.2959803 L23.5793443,13.0167268 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span v-if="show" class="side-link" id="active">Billing</span>
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
            Billing
          </div>
        </div>
        <div class="navbar">
          <div class="nav-link">
            <router-link :to="{ name: 'Billing' }">
              <div class="nav-text">
                Invoices
              </div>
            </router-link>
          </div>
          <div class="nav-link">
            <div id="active" class="nav-text">
              Payment
              <div class="nav-line-pay"></div>
            </div>
          </div>
        </div>
        <div class="billing-main">
          <table class="payment-table" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th class="payment-id-th">Payment #</th>
                <th class="payment-paid-th">Paid On</th>
                <th class="payment-gateway-th">Gateway</th>
                <th class="payment-method-th">Method</th>
                <th class="payment-total-th">Total</th>
                <th class="payment-options-th"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="payment-id">25964</td>
                <td class="payment-paid">10-03-2018</td>
                <td class="payment-gateway"><div class="payment-avatar"></div> <div class="payment-name-fix">San Marino</div></td>
                <td class="payment-method">Wire</td>
                <td class="payment-total"><b>$4</b></td>
                <td class="payment-options">
                  <div v-on:click="test = !test" class="billing-control-info"><img class="billing-control-box" src="@/assets/Icon/More.svg"></div>
                  <div v-if="test" class="billing-payment-menu">
                    <div class="billing-payment-menu-link">
                      <div v-on:click="test = !test" class="billing-payment-menu-button">
                        <svg class="svg-blue" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <path d="M10,16 C9.44771525,16 9,15.5522847 9,15 C9,14.4477153 9.44771525,14 10,14 C10.5522847,14 11,14.4477153 11,15 C11,15.5522847 10.5522847,16 10,16 Z M15,16 C14.4477153,16 14,15.5522847 14,15 C14,14.4477153 14.4477153,14 15,14 C15.5522847,14 16,14.4477153 16,15 C16,15.5522847 15.5522847,16 15,16 Z M20,16 C19.4477153,16 19,15.5522847 19,15 C19,14.4477153 19.4477153,14 20,14 C20.5522847,14 21,14.4477153 21,15 C21,15.5522847 20.5522847,16 20,16 Z" id="path-1">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div class="billing-payment-menu-link">
                      <router-link :to="{ name: 'BillingPayment'}">Download Excel Summary</router-link>
                    </div>
                    <div class="billing-payment-menu-link">
                      <router-link :to="{ name: 'BillingPayment'}">Download PDF</router-link>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="payment-id">25964</td>
                <td class="payment-paid">10-03-2018</td>
                <td class="payment-gateway"><div class="payment-avatar"></div> <div class="payment-name-fix">San Marino</div></td>
                <td class="payment-method">Paypal</td>
                <td class="payment-total"><b>$19</b></td>
                <td class="payment-options"><div class="payment-control-info"><img class="payment-control-box" src="@/assets/Icon/More.svg"></div></td>
              </tr>
              <tr>
                <td class="payment-id">25964</td>
                <td class="payment-paid">10-03-2018</td>
                <td class="payment-gateway"><div class="payment-avatar"></div> <div class="payment-name-fix">San Marino</div></td>
                <td class="payment-method">ACH</td>
                <td class="payment-total"><b>$80</b></td>
                <td class="payment-options"><div class="payment-control-info"><img class="payment-control-box" src="@/assets/Icon/More.svg"></div></td>
              </tr>
              <tr>
                <td class="payment-id">25964</td>
                <td class="payment-paid">10-03-2018</td>
                <td class="payment-gateway"><div class="payment-avatar"></div> <div class="payment-name-fix">San Marino</div></td>
                <td class="payment-method">Wire</td>
                <td class="payment-total"><b>$4</b></td>
                <td class="payment-options"><div class="payment-control-info"><img class="payment-control-box" src="@/assets/Icon/More.svg"></div></td>
              </tr>
              <tr>
                <td class="payment-id">25964</td>
                <td class="payment-paid">10-03-2018</td>
                <td class="payment-gateway"><div class="payment-avatar"></div> <div class="payment-name-fix">San Marino</div></td>
                <td class="payment-method">Paypal</td>
                <td class="payment-total"><b>$19</b></td>
                <td class="payment-options"><div class="payment-control-info"><img class="payment-control-box" src="@/assets/Icon/More.svg"></div></td>
              </tr>
              <tr>
                <td class="payment-id">25964</td>
                <td class="payment-paid">10-03-2018</td>
                <td class="payment-gateway"><div class="payment-avatar"></div> <div class="payment-name-fix">San Marino</div></td>
                <td class="payment-method">ACH</td>
                <td class="payment-total"><b>$80</b></td>
                <td class="payment-options"><div class="payment-control-info"><img class="payment-control-box" src="@/assets/Icon/More.svg"></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>
<script>
import CommitChart from '@/components/auth/CommitChart'
import BarChart from '@/components/auth/BarChart'
import BarChart2 from '@/components/auth/BarChart2'
import modal from '@/components/modal.vue'

export default {
    name: 'app',
    data () {
        return {
          show: true,
          width: '60px',
          transitionName: 'fade',
          popup: false,
          test: false,
          isModalVisible: false,
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
      modal
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
.payment-name-fix{
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
}
.payment-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.billing-main{
  float: left;
  display: inline-block;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
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
.billing-payment-menu{
	height: 140px;
	width: 250px;
	border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 10px 40px 0 rgba(0,0,0,0.1);
  display: inline-block;
  vertical-align: top;
  position: fixed;
  z-index: 1;
  float: right;
  margin-left: -205px;
  margin-top: -54px;
}
.billing-payment-menu-link{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  margin-left: 15px;
  margin-right: 15px;
}
.billing-payment-menu-link:first-child{
  margin-top: 25px;
}
.billing-payment-span{
  padding-top: 10px;
  padding-left: 15px;
}
.billing-payment-menu-add{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  background-color: #F8F9FE;
}
.billing-payment-menu-button{
  float: right;
  display: inline-block;
  margin-top: -5px;
}
.navbar{
  height: 50px;
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: inset 0 1px 0 0 #F8F9FE;
}
.nav-text{
  color: #BDBFD8;
  font-family: "Circular Std";
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  text-align: center;
  margin-top: 15px;
}
.nav-text#active{
  color: #51A3F3;
  font-weight: 500;
}
.nav-link{
  display: inline-block;
  float: left;
  height: 50px;
  width: 76px;
  margin-left: 20px;
}
.nav-line-pay{
  border-bottom: 2px solid #51A3F3;
  width: 76px;
  margin-top: 13px;
}

.svg-active path{
  fill: white;
}
.payment-table{
  border: none;
  max-width: 100%;
  width: 100%;
  margin-top: 20px;
}
.payment-id-th{
  width: 241px;
  padding-left: 15px;
  height: 37px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.payment-paid-th{
  width: 234px;
  height: 37px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.payment-gateway-th{
  width: 225px;
  height: 37px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.payment-method-th{
  width: 200px;
  height: 37px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.payment-total-th{
  width: 140px;
  height: 37px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.payment-options-th{
  width: 45px;
  height: 37px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}

.payment-id{
  width: 241px;
  padding-left: 15px;
  height: 50px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.payment-paid{
  width: 234px;
  height: 50px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.payment-gateway{
  width: 225px;
  height: 50px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.payment-method{
  width: 200px;
  height: 50px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.payment-total{
  width: 140px;
  height: 50px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.payment-options{
  width: 45px;
  height: 50px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.payment-control-info{
  width: 30px;
  height: 30px;
  float: left;
}
.side a{
  text-decoration: none;
  color: #55616E;
}
.side#active a{
  text-decoration: none;
  color: #FFFFFF;
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
.payment-con-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
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


.user-menu{
	height: auto;
	width: 228px;
	background-color: #FFFFFF;
	box-shadow: 0 10px 40px 0 rgba(0,0,0,0.1);
  vertical-align: top;
  position: fixed;
  z-index: 999999;
  float: right;
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
.user-circle{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 10px;
  margin-bottom: 15px;
  margin-right: 15px;
  float: left;
}
.username{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 15px;
  line-height: 20px;
  text-align: left;
  margin-top: 20px;
  float: left;
  margin-left: 63px;
}
.navi-head{
  max-width: 560px;
  display: inline-block;
  width: auto;
}
.navi-user{
  max-width: 228px;
  float: right;
  display: inline-block;
  width: auto;
}
.popup-logout{
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-bottom: 15px;
}
#popup-link{
  	height: 20px;
    width: 158px;
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 20px;
    display: inline-block;
    margin-top: 15px;
    cursor: pointer;
}
#popup-link-active{
  	height: 20px;
    width: 158px;
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 20px;
    display: inline-block;
    margin-top: 15px;
    color: #51A3F3;
}
.popup-image-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 10px;
}
.popup-title{
  	height: 30px;
    width: 198px;
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
@media only screen and (max-width: 390px) {
    .username{
      display: none;
    }
}
</style>
