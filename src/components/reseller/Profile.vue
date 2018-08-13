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
<style>
a{
  text-decoration: none;
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
}
.navbar-profile{
  height: 50px;
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: inset 0 1px 0 0 #F8F9FE;
}
.profile-main{
  float: left;
  display: inline-block;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
}
.nav-text-profile{
  color: #BDBFD8;
  font-family: "Circular Std";
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  text-align: center;
  margin-top: 15px;
}
.nav-text-profile#active{
  color: #51A3F3;
  font-weight: 500;
}
a{
  text-decoration: none;
}
.nav-link-rprofile{
  display: inline-block;
  float: left;
  height: 50px;
  width: 170px;
  margin-left: 20px;
}
.nav-line-rprofile{
  border-bottom: 2px solid #51A3F3;
  width: 170px;
  margin-top: 13px;
}
button#payment{
  	height: 40px;
    width: auto;
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
    float: right;
    padding-left: 15px;
    padding-right: 15px;
}
.main{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
@media only screen and (max-width: 750px) {
    .main{
      max-width: 100%;
    }
}
</style>
