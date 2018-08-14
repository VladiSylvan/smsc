<template>
    <div class="container">
      <navigation-component title="Resellers"></navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Resellers
          </div>
        </div>
          <input class="reseller-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchReseller" placeholder="Search for reseller">
          <router-link :to="{ name: 'AddReseller'}"><button id="reseller" type="submit">Add Reseller</button></router-link>
          <div class="main-container">
            <table class="resellers-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <th class="reseller-name-th">Name</th>
                  <th class="reseller-balance-th">Balance</th>
                  <th class="reseller-clients-th">Clients</th>
                  <th class="reseller-member-since-th">Member Since</th>
                  <th class="reseller-option-th"></th>
                  <th class="reseller-option-th"></th>
                  <th class="reseller-option-th"></th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr v-if="!del">
                  <td class="reseller-name"><div class="reseller-avatar"></div> <div class="reseller-name-fix">San Marino</div></td>
                  <td class="reseller-balance"><b>$38</b></td>
                  <td class="reseller-clients">12</td>
                  <td class="reseller-member-since">10-03-2018</td>
                  <td class="reseller-option"><div class="product-control-info"><router-link :to="{ name: 'EditReseller'}"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="reseller-option"><div v-on:click="del = !del" class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="reseller-option">
                    <div v-on:click="test = !test" class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div>
                    <div v-if="test" class="reseller-menu">
                      <div class="reseller-menu-link">
                        <router-link :to="{ name: 'PaymentHistory'}">Payment History</router-link>
                        <div v-on:click="test = !test" class="reseller-menu-button">
                          <svg class="svg-blue" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M10,16 C9.44771525,16 9,15.5522847 9,15 C9,14.4477153 9.44771525,14 10,14 C10.5522847,14 11,14.4477153 11,15 C11,15.5522847 10.5522847,16 10,16 Z M15,16 C14.4477153,16 14,15.5522847 14,15 C14,14.4477153 14.4477153,14 15,14 C15.5522847,14 16,14.4477153 16,15 C16,15.5522847 15.5522847,16 15,16 Z M20,16 C19.4477153,16 19,15.5522847 19,15 C19,14.4477153 19.4477153,14 20,14 C20.5522847,14 21,14.4477153 21,15 C21,15.5522847 20.5522847,16 20,16 Z" id="path-1">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <div class="reseller-menu-link">
                        <router-link :to="{ name: 'InvoiceHistory'}">Invoice History</router-link>
                      </div>
                      <div class="reseller-menu-link">
                        <router-link :to="{ name: 'TransactionHistory'}">Transaction History</router-link>
                      </div>
                      <div class="reseller-menu-add">
                        <div class="reseller-span">
                          <router-link :to="{ name: 'AddManualPayment'}">Add Manual Payment</router-link>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr> -->
                <!-- <tr v-if="del">
                  <td class="reseller-name-del"><div class="reseller-avatar"></div> <div class="reseller-name-fix">San Marino</div></td>
                  <td class="reseller-balance-del"><b>$38</b></td>
                  <td class="reseller-clients-del">12</td>
                  <td class="reseller-options-del" colspan="4">
                    <div v-on:click="del = !del" class="undo-undo">
                      Undo
                    </div>
                    <div v-on:click="del = !del" class="undo-image">
                      <svg class="svg-blue" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M24.8570085,16.0184789 L23.2528205,13.9230423 C23.0359829,13.6396056 22.7180342,13.4770986 22.3805983,13.4770986 C22.0431624,13.4770986 21.7252137,13.6396901 21.5083761,13.9229577 L19.904188,16.0184789 C19.6905983,16.2976901 19.7461538,16.6951268 20.0284615,16.9063944 C20.3108547,17.1175775 20.712735,17.0625634 20.9264957,16.7836056 L21.8009402,15.6411549 C21.4876923,19.5962535 18.1326496,22.7198028 14.0535043,22.7198028 C9.76837607,22.7198028 6.28205128,19.2727606 6.28205128,15.035831 C6.28205128,10.7988169 9.76837607,7.35177465 14.0535897,7.35177465 C14.9361538,7.35177465 15.8017094,7.49678873 16.6264103,7.78267606 C16.9605128,7.8984507 17.3263248,7.72453521 17.4434188,7.39428169 C17.5605983,7.06402817 17.3847009,6.70233803 17.0505983,6.58647887 C16.0893162,6.2531831 15.0809402,6.08416901 14.0535897,6.08416901 C9.06145299,6.08416901 5,10.0998592 5,15.035831 C5,19.9717183 9.06145299,23.9874085 14.0535897,23.9874085 C18.7886325,23.9874085 22.6857265,20.3745634 23.0747009,15.7906479 L23.8347863,16.7836056 C23.9609402,16.9481408 24.1524786,17.0349296 24.3464103,17.0348451 C24.4811111,17.0348451 24.6170085,16.9930141 24.732735,16.9063944 C25.0150427,16.6951268 25.0705983,16.2976901 24.8570085,16.0184789 Z" id="path-1">
                        </path>
                      </svg>
                    </div>
                    <div class="undo-title">
                      Reseller Removed
                    </div>
                  </td>
                </tr> -->
                <tr v-for="reseller, index in resellers">
                  <td class="reseller-name"><div class="reseller-avatar"></div> <div class="reseller-name-fix">{{ reseller.reseller_name }}</div></td>
                  <td class="reseller-balance"><b>$38</b></td>
                  <td class="reseller-clients">70</td>
                  <td class="reseller-member-since">10-03-2018</td>
                  <td class="reseller-option"><div class="product-control-info"><router-link :to="{ name: 'EditReseller', params: { id: reseller.reseller_uuid }}"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="reseller-option"><div class="product-control-info"><img v-on:click="resellerDelete(reseller.reseller_uuid, index)" class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                  <td class="reseller-option">
                    <div v-on:click="test = reseller.reseller_uuid" class="product-control-info"><img class="control-box" src="@/assets/Icon/More.svg"></div>
                    <div v-if="test === reseller.reseller_uuid" class="reseller-menu">
                      <div class="reseller-menu-link">
                        <router-link :to="{ name: 'PaymentHistory'}">Payment History</router-link>
                        <div v-on:click="test = ''" class="reseller-menu-button">
                          <svg class="svg-blue" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M10,16 C9.44771525,16 9,15.5522847 9,15 C9,14.4477153 9.44771525,14 10,14 C10.5522847,14 11,14.4477153 11,15 C11,15.5522847 10.5522847,16 10,16 Z M15,16 C14.4477153,16 14,15.5522847 14,15 C14,14.4477153 14.4477153,14 15,14 C15.5522847,14 16,14.4477153 16,15 C16,15.5522847 15.5522847,16 15,16 Z M20,16 C19.4477153,16 19,15.5522847 19,15 C19,14.4477153 19.4477153,14 20,14 C20.5522847,14 21,14.4477153 21,15 C21,15.5522847 20.5522847,16 20,16 Z" id="path-1">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <div class="reseller-menu-link">
                        <router-link :to="{ name: 'InvoiceHistory'}">Invoice History</router-link>
                      </div>
                      <div class="reseller-menu-link">
                        <router-link :to="{ name: 'TransactionHistory'}">Transaction History</router-link>
                      </div>
                      <div class="reseller-menu-add">
                        <div class="reseller-span">
                          <router-link :to="{ name: 'AddManualPayment'}">Add Manual Payment</router-link>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
          test: '',
          del: false,
          isModalVisible: false,
          resellers: [],
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
    mounted(){
      var app = this
      this.axios.all([
        this.axios.get('reseller/list'),
      ]).then( this.axios.spread((resellers) => {
        console.log(resellers)
        app.resellers = resellers.data.payload.items
      })).catch(error => {
        console.log(error)
      })
    },
    methods:{
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        },
        resellerDelete(value, index){
          var app = this
          var value
          event.preventDefault();
          this.axios.delete('reseller/' + value).then( res => {
              // this.$router.push('/sys/resellers')
              this.resellers.splice(index, 1)
          }).catch( err => {
              var app = this

              app.errorMsg = err.response.data.error.message
              app.error = true
              console.log(err.response)
          })
        }
    },
}
</script>
<style>
.reseller-name-fix{
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
}
.reseller-avatar{
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
a{
  text-decoration: none;
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
}
.reseller-menu{
	height: 210px;
	width: 228px;
	background-color: #FFFFFF;
	box-shadow: 0 10px 40px 0 rgba(0,0,0,0.1);
  display: inline-block;
  vertical-align: top;
  position: fixed;
  z-index: 1;
  float: right;
  margin-left: -220px;
  margin-top: -35px;
}
.reseller-menu-link{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  margin-left: 15px;
  margin-right: 15px;
}
.reseller-menu-link:first-child{
  margin-top: 35px;
}
.reseller-span{
  padding-top: 10px;
  padding-left: 15px;
  color: #51A3F3;
}
.reseller-span a{
  color: #51A3F3;
}
.reseller-menu-add{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  background-color: #F8F9FE;
  cursor: pointer;
}
.reseller-menu-button{
  float: right;
  display: inline-block;
  margin-top: -5px;
  margin-right: -7px;
  cursor: pointer;
}
.resellers-table{
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
.reseller-name-th{
  width: 189px;
  padding-left: 15px;
  height: 37px;
}
.reseller-balance-th{
  width: 171px;
  height: 37px;
}
.reseller-clients-th{
  width: 190px;
  height: 37px;
}
.reseller-member-since-th{
  width: 383px;
  height: 37px;
}
.reseller-option-th{
  width: 49px;
  height: 37px;
}

.reseller-name{
  width: 189px;
  padding-left: 15px;
  height: 50px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.reseller-balance{
  width: 171px;
  height: 50px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.reseller-clients{
  width: 190px;
  height: 50px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.reseller-member-since{
  width: 383px;
  height: 50px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.reseller-option{
  width: 49px;
  height: 50px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}

.reseller-name-del{
  width: 169px;
  padding-left: 15px;
  background-color: #F0F1FA;
}
.reseller-balance-del{
  width: 171px;
  background-color: #F0F1FA;
}
.reseller-clients-del{
  width: 190px;
  background-color: #F0F1FA;
}
.reseller-member-since-del{
  width: 303px;
  background-color: #F0F1FA;
}
.reseller-options-del{
  width: 149px;
  background-color: #F0F1FA;
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
.reseller-input-search{
  width: 302px;
  height: 40px !important;
  padding-left: 40px;
  margin-left: 20px;
  margin-top: 20px;
}
button#reseller{
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
@media only screen and (max-width: 750px) {
    .main{
      max-width: 100%;
    }
}
</style>
