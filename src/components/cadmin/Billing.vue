<template>
    <div class="container">
      <company-navigation-component title="Billing"></company-navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Billing
          </div>
        </div>
        <div class="navbar">
          <div class="nav-link">
            <div id="active" class="nav-text">
              Invoices
              <div class="nav-line-bill"></div>
            </div>
          </div>
          <div class="nav-link">
            <router-link :to="{ name: 'CompanyBillingPayment' }">
              <div class="nav-text">
                Payment
              </div>
            </router-link>
          </div>
        </div>
        <div class="billing-main">
          <table class="billing-table" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th class="billing-active-th"></th>
                <th class="billing-id-th">Invoice #</th>
                <th class="billing-created-th">Created On</th>
                <th class="billing-created-by-th">Created By</th>
                <th class="billing-company-th">Company</th>
                <th class="billing-total-th">Total</th>
                <th class="billing-options-th"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="billing-active"><div class="billing-active-img"></div></td>
                <td class="billing-id">25964</td>
                <td class="billing-created">10-03-2018</td>
                <td class="billing-created-by"><div class="billing-avatar"></div> <div class="billing-name-fix">San Marino</div></td>
                <td class="billing-company">Appolo Inc.</td>
                <td class="billing-total"><b>$38</b></td>
                <td class="billing-options">
                  <div v-on:click="test = !test" class="billing-control-info"><img class="billing-control-box" src="@/assets/Icon/More.svg"></div>
                  <div v-if="test" class="billing-menu">
                    <div class="billing-menu-link">
                      <div v-on:click="test = !test" class="billing-menu-button">
                        <svg class="svg-blue" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <path d="M10,16 C9.44771525,16 9,15.5522847 9,15 C9,14.4477153 9.44771525,14 10,14 C10.5522847,14 11,14.4477153 11,15 C11,15.5522847 10.5522847,16 10,16 Z M15,16 C14.4477153,16 14,15.5522847 14,15 C14,14.4477153 14.4477153,14 15,14 C15.5522847,14 16,14.4477153 16,15 C16,15.5522847 15.5522847,16 15,16 Z M20,16 C19.4477153,16 19,15.5522847 19,15 C19,14.4477153 19.4477153,14 20,14 C20.5522847,14 21,14.4477153 21,15 C21,15.5522847 20.5522847,16 20,16 Z" id="path-1">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div class="billing-menu-link">
                      <router-link :to="{ name: 'InvoiceHistory'}">Download Excel Summary</router-link>
                    </div>
                    <div class="billing-menu-link">
                      <router-link :to="{ name: 'TransactionHistory'}">Download PDF</router-link>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="billing-active"><div class="billing-active-img"></div></td>
                <td class="billing-id">25964</td>
                <td class="billing-created">10-03-2018</td>
                <td class="billing-created-by"><div class="billing-avatar"></div> <div class="billing-name-fix">San Marino</div></td>
                <td class="billing-company">Appolo Inc.</td>
                <td class="billing-total"><b>$38</b></td>
                <td class="billing-options"><div class="billing-control-info"><img class="billing-control-box" src="@/assets/Icon/More.svg"></div></td>
              </tr>
              <tr>
                <td class="billing-active"><div class="billing-active-img"></div></td>
                <td class="billing-id">25964</td>
                <td class="billing-created">10-03-2018</td>
                <td class="billing-created-by"><div class="billing-avatar"></div> <div class="billing-name-fix">San Marino</div></td>
                <td class="billing-company">Appolo Inc.</td>
                <td class="billing-total"><b>$38</b></td>
                <td class="billing-options"><div class="billing-control-info"><img class="billing-control-box" src="@/assets/Icon/More.svg"></div></td>
              </tr>
              <tr>
                <td class="billing-active"><div class="billing-active-img"></div></td>
                <td class="billing-id">25964</td>
                <td class="billing-created">10-03-2018</td>
                <td class="billing-created-by"><div class="billing-avatar"></div> <div class="billing-name-fix">San Marino</div></td>
                <td class="billing-company">Appolo Inc.</td>
                <td class="billing-total"><b>$38</b></td>
                <td class="billing-options"><div class="billing-control-info"><img class="billing-control-box" src="@/assets/Icon/More.svg"></div></td>
              </tr>
              <tr>
                <td class="billing-active"><div class="billing-active-img"></div></td>
                <td class="billing-id">25964</td>
                <td class="billing-created">10-03-2018</td>
                <td class="billing-created-by"><div class="billing-avatar"></div> <div class="billing-name-fix">San Marino</div></td>
                <td class="billing-company">Appolo Inc.</td>
                <td class="billing-total"><b>$38</b></td>
                <td class="billing-options"><div class="billing-control-info"><img class="billing-control-box" src="@/assets/Icon/More.svg"></div></td>
              </tr>
              <tr>
                <td class="billing-active"><div class="billing-active-img"></div></td>
                <td class="billing-id">25964</td>
                <td class="billing-created">10-03-2018</td>
                <td class="billing-created-by"><div class="billing-avatar"></div> <div class="billing-name-fix">San Marino</div></td>
                <td class="billing-company">Appolo Inc.</td>
                <td class="billing-total"><b>$38</b></td>
                <td class="billing-options"><div class="billing-control-info"><img class="billing-control-box" src="@/assets/Icon/More.svg"></div></td>
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
import CompanyNavigationComponent from '@/components/CompanyNavigationComponent'

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
      CompanyNavigationComponent,
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
.billing-name-fix{
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
}
.billing-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
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
.billing-menu{
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
  margin-left: -235px;
  margin-top: -20px;
}
.billing-menu-link{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  margin-left: 15px;
  margin-right: 15px;
}
.billing-menu-link:first-child{
  margin-top: 25px;
}
.billing-span{
  padding-top: 10px;
  padding-left: 15px;
}
.billing-menu-add{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  background-color: #F8F9FE;
}
.billing-menu-button{
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
.billing-main{
  float: left;
  display: inline-block;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
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
a{
  text-decoration: none;
}
.nav-link{
  display: inline-block;
  float: left;
  height: 50px;
  width: 76px;
  margin-left: 20px;
}
.nav-line-bill{
  border-bottom: 2px solid #51A3F3;
  width: 72px;
  margin-top: 13px;
}

.svg-active path{
  fill: white;
}
.billing-table{
  border: none;
  max-width: 100%;
  width: 100%;
  margin-top: 20px;
}
.billing-active{
  width: 35px;
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
.billing-id{
  width: 221px;
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
.billing-created{
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
.billing-created-by{
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
.billing-company{
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
.billing-total{
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
.billing-options{
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

.billing-active-th{
  width: 35px;
  height: 37px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.billing-id-th{
  width: 221px;
  height: 37px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.billing-created-th{
  width: 234px;
  height: 37px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.billing-created-by-th{
  width: 225px;
  height: 37px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.billing-company-th{
  width: 200px;
  height: 37px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.billing-total-th{
  width: 140px;
  height: 37px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.billing-options-th{
  width: 45px;
  height: 37px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}

.billing-active-img{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #24E2B8;
  float: left;
  margin-left: 12px;
}
.billing-not-active{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #D2305B;
  float: left;
  margin-left: 3px;
}
.billing-control-info{
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
