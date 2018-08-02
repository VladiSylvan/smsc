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
              <tr class="online">
                <td class="product-table-active"><div class="product-active"></div></td>
                <td class="name">Parkerport</td>
                <td class="created">10-03-2018</td>
                <td class="created-by"><div class="product-avatar"></div> <div class="product-name-fix">San Marino</div></td>
                <td class="owned-by"><div class="product-avatar"></div> <div class="product-name-fix">Appolo Inc.</div></td>
                <td class="options"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/DID.svg"></div></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
              </tr>
              <tr class="online">
                <td class="product-table-active"><div class="product-active"></div></td>
                <td class="name">Blickview</td>
                <td class="created">08-19-2018</td>
                <td class="created-by"><div class="product-avatar"></div> <div class="product-name-fix">San Marino</div></td>
                <td class="owned-by"><div class="product-avatar"></div> <div class="product-name-fix">Appolo Inc.</div></td>
                <td class="options"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/DID.svg"></div></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
              </tr>
              <tr class="offline">
                <td class="product-table-active"><div class="product-not-active"></div></td>
                <td class="name">Lake Woodrow</td>
                <td class="created">01-04-2018</td>
                <td class="created-by"><div class="product-avatar"></div> <div class="product-name-fix">San Marino</div></td>
                <td class="owned-by"><div class="product-avatar"></div> <div class="product-name-fix">Appolo Inc.</div></td>
                <td class="options"><div class="product-control-info"><img v-on:click="showModal()" class="control-box" src="@/assets/Icon/DID.svg"></div></td>
                <td class="options"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
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
.svg-active path{
  fill: white;
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
.side a{
  text-decoration: none;
  color: #55616E;
}
.side#active a{
  text-decoration: none;
  color: #FFFFFF;
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
button#product{
  	height: 40px;
    width: 130px;
    border-radius: 4px;
    background-color: #51A3F3;
    border-radius: 4px;
    color: #fff;
    font-family: "Helvetica Neue";
    font-size: 15px;
    font-weight: 300;
    line-height: 30px;
    text-align: center;
    margin-top: 20px;
    float: right;
    margin-right: 20px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.col-md-6{
  width: 45.83%;
}
.col-md-3{
  width: 20.8%;
}
.main{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
.header{
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 61.1111111111%;
  float: left;
}
.header-min{
  display: inline-block;
  vertical-align: top;
  margin-left: -150px;
  margin-right: 150px;
  position: relative;
  z-index: 1000;
}
.res-div{
  display: none;
  width: 100%;
}
.res-select{
  display: inline-block;
  width: calc(100% - 15px);
  margin-left: 15px;
}
@media only screen and (max-width: 1200px) {
    .res-div{
      display: inline-block;
    }
}
@media only screen and (max-width: 750px) {
    .main{
      max-width: 100%;
    }
}
</style>
