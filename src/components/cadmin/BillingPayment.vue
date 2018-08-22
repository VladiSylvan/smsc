<template>
    <div class="container">
      <company-navigation-component title="Billing"></company-navigation-component>
      <div class="main-navi">
        <div class="res-div">
          <div class="head-title">
            Billing
          </div>
        </div>
        <div class="navbar">
          <div class="nav-link">
            <router-link :to="{ name: 'CompanyBilling' }">
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
      </div>
      <div class="main">
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
              <tr v-for="payment in payments">
                <td class="payment-id">{{ payment.invoice_number }}</td>
                <td class="payment-paid">{{ payment.paid_on | moment("MM-DD-YYYY") }}</td>
                <td class="payment-gateway"><div class="payment-avatar"></div> <div class="payment-name-fix">{{ payment.company_name }}</div></td>
                <td class="payment-method">{{ payment.method }}</td>
                <td class="payment-total"><b>${{ payment.amount }}</b></td>
                <td class="payment-options">
                  <div v-on:click="test = !test" class="payment-control-info"><img class="payment-control-box" src="@/assets/Icon/More.svg"></div>
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
                      <router-link :to="{ name: 'InvoiceHistory'}">Download Excel Summary</router-link>
                    </div>
                    <div class="billing-payment-menu-link">
                      <router-link :to="{ name: 'TransactionHistory'}">Download PDF</router-link>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
          payments: [],
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
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        }
    },
    mounted(){
      var app = this
      this.axios.all([
        this.axios.get('payment/list'),
      ]).then( this.axios.spread((payments) => {
        console.log(payments)
        app.payments = payments.data.payload.items
      })).catch(error => {
        console.log(error)
      })
    },
}
</script>
