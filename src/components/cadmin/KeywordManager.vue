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
            <router-link :to="{ name: 'CompanyCampaigns' }">
              <div class="nav-text">
                Dashboard
              </div>
            </router-link>
          </div>
          <div class="camp-nav-link-2">
            <router-link :to="{ name: 'AllCampaigns' }">
              <div class="nav-text">
                All Campaigns
              </div>
            </router-link>
          </div>
          <div class="camp-nav-link-3">
            <div id="active"  class="nav-text">
              Keyword Manager
              <div class="camp-nav-line-bill-3"></div>
            </div>
          </div>
        </div>
          <input class="did-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchDID" placeholder="Search for keyword">
          <router-link :to="{ name: 'AddKeyword'}"><button id="campaign" type="submit">Add Keyword</button></router-link>
          <div class="main-container">
            <table class="key-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr class="key-table-th">
                  <th class="key-active"></th>
                  <th class="key-keyword">Keyword</th>
                  <th class="key-description">Description</th>
                  <th class="key-option"></th>
                  <th class="key-option"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="key-online">
                  <td class="key-active"><div class="key-green"></div></td>
                  <td class="key-keyword">Port Dominique</td>
                  <td class="key-description">Steps In Installing Rack Mount Lcd Monitors</td>
                  <td class="key-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                  <td class="key-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="key-online">
                  <td class="key-active"><div class="key-green"></div></td>
                  <td class="key-keyword">Demarcoland</td>
                  <td class="key-description">Compare Prices Find The Best Computer Accessory</td>
                  <td class="key-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                  <td class="key-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="key-online">
                  <td class="key-active"><div class="key-green"></div></td>
                  <td class="key-keyword">West Tomasberg</td>
                  <td class="key-description">Download Free Song For Ipod</td>
                  <td class="key-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                  <td class="key-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="key-offline">
                  <td class="key-active"><div class="key-red"></div></td>
                  <td class="key-keyword">South Sigmund</td>
                  <td class="key-description">Popular Uses Of The Internet</td>
                  <td class="key-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                  <td class="key-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
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
