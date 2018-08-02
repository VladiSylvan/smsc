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
input[type="text"]{
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-repeat: no-repeat;
  background-position-x: 5px;
  background-position-y: 5px;
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
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
.product-name-fix{
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
}
.product-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.product-main{
  float: left;
  display: inline-block;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
}
.svg-active path{
  fill: white;
}
.product-table{
  border: none;
  max-width: 100%;
  width: 100%;
  margin-top: 20px;
}
.product-tr{
  height: 44px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.online{
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
  height: 44px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.offline{
  background-color: #F0F1FA;
  box-shadow: inset 0 -1px 0 0 rgba(189,191,216,0.36);
  height: 44px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.product-table-active{
  width: 18px;
}
.name{
  width: 169px;
}
.created{
  width: 134px;
}
.routing{
  width: 200px;
}
.created-by{
  width: 227px;
}
.owned-by{
  width: 200px;
}
.options{
  width: 50px;
}
.product-active{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #24E2B8;
  float: left;
  margin-left: 3px;
}
.product-not-active{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #D2305B;
  float: left;
  margin-left: 3px;
}
.product-control-info{
  width: 30px;
  height: 30px;
  float: left;
  margin-top: -10px;
  margin-left: 15px;
}
.side a{
  text-decoration: none;
  color: #55616E;
}
.side#active a{
  text-decoration: none;
  color: #FFFFFF;
}
.product-search{
  width: 302px;
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-repeat: no-repeat;
  background-position-x: 5px;
  background-position-y: 5px;
  height: 40px !important;
  padding-left: 40px;
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  margin-left: 20px;
  margin-top: 20px;
  height: 40px !important;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.col-md-6{
  width: 45.83%;
}
.col-md-3{
  width: 20.8%;
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
.res-div{
  display: none;
  width: 100%;
}
.res-select{
  display: inline-block;
  width: calc(100% - 15px);
  margin-left: 15px;
}
@media only screen and (max-width: 1200px) {
    .res-div{
      display: inline-block;
    }
}
@media only screen and (max-width: 750px) {
    .main{
      max-width: 100%;
    }
}
</style>
