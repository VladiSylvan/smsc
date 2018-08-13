<template>
    <div class="container">
      <reseller-navigation-component title="Users"></reseller-navigation-component>
      <div class="main-add">
        <div class="res-div">
          <div class="head-title">
            Users
          </div>
        </div>
        <router-link :to="{ name: 'ResellerUsers'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Users
          </div>
        </router-link>
        <router-link :to="{ name: 'ResellerAddUser'}"><button id="product" type="submit">Add User</button></router-link>
        <router-link :to="{ name: 'ResellerUsers'}"><button id="cancel" type="submit">Cancel</button></router-link>
        <div class="add-user">
          <div class="user-main">
            <div class="user-add-title">
              Add User
            </div>
            <div class="grid-4">
              <div class="grid-title">
                First Name
              </div>
              <input class="grid-input" type="text" v-model="user.firstName" placeholder="Caroline">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Last Name
              </div>
              <input class="grid-input" type="text" v-model="user.lastName" placeholder="Thomas">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                username
              </div>
              <input class="grid-input" type="text" v-model="user.username" placeholder="Enter username">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Email
              </div>
              <input class="grid-input" type="text" v-model="user.email" placeholder="Thomas">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Password
              </div>
              <input class="grid-input" type="text" v-model="user.password" placeholder="********">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Re-Enter Password
              </div>
              <input class="grid-input" type="text" v-model="user.rePassword" placeholder="********">
            </div>
          </div>
          <div class="user-second">
            <div class="grid-title">
              Choose Photo
            </div>
            <div class="upload">
              <div class="upload-title">
                Drop photo here or browse
              </div>
              <button class="upload-button" type="submit">Upload photo</button>
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
                role: 'Choose Role',
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
<style>
.grid-4{
  margin-left: 15px;
  width: 45.5%;
  display: inline-block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
}
.add-user{
  float: left;
  display: inline-block;
  background-color: #FFFFFF;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
}
.user-main{
  display: inline-block;
  float: left;
  max-width: 66.8181818182%;
  width: 100%;
}
.user-second{
  display: inline-block;
  float: left;
  max-width: 31.8%;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 20px;
}
.product-vendor{
  display: inline-block;
  float: left;
  max-width: calc(100% - 58.1818181818%);
  width: 100%;
  background-color: #F8F9FE;
  height: 458px;
}
.delete-image{
  margin-top: -10px;
}
.delete-vendor-image{
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.user-add-title{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin: 15px;
}
.product-input-name{
  color: #000000;
  font-family: "Circular Std";
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.21px;
  line-height: 15px;
  text-transform: uppercase;
  margin-bottom: 5px;
  padding-top: 10px;
}
.main-add{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
@media only screen and (max-width: 1200px) {
    .grid-1, .grid-2, .grid-3, .grid-3-sec, .grid-4{
      width: calc(50% - 40px);
    }
    .user-main{
      max-width: 100%;
    }
    .user-second{
      margin-top: 0px;
      max-width: calc(100% - 30px);
      margin-left: 15px;
      margin-right: 15px;
    }
}
@media only screen and (max-width: 750px) {
    .main-add{
      max-width: 100%;
    }
}
@media only screen and (max-width: 390px) {
    .grid-1, .grid-2, .grid-3, .grid-3-sec, .grid-4{
      width: calc(100% - 40px);
    }
}
</style>
