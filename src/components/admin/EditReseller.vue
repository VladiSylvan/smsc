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
        <router-link :to="{ name: 'EditReseller'}"><button v-on:click="edit()" id="product" type="submit">Save Reseller</button></router-link>
        <router-link :to="{ name: 'Resellers'}"><button id="cancel" type="submit">Cancel</button></router-link>
        <div class="edit-reseller">
          <div class="reseller-main">
            <div v-if="error">
                <h5 style="color: red; text-align: center;">{{ errorMsg }}</h5>
            </div>
            <div class="reseller-add-title">
              Edit Reseller Information
            </div>
            <div class="grid-1">
              <div class="grid-title">
                First Name
              </div>
              <input class="grid-input" type="text" v-model="resellers.contact.first_name" placeholder="Caroline">
            </div>
            <div class="grid-1">
              <div class="grid-title">
                Last Name
              </div>
              <input class="grid-input" type="text" v-model="resellers.contact.last_name" placeholder="Thomas">
            </div>
            <div class="grid-1">
              <div class="grid-title">
                Username
              </div>
              <input class="grid-input" type="text" placeholder="cthomas">
            </div>
            <div class="grid-1">
              <div class="grid-title">
                Phone Number
              </div>
              <input class="grid-input" type="text" v-model="resellers.contact.phone" placeholder="Caroline">
            </div>
            <div class="grid-1">
              <div class="grid-title">
                Email
              </div>
              <input class="grid-input" type="text" v-model="resellers.contact.email" placeholder="Enter Email">
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
              <input class="grid-input" type="text" v-model="resellers.contact.address" placeholder="Caroline">
            </div>
            <div class="grid-3-sec">
              <div class="grid-title">
                Zip Code
              </div>
              <input class="grid-input" type="text" v-model="resellers.contact.zipcode" placeholder="75832-4568">
            </div>
            <div class="grid-4-sec">
              <div class="grid-title">
                Country
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Country" class="grid-select" v-model="user.country">
                <option v-for="country in countries" :value="country.country_uuid">{{ country.name }}</option>
              </select>
            </div>
            <div class="grid-3-sec">
              <div class="grid-title">
                State
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="State" class="grid-select" v-model="resellers.contact.state">
                <option :value="resellers.contact.state">{{ resellers.contact.state }}</option>
              </select>
            </div>
            <div class="grid-3-sec">
              <div class="grid-title">
                City
              </div>
              <input class="grid-input" type="text" v-model="resellers.contact.city" placeholder="Port Joyce">
            </div>
          </div>
          <div class="reseller-second">
            <div class="grid-title">
              Change Photo
            </div>
            <div class="upload-edit-sec">
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
          error: false,
          errorMsg: '',
          resellers: [],
          countries: [],
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
    mounted(){
      var app = this
      this.axios.all([
        this.axios.get('reseller/' + this.$route.params.id),
        this.axios.get('country/list'),
      ]).then( this.axios.spread((resellers, countries) => {
        console.log(resellers)
        app.resellers = resellers.data.payload
        app.countries = countries.data.payload.items
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
        edit(){
          var app = this
          event.preventDefault();
          var updateData = {
            contact:{
              phone: this.resellers.contact.phone,
              email: this.resellers.contact.email,
              address: this.resellers.contact.address,
              zipcode: this.resellers.contact.zipcode,
              state: this.resellers.contact.state,
              city: this.resellers.contact.city,
            }
          }
          this.axios.patch('company/' + this.$route.params.id, updateData).then( res => {
              this.$router.push('/sys/resellers')
          }).catch( err => {
              var app = this

              // app.errorMsg = err.response.data.error.message
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
