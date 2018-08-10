<template>
    <div class="container">
      <navigation-component title="Companies"></navigation-component>
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
            <router-link :to="{ name: 'AddCompany'}"><button id="company" type="submit">Add Company</button></router-link>
          </div>
          <div class="main-container">
            <table class="companies-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <th class="company-name-th">Company Name</th>
                  <th class="company-balance-th">Balance</th>
                  <th class="company-pay-th">Prepay/Postpay</th>
                  <th class="company-contact-th">Contact Person</th>
                  <th class="company-resellers-th">Resellers</th>
                  <th class="company-option-th"></th>
                  <th class="company-option-th"></th>
                  <th class="company-option-th"></th>
                  <th class="company-option-th"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="companies-title" colspan="9"><div class="company-title-my">My Companies</div></td>
                </tr>
                <tr v-for="company in companies" v-if="user.user_id == company.user_id">
                  <td class="company-name"><div class="company-avatar"></div> <div class="company-name-fix">{{ company.company_name }}</div></td>
                  <td class="company-balance">${{ company.balance }}</td>
                  <td class="company-pay">{{ company.credit }}</td>
                  <td class="company-contact-text">{{ company.contact.name }}</td>
                  <td class="company-resellers">{{ company.reseller_name }}</td>
                  <td class="company-option"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/Reseller.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><router-link :to="{ name: 'EditCompany', params: { id: company.company_uuid }}"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="company-option"><div class="product-control-info"><img v-on:click="companyDelete()" class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="company-option">
                    <div v-on:click="test = company.company_uuid" class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div>
                    <div v-if="test === company.company_uuid" class="company-menu">
                      <div class="company-menu-link">
                        <router-link :to="{ name: 'PaymentHistory'}">Payment History</router-link>
                        <div v-on:click="test = ''" class="company-menu-button">
                          <svg class="svg-blue" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M10,16 C9.44771525,16 9,15.5522847 9,15 C9,14.4477153 9.44771525,14 10,14 C10.5522847,14 11,14.4477153 11,15 C11,15.5522847 10.5522847,16 10,16 Z M15,16 C14.4477153,16 14,15.5522847 14,15 C14,14.4477153 14.4477153,14 15,14 C15.5522847,14 16,14.4477153 16,15 C16,15.5522847 15.5522847,16 15,16 Z M20,16 C19.4477153,16 19,15.5522847 19,15 C19,14.4477153 19.4477153,14 20,14 C20.5522847,14 21,14.4477153 21,15 C21,15.5522847 20.5522847,16 20,16 Z" id="path-1">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <div class="company-menu-link">
                        <router-link :to="{ name: 'InvoiceHistory'}">Invoice History</router-link>
                      </div>
                      <div class="company-menu-link">
                        <router-link :to="{ name: 'TransactionHistory'}">Transaction History</router-link>
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
                  <td class="companies-title" colspan="9"><div class="company-title-all">All Companies</div></td>
                </tr>
                <tr v-for="company, index in companies">
                  <td class="company-name"><div class="company-avatar"></div> <div class="company-name-fix">{{ company.company_name }}</div></td>
                  <td class="company-balance">${{ company.balance }}</td>
                  <td class="company-pay">{{ company.credit }}</td>
                  <td class="company-contact-text">{{ company.contact.name }}</td>
                  <td class="company-resellers">{{ company.reseller_name }}</td>
                  <td class="company-option"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/Reseller.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><router-link :to="{ name: 'EditCompany', params: { id: company.company_uuid }}"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="company-option"><div class="product-control-info"><img v-on:click="companyDelete(company.company_uuid, index)" class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="company-option">
                    <div v-on:click="test = company.company_uuid" class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div>
                    <div v-if="test === company.company_uuid" class="company-menu">
                      <div class="company-menu-link">
                        <router-link :to="{ name: 'PaymentHistory'}">Payment History</router-link>
                        <div v-on:click="test = ''" class="company-menu-button">
                          <svg class="svg-blue" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M10,16 C9.44771525,16 9,15.5522847 9,15 C9,14.4477153 9.44771525,14 10,14 C10.5522847,14 11,14.4477153 11,15 C11,15.5522847 10.5522847,16 10,16 Z M15,16 C14.4477153,16 14,15.5522847 14,15 C14,14.4477153 14.4477153,14 15,14 C15.5522847,14 16,14.4477153 16,15 C16,15.5522847 15.5522847,16 15,16 Z M20,16 C19.4477153,16 19,15.5522847 19,15 C19,14.4477153 19.4477153,14 20,14 C20.5522847,14 21,14.4477153 21,15 C21,15.5522847 20.5522847,16 20,16 Z" id="path-1">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <div class="company-menu-link">
                        <router-link :to="{ name: 'InvoiceHistory'}">Invoice History</router-link>
                      </div>
                      <div class="company-menu-link">
                        <router-link :to="{ name: 'TransactionHistory'}">Transaction History</router-link>
                      </div>
                      <div class="company-menu-add">
                        <div class="company-span">
                          Add Manual Payment
                        </div>
                      </div>
                    </div>
                  </td>
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
import NavigationComponent from '@/components/NavigationComponent'

export default {
    name: 'app',
    data () {
        return {
          show: true,
          width: '60px',
          transitionName: 'fade',
          popup: false,
          test: '',
          del: false,
          companies: [],
          user: [],
          isModalVisible: false,
                user:{
                system: 'Overall system',
                days: 'Last 30 days',
                reseller: 'Reseller',
                chooseReseller: 'Choose Reseller',
            },

        }
    },
    mounted(){
      var app = this
      this.axios.all([
        this.axios.get('company/list'),
        this.axios.get('user')
      ]).then( this.axios.spread((companies, user) => {
        console.log(companies)
        app.companies = companies.data.payload.items
        app.user = user.data.payload
      })).catch(error => {
        console.log(error)
      })
      // this.axios.get('company/list').then( res => {
      //   app.companies = res.data.payload.items
      //   console.log(app.companies)
      // }).catch(err => {
      //   console.log(err)
      // })
    },
    components:{
      modal,
      NavigationComponent,
    },
    methods:{
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        },
        companyDelete(value, index){
          var app = this
          event.preventDefault();
          this.axios.delete('company/' + value).then( res => {
              // this.$router.push('/sys/companies')
              this.companies.splice(index, 1)
          }).catch( err => {
              var app = this

              app.errorMsg = err.response.data.error.message
              app.error = true
              console.log(err.response)
          })
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
  cursor: pointer;
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
  width: 184px;
  padding-left: 15px;
  height: 37px;
}
.company-balance-th{
  width: 90px;
  height: 37px;
}
.company-pay-th{
  width: 281px;
  height: 37px;
}
.company-contact-th{
  width: 150px;
  height: 37px;
}
.company-resellers-th{
  width: 180px;
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
  width: 184px;
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
.company-pay{
  width: 281px;
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
.company-resellers{
  width: 180px;
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
@media only screen and (max-width: 1200px) {
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
