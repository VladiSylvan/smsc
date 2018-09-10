<template>
    <div class="container">
      <navigation-component title="Companies"></navigation-component>
      <div class="main-navi">
        <div class="res-div">
          <div class="head-title">
            Companies
          </div>
        </div>
          <div class="main-header">
            <div v-if="this.$route.params.successMsg != null">
              <h5 style="color: green; text-align: center;">
                {{ this.$route.params.successMsg }}
              </h5>
            </div>
            <div v-if="successMsg != null">
              <h5 style="color: green; text-align: center;">
                {{ successMsg }}
              </h5>
            </div>
            <input class="company-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="search" placeholder="Search for company">
            <div class="company-header-title">
              Filter by:
            </div>
            <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Reseller" class="reseller" v-model="reseller">
              <option value="Reseller">Reseller</option>
            </select>
            <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Choose Reseller" class="reseller2" v-model="filter">
              <option value="">Choose Reseller</option>
              <option v-for="reseller in resellers" :value="reseller.reseller_uuid">{{ reseller.reseller_name}}</option>
            </select>
            <router-link :to="{ name: 'AddCompany'}"><button id="company" type="submit">Add Company</button></router-link>
          </div>
        </div>
        <div class="main">
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
                  <th class="company-option-th"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="companies-title" colspan="9"><div class="company-title-my">My Companies</div></td>
                </tr>
                <tr v-for="myCompany, index in myCompanies">
                  <td class="company-name"><div class="company-avatar"><img v-if="myCompany.contact.logo_file_uuid != null" class="image-resize" :src="getLogo(myCompany.contact.logo_file_uuid)"></div><div class="company-name-fix">{{ myCompany.company_name }}</div></td>
                  <td class="company-balance">${{ myCompany.balance }}</td>
                  <td class="company-pay">{{ myCompany.credit }}</td>
                  <td class="company-contact-text">{{ myCompany.contact.first_name }} {{ myCompany.contact.last_name }}</td>
                  <td class="company-resellers">{{ myCompany.reseller_name }}</td>
                  <td class="company-option">
                    <div class="product-control-info">
                      <img v-on:click="activate(myCompany.company_uuid)" class="control-box" src="@/assets/Icon/Plus.svg" v-if="!myCompany.is_active">
                      <img v-on:click="deactivate(myCompany.company_uuid)" class="control-box" src="@/assets/Icon/Close.svg" v-if="myCompany.is_active">
                    </div>
                  </td>
                  <td class="company-option"><div class="product-control-info"><img v-on:click="confirmDialog(myCompany.company_uuid)" class="control-box" src="@/assets/Icon/Reseller.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><router-link :to="{ name: 'EditCompany', params: { id: myCompany.company_uuid }}"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="company-option"><div class="product-control-info"><img v-on:click="companyDelete(myCompany.company_uuid, myCompany.company_name, index)" class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="company-option">
                    <div v-on:click="test = myCompany.company_uuid" class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div>
                    <div v-if="test === myCompany.company_uuid" class="company-menu">
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
                  <td class="companies-title" colspan="10"><div class="company-title-all">All Companies</div></td>
                </tr>
                <tr v-for="company, index in companies">
                  <td class="company-name"><div class="company-avatar"><img v-if="company.contact.logo_file_uuid != null" class="image-resize" :src="getLogo(company.contact.logo_file_uuid)"></div> <div class="company-name-fix">{{ company.company_name }}</div></td>
                  <td class="company-balance">${{ company.balance }}</td>
                  <td class="company-pay">{{ company.credit }}</td>
                  <td class="company-contact-text">{{ company.contact.first_name }} {{ company.contact.last_name }}</td>
                  <td class="company-resellers">{{ company.reseller_name }}</td>
                  <td class="company-option">
                    <div class="product-control-info">
                      <img v-on:click="activate(company.company_uuid)" class="control-box" src="@/assets/Icon/Plus.svg" v-if="!company.is_active">
                      <img v-on:click="deactivate(company.company_uuid)" class="control-box" src="@/assets/Icon/Close.svg" v-if="company.is_active">
                    </div>
                  </td>
                  <td class="company-option"><div class="product-control-info"><img v-on:click="confirmDialog(company.company_uuid)" class="control-box" src="@/assets/Icon/Reseller.svg"></div></td>
                  <td class="company-option"><div class="product-control-info"><router-link :to="{ name: 'EditCompany', params: { id: company.company_uuid }}"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="company-option"><div class="product-control-info"><img v-on:click="companyDelete(company.company_uuid, company.company_name, index)" class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
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
            <div class="pagination">
              <button type="button" id="previousPage" @click="previousPage()" disabled>Previous</button>
              <button type="button" id="nextPage" @click="nextPage()">Next</button>
            </div>
          </div>
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
          search: '',
          filter: '',
          companies: [],
          resellers: [],
          myCompanies: [],
          user: [],
          logo: [],
          successMsg: '',
          reseller: 'Reseller',
          isModalVisible: false,
          totalPages: 0,
          pageNumber: 0,
        }
    },
    mounted(){
      this.getData()
    },
    components:{
      modal,
      NavigationComponent,
    },
    watch: {
    search: function (val) {
      console.log('val')
      var app = this
      this.axios.all([
        this.axios.get('company/list?company_name=*' + val + '*'),
        this.axios.get('company/list?company_name=*' + val + '*'),
      ]).then( this.axios.spread((companies, myCompanies) => {
        app.companies = companies.data.payload.items
        app.myCompanies = myCompanies.data.payload.items
      })).catch(error => {
        console.log(error)
      })
    },
    filter: function (val) {
      var app = this
      this.axios.all([
        this.axios.get('company/list?reseller_uuid=' + val),
        this.axios.get('company/list?reseller_uuid=' + val),
      ]).then( this.axios.spread((companies, myCompanies) => {
        app.companies = companies.data.payload.items
        app.myCompanies = myCompanies.data.payload.items
      })).catch(error => {
        console.log(error)
      })
    },
  },
    methods:{
        getData(page = 0){
          var app = this
          this.axios.all([
            this.axios.get('company/list?page=' + page),
            this.axios.get('company/list?is_created_by_admin=true'),
            this.axios.get('user'),
            this.axios.get('reseller/list')
          ]).then( this.axios.spread((companies, myCompanies, user, resellers) => {
            app.companies = companies.data.payload.items
            app.myCompanies = myCompanies.data.payload.items
            app.user = user.data.payload
            app.resellers = resellers.data.payload.items

            this.totalPages = Math.floor(companies.data.payload.total / companies.data.payload.per_page)
            if(this.totalPages == 0){
              document.getElementById('nextPage').setAttribute('disabled', 'disabled')
            }
          })).catch(error => {
            console.log(error)
          })
        },
        activate(id){
          var update = {
            is_active: true
          }
          this.axios.patch('company/' + id, update).then(res => {
            this.getData()
          }).catch(err => {
            console.log(err)
          })
        },
        deactivate(id){
          var update = {
            is_active: false
          }
          this.axios.patch('company/' + id, update).then(res => {
            this.getData()
          }).catch(err => {
            console.log(err)
          })
        },
        confirmDialog(value){
          var r = confirm("Are you sure want send email?");
          if(r == true){
            var app = this
            event.preventDefault();
            this.axios.post('company/' + value + '/send_confirm').then( res => {
                this.successMsg = 'Mail has been sent successfully'
                console.log(res)
            }).catch( err => {
                var app = this

                app.errorMsg = 'Failed to send an email'
                app.error = true
                console.log(err.response)
            })
          }
        },
        companyDelete(value, name, index){
          var app = this
          var r = confirm("Do you really want to delete " + name + " company?");
          if(r == true){
            this.axios.delete('company/' + value).then( res => {
                // this.$router.push('/sys/companies')
                this.companies.splice(index, 1)
                this.$route.params.successMsg = null
                this.successMsg = 'OK'
            }).catch( err => {
                var app = this

                app.errorMsg = err.response.data.error.message
                app.error = true
                console.log(err.response)
            })
          }
        },
        getLogo(value){
          var logo = "http://88.198.219.62/api_smsc/v1/file/" + value
          return logo
        }
    },
}
</script>
