<template>
    <div class="container">
      <navigation-component title="Product"></navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Product
          </div>
        </div>
        <input class="product-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.search" placeholder="Search for product">
        <router-link :to="{ name: 'AddProduct'}"><button id="product" type="submit">Add Product</button></router-link>
        <div class="product-main">
          <table class="product-table" cellspacing="0" cellpadding="0">
            <thead>
              <tr class="product-tr">
                <th class="product-table-active"></th>
                <th class="name">Product Name</th>
                <th class="product-created">Created On</th>
                <th class="created-by">Created By</th>
                <th class="owned-by">Owned By</th>
                <th class="options"></th>
                <th class="options"></th>
                <th class="options"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product, index in products" class="online">
                <td class="product-table-active"><div class="product-active"></div></td>
                <td class="name">{{ product.product_name }}</td>
                <td class="created">10-03-2018</td>
                <td class="created-by"><div class="product-avatar"></div> <div class="product-name-fix">San Marino</div></td>
                <td class="owned-by"><div class="product-avatar"></div> <div class="product-name-fix">{{ product.reseller_name }}</div></td>
                <td class="options"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/DID.svg"></div></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                <td class="options"><div class="product-control-info"><img v-on:click="productDelete(product.product_uuid, index)" class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
              </tr>
              <!-- <tr class="offline">
                <td class="product-table-active"><div class="product-not-active"></div></td>
                <td class="name">Lake Woodrow</td>
                <td class="created">01-04-2018</td>
                <td class="created-by"><div class="product-avatar"></div> <div class="product-name-fix">San Marino</div></td>
                <td class="owned-by"><div class="product-avatar"></div> <div class="product-name-fix">Appolo Inc.</div></td>
                <td class="options"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/DID.svg"></div></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
              </tr> -->
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
          products: [],
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
    mounted(){
      var app = this
      this.axios.all([
        this.axios.get('product/list'),
        this.axios.get('user')
      ]).then( this.axios.spread((products) => {
        console.log(products)
        app.products = products.data.payload.items
      })).catch(error => {
        console.log(error)
      })
    },
    methods:{
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        },
        productDelete(value, index){
          var app = this
          event.preventDefault();
          this.axios.delete('product/' + value).then( res => {
              this.$router.push('/sys/product')
              console.log(product)
              this.product.splice(index, 1)
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
