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
              <input class="grid-input" type="text" v-model="user.campaignName" placeholder="Enter campaign name">
            </div>
            <div class="camp-grid-2">
              <div class="grid-title">
                Type
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Type" class="grid-select" v-model="user.campType">
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
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="StartDate" class="grid-select" v-model="user.campStartDate">
                <option value="DD MM YYYY">DD MM YYYY</option>
              </select>
            </div>
            <div class="camp-grid-5-second">
              <div class="grid-title">
                List
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="List" class="grid-select" v-model="user.campList">
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
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="RunFrom" class="grid-select" v-model="user.campRunFrom">
                <option value="8AM">8AM</option>
              </select>
            </div>
            <div class="camp-grid-5-second">
              <div class="grid-title">
                Run Until
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="RunUntill" class="grid-select" v-model="user.campRunUntill">
                <option value="9PM">9PM</option>
              </select>
            </div>
            <div class="camp-grid-4">
              <div class="grid-title">
                Delivery speed
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="DeliverySpeed" class="grid-select" v-model="user.campDeliverySpeed">
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
              <input class="grid-input" type="text" v-model="user.campCallbackUrl" placeholder="Status URL">
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
.camp-text-count{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 13px;
  line-height: 15px;
  position: relative;
  margin-top: -25px;
  margin-right: 10px;
  float: right;
}
.camp-checkbox-text{
  margin-left: 30px;
  margin-top: 2px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 20px;
}

.camp-checkbox-text-small{
  margin-left: 25px;
  margin-top: -1px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 20px;
}

.checkbox-cont {
    position: relative;
    display: inline-block;
    float: left;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-bottom: 15px;
    margin-top: 15px;
}

/* Hide the browser's default checkbox */
.checkbox-cont input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom checkbox */
.checkbox-mark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    border: 1px solid #D0D9E1;
    border-radius: 6px;
    background-color: #FFFFFF;
}

/* When the checkbox is checked, add a blue background */
.checkbox-cont input:checked ~ .checkbox-mark {
    background-color: #FFFFFF;
    border: 1px solid #51A3F3;
    border-radius: 6px;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkbox-mark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.checkbox-cont input:checked ~ .checkbox-mark:after {
    display: block;
}

/* Style the checkmark/indicator */
.checkbox-cont .checkbox-mark:after {
    left: 7px;
    top: 2px;
    width: 7px;
    height: 14px;
    border: solid #51A3F3;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}




.small-checkbox-cont {
    position: relative;
    display: inline-block;
    float: left;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-top: 15px;
}

/* Hide the browser's default checkbox */
.small-checkbox-cont input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.small-checkbox-mark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    border: 1px solid #D0D9E1;
    border-radius: 6px;
    background-color: #FFFFFF;
}

/* When the checkbox is checked, add a blue background */
.small-checkbox-cont input:checked ~ .small-checkbox-mark {
    background-color: #FFFFFF;
    border: 1px solid #51A3F3;
    border-radius: 6px;
}

/* Create the checkmark/indicator (hidden when not checked) */
.small-checkbox-mark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.small-checkbox-cont input:checked ~ .small-checkbox-mark:after {
    display: block;
}

/* Style the checkmark/indicator */
.small-checkbox-cont .small-checkbox-mark:after {
    left: 6px;
    top: 2px;
    width: 4px;
    height: 9px;
    border: solid #51A3F3;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}


.camp-run-text{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 13px;
  line-height: 15px;
  margin-top: 15px;
}
.camp-text-buttons{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 13px;
  line-height: 15px;
  margin-bottom: 7px;
}
.camp-text-small{
	color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 10px;
  line-height: 12px;
  margin-top: 5px;
  margin-left: 15px;
}
.camp-white-button{
	height: calc(40px - 2px);
	border: 1px solid #BDBFD8;
	border-radius: 4px;
	background-color: #FFFFFF;
  float: left;
  display: inline-block;
  margin-right: 15px;
}
.camp-white-button-text{
  color: #55616E;
  font-family: "Circular Std";
  font-size: 15px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;
  margin-top: 8px;
  margin-left: 20px;
  margin-right: 20px;
}
.camp-textarea{
  max-width: calc(100% - 13px);
  width: 100%;
  padding-left: 10px;
  height: calc(120px - 2px);
  line-height: 30px;
}
textarea{
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
  resize: none;
}
.nav-plus-svg{
  fill: #51A3F3;
}
.camp-nav-plus{
  float: right;
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
}
.camp-nav-text{
  color: #BDBFD8;
  font-family: "Circular Std";
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  text-align: center;
  margin-top: 15px;
}
.camp-nav-text#active{
  color: #51A3F3;
  font-weight: 500;
}
.camp-link{
  display: inline-block;
  float: left;
  height: 50px;
  width: 110px;
}
.camp-nav-line{
  border-bottom: 2px solid #51A3F3;
  width: 110px;
  margin-top: 13px;
}
.camp-navbar{
  height: 50px;
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: inset 0 1px 0 0 #F8F9FE;
}
.camp-title{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  width: 100%;
  float: left;
  display: inline-block;
  margin-left: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.camp-selected-1{
	border-radius: 4px;
	background-color: #51A3F3;
  max-width: 165px;
  width: 100%;
  float: left;
  display: inline-block;
  height: 44px;
  margin-right: 13px;
  margin-top: 5px;
}
.camp-selected-delete{
  margin-top: 7px;
  margin-right: 7px;
  float: right;
  display: inline-block;
}
.selected-svg{
  fill: white;
  transform: rotate(45deg);
}
.camp-selected-text{
  color: #FFFFFF;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  margin-top: 10px;
  margin-left: 15px;
  float: left;
  display: inline-block;
}
.camp-selected-title{
  color: #BDBFD8;
  font-family: "Circular Std";
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.21px;
  line-height: 15px;
  float: left;
  display: inline-block;
  text-transform: uppercase;
  margin-top: 15px;
  width: 100%;
}
.rotate-plus{
  transform: rotate(45deg);
}
.camp-used-text{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  margin-top: 10px;
  margin-left: 15px;
  float: left;
  display: inline-block;
}
.camp-used-delete{
  margin-top: 7px;
  margin-right: 7px;
  float: right;
  display: inline-block;
}
.camp-used-1{
	border-radius: 4px;
	background-color: #F8F9FE;
  max-width: 165px;
  width: 100%;
  float: left;
  display: inline-block;
  height: 44px;
  margin-right: 13px;
  margin-top: 9px;
}
.camp-used-2{
	border-radius: 4px;
	background-color: #F8F9FE;
  max-width: 165px;
  width: 100%;
  float: left;
  display: inline-block;
  height: 44px;
  margin-right: 12px;
  margin-top: 9px;
}
.camp-used-3{
	border-radius: 4px;
	background-color: #F8F9FE;
  max-width: 165px;
  width: 100%;
  float: left;
  display: inline-block;
  height: 44px;
  margin-top: 9px;
}
.camp-title-small{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 15px;
  display: inline-block;
  float: left;
  margin-top: 10px;
}
.camp-grid-1{
  max-width: 64.4859813084%;
  width: 100%;
  float: left;
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 20px;
}
.camp-grid-2{
  max-width: 29.9065420561%;
  width: 100%;
  float: left;
  display: inline-block;
  margin-bottom: 20px;
}
.camp-grid-3-first{
  max-width: 48.5981308411%;
  width: 100%;
  float: left;
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 20px;
}
.camp-grid-3-second{
  max-width: 48.5981308411%;
  width: 100%;
  float: left;
  display: inline-block;
  margin-bottom: 20px;
}
.camp-grid-4{
  max-width: 97.1962616822%;
  width: 100%;
  float: left;
  display: inline-block;
  margin-bottom: 20px;
}
.camp-grid-5-first{
  max-width: 47.6635514019%;
  width: 100%;
  float: left;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 20px;
}
.camp-grid-5-second{
  max-width: 47.6635514019%;
  width: 100%;
  float: left;
  display: inline-block;
  margin-bottom: 20px;
}
.camp-main{
  display: inline-block;
  float: left;
  max-width: 48.6363636364%;
  width: 100%;
  margin-left: 15px;
}
.camp-container{
  display: inline-block;
  float: left;
  max-width: calc(100% - 15px);
  width: 100%;
  margin-left: 15px;
  margin-bottom: 20px;
}
.camp-second{
  display: inline-block;
  float: left;
  max-width: 48.6363636364%;
  width: 100%;
}
.grid-title{
  max-width: 100%;
  color: #000000;
  font-family: "Circular Std";
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.21px;
  line-height: 15px;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.grid-input{
  max-width: calc(100% - 13px);
  width: 100%;
  height: calc(40px - 4px);
  padding-left: 10px;
}
.grid-search{
  max-width: calc(100% - 43px);
  width: 100%;
  height: calc(40px - 4px);
  padding-left: 40px;
}
.grid-select{
  width: 100%;
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  height: 40px;
}
.svg path{
  fill: #51A3F3;
}
.svg-back{
  float: left;
  display: inline-block;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 20px;
  margin-right: 5px;
}
.back{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  float: left;
  display: inline-block;
  margin-top: 30px;
  margin-bottom: 30px;
}
.add-camp{
  float: left;
  display: inline-block;
  background-color: #FFFFFF;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.did-main{
  display: inline-block;
  float: left;
  max-width: 100%;
  width: 100%;
}
.product-did{
  display: inline-block;
  float: left;
  max-width: calc(100% - 58.1818181818%);
  width: 100%;
  background-color: #F8F9FE;
  height: 200px;
}
.delete-image{
  margin-top: -10px;
}
.delete-vendor-image{
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.did-add-title{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin: 15px;
}
.product-input-name{
  color: #000000;
  font-family: "Circular Std";
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.21px;
  line-height: 15px;
  text-transform: uppercase;
  margin-bottom: 5px;
  padding-top: 10px;
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
textarea{
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
  resize: none;
}
button#product{
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
    margin-right: 20px;
    margin-bottom: 20px;
    float: right;
}
select{
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
}
button#cancel{
  height: 40px;
  width: 90px;
  border: 1px solid #BDBFD8;
  border-radius: 4px;
  background-color: #FFFFFF;
  color: #55616E;
  font-family: "Circular Std";
  font-size: 15px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 15px;
  float: right;
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
.main-add{
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
.res-div{
  display: none;
  width: 100%;
}
.res-select{
  display: inline-block;
  width: calc(100% - 15px);
  margin-left: 15px;
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
    .camp-grid-1, .camp-grid-2, .camp-grid-3-first, .camp-grid-3-second, .camp-grid-4, .camp-grid-5-first, .camp-grid-5-second{
      max-width: calc(100% - 15px);
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
    .main-add{
      max-width: 100%;
    }
}
@media only screen and (max-width: 610px) {
  .camp-main{
    max-width: calc(100% - 15px);
  }
  .camp-second{
    max-width: calc(100% - 15px);
    margin-left: 15px;
  }
}
</style>
