<template>
    <div class="container">
      <navigation-component title="Vendors"></navigation-component>
      <div class="main-add">
        <div class="res-div">
          <div class="head-title">
            Vendors
          </div>
        </div>
        <router-link :to="{ name: 'Vendors'}">
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
        <form v-on:submit="create()">
          <router-link :to="{ name: 'AddVendor'}"><button v-on:click="create()" id="product" type="submit">Add Vendor</button></router-link>
          <router-link :to="{ name: 'Vendors'}"><button id="cancel" type="submit">Cancel</button></router-link>
          <div class="add-vendor">
            <div class="vendor-main">
              <div class="vendor-add-title">
                Add Vendor Information
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Company Name
                </div>
                <input class="grid-input" type="text" v-model="vendor.vendor_name" placeholder="Company Name">
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Contact
                </div>
                <select id="vendors" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Contact" class="grid-select" v-model="user.contact">
                  <option value="Chad Sullivan">Chad Sullivan</option>
                </select>
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Type
                </div>
                <select id="vendors" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Type" class="grid-select" v-model="user.type">
                  <option value="SMPP">SMPP</option>
                </select>
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Rate Email
                </div>
                <input class="grid-input" type="text" v-model="vendor.vendor_email" placeholder="Thomas">
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Sales Email
                </div>
                <input class="grid-input" type="text" v-model="vendor.vendor_email" placeholder="Thomas">
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  NOC Email
                </div>
                <input class="grid-input" type="text" v-model="vendor.vendor_email" placeholder="Thomas">
              </div>
            </div>
            <div class="vendor-second">
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
        </form>
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
          vendor:{
            vendor_email: '',
            reseller_uuid: 'd4ff6a98-938b-49ca-9294-1b4d15daa9cc',
            vendor_name: '',
          },
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
      NavigationComponent,
    },
    methods:{
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        },
        create(){
          var app = this
          event.preventDefault();
          this.axios.post('vendor/create', app.vendor).then( res => {
              this.$router.push('/sys/vendors')
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
.main-add{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
@media only screen and (max-width: 990px) {
    .main-add{
      max-width: 100%;
    }
}
</style>
