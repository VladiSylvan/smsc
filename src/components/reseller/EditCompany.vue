<template>
    <div class="container">
      <reseller-navigation-component title="Companies"></reseller-navigation-component>
      <div class="main-add-navi">
        <div class="res-div">
          <div class="head-title">
            Companies
          </div>
        </div>
        <router-link :to="{ name: 'ResellerCompanies'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Companies
          </div>
        </router-link>
        <router-link :to="{ name: 'ResellerEditCompany'}"><button id="product" type="submit">Save Company</button></router-link>
        <router-link :to="{ name: 'ResellerCompanies'}"><button id="cancel" type="submit">Cancel</button></router-link>
      </div>
      <div class="main-add">
        <div class="add-company">
          <div class="company-main">
            <div class="company-add-title">
              Edit Company Information
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Company Name
              </div>
              <input class="grid-input" type="text" v-model="user.companyName" placeholder="Company Name">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Phone Number
              </div>
              <input class="grid-input" type="text" v-model="user.phoneNumber" placeholder="Enter phone number">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Email
              </div>
              <input class="grid-input" type="text" v-model="user.email" placeholder="Thomas">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Address
              </div>
              <input class="grid-input" type="text" v-model="user.address" placeholder="Caroline">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Country
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Country" class="grid-select" v-model="user.country">
                <option value="Luxembourg">Luxembourg</option>
              </select>
            </div>
            <div class="grid-3">
              <div class="grid-title">
                State
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="State" class="grid-select" v-model="user.state">
                <option value="Nebraska">Nebraska</option>
              </select>
            </div>
            <div class="grid-3">
              <div class="grid-title">
                City
              </div>
              <input class="grid-input" type="text" v-model="user.city" placeholder="Caroline">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Zip Code
              </div>
              <input class="grid-input" type="text" v-model="user.zipCode" placeholder="Caroline">
            </div>
          </div>
          <div class="company-second">
            <div class="grid-title">
              Change Logo
            </div>
            <div class="upload-edit-sec">
              <div class="upload-image">
                <div class="upload-circle"></div>
              </div>
              <div class="upload-container">
                <div class="upload-title-edit">
                  Drop logo here or browse
                </div>
                <button class="upload-button-edit" type="submit">Upload logo</button>
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
                phoneNumber: '459-362-5221',
                email: 'seth-thiel@hotmail.com',
                address: '894 Wallace Roads',
                country: 'Luxembourg',
                state: 'Nebraska',
                city: 'Port Joyce',
                zipCode: '75832-4568',
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
