<template>
    <div class="container">
      <company-navigation-component title="Campaigns"></company-navigation-component>
      <div class="main-add-navi">
        <div class="res-div">
          <div class="head-title">
            Campaigns
          </div>
        </div>
        <router-link :to="{ name: 'KeywordManager'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Keywords
          </div>
        </router-link>
        <router-link :to="{ name: 'AddKey'}"><button id="product" type="submit">Create</button></router-link>
        <router-link :to="{ name: 'KeywordManager'}"><button id="cancel" type="submit">Cancel</button></router-link>
      </div>
      <div class="main-add">
        <div class="add-did">
          <div class="keyword-main">
            <div class="did-add-title">
              Create Keyword
            </div>
            <div class="keyw-grid">
              <div class="grid-title">
                Keyword
              </div>
              <input class="grid-input" type="text" v-model="user.keyword" placeholder="Enter campaign name">
            </div>
            <div class="keyw-grid-2">
              <div class="grid-title">
                Script
              </div>
              <textarea class="grid-input-2" type="text" v-model="user.script" placeholder="Enter script"></textarea>
            </div>
            <div class="keyw-grid">
              <div class="grid-title">
                Description
              </div>
              <textarea class="grid-input-3" type="text" v-model="user.description" placeholder="Enter description"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import modal from '@/components/modal.vue'
import CompanyNavigationComponent from '@/components/CompanyNavigationComponent'

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
                contact: 'Chad Sullivan',
                type: 'SMPP',
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
      CompanyNavigationComponent,
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
