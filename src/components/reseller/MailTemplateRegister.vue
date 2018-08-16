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
.input-title{
    color: #000000;	font-family: "Circular Std Book";
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.21px;
    line-height: 15px;
    text-transform: uppercase;
}
h1{
    color: #000000;
    font-family: "Circular Std Medium";
    font-size: 24px;
    font-weight: bold;
    line-height: 24px;
    text-align: center;
    margin-bottom: 30px;
}
.template-input{
  max-width: 100%;
  width: 100%;
  margin-top: 5px;
  height: 36px;
  padding-left: 10px;
}
.register-container{
  margin-right: auto;
  margin-left: auto;
  max-width: 40%;
  width: 100%;
  background-color: #FFFFFF;
  margin-top: 30px;
  padding: 60px;
  height: 180px;
}
.routing-link{
  text-decoration: underline;
  color: #51A3F3;
  cursor: pointer;
}
button#template{
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
    float: left;
}
.main{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
.header{
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 61.1111111111%;
  float: left;
}
.header-min{
  display: inline-block;
  vertical-align: top;
  margin-left: -150px;
  margin-right: 150px;
  position: relative;
  z-index: 1000;
}
@media only screen and (max-width: 990px) {
    .main{
      max-width: 100%;
    }
}
</style>
