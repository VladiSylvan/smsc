<template>
    <div class="container">
      <company-navigation-component title="Campaigns"></company-navigation-component>
      <div class="main-add">
        <div class="res-div">
          <div class="head-title">
            Campaigns
          </div>
        </div>
        <router-link :to="{ name: 'AllCampaigns'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Campaigns
          </div>
        </router-link>
        <router-link :to="{ name: 'AddKeyword'}"><button id="product" type="submit">Schedule</button></router-link>
        <router-link :to="{ name: 'AllCampaigns'}"><button id="cancel" type="submit">Cancel</button></router-link>
        <div class="add-camp">
          <div class="camp-title">
            Schedule Campaign
          </div>
          <div class="camp-main">
            <div class="camp-grid-1">
              <div class="grid-title">
                Campaign name
              </div>
              <input class="grid-camp-input" type="text" v-model="user.campaignName" placeholder="Enter campaign name">
            </div>
            <div class="camp-grid-2">
              <div class="grid-title">
                Type
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Type" class="grid-camp-select" v-model="user.campType">
                <option value="Long Code">Long Code</option>
              </select>
            </div>
            <div class="camp-grid-4">
              <div class="grid-title">
                Phone Numbers
              </div>
              <input :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" class="grid-search" type="text" v-model="user.campSearchNumbers" placeholder="Search numbers">
              <div class="camp-title-small">
                Frequently used
              </div>
              <div style="clear: both;"></div>
              <div class="camp-used-1">
                <div class="camp-used-text">
                  295-635-6179
                </div>
                <div class="camp-used-delete">
                  <img class="rotate-plus" src="@/assets/Icon/Plus.svg">
                </div>
              </div>
              <div class="camp-used-2">
                <div class="camp-used-text">
                  760-926-2870
                </div>
                <div class="camp-used-delete">
                  <img class="rotate-plus" src="@/assets/Icon/Plus.svg">
                </div>
              </div>
              <div class="camp-used-3">
                <div class="camp-used-text">
                  883-277-0718
                </div>
                <div class="camp-used-delete">
                  <img class="rotate-plus" src="@/assets/Icon/Plus.svg">
                </div>
              </div>
              <div class="camp-selected-title">
                Selected
              </div>
              <div class="camp-selected-1">
                <div class="camp-selected-text">
                  942-103-2577
                </div>
                <div class="camp-selected-delete">
                  <svg class="selected-svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M14.9776692,5 C9.47601504,5 5,9.47593985 5,14.977594 C5,20.4792481 9.47593985,24.955188 14.977594,24.955188 C20.4792481,24.955188 24.9551128,20.4792481 24.9551128,14.977594 C24.9551128,9.47593985 20.4793233,5 14.9776692,5 Z M14.9776692,23.8273684 C10.0978195,23.8273684 6.12781955,19.8574436 6.12781955,14.977594 C6.12781955,10.0977444 10.0978195,6.12781955 14.9776692,6.12781955 C19.8573684,6.12781955 23.8273684,10.0978195 23.8273684,14.977594 C23.8273684,19.8573684 19.8573684,23.8273684 14.9776692,23.8273684 Z M18.4926901,14.3550877 L15.7499108,14.3550877 L15.7499108,11.6578947 C15.7499108,11.2944737 15.4504601,11 15.0808967,11 C14.7113333,11 14.4118826,11.2944737 14.4118826,11.6578947 L14.4118826,14.3550877 L11.6690141,14.3550877 C11.2994507,14.3550877 11,14.6495614 11,15.0129825 C11,15.3764035 11.2994507,15.6708772 11.6690141,15.6708772 L14.4117934,15.6708772 L14.4117934,18.3681579 C14.4117934,18.7315789 14.7112441,19.0260526 15.0808075,19.0260526 C15.4503709,19.0260526 15.7498216,18.7315789 15.7498216,18.3681579 L15.7498216,15.6708772 L18.4926009,15.6708772 C18.8621643,15.6708772 19.161615,15.3764035 19.161615,15.0129825 C19.161615,14.6495614 18.8621643,14.3550877 18.4926901,14.3550877 Z" id="path-1">
                    </path>
                  </svg>
                </div>
              </div>
              <div class="camp-selected-1">
                <div class="camp-selected-text">
                  769-684-0143
                </div>
                <div class="camp-selected-delete">
                  <svg class="selected-svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M14.9776692,5 C9.47601504,5 5,9.47593985 5,14.977594 C5,20.4792481 9.47593985,24.955188 14.977594,24.955188 C20.4792481,24.955188 24.9551128,20.4792481 24.9551128,14.977594 C24.9551128,9.47593985 20.4793233,5 14.9776692,5 Z M14.9776692,23.8273684 C10.0978195,23.8273684 6.12781955,19.8574436 6.12781955,14.977594 C6.12781955,10.0977444 10.0978195,6.12781955 14.9776692,6.12781955 C19.8573684,6.12781955 23.8273684,10.0978195 23.8273684,14.977594 C23.8273684,19.8573684 19.8573684,23.8273684 14.9776692,23.8273684 Z M18.4926901,14.3550877 L15.7499108,14.3550877 L15.7499108,11.6578947 C15.7499108,11.2944737 15.4504601,11 15.0808967,11 C14.7113333,11 14.4118826,11.2944737 14.4118826,11.6578947 L14.4118826,14.3550877 L11.6690141,14.3550877 C11.2994507,14.3550877 11,14.6495614 11,15.0129825 C11,15.3764035 11.2994507,15.6708772 11.6690141,15.6708772 L14.4117934,15.6708772 L14.4117934,18.3681579 C14.4117934,18.7315789 14.7112441,19.0260526 15.0808075,19.0260526 C15.4503709,19.0260526 15.7498216,18.7315789 15.7498216,18.3681579 L15.7498216,15.6708772 L18.4926009,15.6708772 C18.8621643,15.6708772 19.161615,15.3764035 19.161615,15.0129825 C19.161615,14.6495614 18.8621643,14.3550877 18.4926901,14.3550877 Z" id="path-1">
                    </path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="camp-second">
            <div class="camp-grid-5-first">
              <div class="grid-title">
                Start date
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="StartDate" class="grid-camp-select" v-model="user.campStartDate">
                <option value="DD MM YYYY">DD MM YYYY</option>
              </select>
            </div>
            <div class="camp-grid-5-second">
              <div class="grid-title">
                List
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="List" class="grid-camp-select" v-model="user.campList">
                <option value="Select Recipient List">Select Recipient List</option>
              </select>
            </div>
            <div class="camp-grid-4">
              <div class="grid-title">
                Groups/Routes:
              </div>
              <input :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" class="grid-search" type="text" v-model="user.campGroupsRoutes" placeholder="Search groups">
              <div class="camp-title-small">
                Frequently used
              </div>
              <div style="clear: both;"></div>
              <div class="camp-used-3">
                <div class="camp-used-text">
                  Group Name
                </div>
                <div class="camp-used-delete">
                  <img class="rotate-plus" src="@/assets/Icon/Plus.svg">
                </div>
              </div>
              <div class="camp-selected-title">
                Selected
              </div>
              <div class="camp-selected-1">
                <div class="camp-selected-text">
                  Group 1 Name
                </div>
                <div class="camp-selected-delete">
                  <svg class="selected-svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M14.9776692,5 C9.47601504,5 5,9.47593985 5,14.977594 C5,20.4792481 9.47593985,24.955188 14.977594,24.955188 C20.4792481,24.955188 24.9551128,20.4792481 24.9551128,14.977594 C24.9551128,9.47593985 20.4793233,5 14.9776692,5 Z M14.9776692,23.8273684 C10.0978195,23.8273684 6.12781955,19.8574436 6.12781955,14.977594 C6.12781955,10.0977444 10.0978195,6.12781955 14.9776692,6.12781955 C19.8573684,6.12781955 23.8273684,10.0978195 23.8273684,14.977594 C23.8273684,19.8573684 19.8573684,23.8273684 14.9776692,23.8273684 Z M18.4926901,14.3550877 L15.7499108,14.3550877 L15.7499108,11.6578947 C15.7499108,11.2944737 15.4504601,11 15.0808967,11 C14.7113333,11 14.4118826,11.2944737 14.4118826,11.6578947 L14.4118826,14.3550877 L11.6690141,14.3550877 C11.2994507,14.3550877 11,14.6495614 11,15.0129825 C11,15.3764035 11.2994507,15.6708772 11.6690141,15.6708772 L14.4117934,15.6708772 L14.4117934,18.3681579 C14.4117934,18.7315789 14.7112441,19.0260526 15.0808075,19.0260526 C15.4503709,19.0260526 15.7498216,18.7315789 15.7498216,18.3681579 L15.7498216,15.6708772 L18.4926009,15.6708772 C18.8621643,15.6708772 19.161615,15.3764035 19.161615,15.0129825 C19.161615,14.6495614 18.8621643,14.3550877 18.4926901,14.3550877 Z" id="path-1">
                    </path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="add-camp">
          <div class="camp-container">
            <div class="camp-navbar">
              <div class="camp-link">
                <div id="active" class="camp-nav-text">
                  Message #1
                  <div class="camp-nav-line"></div>
                </div>
              </div>
              <div class="camp-link">
                <div class="camp-nav-text">
                  Message #2
                </div>
              </div>
              <div class="camp-link">
                <div class="camp-nav-text">
                  Message #3
                </div>
              </div>
              <div class="camp-nav-plus">
                <svg class="nav-plus-svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <path d="M14.9776692,5 C9.47601504,5 5,9.47593985 5,14.977594 C5,20.4792481 9.47593985,24.955188 14.977594,24.955188 C20.4792481,24.955188 24.9551128,20.4792481 24.9551128,14.977594 C24.9551128,9.47593985 20.4793233,5 14.9776692,5 Z M14.9776692,23.8273684 C10.0978195,23.8273684 6.12781955,19.8574436 6.12781955,14.977594 C6.12781955,10.0977444 10.0978195,6.12781955 14.9776692,6.12781955 C19.8573684,6.12781955 23.8273684,10.0978195 23.8273684,14.977594 C23.8273684,19.8573684 19.8573684,23.8273684 14.9776692,23.8273684 Z M18.4926901,14.3550877 L15.7499108,14.3550877 L15.7499108,11.6578947 C15.7499108,11.2944737 15.4504601,11 15.0808967,11 C14.7113333,11 14.4118826,11.2944737 14.4118826,11.6578947 L14.4118826,14.3550877 L11.6690141,14.3550877 C11.2994507,14.3550877 11,14.6495614 11,15.0129825 C11,15.3764035 11.2994507,15.6708772 11.6690141,15.6708772 L14.4117934,15.6708772 L14.4117934,18.3681579 C14.4117934,18.7315789 14.7112441,19.0260526 15.0808075,19.0260526 C15.4503709,19.0260526 15.7498216,18.7315789 15.7498216,18.3681579 L15.7498216,15.6708772 L18.4926009,15.6708772 C18.8621643,15.6708772 19.161615,15.3764035 19.161615,15.0129825 C19.161615,14.6495614 18.8621643,14.3550877 18.4926901,14.3550877 Z" id="path-1">
                  </path>
                </svg>
              </div>
            </div>
          </div>
          <div class="camp-main">
            <div class="camp-grid-4">
              <div class="grid-title">
                Messages
              </div>
              <textarea class="camp-textarea" :maxlength="160" type="text" v-model="user.campMessage" placeholder="Enter message content"></textarea>
              <div class="camp-text-count">Character Count: {{user.campMessage.length}}/160</div>
              <div class="camp-text-small">
                Each Message can be 160 characters max or 70 charcters using unicode (like emojis)
              </div>
            </div>
          </div>
          <div class="camp-second">
            <div class="camp-text-buttons">
              Click on button below to insert personalization token to your message content
            </div>
            <div class="camp-white-button">
              <div class="camp-white-button-text">
                phone
              </div>
            </div>
            <div class="camp-white-button">
              <div class="camp-white-button-text">
                first_name
              </div>
            </div>
            <div class="camp-white-button">
              <div class="camp-white-button-text">
                last_name
              </div>
            </div>
            <div class="camp-white-button">
              <div class="camp-white-button-text">
                from
              </div>
            </div>
          </div>
        </div>
        <div class="add-camp">
          <div class="camp-main">
            <div class="camp-run-text">
              Run Monday thru Friday
            </div>
            <label class="checkbox-cont">
              <div class="camp-checkbox-text">
                Weekdays Only
              </div>
              <input type="checkbox" checked="checked">
              <span class="checkbox-mark"></span>
            </label>
            <div style="clear:both;"></div>
            <div class="camp-grid-5-first">
              <div class="grid-title">
                Run from
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="RunFrom" class="grid-camp-select" v-model="user.campRunFrom">
                <option value="8AM">8AM</option>
              </select>
            </div>
            <div class="camp-grid-5-second">
              <div class="grid-title">
                Run Until
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="RunUntill" class="grid-camp-select" v-model="user.campRunUntill">
                <option value="9PM">9PM</option>
              </select>
            </div>
            <div class="camp-grid-4">
              <div class="grid-title">
                Delivery speed
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="DeliverySpeed" class="grid-camp-select" v-model="user.campDeliverySpeed">
                <option value="60 msg/minute">60 msg/minute</option>
              </select>
              <label class="small-checkbox-cont">
                <div class="camp-checkbox-text-small">
                  Areacode Matching Only
                </div>
                <input type="checkbox" checked="checked">
                <span class="small-checkbox-mark"></span>
              </label>
            </div>
          </div>
          <div class="camp-second">
            <div class="camp-run-text">
              Verify wireless numbers additional cost
            </div>
            <label class="checkbox-cont">
              <div class="camp-checkbox-text">
                Carrier Lookup
              </div>
              <input type="checkbox" checked="checked">
              <span class="checkbox-mark"></span>
            </label>
            <div class="camp-grid-4">
              <div class="grid-title">
                Callback URL
              </div>
              <input class="grid-camp-input" type="text" v-model="user.campCallbackUrl" placeholder="Status URL">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import modal from '@/components/modal.vue'
import CompanyNavigationComponent from '@/components/CompanyNavigationComponent'

export default {
    name: 'app',
    data () {
        return {
          show: true,
          width: '60px',
          transitionName: 'fade',
          popup: false,
          isModalVisible: false,
          vendors: true,
                user:{
                campType: 'Long Code',
                campStartDate: 'DD MM YYYY',
                campList: 'Select Recipient List',
                campRunFrom: '8AM',
                campRunUntill: '9PM',
                campDeliverySpeed: '60 msg/minute',
                campMessage: ''
                }
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
.main-add{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
@media only screen and (max-width: 990px) {
    .main-add{
      max-width: 100%;
    }
}
</style>
