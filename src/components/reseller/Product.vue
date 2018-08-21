<template>
    <div class="container">
      <reseller-navigation-component title="Product"></reseller-navigation-component>
      <div class="main-navi">
        <div class="res-div">
          <div class="head-title">
            Product
          </div>
        </div>
        <input class="product-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.search" placeholder="Search for product">
        <router-link :to="{ name: 'ResellerAddProduct'}"><button id="product" type="submit">Add Product</button></router-link>
      </div>
      <div class="main">
        <div class="product-main">
          <table class="product-table" cellspacing="0" cellpadding="0">
            <thead>
              <tr class="product-tr">
                <th class="product-table-active"></th>
                <th class="name">Product Name</th>
                <th class="reseller-created">Created On</th>
                <th class="reseller-created-by">Created By</th>
                <th class="reseller-routing">Routing</th>
                <th class="reseller-owned-by">Used By</th>
                <th class="options"></th>
                <th class="options"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="online">
                <td class="product-table-active"><div class="product-active"></div></td>
                <td class="name">Parkerport</td>
                <td class="reseller-created">10-03-2018</td>
                <td class="reseller-created-by"><div class="product-avatar"></div> <div class="product-name-fix">San Marino</div></td>
                <td class="reseller-routing"><div v-on:click="showModal()" class="routing-link">Routing</div></td>
                <td class="reseller-owned-by"><div class="product-avatar"></div> <div class="product-name-fix">Appolo Inc.</div></td>
                <td class="options"><router-link :to="{ name: 'ResellerEditProduct'}"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></router-link></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
              </tr>
              <tr class="online">
                <td class="product-table-active"><div class="product-active"></div></td>
                <td class="name">Blickview</td>
                <td class="reseller-created">08-19-2018</td>
                <td class="reseller-created-by"><div class="product-avatar"></div> <div class="product-name-fix">San Marino</div></td>
                <td class="reseller-routing"><div v-on:click="showModal()" class="routing-link">Routing</div></td>
                <td class="reseller-owned-by"><div class="product-avatar"></div> <div class="product-name-fix">Appolo Inc.</div></td>
                <td class="options"><router-link :to="{ name: 'ResellerEditProduct'}"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></router-link></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
              </tr>
              <tr class="offline">
                <td class="product-table-active"><div class="product-not-active"></div></td>
                <td class="name">Lake Woodrow</td>
                <td class="reseller-created">01-04-2018</td>
                <td class="reseller-created-by"><div class="product-avatar"></div> <div class="product-name-fix">San Marino</div></td>
                <td class="reseller-routing"><div v-on:click="showModal()" class="routing-link">Routing</div></td>
                <td class="reseller-owned-by"><div class="product-avatar"></div> <div class="product-name-fix">Appolo Inc.</div></td>
                <td class="options"><router-link :to="{ name: 'ResellerEditProduct'}"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></router-link></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
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
import modal from '@/components/ProductModal.vue'
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
