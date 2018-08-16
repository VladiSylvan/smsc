<template>
    <div class="container">
      <reseller-navigation-component title="Billing"></reseller-navigation-component>
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
            <router-link :to="{ name: 'ResellerBillingPayment' }">
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
          isModalVisible: false,
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
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
