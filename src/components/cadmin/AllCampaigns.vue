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
            <div id="active" class="nav-text">
              All Campaigns
              <div class="camp-nav-line-bill-2"></div>
            </div>
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
            <table class="camp-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr class="camp-table-th">
                  <th class="camp-active"></th>
                  <th class="camp-name">Campaign Name</th>
                  <th class="camp-type">Type</th>
                  <th class="camp-user">User</th>
                  <th class="camp-time">Start time</th>
                  <th class="camp-total">Total</th>
                  <th class="camp-messages">Messages</th>
                  <th class="camp-sent">Sent</th>
                  <th class="camp-suppressed">Suppressed</th>
                  <th class="camp-error">Error</th>
                  <th class="camp-cost">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr class="camp-online">
                  <td class="camp-active"><div class="camp-yellow"></div></td>
                  <td class="camp-name">Margretville</td>
                  <td class="camp-type">Auto</td>
                  <td class="camp-user">San Marino</td>
                  <td class="camp-time">10:44PM</td>
                  <td class="camp-total">491</td>
                  <td class="camp-messages">55</td>
                  <td class="camp-sent">42</td>
                  <td class="camp-suppressed">1</td>
                  <td class="camp-error">0</td>
                  <td class="camp-cost">$39.8</td>
                </tr>
                <tr class="camp-online">
                  <td class="camp-active"><div class="camp-green"></div></td>
                  <td class="camp-name">Kaliville</td>
                  <td class="camp-type">10-12-2018</td>
                  <td class="camp-user">Logan Russell</td>
                  <td class="camp-time">02:57AM</td>
                  <td class="camp-total">512</td>
                  <td class="camp-messages">44</td>
                  <td class="camp-sent">81</td>
                  <td class="camp-suppressed">0</td>
                  <td class="camp-error">1</td>
                  <td class="camp-cost">$8.65</td>
                </tr>
                <tr class="camp-online">
                  <td class="camp-active"><div class="camp-blue"></div></td>
                  <td class="camp-name">Jamalhaven</td>
                  <td class="camp-type">02-25-2018</td>
                  <td class="camp-user">Paul Todd</td>
                  <td class="camp-time">03:47PM</td>
                  <td class="camp-total">600</td>
                  <td class="camp-messages">33</td>
                  <td class="camp-sent">64</td>
                  <td class="camp-suppressed">1</td>
                  <td class="camp-error">1</td>
                  <td class="camp-cost">$61.67</td>
                </tr>
                <tr class="camp-online">
                  <td class="camp-active"><div class="camp-green"></div></td>
                  <td class="camp-name">New Prudenceburgh</td>
                  <td class="camp-type">05-17-2018</td>
                  <td class="camp-user">Lucas Wallace</td>
                  <td class="camp-time">10:31AM</td>
                  <td class="camp-total">380</td>
                  <td class="camp-messages">63</td>
                  <td class="camp-sent">3</td>
                  <td class="camp-suppressed">0</td>
                  <td class="camp-error">1</td>
                  <td class="camp-cost">$98.54</td>
                </tr>
                <tr class="camp-offline">
                  <td class="camp-active"><div class="camp-red"></div></td>
                  <td class="camp-name">New Theaville</td>
                  <td class="camp-type">06-19-2018</td>
                  <td class="camp-user">Willie Collins</td>
                  <td class="camp-time">08:21AM</td>
                  <td class="camp-total">416</td>
                  <td class="camp-messages">53</td>
                  <td class="camp-sent">48</td>
                  <td class="camp-suppressed">1</td>
                  <td class="camp-error">1</td>
                  <td class="camp-cost">$6.44</td>
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
