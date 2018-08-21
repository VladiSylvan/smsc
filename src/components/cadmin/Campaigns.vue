<template>
    <div class="container">
      <company-navigation-component title="Campaigns"></company-navigation-component>
      <div class="main-navi">
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
        </div>
        <div class="main">
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
