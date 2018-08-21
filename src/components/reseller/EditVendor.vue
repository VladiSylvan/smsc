<template>
    <div class="container">
      <reseller-navigation-component title="Vendors"></reseller-navigation-component>
      <div class="main-add-navi">
        <div class="res-div">
          <div class="head-title">
            Vendors
          </div>
        </div>
        <router-link :to="{ name: 'ResellerVendors'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Vendors
          </div>
        </router-link>
        <router-link :to="{ name: 'ResellerEditVendor'}"><button id="product" type="submit">Save Vendor</button></router-link>
        <router-link :to="{ name: 'ResellerVendors'}"><button id="cancel" type="submit">Cancel</button></router-link>
      </div>
      <div class="main-add">
        <div class="add-vendor">
          <div class="vendor-main">
            <div class="vendor-add-title">
              Edit Vendor Information
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Company Name
              </div>
              <input class="grid-input" type="text" v-model="user.companyName" placeholder="Company Name">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Contact
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Contact" class="grid-select" v-model="user.contact">
                <option value="Chad Sullivan">Chad Sullivan</option>
              </select>
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Type
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Type" class="grid-select" v-model="user.type">
                <option value="SMPP">SMPP</option>
              </select>
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Rate Email
              </div>
              <input class="grid-input" type="text" v-model="user.rateEmail" placeholder="Thomas">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Sales Email
              </div>
              <input class="grid-input" type="text" v-model="user.salesEmail" placeholder="Thomas">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                NOC Email
              </div>
              <input class="grid-input" type="text" v-model="user.nocEmail" placeholder="Thomas">
            </div>
          </div>
          <div class="vendor-second">
            <div class="grid-title">
              Change Photo
            </div>
            <div class="upload-edit">
              <div class="upload-image">
                <div class="upload-circle"></div>
              </div>
              <div class="upload-container">
                <div class="upload-title-edit">
                  Drop photo here or browse
                </div>
                <button class="upload-button-edit" type="submit">Upload photo</button>
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
                companyName: 'Appolo Inc.',
                contact: 'Chad Sullivan',
                type: 'SMPP',
                rateEmail: 'Thomas',
                salesEmail: 'Thomas',
                nocEmail: 'Thomas',
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
