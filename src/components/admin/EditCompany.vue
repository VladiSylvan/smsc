<template>
    <div class="container">
      <navigation-component title="Companies"></navigation-component>
      <div class="main-add">
        <div class="res-div">
          <div class="head-title">
            Companies
          </div>
        </div>
        <router-link :to="{ name: 'Companies'}">
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
        <router-link :to="{ name: 'EditCompany'}"><button id="product" v-on:click="edit()" type="submit">Save Company</button></router-link>
        <router-link :to="{ name: 'Companies'}"><button id="cancel" type="submit">Cancel</button></router-link>
        <div class="add-company">
          <div class="company-main">
            <div class="company-add-title">
              Edit Company Information
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Company Name
              </div>
              <input class="grid-input" type="text" v-model="companies.company_name" placeholder="Company Name">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Phone Number
              </div>
              <input class="grid-input" type="text" v-model="companies.contact.phone" placeholder="Enter phone number">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Email
              </div>
              <input class="grid-input" type="text" v-model="companies.contact.email" placeholder="Thomas">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Address
              </div>
              <input class="grid-input" type="text" v-model="companies.contact.address" placeholder="Caroline">
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
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="State" class="grid-select" v-model="companies.contact.state">
                <option value="Nebraska">Nebraska</option>
              </select>
            </div>
            <div class="grid-3">
              <div class="grid-title">
                City
              </div>
              <input class="grid-input" type="text" v-model="companies.contact.city" placeholder="Caroline">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Zip Code
              </div>
              <input class="grid-input" type="text" v-model="companies.contact.zipcode" placeholder="Caroline">
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
          companies:{
            company_name: '',
            contact:{
              phone: '',
              email: '',
              address: '',
              state: '',
              city: '',
              zipcode: '',
            }
          },
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
    mounted(){
      var app = this
      this.axios.all([
        this.axios.get('company/' + this.$route.params.id),
      ]).then( this.axios.spread((companies) => {
        console.log(companies)
        app.companies = companies.data.payload
      })).catch(error => {
        console.log(error)
      })
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
        edit(){
          var app = this
          event.preventDefault();
          var updateData = {
            company_name: this.companies.company_name,
            contact:{
              phone: this.companies.contact.phone,
              email: this.companies.contact.email,
              address: this.companies.contact.address,
              state: this.companies.contact.state,
              city: this.companies.contact.city,
              zipcode: this.companies.contact.zipcode,
            }
          }
          this.axios.patch('company/' + this.$route.params.id, updateData).then( res => {
              this.$router.push('/sys/companies')
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
