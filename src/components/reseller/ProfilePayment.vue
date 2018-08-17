<template>
    <div class="container">
      <reseller-navigation-component title="Profile"></reseller-navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Profile
          </div>
        </div>
        <div class="navbar-profile">
          <div class="nav-link-rprofile">
            <router-link :to="{ name: 'Profile' }">
              <div class="nav-text-profile">
                Portal Customization
              </div>
            </router-link>
          </div>
          <div class="nav-link-rprofile">
            <div id="active" class="nav-text-profile">
              Payment Gateway
            </div>
            <div class="nav-line-rprofile"></div>
          </div>
        </div>
        <div class="profile-main">
          <router-link :to="{ name: 'Profile'}"><button id="preview" type="submit">Prev: Portal Customization</button></router-link>
          <router-link :to="{ name: 'Profile'}"><button id="payment" type="submit">Finish</button></router-link>
        </div>
        <div class="profile-payment-title">
          Payment Gateway
        </div>
        <div class="profile-payment-content">
          <div v-on:click="active = 1" v-bind:class="{'profile-payment-item-active': active == 1}" class="profile-payment-item">
            <label class="profile-payment-container"><img class="profile-payment-image" id="paypal" src="@/assets/paypal.png">
              <input type="radio" checked="checked" name="radio">
              <span class="checkmark"></span>
            </label>
          </div>
          <div v-on:click="active = 2" v-bind:class="{'profile-payment-item-active': active == 2}" class="profile-payment-item">
            <label class="profile-payment-container"><img class="profile-payment-image" id="stripe" src="@/assets/stripe.png">
              <input type="radio" name="radio">
              <span class="checkmark"></span>
            </label>
          </div>
          <div v-on:click="active = 3" v-bind:class="{'profile-payment-item-active': active == 3}" class="profile-payment-item">
            <label class="profile-payment-container"><img class="profile-payment-image" id="mastercard" src="@/assets/mastercard.png">
              <input type="radio" name="radio">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="profile-payment-input">
          <input class="profile-input" type="text" v-model="user.email" placeholder="Enter your paypal email">
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
          test: false,
          active: 1,
          isModalVisible: false,
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            },

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
.main{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
@media only screen and (max-width: 990px) {
    .main{
      max-width: 100%;
    }
}
</style>
