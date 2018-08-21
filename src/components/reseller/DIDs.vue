<template>
    <div class="container">
      <reseller-navigation-component title="DIDs"></reseller-navigation-component>
      <div class="main-navi">
        <div class="res-div">
          <div class="head-title">
            DIDs
          </div>
        </div>
          <input class="did-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchDID" placeholder="Search for DID">
          <router-link :to="{ name: 'ResellerDIDs'}"><button v-on:click="showModal()" id="did" type="submit">Buy DID</button></router-link>
        </div>
        <div class="main">
          <div class="main-container">
            <table class="did-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr class="did-table-th">
                  <th class="did-active"></th>
                  <th class="reseller-did-number">Number</th>
                  <th class="did-did"></th>
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
                  <td class="reseller-did-number">050-185-4229</td>
                  <td class="did-did"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/DID.svg"></div></td>
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
                  <td class="reseller-did-number">215-054-1288</td>
                  <td class="did-did"></td>
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
                  <td class="reseller-did-number">697-431-7827</td>
                  <td class="did-did"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/DID.svg"></div></td>
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
                  <td class="reseller-did-number">239-429-1353</td>
                  <td class="did-did"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/DID.svg"></div></td>
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
                  <td class="reseller-did-number">625-867-0083</td>
                  <td class="did-did"></td>
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
                  <td class="reseller-did-number">542-961-8296</td>
                  <td class="did-did"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/DID.svg"></div></td>
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
