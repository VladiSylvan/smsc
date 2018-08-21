<template>
    <div class="container">
      <navigation-component title="Vendors"></navigation-component>
      <div class="main-navi">
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
      </div>
      <div class="main">
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
                  <td class="vendor-rate-active"><div class="vendor-active-circle"></div></th>
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
                  <td class="vendor-rate-active"><div class="vendor-active-circle"></div></th>
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
