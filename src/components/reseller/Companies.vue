<template>
    <div class="container">
      <reseller-navigation-component title="Companies"></reseller-navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Companies
          </div>
        </div>
          <div class="main-header">
            <input class="company-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchCompany" placeholder="Search for company">
            <div class="company-header-title">
              Filter by:
            </div>
            <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Reseller" class="reseller" v-model="user.reseller">
              <option value="Reseller">Reseller</option>
            </select>
            <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Choose Reseller" class="reseller2" v-model="user.chooseReseller">
              <option value="Choose Reseller">Choose Reseller</option>
            </select>
            <router-link :to="{ name: 'ResellerAddCompany'}"><button id="company" type="submit">Add Company</button></router-link>
          </div>
          <div class="main-container">
            <table class="companies-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <th class="company-name-th">Company Name</th>
                  <th class="company-balance-th">Balance</th>
                  <th class="company-email-th">NOC Email</th>
                  <th class="company-email-th">Rate Email</th>
                  <th class="company-email-th">Sales Email</th>
                  <th class="company-contact-th">Contact Person</th>
                  <th class="company-option-th"></th>
                  <th class="company-option-th"></th>
                  <th class="company-option-th"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="companies-title" colspan="9"><div class="company-title-my">My Companies</div></td>
                </tr>
                <tr>
                  <td class="company-name"><div class="company-avatar"></div> <div class="company-name-fix">Appolo Inc.</div></td>
                  <td class="company-balance">$805</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-contact-text">Eula Hernandez</td>
                  <td class="company-option"><div class="product-control-info"><router-link :to="{ name: 'ResellerEditCompany' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="company-option">
                    <div v-on:click="test = !test" class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div>
                    <div v-if="test" class="company-menu">
                      <div class="company-menu-link">
                        <router-link :to="{ name: 'ResellerPaymentHistory'}">Payment History</router-link>
                        <div v-on:click="test = !test" class="company-menu-button">
                          <svg class="svg-blue" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M10,16 C9.44771525,16 9,15.5522847 9,15 C9,14.4477153 9.44771525,14 10,14 C10.5522847,14 11,14.4477153 11,15 C11,15.5522847 10.5522847,16 10,16 Z M15,16 C14.4477153,16 14,15.5522847 14,15 C14,14.4477153 14.4477153,14 15,14 C15.5522847,14 16,14.4477153 16,15 C16,15.5522847 15.5522847,16 15,16 Z M20,16 C19.4477153,16 19,15.5522847 19,15 C19,14.4477153 19.4477153,14 20,14 C20.5522847,14 21,14.4477153 21,15 C21,15.5522847 20.5522847,16 20,16 Z" id="path-1">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <div class="company-menu-link">
                        <router-link :to="{ name: 'ResellerInvoiceHistory'}">Invoice History</router-link>
                      </div>
                      <div class="company-menu-link">
                        <router-link :to="{ name: 'ResellerTransactionHistory'}">Transaction History</router-link>
                      </div>
                      <div class="company-menu-add">
                        <div class="company-span">
                          Add Manual Payment
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="company-name"><div class="company-avatar"></div> <div class="company-name-fix">Indonesia</div></td>
                  <td class="company-balance">$776</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-contact-text">Ray Dennis</td>
                  <td class="company-option"><div class="product-control-info"><router-link :to="{ name: 'ResellerEditCompany' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div></td>
                </tr>
                <tr>
                  <td class="company-name"><div class="company-avatar"></div> <div class="company-name-fix">Dominica</div></td>
                  <td class="company-balance">$691</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-contact-text">Helen Schmidt</td>
                  <td class="company-option"><div class="product-control-info"><router-link :to="{ name: 'ResellerEditCompany' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div></td>
                </tr>
                <tr>
                  <td class="companies-title" colspan="9"><div class="company-title-all">All Companies</div></td>
                </tr>
                <tr>
                  <td class="company-name"><div class="company-avatar"></div> <div class="company-name-fix">Appolo Inc.</div></td>
                  <td class="company-balance">$805</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-contact-text">Herman Goodwin</td>
                  <td class="company-option"><div class="product-control-info"><router-link :to="{ name: 'ResellerEditCompany' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div></td>
                </tr>
                <tr>
                  <td class="company-name"><div class="company-avatar"></div> <div class="company-name-fix">Indonesia</div></td>
                  <td class="company-balance">$776</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-contact-text">Katie Guzman</td>
                  <td class="company-option"><div class="product-control-info"><router-link :to="{ name: 'ResellerEditCompany' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div></td>
                </tr>
                <tr>
                  <td class="company-name"><div class="company-avatar"></div> <div class="company-name-fix">Dominica</div></td>
                  <td class="company-balance">$691</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-email">julie...t@gmail.com</td>
                  <td class="company-contact-text">Glenn Holmes</td>
                  <td class="company-option"><div class="product-control-info"><router-link :to="{ name: 'ResellerEditCompany' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div></td>
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
import modal from '@/components/companyModal.vue'
import ResellerNavigationComponent from '@/components/ResellerNavigationComponent'

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
                days: 'Last 30 days',
                reseller: 'Reseller',
                chooseReseller: 'Choose Reseller',
            },

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
.company-title-my{
  color: #BDBFD8;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 30px;
  text-transform: uppercase;
  margin-left: 15px;
  margin-top: 7px;
}
.company-title-all{
  color: #BDBFD8;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 30px;
  text-transform: uppercase;
  margin-left: 15px;
  margin-top: 25px;
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
.company-menu{
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
.company-menu-link{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  margin-left: 15px;
  margin-right: 15px;
}
.company-menu-link:first-child{
  margin-top: 35px;
}
.company-span{
  padding-top: 10px;
  padding-left: 15px;
}
.company-menu-add{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  background-color: #F8F9FE;
}
.company-menu-button{
  float: right;
  display: inline-block;
  margin-top: -5px;
  margin-right: -7px;
}
.companies-table{
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
.company-name-fix{
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
}
.company-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.company-name-th{
  width: 185px;
  padding-left: 15px;
  height: 37px;
}
.company-balance-th{
  width: 90px;
  height: 37px;
}
.company-contact-th{
  width: 150px;
  height: 37px;
}
.company-email-th{
  width: 177px;
  height: 37px;
}
.company-option-th{
  width: 48px;
  height: 37px;
}

.companies-title{
  background-color: #ffffff;
}

.company-name{
  width: 185px;
  padding-left: 15px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.company-balance{
  width: 90px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.company-email{
  width: 177px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.company-contact{
  width: 150px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.company-contact-text{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.company-option{
  width: 48px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.product-control-info{
  width: 30px;
  height: 30px;
  float: left;
  margin-top: -10px;
  margin-left: 15px;
}
.company-header-title{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  float: left;
  margin-left: 20px;
  display: inline-block;
  margin-top: 30px;
}
.company-input-search{
  max-width: 26.3636363636%;
  width: 100%;
  height: 40px !important;
  padding-left: 40px;
  margin-left: 20px;
  margin-top: 20px;
  float: left;
}
button#company{
  	height: 40px;
    max-width: 11.8181818182%;
    width: 100%;
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
    float: right;
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
.reseller{
    max-width: 13.6363636364%;
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
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    float: left;
    margin-top: 20px;
    margin-left: 10px;
}
.reseller2{
    max-width: 16.3636363636%;
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
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    float: left;
    margin-top: 20px;
    margin-left: 10px;
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
@media only screen and (max-width: 1200px) {
    .navi-head{
      display: none;
    }
    .navi-logo{
      max-width: 40.8333333333%;
      width: 100%;
    }
    .company-input-search{
      max-width: calc(100% - 80px);
    }
    .reseller, .reseller2{
      max-width: 30%;
      width: 100%;
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
    .main{
      max-width: 100%;
    }
}
</style>
