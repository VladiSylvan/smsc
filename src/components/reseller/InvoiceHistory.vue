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
          <div class="invoice-title">
            Invoice History
          </div>
          <table class="invoice-table" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th class="invoice-created-th">Created</th>
                <th class="invoice-company-th">Company</th>
                <th class="invoice-paid-th">Paid</th>
                <th class="invoice-description-th">Description</th>
                <th class="invoice-amount-th">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="invoice-created">29 Dec 2018</td>
                <td class="invoice-company">Appolo Inc.</td>
                <td class="invoice-paid">07 Jul 2018</td>
                <td class="invoice-description">Payment ID#367192</td>
                <td class="invoice-amount">$74</td>
              </tr>
              <tr>
                <td class="invoice-created">15 Mar 2018</td>
                <td class="invoice-company">Universal Inc.</td>
                <td class="invoice-paid">04 Jan 2018</td>
                <td class="invoice-description">Payment ID#367192</td>
                <td class="invoice-amount">$38</td>
              </tr>
              <tr>
                <td class="invoice-created">29 Dec 2018</td>
                <td class="invoice-company">Appolo Inc.</td>
                <td class="invoice-paid">07 Jul 2018</td>
                <td class="invoice-description">Payment ID#367192</td>
                <td class="invoice-amount">$74</td>
              </tr>
              <tr>
                <td class="invoice-created">29 Dec 2018</td>
                <td class="invoice-company">Appolo Inc.</td>
                <td class="invoice-paid">07 Jul 2018</td>
                <td class="invoice-description">Payment ID#367192</td>
                <td class="invoice-amount">$74</td>
              </tr>
              <tr>
                <td class="invoice-created">29 Dec 2018</td>
                <td class="invoice-company">Appolo Inc.</td>
                <td class="invoice-paid">07 Jul 2018</td>
                <td class="invoice-description">Payment ID#367192</td>
                <td class="invoice-amount">$74</td>
              </tr>
              <tr>
                <td class="invoice-created">29 Dec 2018</td>
                <td class="invoice-company">Appolo Inc.</td>
                <td class="invoice-paid">07 Jul 2018</td>
                <td class="invoice-description">Payment ID#367192</td>
                <td class="invoice-amount">$74</td>
              </tr>
              <tr>
                <td class="invoice-created">29 Dec 2018</td>
                <td class="invoice-company">Appolo Inc.</td>
                <td class="invoice-paid">07 Jul 2018</td>
                <td class="invoice-description">Payment ID#367192</td>
                <td class="invoice-amount">$74</td>
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
.invoice-table{
  border: none;
  max-width: calc(100% - 10px);
  width: 100%;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  text-align: left;
}
.invoice-title{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin-left: 5px;
  margin-bottom: 10px;
}

.invoice-created-th{
  width: 189px;
  padding-left: 15px;
  height: 37px;
}
.invoice-company-th{
  width: 233px;
  height: 37px;
}
.invoice-paid-th{
  width: 230px;
  height: 37px;
}
.invoice-description-th{
  width: 293px;
  height: 37px;
}
.invoice-amount-th{
  width: 140px;
  height: 37px;
}

.invoice-created{
  width: 189px;
  padding-left: 15px;
  height: 44px;
  background-color: #FFFFFF;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.invoice-company{
  width: 233px;
  height: 44px;
  background-color: #FFFFFF;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.invoice-paid{
  width: 230px;
  height: 44px;
  background-color: #FFFFFF;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.invoice-description{
  width: 293px;
  height: 44px;
  background-color: #FFFFFF;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.invoice-amount{
  width: 140px;
  height: 44px;
  background-color: #FFFFFF;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.add-reseller{
  float: left;
  display: inline-block;
  width: calc(100% - 30px);
  margin-left: 20px;
  margin-right: 20px;
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
.main-add{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
@media only screen and (max-width: 750px) {
    .main-add{
      max-width: 100%;
    }
}
</style>
