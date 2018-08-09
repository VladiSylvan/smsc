<template>
    <div class="container">
      <navigation-component title="Resellers"></navigation-component>
      <div class="main-add">
        <div class="res-div">
          <div class="head-title">
            Resellers
          </div>
        </div>
        <router-link :to="{ name: 'Resellers'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Resellers
          </div>
        </router-link>
        <router-link :to="{ name: 'EditReseller'}"><button id="product" type="submit">Save Reseller</button></router-link>
        <router-link :to="{ name: 'Resellers'}"><button id="cancel" type="submit">Cancel</button></router-link>
        <div class="add-reseller">
          <div class="reseller-main">
            <div class="reseller-add-title">
              Edit Reseller Information
            </div>
            <div class="grid-1">
              <div class="grid-title">
                First Name
              </div>
              <input class="grid-input" type="text" v-model="user.firstName" placeholder="Caroline">
            </div>
            <div class="grid-1">
              <div class="grid-title">
                Last Name
              </div>
              <input class="grid-input" type="text" v-model="user.lastName" placeholder="Thomas">
            </div>
            <div class="grid-1">
              <div class="grid-title">
                Username
              </div>
              <input class="grid-input" type="text" v-model="user.username" placeholder="cthomas">
            </div>
            <div class="grid-1">
              <div class="grid-title">
                Phone Number
              </div>
              <input class="grid-input" type="text" v-model="user.phoneNumber" placeholder="Caroline">
            </div>
            <div class="grid-1">
              <div class="grid-title">
                Email
              </div>
              <input class="grid-input" type="text" v-model="user.email" placeholder="Enter Email">
            </div>
            <div class="grid-1">
              <div class="grid-title">
                Company
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Company" class="grid-select" v-model="user.company">
                <option value="Appolo Inc.">Appolo Inc.</option>
              </select>
            </div>
            <div class="grid-2">
              <div class="grid-title">
                Address
              </div>
              <input class="grid-input" type="text" v-model="user.address" placeholder="Caroline">
            </div>
            <div class="grid-3">
              <div class="grid-title">
                Zip Code
              </div>
              <input class="grid-input" type="text" v-model="user.zipCode" placeholder="75832-4568">
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
              <input class="grid-input" type="text" v-model="user.city" placeholder="Port Joyce">
            </div>
          </div>
          <div class="reseller-second">
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
          vendors: true,
                user:{
                firstName: 'Caroline',
                lastName: 'Thomas',
                username: 'cthomas',
                phoneNumber: '459-362-5221',
                email: 'seth-thiel@hotmail.com',
                company: 'Appolo Inc.',
                address: '894 Wallace Roads',
                zipCode: '75832-4568',
                country: 'Luxembourg',
                state: 'Nebraska',
                city: 'Port Joyce',
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
.upload-circle{
  box-sizing: border-box;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #F0F1FA;
  margin: 5px;
}
.upload-image{
  border: 1px dashed #5171F3;
  border-radius: 50%;
  height: 90px;
  width: 90px;
  text-align: center;
  float: left;
  display: inline-block;
  margin-right: 15px;
}
.upload-edit{
  background-color: #FFFFFF;
  height: 280px;
}
.upload-container{
  float: left;
  display: inline-block;
  height: 90px;
  margin-top: 15px;
}
.upload-title-edit{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  text-align: center;
}
.upload-button-edit{
  border-radius: 4px;
  background-color: #51A3F3;
  color: #FFFFFF;
  font-family: "Helvetica Neue";
  font-size: 15px;
  font-weight: 500;
  line-height: 30px;
  height: 36px;
  width: 136px;
}
.grid-1{
  margin-left: 15px;
  width: 29.3%;
  display: inline-block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
}
.grid-2{
  margin-left: 15px;
  width: 69%;
  display: inline-block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
}
.grid-3{
  margin-left: 15px;
  width: 22.2672064777%;
  display: inline-block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
}
.grid-4{
  margin-left: 15px;
  width: 43.5%;
  display: inline-block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
}
.grid-title{
  width: 100%;
  color: #000000;
  font-family: "Circular Std";
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.21px;
  line-height: 15px;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.grid-input{
  width: 100%;
  height: 40px !important;
  padding-left: 10px;
}
.grid-select{
  width: calc(100% + 13px);
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  height: 44px;
}
.svg path{
  fill: #51A3F3;
}
.svg-back{
  float: left;
  display: inline-block;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 20px;
  margin-right: 5px;
}
.back{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  float: left;
  display: inline-block;
  margin-top: 30px;
  margin-bottom: 30px;
}
.add-reseller{
  float: left;
  display: inline-block;
  background-color: #FFFFFF;
  width: calc(100% - 30px);
  margin-left: 15px;
  margin-right: 15px;
}
.reseller-main{
  display: inline-block;
  float: left;
  max-width: 66.8181818182%;
  width: 100%;
}
.reseller-second{
  display: inline-block;
  float: left;
  max-width: 31.8%;
  width: 100%;
  margin-top: 60px;
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
.reseller-add-title{
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
    margin-right: 20px;
    margin-bottom: 20px;
    float: right;
}
button#cancel{
  height: 40px;
  width: 90px;
  border: 1px solid #BDBFD8;
  border-radius: 4px;
  background-color: #FFFFFF;
  color: #55616E;
  font-family: "Circular Std";
  font-size: 15px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 15px;
  float: right;
}
.main-add{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
@media only screen and (max-width: 1200px) {
    .grid-1, .grid-2, .grid-3, .grid-4{
      width: calc(100% - 40px);
    }
    .reseller-main{
      max-width: 100%;
    }
    .reseller-second{
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
</style>
