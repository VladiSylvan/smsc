<template>
    <div class="container">
      <company-navigation-component title="Campaigns"></company-navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Campaigns
          </div>
        </div>
        <div class="navbar">
          <div class="camp-nav-link-1">
            <div id="active" class="nav-text">
              Dashboard
              <div class="camp-nav-line-bill-1"></div>
            </div>
          </div>
          <div class="camp-nav-link-2">
            <router-link :to="{ name: 'AllCampaigns' }">
              <div class="nav-text">
                All Campaigns
              </div>
            </router-link>
          </div>
          <div class="camp-nav-link-3">
            <router-link :to="{ name: 'KeywordManager' }">
              <div class="nav-text">
                Keyword Manager
              </div>
            </router-link>
          </div>
        </div>
          <input class="did-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchDID" placeholder="Search for campaigns">
          <router-link :to="{ name: 'AddCampaign'}"><button id="campaign" type="submit">Add Campaign</button></router-link>
          <div class="main-container">
            <div class="container-1">
              <div class="container-1-title">
                Stats
              </div>
              <div class="container-box">
                <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
              </div>
              <div class="grid-container">
                <div class="cont-grid">
                  <div class="cont-grid-title">
                    Current Balance
                  </div>
                  <div class="cont-grid-price">
                    $0.94
                  </div>
                </div>
                <div class="cont-grid">
                  <div class="cont-grid-title">
                    SMS Sent
                  </div>
                  <div class="cont-grid-price">
                    $0.94
                  </div>
                  <div class="cont-grid-text">
                    0 messages
                  </div>
                </div>
                <div class="cont-grid">
                  <div class="cont-grid-title">
                    Inbound SMS
                  </div>
                  <div class="cont-grid-price">
                    $0.94
                  </div>
                  <div class="cont-grid-text">
                    0 messages
                  </div>
                </div>
                <div class="cont-grid">
                  <div class="cont-grid-title">
                    Shortcode
                  </div>
                  <div class="cont-grid-price">
                    $0.94
                  </div>
                  <div class="cont-grid-text">
                    0 messages
                  </div>
                </div>
                <div class="cont-grid">
                  <div class="cont-grid-title">
                    Shortcode In
                  </div>
                  <div class="cont-grid-price">
                    $0.94
                  </div>
                  <div class="cont-grid-text">
                    0 messages
                  </div>
                </div>
                <div class="cont-grid">
                  <div class="cont-grid-title">
                    Call Routed
                  </div>
                  <div class="cont-grid-price">
                    $0.94
                  </div>
                  <div class="cont-grid-text">
                    0 Calls
                  </div>
                </div>
                <div class="cont-grid">
                  <div class="cont-grid-title">
                    Ringless Voice
                  </div>
                  <div class="cont-grid-price">
                    $0.94
                  </div>
                  <div class="cont-grid-text">
                    0/0 RVMs
                  </div>
                </div>
                <div class="cont-grid">
                  <div class="cont-grid-title">
                    Phone
                  </div>
                  <div class="cont-grid-price">
                    $0.94
                  </div>
                  <div class="cont-grid-text">
                    0 phones
                  </div>
                </div>
                <div class="cont-grid">
                  <div class="cont-grid-title">
                    New Suppressions
                  </div>
                  <div class="cont-grid-price">
                    $0.94
                  </div>
                </div>
                <div class="cont-grid">
                  <div class="cont-grid-title">
                    Answered By Human
                  </div>
                  <div class="cont-grid-price">
                    $0.94
                  </div>
                </div>
                <div class="cont-grid">
                  <div class="cont-grid-title">
                    Answered By Machine
                  </div>
                  <div class="cont-grid-price">
                    $0.94
                  </div>
                </div>
                <div class="cont-grid">
                  <div class="cont-grid-title">
                    Press1 Answers
                  </div>
                  <div class="cont-grid-price">
                    $0.94
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="app">
          <modal v-show="isModalVisible" @close="closeModal"/>
        </div>
    </div>
</template>
<script>
import modal from '@/components/DIDsModal.vue'
import CompanyNavigationComponent from '@/components/CompanyNavigationComponent'

export default {
    name: 'app',
    data () {
        return {
          show: true,
          width: '60px',
          transitionName: 'fade',
          popup: false,
          test: false,
          del: false,
          isModalVisible: false,
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            },

        }
    },
    components:{
      modal,
      CompanyNavigationComponent,
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
.grid-container{
  max-width: 98.1818181818%;
  width: 100%;
  margin-left: 15px;
  margin-right: 5px;
  float: left;
}
.cont-grid{
  max-width: 16.3636363636%;
  width: 100%;
  float: left;
  height: auto;
  margin-bottom: 20px;
  height: 110px;
}
.cont-grid-title{
  color: #BDBFD8;
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 30px;
  text-transform: uppercase;
}
.cont-grid-price{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 36px;
  font-weight: bold;
  line-height: 50px;
}
.cont-grid-text{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 13px;
  line-height: 15px;
}
.container-1{
  height: auto;
  max-width: calc(100% - 10px);
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  width: 100%;
}
.container-1-title{
  height: 30px;
  width: calc(100% - 60px);
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 10px;
  float: left;
}
.container-box{
  height: 30px;
  width: 30px;
  display: inline-block;
  margin-top: 10px;
  margin-right: 15px;
  float: right;
}
a{
  text-decoration: none;
}
.camp-nav-link-1{
  display: inline-block;
  float: left;
  height: 50px;
  width: 105px;
  margin-left: 20px;
}
.camp-nav-line-bill-1{
  border-bottom: 2px solid #51A3F3;
  width: 105px;
  margin-top: 13px;
}
.camp-nav-link-2{
  display: inline-block;
  float: left;
  height: 50px;
  width: 130px;
}
.camp-nav-link-3{
  display: inline-block;
  float: left;
  height: 50px;
  width: 170px;
}
button#campaign{
  	height: 40px;
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
    margin-right: 20px;
    padding-right: 15px;
    padding-left: 15px;
}
.main{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
.side#active svg g{
  fill: white;
}
.side-link{
  	height: 20px;
    width: 220px;
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 20px;
    display: inline-block;
    margin-top: 10px;
}
.side-link#active{
  	color: #FFFFFF;
}
ul{
	height: 100vh;
	max-width: 300px;
  width: 100%;
	background-color: #F0F1FA;
  display: inline-block;
  float: left;
  margin: 0;
  padding: 0;
}
li a{
  text-decoration: none;
  color: #55616E;
  cursor: pointer;
}
.sidebar-hide {
	height: 100vh;
	width: 60px;
	background-color: #F0F1FA;
  display: inline-block;
  float: left;
  margin-right: 75px;
}
li{
  height: 40px;
  width: 100%;
  color: #55616E;
  display: inline-block;
  cursor: pointer;
}
.side-hide{
  height: 40px;
  width: 60px;
  color: #55616E;
  display: inline-block;
}
.side-hide#active{
	border-radius: 0 4px 4px 0;
	background: linear-gradient(135deg, #51A3F3 0%, #51B5F3 100%);
  color: #FFFFFF;
  fill: #FFFFFF;
}
li#active{
	border-radius: 0 4px 4px 0;
	background: linear-gradient(135deg, #51A3F3 0%, #51B5F3 100%);
  color: #FFFFFF;
  fill: #FFFFFF;
}
li:first-child{
  margin-top: 10px;
}
.image-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 10px;
}
.control-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
}
.side-title{
  	height: 30px;
    width: 270px;
    color: #BDBFD8;
    font-family: "Circular Std";
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 30px;
    display: inline-block;
    text-transform: uppercase;
    margin-left: 15px;
    margin-top: 21px;
}
.navigation{
  max-width: 100%;
  height: 60px;
  background-color: #FFFFFF;
}
.navi-logo{
  max-width: 300px;
  display: inline-block;
  width: 100%;
}
.navi-circle-open{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: none;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  margin-right: 10px;
  transform: rotate(180deg);
}
.navi-circle-open-menu{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  margin-right: 10px;
  transform: rotate(180deg);
}
.navi-circle-close{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  margin-right: 10px;
}
.navi-head{
  max-width: 560px;
  display: inline-block;
  width: auto;
}
.head-title{
    display: inline-block;
    vertical-align: top;
    vertical-align: top;
    color: #55616E;
    font-family: "Circular Std";
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    margin-left: 15px;
    margin-top: 15px;
    margin-right: 32px;
}
.logo{
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-right: 20px;
}
.logo-small{
  display: none;
  vertical-align: top;
  margin-top: 15px;
  margin-right: 20px;
}
@media only screen and (max-width: 1270px) {
  .cont-grid{
    max-width: 19.6363636364%;
    width: 100%;
  }
}
@media only screen and (max-width: 1200px) {
    .navi-head{
      display: none;
    }
    .navi-logo{
      max-width: 40.8333333333%;
      width: 100%;
    }
    .did-input-search{
      max-width: calc(100% - 80px);
    }
    .cont-grid{
      max-width: 24.5454545454%;
    }
}
@media only screen and (max-width: 990px) {
    .logo{
      display: none;
    }
    .logo-small{
      display: inline-block;
    }
    .navi-logo{
      max-width: 38.8333333333%;
      width: 100%;
    }
    .navi-circle-open{
      display: inline-block;
    }
    .navi-circle-close{
      display: none;
    }
    ul, .sidebar-hide{
      display: none;
    }
    .main{
      max-width: 100%;
    }
}
@media only screen and (max-width: 620px) {
  .cont-grid{
    max-width: 32.7272727273%;
  }
}
@media only screen and (max-width: 430px) {
  .cont-grid{
    max-width: 49.0909090909%;
  }
}
</style>
