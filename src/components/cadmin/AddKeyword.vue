<template>
    <div class="container">
      <company-navigation-component title="Campaigns"></company-navigation-component>
      <div class="main-add">
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
<style>
.keyw-grid{
  margin-left: 15px;
  max-width: calc(50% - 35px);
  display: inline-block;
  float: left;
  margin-bottom: 15px;
  width: 100%;
}
.keyw-grid-2{
  margin-right: 30px;
  max-width: calc(50% - 35px);
  display: inline-block;
  float: right;
  margin-bottom: 15px;
  width: 100%;
}
.grid-input-2{
  max-width: 100%;
  width: 100%;
  padding-left: 10px;
  height: calc(195px - 4px);
  line-height: 30px;
}
.grid-input-3{
  max-width: 100%;
  width: 100%;
  padding-left: 10px;
  height: calc(120px - 4px);
  line-height: 30px;
}
.keyword-main{
  display: inline-block;
  float: left;
  max-width: 100%;
  width: 100%;
}
.did-add-title{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin: 15px;
}
.main-add{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
@media only screen and (max-width: 1200px) {
    .keyword-main{
      max-width: 100%;
    }
}
@media only screen and (max-width: 990px) {
    .main-add{
      max-width: 100%;
    }
}
@media only screen and (max-width: 390px) {
    .keyw-grid, .keyw-grid-2{
      max-width: calc(100% - 40px);
    }
    .keyw-grid-2{
      max-width: calc(100% - 40px);
      float: left;
      margin-left: 15px;
    }
}
</style>
