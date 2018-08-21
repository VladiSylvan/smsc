<template>
    <div class="container">
      <reseller-navigation-component title="Profile"></reseller-navigation-component>
      <div class="main-navi">
        <div class="res-div">
          <div class="head-title">
            Profile
          </div>
        </div>
        <div class="navbar-profile">
          <div class="nav-link-rprofile">
            <div id="active" class="nav-text-profile">
              Portal Customization
              <div class="nav-line-rprofile"></div>
            </div>
          </div>
          <div class="nav-link-rprofile">
            <router-link :to="{ name: 'ProfilePayment' }">
              <div class="nav-text-profile">
                Payment Gateway
              </div>
            </router-link>
          </div>
        </div>
        <div class="profile-main">
          <router-link :to="{ name: 'ProfilePayment'}"><button id="payment" type="submit">Next: Payment Gateway</button></router-link>
        </div>
      </div>
      <div class="main">
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
