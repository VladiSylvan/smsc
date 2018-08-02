<template>
    <div class="container">
      <company-navigation-component title="DIDs"></company-navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            DIDs
          </div>
        </div>
        <div class="navbar">
          <div class="nav-link-1">
            <div id="active" class="nav-text">
              All DIDs
              <div class="nav-line-bill-1"></div>
            </div>
          </div>
          <div class="nav-link-2">
            <router-link :to="{ name: 'Callflows' }">
              <div class="nav-text">
                All Callflows
              </div>
            </router-link>
          </div>
          <div class="nav-link-3">
            <router-link :to="{ name: 'Suppression' }">
              <div class="nav-text">
                Suppression
              </div>
            </router-link>
          </div>
        </div>
          <input class="did-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchDID" placeholder="Search for DID">
          <router-link :to="{ name: 'CompanyDIDs'}"><button v-on:click="showModal()" id="did" type="submit">Buy DID</button></router-link>
          <router-link :to="{ name: 'CreateCallflow'}"><button id="did" type="submit">New Callflow</button></router-link>
          <div class="main-container">
            <table class="did-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr class="did-table-th">
                  <th class="did-active"></th>
                  <th class="did-number">Number</th>
                  <th class="did-created">Created On</th>
                  <th class="did-created-by">Created By</th>
                  <th class="did-country">Country</th>
                  <th class="did-type">Type</th>
                  <th class="did-assigned">Assigned To</th>
                  <th class="did-option"></th>
                  <th class="did-option"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="did-online">
                  <td class="did-active"><div class="product-active"></div></td>
                  <td class="did-number">050-185-4229</td>
                  <td class="did-created">10-03-2018</td>
                  <td class="did-created-by"><div class="did-avatar"></div> <div class="did-name-fix">San Marino</div></td>
                  <td class="did-country">Ethiopia</td>
                  <td class="did-type">Toll Free</td>
                  <td class="did-assigned"><div class="did-avatar"></div> <div class="did-name-fix">Appolo Inc.</div></td>
                  <td class="did-option"><div class="did-control-info"><router-link :to="{ name: 'ResellerEditDIDs' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="did-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="did-online">
                  <td class="did-active"><div class="product-active"></div></td>
                  <td class="did-number">215-054-1288</td>
                  <td class="did-created">11-28-2018</td>
                  <td class="did-created-by"><div class="did-avatar"></div> <div class="did-name-fix">Douglas Richards</div></td>
                  <td class="did-country">South Africa</td>
                  <td class="did-type">Local</td>
                  <td class="did-assigned"><div class="did-avatar"></div> <div class="did-name-fix">George Burns</div></td>
                  <td class="did-option"><div class="did-control-info"><router-link :to="{ name: 'ResellerEditDIDs' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="did-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="did-online">
                  <td class="did-active"><div class="product-active"></div></td>
                  <td class="did-number">697-431-7827</td>
                  <td class="did-created">01-26-2018</td>
                  <td class="did-created-by"><div class="did-avatar"></div> <div class="did-name-fix">Eleanor Jensen</div></td>
                  <td class="did-country">Marshall</td>
                  <td class="did-type">Toll Free</td>
                  <td class="did-assigned"><div class="did-avatar"></div> <div class="did-name-fix">Stanley Powell</div></td>
                  <td class="did-option"><div class="did-control-info"><router-link :to="{ name: 'ResellerEditDIDs' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="did-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="did-online">
                  <td class="did-active"><div class="product-active"></div></td>
                  <td class="did-number">239-429-1353</td>
                  <td class="did-created">01-24-2018</td>
                  <td class="did-created-by"><div class="did-avatar"></div> <div class="did-name-fix">Evelyn Holland</div></td>
                  <td class="did-country">Angola</td>
                  <td class="did-type">Local</td>
                  <td class="did-assigned"><div class="did-avatar"></div> <div class="did-name-fix">Allen Roberts</div></td>
                  <td class="did-option"><div class="did-control-info"><router-link :to="{ name: 'ResellerEditDIDs' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="did-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="did-offline">
                  <td class="did-active"><div class="product-not-active"></div></td>
                  <td class="did-number">625-867-0083</td>
                  <td class="did-created">12-14-2018</td>
                  <td class="did-created-by"><div class="did-avatar"></div> <div class="did-name-fix">Polly Mitchell</div></td>
                  <td class="did-country">Dominican</td>
                  <td class="did-type">Local</td>
                  <td class="did-assigned"><div class="did-avatar"></div> <div class="did-name-fix">Susie Dean</div></td>
                  <td class="did-option"><div class="did-control-info"><router-link :to="{ name: 'ResellerEditDIDs' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="did-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="did-offline">
                  <td class="did-active"><div class="product-not-active"></div></td>
                  <td class="did-number">542-961-8296</td>
                  <td class="did-created">10-03-2018</td>
                  <td class="did-created-by"><div class="did-avatar"></div> <div class="did-name-fix">Winnie Medina</div></td>
                  <td class="did-country">Isle of Man</td>
                  <td class="did-type">Local</td>
                  <td class="did-assigned"><div class="did-avatar"></div> <div class="did-name-fix">Peter Nelson</div></td>
                  <td class="did-option"><div class="did-control-info"><router-link :to="{ name: 'ResellerEditDIDs' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="did-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
              </tbody>
            </table>
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
.navbar{
  height: 50px;
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: inset 0 1px 0 0 #F8F9FE;
}
.nav-text{
  color: #BDBFD8;
  font-family: "Circular Std";
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  text-align: center;
  margin-top: 15px;
}
.nav-text#active{
  color: #51A3F3;
  font-weight: 500;
}
a{
  text-decoration: none;
}
.nav-link-1{
  display: inline-block;
  float: left;
  height: 50px;
  width: 90px;
  margin-left: 20px;
}
.nav-line-bill-1{
  border-bottom: 2px solid #51A3F3;
  width: 90px;
  margin-top: 13px;
}
.nav-link-2{
  display: inline-block;
  float: left;
  height: 50px;
  width: 120px;
}
.nav-link-3{
  display: inline-block;
  float: left;
  height: 50px;
  width: 120px;
}

.did-name-fix{
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
}
.did-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.undo-title{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  display: inline-block;
  float: right;
  margin-top: 5px;
  margin-right: 30px;
}
.undo-image{
  display: inline-block;
  float: right;
  margin-right: 15px;
}
.undo-undo{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  display: inline-block;
  float: right;
  margin-top: 5px;
  margin-right: 15px;
}
.svg-blue path{
  fill: #51A3F3;
}
.svg-active path{
  fill: white;
}
.did-table{
  border: none;
  max-width: calc(100% - 10px);
  width: 100%;
  margin-top: 20px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  text-align: left;
}
.did-table-th{
  height: 37px;
}
.did-online{
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
  height: 50px;
}
.did-offline{
  background-color: #F0F1FA;
  box-shadow: inset 0 -1px 0 0 rgba(189,191,216,0.36);
  height: 50px;
}
.did-active{
  width: 20px;
  padding-left: 7px;
}
.did-number{
  width: 199px;
}
.did-created{
  width: 119px;
}
.did-created-by{
  width: 223px;
}
.did-country{
  width: 116px;
}
.did-type{
  width: 118px;
}
.did-assigned{
  width: 190px;
}
.did-option{
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
.did-control-info{
  width: 30px;
  height: 30px;
  float: left;
  margin-top: -10px;
}
.side a{
  text-decoration: none;
  color: #55616E;
}
.side#active a{
  text-decoration: none;
  color: #FFFFFF;
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
.did-input-search{
  max-width: calc(30.2631578947% - 43px);
  width: 100%;
  height: 40px !important;
  padding-left: 40px;
  margin-left: 20px;
  margin-top: 20px;
}
button#did{
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
    float: right;
    margin-right: 20px;
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
.main-container{
  float: left;
  display: inline-block;
  width: calc(100% - 30px);
  margin-left: 20px;
  margin-right: 20px;
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
    .navi-head{
      display: none;
    }
    .navi-logo{
      max-width: 40.8333333333%;
      width: 100%;
    }
    .res-div{
      display: inline-block;
    }
    .did-input-search{
      max-width: calc(100% - 80px);
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
</style>
