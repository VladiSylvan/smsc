<template>
    <div class="container">
      <navigation-component title="Vendors"></navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Vendors
          </div>
        </div>
        <router-link :to="{ name: 'Vendors'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Vendors
          </div>
        </router-link>
        <div class="add-vendor-rate">
          <div class="vendor-rate-main">
            <div class="vendor-add-title">
              Rate deck
            </div>
            <table class="vendors-rate-table">
              <thead>
                <tr class="vendor-rate-tr">
                  <th class="vendor-rate-active"></th>
                  <th class="vendor-country">Country</th>
                  <th class="vendor-operator">Operator</th>
                  <th class="vendor-sell-rate">Sell Rate</th>
                  <th class="vendor-vendors-th">Vendors</th>
                </tr>
              </thead>
              <tbody>
                <tr class="vendor-rate-tr">
                  <th class="vendor-rate-active"><div class="vendor-active-circle"></div></th>
                  <td class="vendor-country">China</td>
                  <td class="vendor-operator">China Mobile</td>
                  <td class="vendor-sell-rate">0.001</td>
                  <td class="vendor-vendors">
                    <div class="vendor-table">
                      <div class="vendor-table-text">
                        Vendor BB
                      </div>
                      <div class="vendors-info-bar">0.0008</div>
                      <div class="vendor-table-text">
                        Vendor CC
                      </div>
                      <div class="vendors-info-bar">0.0009</div>
                    </div>
                  </td>
                </tr>
                <tr class="vendor-rate-tr">
                  <th class="vendor-rate-active"><div class="vendor-active-circle"></div></th>
                  <td class="vendor-country">China</td>
                  <td class="vendor-operator">China Unicom</td>
                  <td class="vendor-sell-rate">0.0012</td>
                  <td class="vendor-vendors">
                    <div class="vendor-table">
                      <div class="vendor-table-text">
                        Vendor BB
                      </div>
                      <div class="vendors-info-bar">0.0008</div>
                      <div class="vendor-table-text">
                        Vendor CC
                      </div>
                      <div class="vendors-info-bar">0.0009</div>
                    </div>
                  </td>
                </tr>
                <tr class="vendor-rate-tr">
                  <th class="vendor-rate-active"><div class="vendor-not-active-circle"></div></th>
                  <td class="vendor-country">United States</td>
                  <td class="vendor-operator">AT & T</td>
                  <td class="vendor-sell-rate">0.0003</td>
                  <td class="vendor-vendors">
                    <div class="vendor-table">
                      <div class="vendor-table-text">
                        Vendor BB
                      </div>
                      <div class="vendors-info-bar">0.0008</div>
                      <div class="vendor-table-text">
                        Vendor CC
                      </div>
                      <div class="vendors-info-bar">0.0009</div>
                    </div>
                  </td>
                </tr>
                <tr class="vendor-rate-tr">
                  <th class="vendor-rate-active"><div class="vendor-active-circle"></div></th>
                  <td class="vendor-country">China</td>
                  <td class="vendor-operator">China Unicom</td>
                  <td class="vendor-sell-rate">0.0012</td>
                  <td class="vendor-vendors">
                    <div class="vendor-table">
                      <div class="vendor-table-text">
                        Vendor BB
                      </div>
                      <div class="vendors-info-bar">0.0008</div>
                      <div class="vendor-table-text">
                        Vendor CC
                      </div>
                      <div class="vendors-info-bar">0.0009</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div id="app">
        <modal v-show="isModalVisible" @close="closeModal"/>
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
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            },

        }
    },
    components:{
      modal,
      NavigationComponent,
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
.vendor-table{
  width: 145px;
}
.vendor-table-text{
  display: inline-block;
  float: left;
  width: 80px;
  margin-bottom: 5px;
}
.vendors-info-bar{
  	height: 18px;
    width: 60px;
    border: 1px solid #BDBFD8;
    border-radius: 4px;
    background-color: #FFFFFF;
    color: #55616E;
    font-family: "Circular Std";
    font-size: 11px;
    font-weight: 300;
    line-height: 15px;
    text-align: center;
    display: inline-block;
    float: left;
    margin-bottom: 5px;
}
.vendor-name-fix{
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
}
.vendor-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.add-vendor-rate{
  float: left;
  display: inline-block;
  background-color: #FFFFFF;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
}
.vendor-rate-main{
  display: inline-block;
  float: left;
  max-width: 100%;
  width: 100%;
}
.vendor-add-title{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin: 15px;
}
.vendor-rate-table{
  border: none;
  max-width: 100%;
  width: 100%;
}
.vendor-rate-tr{
  height: 44px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.vendor-rate-active{
  width: 18px;
  padding-left: 8px;
  vertical-align: text-top;
}
.vendor-country{
  width: 133px;
  vertical-align: text-top;
  padding-top: 14px;
}
.vendor-operator{
  width: 150px;
  vertical-align: text-top;
}
.vendor-sell-rate{
  width: 121px;
  vertical-align: text-top;
}
.vendor-vendors{
  width: 661px;
}
.vendor-vendors-th{
  width: 661px;
}

.vendor-active-circle{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #24E2B8;
  float: left;
  margin-left: 3px;
}
.vendor-not-active-circle{
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
}
input[type="text"]#vendor-search{
  width: 345px;
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
@media only screen and (max-width: 1200px) {
    .navi-head{
      display: none;
    }
    .navi-logo{
      max-width: 40.8333333333%;
      width: 100%;
    }
    .vendor-input-search{
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
