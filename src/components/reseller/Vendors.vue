<template>
    <div class="container">
      <reseller-navigation-component title="Vendors"></reseller-navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Vendors
          </div>
        </div>
        <input class="vendor-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.search" placeholder="Search for vendor">
        <router-link :to="{ name: 'ResellerAddVendor'}"><button id="product" type="submit">Add Vendor</button></router-link>
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
              <tr class="online">
                <td class="vendor-active"><div class="vendor-active-circle"></div></td>
                <td class="vendor-company"><div class="vendor-avatar"></div> <div class="vendor-name-fix">Appolo Inc.</div></td>
                <td class="vendor-contact">Chad Sullivan</td>
                <td class="vendor-type">SMPP</td>
                <td class="vendor-person">Eula Hernandez</td>
                <td class="vendor-noc">tri…ue@yahoo.com</td>
                <td class="vendor-sales">tri…ue@yahoo.com</td>
                <td class="vendor-rate">tri…ue@yahoo.com</td>
                <td class="vendor-options"><router-link :to="{ name: 'ResellerEditVendor'}"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></router-link></td>
              </tr>
              <tr class="online">
                <td class="vendor-active"><div class="vendor-active-circle"></div></td>
                <td class="vendor-company"><div class="vendor-avatar"></div> <div class="vendor-name-fix">Appolo Inc.</div></td>
                <td class="vendor-contact">Herbert Williamson</td>
                <td class="vendor-type">SMPP</td>
                <td class="vendor-person">Eula Hernandez</td>
                <td class="vendor-noc">tri…ue@yahoo.com</td>
                <td class="vendor-sales">tri…ue@yahoo.com</td>
                <td class="vendor-rate">tri…ue@yahoo.com</td>
                <td class="vendor-options"><router-link :to="{ name: 'ResellerEditVendor'}"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></router-link></td>
              </tr>
              <tr class="online">
                <td class="vendor-active"><div class="vendor-active-circle"></div></td>
                <td class="vendor-company"><div class="vendor-avatar"></div> <div class="vendor-name-fix">Appolo Inc.</div></td>
                <td class="vendor-contact">Erik Adams</td>
                <td class="vendor-type">SMPP</td>
                <td class="vendor-person">Eula Hernandez</td>
                <td class="vendor-noc">tri…ue@yahoo.com</td>
                <td class="vendor-sales">tri…ue@yahoo.com</td>
                <td class="vendor-rate">tri…ue@yahoo.com</td>
                <td class="vendor-options"><router-link :to="{ name: 'ResellerEditVendor'}"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></router-link></td>
              </tr>
              <tr class="online">
                <td class="vendor-active"><div class="vendor-active-circle"></div></td>
                <td class="vendor-company"><div class="vendor-avatar"></div> <div class="vendor-name-fix">Appolo Inc.</div></td>
                <td class="vendor-contact">Rosie Collins</td>
                <td class="vendor-type">SMPP</td>
                <td class="vendor-person">Eula Hernandez</td>
                <td class="vendor-noc">tri…ue@yahoo.com</td>
                <td class="vendor-sales">tri…ue@yahoo.com</td>
                <td class="vendor-rate">tri…ue@yahoo.com</td>
                <td class="vendor-options"><router-link :to="{ name: 'ResellerEditVendor'}"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></router-link></td>
              </tr>
              <tr class="offline">
                <td class="vendor-active"><div class="vendor-not-active-circle"></div></td>
                <td class="vendor-company"><div class="vendor-avatar"></div> <div class="vendor-name-fix">Appolo Inc.</div></td>
                <td class="vendor-contact">Chad Sullivan</td>
                <td class="vendor-type">SMPP</td>
                <td class="vendor-person">Eula Hernandez</td>
                <td class="vendor-noc">tri…ue@yahoo.com</td>
                <td class="vendor-sales">tri…ue@yahoo.com</td>
                <td class="vendor-rate">tri…ue@yahoo.com</td>
                <td class="vendor-options"><router-link :to="{ name: 'ResellerEditVendor'}"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></router-link></td>
              </tr>
              <tr class="offline">
                <td class="vendor-active"><div class="vendor-not-active-circle"></div></td>
                <td class="vendor-company"><div class="vendor-avatar"></div> <div class="vendor-name-fix">Appolo Inc.</div></td>
                <td class="vendor-contact">George Fitzgerald</td>
                <td class="vendor-type">SMPP</td>
                <td class="vendor-person">Eula Hernandez</td>
                <td class="vendor-noc">tri…ue@yahoo.com</td>
                <td class="vendor-sales">tri…ue@yahoo.com</td>
                <td class="vendor-rate">tri…ue@yahoo.com</td>
                <td class="vendor-options"><router-link :to="{ name: 'ResellerEditVendor'}"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></router-link></td>
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
