<template>
    <div class="container">
      <nav class="navigation">
        <div class="navi-logo">
          <div v-if="show" v-on:click="show = !show" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Menu/Close.svg') + ')' }" class="navi-circle-close"></div>
          <div v-if="show" v-on:click="show = !show" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Menu/Close.svg') + ')' }" class="navi-circle-open"></div>
          <div v-if="!show" v-bind:class="{'navi-circle-open-menu': !show}" v-on:click="show = !show" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Menu/Close.svg') + ')' }" class="navi-circle-open"></div>
          <img class="logo" src="@/assets/logo.png">
          <img class="logo-small" src="@/assets/logo-min.png">
        </div>
        <div class="navi-head">
          <div class="head-title">
            Campaigns
          </div>
        </div>
        <div class="navi-user">
          <div v-if="popup" class="user-menu">
            <div v-on:click="popup = !popup" class="username">
              Andrew Turner
            </div>
            <div v-on:click="popup = !popup" class="user-circle"><span id="avatar">A</span></div>
            <img class="popup-image-box" src="@/assets/Icon/Users.svg">
            <span id="popup-link">Profile</span>
            <img class="popup-image-box" src="@/assets/Icon/Settings.svg">
            <span id="popup-link">Settings</span>
            <div class="popup-title">
              Switch to
            </div>
            <img class="popup-image-box" src="@/assets/Icon/Dashboard.svg">
            <span id="popup-link">System Admin</span>
            <img class="popup-image-box" src="@/assets/Icon/Reseller.svg">
            <span id="popup-link">Reseller Portal</span>
            <div class="popup-image-box">
              <svg class="svg-blue" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M24.3729268,11.5098362 C24.6872358,11.5098362 24.9420325,11.7664181 24.9420325,12.0830302 C24.9420325,12.3996422 24.6872358,12.656306 24.3729268,12.656306 L23.8378862,12.656306 L23.8378862,24.3593233 C23.8378862,24.6759353 23.5830894,24.9325991 23.2687805,24.9325991 L6.67325203,24.9325991 C6.35894309,24.9325991 6.10414634,24.6759353 6.10414634,24.3593233 L6.10414634,12.656306 L5.56910569,12.656306 C5.25479675,12.656306 5,12.3996422 5,12.0830302 C5,11.7664181 5.25479675,11.5097543 5.56910569,11.5097543 L9.78341463,11.5097543 L9.78341463,6.58220259 C9.78341463,6.26559052 10.0382114,6.00892672 10.3525203,6.00892672 L19.5895122,6.00892672 C19.9038211,6.00892672 20.1586179,6.26559052 20.1586179,6.58220259 L20.1586179,11.5098362 L24.3729268,11.5098362 Z M17.7754472,23.7861293 L17.7754472,22.8598793 L15.5401626,22.8598793 L15.5401626,23.7212672 C15.5401626,23.7432155 15.5386179,23.7648362 15.5362602,23.7861293 L17.7754472,23.7861293 Z M14.4057724,23.7861293 C14.4034146,23.7647543 14.4019512,23.7432155 14.4018699,23.7212672 L14.4018699,22.8598793 L12.1665854,22.8598793 L12.1665854,23.7861293 L14.4057724,23.7861293 Z M18.9136585,23.7861293 L22.6996748,23.7861293 L22.6996748,12.6563879 L7.24235772,12.6563879 L7.24235772,23.7861293 L11.028374,23.7861293 L11.028374,22.2866034 C11.028374,21.9699914 11.2831707,21.7133276 11.5974797,21.7133276 L18.3445528,21.7133276 C18.6588618,21.7133276 18.9136585,21.9699914 18.9136585,22.2866034 L18.9136585,23.7861293 Z M10.921626,7.15547845 L10.921626,11.5097543 L19.0204065,11.5097543 L19.0204065,7.15547845 L10.921626,7.15547845 Z M9.39243902,17.497375 C9.70682927,17.497375 9.96154472,17.7540388 9.96154472,18.0706509 L9.96154472,19.0657759 C9.96154472,19.3823879 9.70674797,19.6390517 9.39243902,19.6390517 C9.07813008,19.6390517 8.82333333,19.3823879 8.82333333,19.0657759 L8.82333333,18.0706509 C8.82333333,17.7540388 9.07813008,17.497375 9.39243902,17.497375 Z M11.6689431,17.497375 C11.9833333,17.497375 12.2380488,17.7540388 12.2380488,18.0706509 L12.2380488,19.0657759 C12.2380488,19.3823879 11.983252,19.6390517 11.6689431,19.6390517 C11.3546341,19.6390517 11.0998374,19.3823879 11.0998374,19.0657759 L11.0998374,18.0706509 C11.0998374,17.7540388 11.3546341,17.497375 11.6689431,17.497375 Z M13.9455285,17.497375 C14.2598374,17.497375 14.5146341,17.7540388 14.5146341,18.0706509 L14.5146341,19.0657759 C14.5146341,19.3823879 14.2598374,19.6390517 13.9455285,19.6390517 C13.6312195,19.6390517 13.3764228,19.3823879 13.3764228,19.0657759 L13.3764228,18.0706509 C13.3764228,17.7540388 13.6312195,17.497375 13.9455285,17.497375 Z M15.9965041,17.497375 C16.310813,17.497375 16.5656098,17.7540388 16.5656098,18.0706509 L16.5656098,19.0657759 C16.5656098,19.3823879 16.310813,19.6390517 15.9965041,19.6390517 C15.6821951,19.6390517 15.4273984,19.3823879 15.4273984,19.0657759 L15.4273984,18.0706509 C15.4273984,17.7540388 15.6821951,17.497375 15.9965041,17.497375 Z M18.2730894,17.497375 C18.5873984,17.497375 18.8421951,17.7540388 18.8421951,18.0706509 L18.8421951,19.0657759 C18.8421951,19.3823879 18.5873984,19.6390517 18.2730894,19.6390517 C17.9587805,19.6390517 17.7039837,19.3823879 17.7039837,19.0657759 L17.7039837,18.0706509 C17.7039837,17.7540388 17.9587805,17.497375 18.2730894,17.497375 Z M20.5495935,17.497375 C20.8639024,17.497375 21.1186992,17.7540388 21.1186992,18.0706509 L21.1186992,19.0657759 C21.1186992,19.3823879 20.8639024,19.6390517 20.5495935,19.6390517 C20.2352846,19.6390517 19.9804878,19.3823879 19.9804878,19.0657759 L19.9804878,18.0706509 C19.9804878,17.7540388 20.2352846,17.497375 20.5495935,17.497375 Z M9.39243902,14.2972672 C9.70682927,14.2972672 9.96154472,14.553931 9.96154472,14.8705431 L9.96154472,15.8656681 C9.96154472,16.1822802 9.70674797,16.438944 9.39243902,16.438944 C9.07813008,16.438944 8.82333333,16.1822802 8.82333333,15.8656681 L8.82333333,14.8705431 C8.82333333,14.553931 9.07813008,14.2972672 9.39243902,14.2972672 Z M11.6689431,14.2972672 C11.9833333,14.2972672 12.2380488,14.553931 12.2380488,14.8705431 L12.2380488,15.8656681 C12.2380488,16.1822802 11.983252,16.438944 11.6689431,16.438944 C11.3546341,16.438944 11.0998374,16.1822802 11.0998374,15.8656681 L11.0998374,14.8705431 C11.0998374,14.553931 11.3546341,14.2972672 11.6689431,14.2972672 Z M13.9455285,14.2972672 C14.2598374,14.2972672 14.5146341,14.553931 14.5146341,14.8705431 L14.5146341,15.8656681 C14.5146341,16.1822802 14.2598374,16.438944 13.9455285,16.438944 C13.6312195,16.438944 13.3764228,16.1822802 13.3764228,15.8656681 L13.3764228,14.8705431 C13.3764228,14.553931 13.6312195,14.2972672 13.9455285,14.2972672 Z M15.9965041,14.2972672 C16.310813,14.2972672 16.5656098,14.553931 16.5656098,14.8705431 L16.5656098,15.8656681 C16.5656098,16.1822802 16.310813,16.438944 15.9965041,16.438944 C15.6821951,16.438944 15.4273984,16.1822802 15.4273984,15.8656681 L15.4273984,14.8705431 C15.4273984,14.553931 15.6821951,14.2972672 15.9965041,14.2972672 Z M18.2730894,14.2972672 C18.5873984,14.2972672 18.8421951,14.553931 18.8421951,14.8705431 L18.8421951,15.8656681 C18.8421951,16.1822802 18.5873984,16.438944 18.2730894,16.438944 C17.9587805,16.438944 17.7039837,16.1822802 17.7039837,15.8656681 L17.7039837,14.8705431 C17.7039837,14.553931 17.9587805,14.2972672 18.2730894,14.2972672 Z M20.5495935,14.2972672 C20.8639024,14.2972672 21.1186992,14.553931 21.1186992,14.8705431 L21.1186992,15.8656681 C21.1186992,16.1822802 20.8639024,16.438944 20.5495935,16.438944 C20.2352846,16.438944 19.9804878,16.1822802 19.9804878,15.8656681 L19.9804878,14.8705431 C19.9804878,14.553931 20.2352846,14.2972672 20.5495935,14.2972672 Z M12.6944715,8.44166379 C13.0087805,8.44166379 13.2635772,8.69832759 13.2635772,9.01493966 L13.2635772,10.0100647 C13.2635772,10.3266767 13.0087805,10.5833405 12.6944715,10.5833405 C12.3801626,10.5833405 12.1253659,10.3266767 12.1253659,10.0100647 L12.1253659,9.01493966 C12.1253659,8.69832759 12.3801626,8.44166379 12.6944715,8.44166379 Z M14.9710569,8.44166379 C15.2853659,8.44166379 15.5401626,8.69832759 15.5401626,9.01493966 L15.5401626,10.0100647 C15.5401626,10.3266767 15.2853659,10.5833405 14.9710569,10.5833405 C14.656748,10.5833405 14.4019512,10.3266767 14.4019512,10.0100647 L14.4019512,9.01493966 C14.4019512,8.69832759 14.656748,8.44166379 14.9710569,8.44166379 Z M17.2476423,8.44166379 C17.5619512,8.44166379 17.816748,8.69832759 17.816748,9.01493966 L17.816748,10.0100647 C17.816748,10.3266767 17.5619512,10.5833405 17.2476423,10.5833405 C16.9333333,10.5833405 16.6785366,10.3266767 16.6785366,10.0100647 L16.6785366,9.01493966 C16.6785366,8.69832759 16.9333333,8.44166379 17.2476423,8.44166379 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span id="popup-link-active">Appolo Inc.</span>
            <div class="popup-logout">
              <img class="popup-image-box" src="@/assets/Icon/Arrow/Right.svg">
              <span id="popup-link">Log out</span>
            </div>
          </div>
          <div v-on:click="popup = !popup" class="username">
            Andrew Turner
          </div>
          <div v-on:click="popup = !popup" class="user-circle"><span id="avatar">A</span></div>
        </div>
      </nav>
      <transition name="fade">
      <ul v-bind:class="{'sidebar-hide': !show}" >
        <li>
          <router-link :to="{ name: 'Alert'}">
            <img class="image-box" src="@/assets/Icon/Alerts.svg">
            <span v-if="show" class="side-link">Alert</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'SMSCenter'}">
            <img class="image-box" src="@/assets/Icon/Vendors.svg">
            <span v-if="show" class="side-link">SMS Center</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'CompanyTemplate'}">
            <img class="image-box" src="@/assets/Icon/Template.svg">
            <span v-if="show" class="side-link">Templates</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'CompanyBilling'}">
            <img class="image-box" src="@/assets/Icon/Billing.svg">
            <span v-if="show" class="side-link">Billing</span>
          </router-link>
        </li>
        <div v-if="show" class="side-title">
          Manage
        </div>
        <li>
          <router-link :to="{ name: 'CompanyDIDs'}">
            <img class="image-box" src="@/assets/Icon/DID.svg">
            <span v-if="show" class="side-link">DIDs</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'CompanySMSWorkflow'}">
            <img class="image-box" src="@/assets/Icon/SMS Flow.svg">
            <span v-if="show" class="side-link">SMS Workflow</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'CompanyReminderWorkflow'}">
            <img class="image-box" src="@/assets/Icon/Alerts.svg">
            <span v-if="show" class="side-link">Reminder Workflow</span>
          </router-link>
        </li>
        <li id="active">
          <router-link :to="{ name: 'CompanyCampaigns'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M24.302168,8.01773234 L5.67750678,8.01773234 C5.30336043,8.01773234 5,8.32983271 5,8.71475836 L5,22.2642751 C5,22.649145 5.30336043,22.9613011 5.67750678,22.9613011 L24.302168,22.9613011 C24.6762602,22.9613011 24.9796748,22.649145 24.9796748,22.2642751 L24.9796748,8.71475836 C24.9796748,8.32988848 24.6762602,8.01773234 24.302168,8.01773234 Z M23.6246612,21.5673048 L6.35501355,21.5673048 L6.35501355,9.41178439 L23.6246612,9.41178439 L23.6246612,21.5673048 Z M8.1303523,12.695223 L14.6344173,16.8181041 C14.7433604,16.8871933 14.8665583,16.92171 14.9898103,16.92171 C15.1130623,16.92171 15.2362602,16.8871933 15.3452033,16.8181041 L21.8492683,12.695223 C22.1678049,12.4933086 22.2669919,12.0638848 22.0707317,11.736171 C21.8744715,11.4084572 21.4569648,11.3064126 21.1385366,11.5083829 L14.9898103,15.4059294 L8.84113821,11.5083829 C8.52271003,11.3065799 8.10531165,11.4084015 7.90894309,11.736171 C7.71262873,12.063829 7.81176152,12.4933086 8.1303523,12.695223 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span v-if="show" class="side-link" id="active">Campaigns</span>
          </router-link>
        </li>
      </ul>
      </transition>
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
      modal
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
.camp-nav-link-1{
  display: inline-block;
  float: left;
  height: 50px;
  width: 105px;
  margin-left: 20px;
}
.camp-nav-line-bill-2{
  border-bottom: 2px solid #51A3F3;
  width: 130px;
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
.camp-table{
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
.camp-table-th{
  height: 37px;
}
.camp-online{
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
  height: 50px;
}
.camp-offline{
  background-color: #F0F1FA;
  box-shadow: inset 0 -1px 0 0 rgba(189,191,216,0.36);
  height: 50px;
}
.camp-active{
  width: 20px;
  padding-left: 7px;
}
.camp-name{
  width: 210px;
}
.camp-type{
  width: 110px;
}
.camp-user{
  width: 188px;
}
.camp-time{
  width: 95px;
}
.camp-total{
  width: 70px;
}
.camp-messages{
  width: 80px;
}
.camp-sent{
  width: 60px;
}
.camp-suppressed{
  width: 100px;
}
.camp-error{
  width: 70px;
}
.camp-cost{
  width: 84px;
}

.camp-yellow{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #FFC941;
  float: left;
  margin-left: 3px;
}
.camp-green{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #24E2B8;
  float: left;
  margin-left: 3px;
}
.camp-blue{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #51A3F3;
  float: left;
  margin-left: 3px;
}
.camp-red{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #D2305B;
  float: left;
  margin-left: 3px;
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
  width: 302px;
  height: 40px !important;
  padding-left: 40px;
  margin-left: 20px;
  margin-top: 20px;
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
#avatar{
  	font-family: "Helvetica Neue";
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 15px;
    text-align: center;
    margin-left: 11px;
    margin-top: 7px;
    display: inline-block;
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


.user-menu{
	height: auto;
	width: 228px;
	background-color: #FFFFFF;
	box-shadow: 0 10px 40px 0 rgba(0,0,0,0.1);
  vertical-align: top;
  position: fixed;
  z-index: 999999;
  float: right;
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
.user-circle{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 10px;
  margin-bottom: 15px;
  margin-right: 15px;
  float: left;
}
.username{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 15px;
  line-height: 20px;
  text-align: left;
  margin-top: 20px;
  float: left;
  margin-left: 50px;
}
.navi-head{
  max-width: 560px;
  display: inline-block;
  width: auto;
}
.navi-user{
  max-width: 228px;
  float: right;
  display: inline-block;
  width: auto;
}
.popup-logout{
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-bottom: 15px;
}
#popup-link{
  	height: 20px;
    width: 158px;
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 20px;
    display: inline-block;
    margin-top: 15px;
    cursor: pointer;
}
#popup-link-active{
  	height: 20px;
    width: 158px;
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 20px;
    display: inline-block;
    margin-top: 15px;
    color: #51A3F3;
}
.popup-image-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 10px;
}
.popup-title{
  	height: 30px;
    width: 198px;
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
    .res-div{
      display: inline-block;
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
@media only screen and (max-width: 390px) {
    .username{
      display: none;
    }
}
</style>
