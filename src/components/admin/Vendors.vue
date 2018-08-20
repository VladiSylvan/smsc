<template>
    <div class="container">
      <navigation-component title="Vendors"></navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Vendors
          </div>
        </div>
        <div v-if="successMsg != ''">
          <h5 style="color: green; text-align: center;">
            {{ successMsg }}
          </h5>
        </div>
        <div v-if="this.$route.params.successMsg != null">
          <h5 style="color: green; text-align: center;">
            {{ this.$route.params.successMsg }}
          </h5>
        </div>
        <input class="vendor-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.search" placeholder="Search for vendor">
        <router-link :to="{ name: 'AddVendor'}"><button id="product" type="submit">Add Vendor</button></router-link>
        <div class="vendors-main">
          <table class="vendors-table" cellspacing="0" cellpadding="0">
            <thead>
              <tr class="vendors-table-th">
                <th class="vendor-active"></th>
                <th class="vendor-company">Company Name</th>
                <th class="vendor-contact">Contact Name</th>
                <th class="vendor-type">Type</th>
                <th class="vendor-person">Contact Person</th>
                <th class="vendor-noc">NOC Email</th>
                <th class="vendor-sales">Sales Email</th>
                <th class="vendor-rate">Rate Email</th>
                <th class="vendor-options"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="vendor, index in vendors" class="online">
                <td class="vendor-active"><div class="vendor-active-circle"></div></td>
                <td v-for="company in companies" v-if="company.company_uuid == vendor.company_uuid" class="vendor-company"><div class="vendor-avatar"></div> <div class="vendor-name-fix">{{ company.company_name }}</div></td>
                <td class="vendor-contact">{{ vendor.vendor_name }}</td>
                <td class="vendor-type">{{ vendor.vendor_type }}</td>
                <td class="vendor-person">{{ vendor.contact_person }}</td>
                <td class="vendor-noc">{{ vendor.noc_email }}</td>
                <td class="vendor-sales">{{ vendor.sales_email }}</td>
                <td class="vendor-rate">{{ vendor.rate_email }}</td>
                <td class="vendor-options"><router-link :to="{ name: 'VendorsRate'}"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Reporting.svg"></div></router-link></td>
                <td class="vendor-option"><div class="product-control-info"><router-link :to="{ name: 'EditVendor', params: { id: vendor.vendor_uuid }}"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                <td class="vendor-option"><div class="product-control-info"><img v-on:click="vendorDelete(vendor.vendor_uuid, index)" class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
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
          successMsg: '',
          companies: [],
          vendors: [],
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            },

        }
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
        vendorDelete(value, index){
          var app = this
          event.preventDefault();
          this.axios.delete('vendor/' + value).then( res => {
              this.vendors.splice(index, 1)
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
    mounted(){
      var app = this
      this.axios.all([
        this.axios.get('vendor/list'),
        this.axios.get('company/list'),
      ]).then( this.axios.spread((vendors, companies) => {
        console.log(vendors)
        app.vendors = vendors.data.payload.items
        app.companies = companies.data.payload.items
      })).catch(error => {
        console.log(error)
      })
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
