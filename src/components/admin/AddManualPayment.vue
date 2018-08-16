<template>
    <div class="container">
      <navigation-component title="Resellers"></navigation-component>
      <div class="main-add">
        <div class="res-div">
          <div class="head-title">
            Resellers
          </div>
        </div>
        <router-link :to="{ name: 'Resellers'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Resellers
          </div>
        </router-link>
        <router-link :to="{ name: 'AddManualPayment'}"><button id="product" type="submit">Add Payment</button></router-link>
        <router-link :to="{ name: 'Resellers'}"><button id="cancel" type="submit">Cancel</button></router-link>
        <div class="add-reseller">
          <div class="payment-history-title">
            Payment History
          </div>
          <div class="payment-content">

          </div>
        </div>
      </div>
    </div>
</template>
<script>
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
.payment-content{
  background: #FFFFFF;
  width: calc(100% - 10px);
  height: 375px;
  border-radius: 4px;
}
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
.payment-history-title{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin-left: 5px;
  margin-bottom: 10px;
}

.payment-date-th{
  width: 189px;
  padding-left: 15px;
  height: 37px;
}
.payment-company-th{
  width: 263px;
  height: 37px;
}
.payment-description-th{
  width: 493px;
  height: 37px;
}
.payment-amount-th{
  width: 140px;
  height: 37px;
}

.payment-date{
  width: 189px;
  padding-left: 15px;
  height: 44px;
  background-color: #FFFFFF;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.payment-company{
  width: 263px;
  height: 44px;
  background-color: #FFFFFF;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.payment-description{
  width: 493px;
  height: 44px;
  background-color: #FFFFFF;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.payment-amount{
  width: 140px;
  height: 44px;
  background-color: #FFFFFF;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.add-reseller{
  float: left;
  display: inline-block;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
}
.main-add{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
@media only screen and (max-width: 990px) {
    .main-add{
      max-width: 100%;
    }
}
</style>
