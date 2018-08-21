<template>
    <div class="container">
      <reseller-navigation-component title="Products"></reseller-navigation-component>
      <div class="main-add-navi">
        <router-link :to="{ name: 'ResellerProduct'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Products
          </div>
        </router-link>
        <router-link :to="{ name: 'ResellerEditProduct'}"><button id="product" type="submit">Save Product</button></router-link>
        <router-link :to="{ name: 'ResellerProduct'}"><button id="cancel" type="submit">Cancel</button></router-link>
      </div>
      <div class="main-add">
        <div class="product-add-main">
          <div class="add-reseller-product">
            <div class="product-add-title">
              Edit Product Information
            </div>
            <div class="product-input-name">
              Product Name
            </div>
            <input class="product-input" type="text" v-model="user.productName" placeholder="Product Name">
            <table class="add-product-table" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>
                  <td class="add-reseller-product-country"><div class="product-input-name">Country</div></td>
                  <td class="add-reseller-product-operator"><div class="product-input-name">Operator</div></td>
                  <td class="add-reseller-product-sell-rate"><div class="product-input-name">Sell Rate</div></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="add-reseller-product-country">
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Country" class="product-country" v-model="user.country">
                      <option value="China">China</option>
                    </select>
                  </td>
                  <td class="add-reseller-product-operator">
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Operator" class="product-operator" v-model="user.operator">
                      <option value="China Unicom">China Unicom</option>
                    </select>
                  </td>
                  <td class="add-reseller-product-sell-rate">
                    <input class="product-input-sell-rate" type="text" v-model="user.sellRate" placeholder="Sell Rate">
                  </td>
                  <td><img class="delete-image" src="@/assets/Icon/Close.svg"></td>
                </tr>
              </tbody>
              <tbody v-bind:class="{'active-table': !vendors}" v-on:click="vendors = false">
                <tr>
                  <td class="add-reseller-product-country"><div class="product-input-name">Country</div></td>
                  <td class="add-reseller-product-operator"><div class="product-input-name">Operator</div></td>
                  <td class="add-reseller-product-sell-rate"><div class="product-input-name">Sell Rate</div></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="add-reseller-product-country">
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Country" class="product-country" v-model="user2.country">
                      <option value="China">China</option>
                    </select>
                  </td>
                  <td class="add-reseller-product-operator">
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Operator" class="product-operator" v-model="user2.operator">
                      <option value="China Mobile">China Mobile</option>
                    </select>
                  </td>
                  <td class="add-reseller-product-sell-rate">
                    <input class="product-input-sell-rate" type="text" v-model="user2.sellRate" placeholder="Sell Rate">
                  </td>
                  <td><img class="delete-image" src="@/assets/Icon/Close.svg"></td>
                </tr>
              </tbody>
              <tbody v-bind:class="{'active-table': vendors}" v-on:click="vendors = true">
                <tr>
                  <td class="add-reseller-product-country"><div class="product-input-name">Country</div></td>
                  <td class="add-reseller-product-operator"><div class="product-input-name">Operator</div></td>
                  <td class="add-reseller-product-sell-rate"><div class="product-input-name">Sell Rate</div></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="add-reseller-product-country">
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Country" class="product-country" v-model="user3.country">
                      <option value="United States">United States</option>
                    </select>
                  </td>
                  <td class="add-reseller-product-operator">
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Operator" class="product-operator" v-model="user3.operator">
                      <option value="AT & T">AT & T</option>
                    </select>
                  </td>
                  <td class="add-reseller-product-sell-rate">
                    <input class="product-input-sell-rate" type="text" v-model="user3.sellRate" placeholder="Sell Rate">
                  </td>
                  <td><img class="delete-image" src="@/assets/Icon/Close.svg"></td>
                </tr>
              </tbody>
            </table>
            <div class="add-operator">
              <div class="operator-image">
                <img src="@/assets/Icon/Plus.svg">
              </div>
              <div class="operator-text">
                Add Operator
              </div>
            </div>
          </div>
          <div class="product-vendor">
            <div v-if="vendors" class="vendor-title">
              Vendors for AT & T
            </div>
            <div v-if="!vendors" class="vendor-title">
              Vendors for China Mobile
            </div>
            <table v-if="vendors">
              <tbody>
                <tr>
                  <td>
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Vendor" class="product-vendor" v-model="vendor.vendorName1">
                      <option value="Vendor BB">Vendor BB</option>
                    </select>
                  </td>
                  <td>
                    <input class="product-input-vendor" type="text" v-model="vendor.vendorRate1" placeholder="Vendor">
                  </td>
                  <td>
                    <img class="delete-vendor-image" src="@/assets/Icon/Close.svg">
                  </td>
                </tr>
                <tr>
                  <td>
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Vendor" class="product-vendor" v-model="vendor.vendorName2">
                      <option value="Vendor CC">Vendor CC</option>
                    </select>
                  </td>
                  <td>
                    <input class="product-input-vendor" type="text" v-model="vendor.vendorRate2" placeholder="Vendor">
                  </td>
                  <td>
                    <img class="delete-vendor-image" src="@/assets/Icon/Close.svg">
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="add-product-vendor">
              <div class="vendor-image">
                <img src="@/assets/Icon/Plus.svg">
              </div>
              <div v-if="vendors" class="vendor-text">
                Add Vendor for AT & T
              </div>
              <div v-if="!vendors" class="vendor-text">
                Add Vendor for China Mobile
              </div>
            </div>
          </div>
        </div>
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
          vendors: true,
                user:{
                productName: 'Caroline',
                country: 'China',
                operator: 'China Unicom',
                sellRate: '0.001'
            },
            user2:{
              country: 'China',
              operator: 'China Mobile',
              sellRate: '0.0012'
            },
            user3:{
              country: 'United States',
              operator: 'AT & T',
              sellRate: '0.0003'
            },
            vendor:{
              vendorName1: 'Vendor BB',
              vendorName2: 'Vendor CC',
              vendorRate1: '0.0009',
              vendorRate2: '0.0008'
            }
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
