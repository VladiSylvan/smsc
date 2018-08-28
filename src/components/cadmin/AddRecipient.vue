<template>
    <div class="container">
      <company-navigation-component title="Recipients"></company-navigation-component>
      <div class="main-add-navi">
        <div class="res-div">
          <div class="head-title">
            Recipients
          </div>
        </div>
        <router-link :to="{ name: 'Recipients'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Recipients
          </div>
        </router-link>
        <router-link :to="{ name: 'AddRecipient'}"><button id="product" @click="create()" type="submit">Add Recipient</button></router-link>
        <router-link :to="{ name: 'Recipients'}"><button id="cancel" type="submit">Cancel</button></router-link>
      </div>
      <div class="main-add">
        <div class="add-recipient">
          <div class="recipient-add-title">
            Add Recipient
          </div>
          <div class="grid-1-recipient">
            <div class="grid-title">
              Recipient Name
            </div>
            <input class="grid-input" type="text" v-model="recipient.recipient_name" placeholder="Enter recipient name">
          </div>
          <div class="grid-1-recipient">
            <div class="grid-title">
              Phone Number
            </div>
            <input class="grid-input" type="text" v-model="recipient.phone_number" placeholder="Enter phone number">
          </div>
          <div class="grid-1-recipient">
            <div class="grid-title">
              Address
            </div>
            <input class="grid-input" type="text" v-model="recipient.address" placeholder="Enter address">
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
          file: '',
          users: [],
          error: false,
          errorMsg: '',
          isModalVisible: false,
          vendors: true,
          recipient: {
            recipient_name: '',
            phone_number: '',
            address: '',
          },
                user:{
                role: '',
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
      create(){
        var app = this
        this.axios.post('recipient/create', this.recipient).then( res => {
        this.$router.push({ name: 'Recipients', params: { successMsg: 'OK' }})
        }).catch( err => {
            var app = this

            app.errorMsg = err.response.data.error.message
            app.error = true
            console.log(err.response)
        })
      }
    }
}
</script>
