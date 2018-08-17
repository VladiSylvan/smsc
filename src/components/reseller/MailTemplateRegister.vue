<template>
    <div class="container">
      <reseller-navigation-component title="Mail Template"></reseller-navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Mail Template
          </div>
        </div>
        <div class="register-container">
          <h1>
            Registration
          </h1>
          <div class="input-title">
            Template Name
          </div>
          <input class="template-input" type="text" v-model="user.templateName" placeholder="Enter first name">
          <router-link :to="{ name: 'MailTemplate'}"><button id="template" type="submit">Register</button></router-link>
        </div>
      </div>
      <div id="app">
        <modal v-show="isModalVisible" @close="closeModal"/>
      </div>
    </div>
</template>
<script>
import modal from '@/components/ProductModal.vue'
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
