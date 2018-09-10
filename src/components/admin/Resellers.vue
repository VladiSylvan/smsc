<template>
    <div class="container">
      <navigation-component title="Resellers"></navigation-component>
      <div class="main-navi">
        <div class="res-div">
          <div class="head-title">
            Resellers
          </div>
        </div>
          <input class="reseller-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="search" placeholder="Search for reseller">
          <router-link :to="{ name: 'AddReseller'}"><button id="reseller" type="submit">Add Reseller</button></router-link>
        </div>
        <div class="main">
          <div class="main-container">
            <div v-if="this.$route.params.successMsg != null">
              <h5 style="color: green; text-align: center;">
                {{ this.$route.params.successMsg }}
              </h5>
            </div>
            <div v-if="successMsg != null">
              <h5 style="color: green; text-align: center;">
                {{ successMsg }}
              </h5>
            </div>
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
                  <td class="reseller-name"><div class="reseller-avatar"><img v-if="reseller.contact.logo_file_uuid != null" class="image-resize" :src="getLogo(reseller.contact.logo_file_uuid)"></div> <div class="reseller-name-fix">{{ reseller.reseller_name }}</div></td>
                  <td class="reseller-balance"><b>$38</b></td>
                  <td class="reseller-clients">70</td>
                  <td class="reseller-member-since">10-03-2018</td>
                  <td class="reseller-option"><div class="product-control-info"><router-link :to="{ name: 'EditReseller', params: { id: reseller.reseller_uuid }}"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="reseller-option"><div class="product-control-info"><img v-on:click="resellerDelete(reseller.reseller_uuid, reseller.reseller_name, index)" class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
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
            <div class="pagination">
              <button type="button" id="previousPage" @click="previousPage()" disabled>Previous</button>
              <button type="button" id="nextPage" @click="nextPage()">Next</button>
            </div>
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
          successMsg: '',
          del: false,
          search: '',
          totalPages: 0,
          pageNumber: 0,
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
      this.getData()
    },
    watch: {
      search: function (val) {
        var app = this
        this.axios.all([
          this.axios.get('reseller/list?reseller_name=*' + val + '*'),
        ]).then( this.axios.spread((resellers) => {
          app.resellers = resellers.data.payload.items
        })).catch(error => {
          console.log(error)
        })
      },
    },
    methods:{
        getData(page = 0){
          this.axios.get('reseller/list?page=' + page).then(res => {
            this.resellers = res.data.payload.items
            this.totalPages = Math.floor(res.data.payload.total / res.data.payload.per_page)
            if(this.totalPages == 0){
              document.getElementById('nextPage').setAttribute('disabled', 'disabled')
            }
          }).catch(err => {
            console.log(err)
          })
        },
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        },
        resellerDelete(value, name, index){
          var r = confirm("Do you really want to delete " + name + " reseller?");
          if(r == true){
            var app = this
            this.axios.delete('reseller/' + value).then( res => {
                this.resellers.splice(index, 1)
                this.$route.params.successMsg = null
                this.successMsg = 'OK'
            }).catch( err => {
                var app = this

                app.errorMsg = err.response.data.error.message
                app.error = true
                console.log(err.response)
            })
          }
        },
        getLogo(value){
          var logo = "http://88.198.219.62/api_smsc/v1/file/" + value
          return logo
        },
        nextPage(){
          this.pageNumber++;
          document.getElementById('previousPage').removeAttribute('disabled')
          if(this.pageNumber == this.totalPages){
            document.getElementById('nextPage').setAttribute('disabled', 'disabled')
          }
          this.getData(this.pageNumber)
        },
        previousPage(){
          this.pageNumber--
          if(this.pageNumber == 0){
            document.getElementById('previousPage').setAttribute('disabled', 'disabled')
          }
          if(this.pageNumber < this.totalPages){
            document.getElementById('nextPage').removeAttribute('disabled')
          }
          this.getData(this.pageNumber)
        }
    },
}
</script>
