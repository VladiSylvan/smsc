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
      </div>
      <div class="main">
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
              <tr v-for="invoice in invoices">
                <td class="billing-active"><div class="billing-active-img"></div></td>
                <td class="billing-id">{{ invoice.invoice_number }}</td>
                <td class="billing-created">{{ invoice.created_on | moment("MM-DD-YYYY") }}</td>
                <td class="billing-created-by"><div class="billing-avatar"></div> <div class="billing-name-fix">{{ invoice.created_by }}</div></td>
                <td class="billing-company">{{ invoice.company_name }}</td>
                <td class="billing-total"><b>${{ invoice.amount }}</b></td>
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
            </tbody>
          </table>
          <div class="pagination">
            <button type="button" id="previousPage" @click="previousPage()" disabled>Previous</button>
            <button type="button" id="nextPage" @click="nextPage()">Next</button>
          </div>
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
          totalPages: 0,
          pageNumber: 0,
          invoices: [],
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
        },
        getData(page = 0){
          this.axios.get('invoice/list?page=' + page).then(res => {
            this.invoices = res.data.payload.items
            this.totalPages = Math.floor(res.data.payload.total / res.data.payload.per_page)
            if(this.totalPages == 0){
              document.getElementById('nextPage').setAttribute('disabled', 'disabled')
            }
          }).catch(err => {
            console.log(err)
          })
        },
        nextPage(){
          this.pageNumber++;
          document.getElementById('previousPage').removeAttribute('disabled')
          if(this.pageNumber == this.totalPages){
            document.getElementById('nextPage').setAttribute('disabled', 'disabled')
          }
          this.getData(this.pageNumber)
        },
        previousPage(){
          this.pageNumber--
          if(this.pageNumber == 0){
            document.getElementById('previousPage').setAttribute('disabled', 'disabled')
          }
          if(this.pageNumber < this.totalPages){
            document.getElementById('nextPage').removeAttribute('disabled')
          }
          this.getData(this.pageNumber)
        }
    },
    mounted(){
      this.getData()
    },
}
</script>
