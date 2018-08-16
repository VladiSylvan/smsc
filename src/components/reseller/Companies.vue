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
.main{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
@media only screen and (max-width: 990px) {
    .main{
      max-width: 100%;
    }
}
</style>
