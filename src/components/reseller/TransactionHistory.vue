<template>
    <div class="container">
      <reseller-navigation-component title="Companies"></reseller-navigation-component>
      <div class="main-add">
        <div class="res-div">
          <div class="head-title">
            Companies
          </div>
        </div>
        <router-link :to="{ name: 'ResellerCompanies'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Companies
          </div>
        </router-link>
        <div class="add-reseller">
          <div class="transaction-title">
            Transaction History
          </div>
          <table class="transaction-table" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th class="transaction-date-th">Date</th>
                <th class="transaction-type-th">Type</th>
                <th class="transaction-description-th">Description</th>
                <th class="transaction-company-th">Company</th>
                <th class="transaction-amount-th">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="transaction-date">29 Dec 2018</td>
                <td class="transaction-type">Monthly payment</td>
                <td class="transaction-description">Payment ID#367192</td>
                <td class="transaction-company">Appolo Inc</td>
                <td class="transaction-amount">$78</td>
              </tr>
              <tr>
                <td class="transaction-date">29 Dec 2018</td>
                <td class="transaction-type">DID fee</td>
                <td class="transaction-description">Payment ID#367192</td>
                <td class="transaction-company">Appolo Inc</td>
                <td class="transaction-amount">$78</td>
              </tr>
              <tr>
                <td class="transaction-date">29 Dec 2018</td>
                <td class="transaction-type">Yearly payment</td>
                <td class="transaction-description">Payment ID#367192</td>
                <td class="transaction-company">Appolo Inc</td>
                <td class="transaction-amount">$78</td>
              </tr>
              <tr>
                <td class="transaction-date">29 Dec 2018</td>
                <td class="transaction-type">Monthly payment</td>
                <td class="transaction-description">Payment ID#367192</td>
                <td class="transaction-company">Appolo Inc</td>
                <td class="transaction-amount">$78</td>
              </tr>
              <tr>
                <td class="transaction-date">29 Dec 2018</td>
                <td class="transaction-type">DID fee</td>
                <td class="transaction-description">Payment ID#367192</td>
                <td class="transaction-company">Appolo Inc</td>
                <td class="transaction-amount">$78</td>
              </tr>
              <tr>
                <td class="transaction-date">29 Dec 2018</td>
                <td class="transaction-type">Yearly payment</td>
                <td class="transaction-description">Payment ID#367192</td>
                <td class="transaction-company">Appolo Inc</td>
                <td class="transaction-amount">$78</td>
              </tr>
              <tr>
                <td class="transaction-date">29 Dec 2018</td>
                <td class="transaction-type">DID fee</td>
                <td class="transaction-description">Payment ID#367192</td>
                <td class="transaction-company">Appolo Inc</td>
                <td class="transaction-amount">$78</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>
<script>
import modal from '@/components/modal.vue'
import ResellerNavigationComponent from '@/components/ResellerNavigationComponent'

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
                sellRate: '0.001',
                company: 'Choose Company',
                country: 'Select',
                state: 'Select State',
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
      ResellerNavigationComponent,
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
.transaction-table{
  border: none;
  max-width: calc(100% - 10px);
  width: 100%;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  text-align: left;
}
.transaction-title{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin-left: 5px;
  margin-bottom: 10px;
}

.transaction-date-th{
  width: 201px;
  padding-left: 15px;
  height: 37px;
}
.transaction-type-th{
  width: 170px;
  height: 37px;
}
.transaction-description-th{
  width: 397px;
  height: 37px;
}
.transaction-company-th{
  width: 177px;
  height: 37px;
}
.transaction-amount-th{
  width: 140px;
  height: 37px;
}

.transaction-date{
  width: 201px;
  padding-left: 15px;
  height: 44px;
  background-color: #FFFFFF;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.transaction-type{
  width: 170px;
  height: 44px;
  background-color: #FFFFFF;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.transaction-description{
  width: 397px;
  height: 44px;
  background-color: #FFFFFF;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.transaction-company{
  width: 177px;
  height: 44px;
  background-color: #FFFFFF;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.transaction-amount{
  width: 140px;
  height: 44px;
  background-color: #FFFFFF;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
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
}
.add-reseller{
  float: left;
  display: inline-block;
  width: calc(100% - 30px);
  margin-left: 20px;
  margin-right: 20px;
}
.side a{
  text-decoration: none;
  color: #55616E;
}
.side#active a{
  text-decoration: none;
  color: #FFFFFF;
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
}
@media only screen and (max-width: 750px) {
    .main-add{
      max-width: 100%;
    }
}
</style>
