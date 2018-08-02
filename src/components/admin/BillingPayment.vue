<template>
    <div class="container">
      <navigation-component title="Billing"></navigation-component>
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
          test: false,
          isModalVisible: false,
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            },

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
}
@media only screen and (max-width: 750px) {
    .main{
      max-width: 100%;
    }
}
</style>
