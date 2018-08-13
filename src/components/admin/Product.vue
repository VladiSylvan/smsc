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
                <th class="created">Created On</th>
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
.product-name-fix{
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
}
.product-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.product-main{
  float: left;
  display: inline-block;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
}
.product-table{
  border: none;
  max-width: 100%;
  width: 100%;
  margin-top: 20px;
}
.product-tr{
  height: 44px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.online{
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
  height: 44px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.offline{
  background-color: #F0F1FA;
  box-shadow: inset 0 -1px 0 0 rgba(189,191,216,0.36);
  height: 44px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.product-table-active{
  width: 18px;
}
.name{
  width: 169px;
}
.created{
  width: 334px;
}
.created-by{
  width: 227px;
}
.owned-by{
  width: 200px;
}
.options{
  width: 50px;
}
.product-active{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #24E2B8;
  float: left;
  margin-left: 3px;
}
.product-not-active{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #D2305B;
  float: left;
  margin-left: 3px;
}
.product-control-info{
  width: 30px;
  height: 30px;
  float: left;
  margin-top: -10px;
  margin-left: 15px;
}
.product-search{
  width: 302px;
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-repeat: no-repeat;
  background-position-x: 5px;
  background-position-y: 5px;
  height: 40px !important;
  padding-left: 40px;
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  margin-left: 20px;
  margin-top: 20px;
  height: 40px !important;
}
.main{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
@media only screen and (max-width: 750px) {
    .main{
      max-width: 100%;
    }
}
</style>
