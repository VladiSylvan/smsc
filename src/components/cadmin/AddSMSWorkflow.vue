<template>
    <div class="container">
      <company-navigation-component title="SMS Workflow"></company-navigation-component>
      <div class="main-navi">
        <div class="res-div">
          <div class="head-title">
            SMS Workflow
          </div>
        </div>
        <router-link :to="{ name: 'CompanySMSWorkflow'}">
          <div class="svg-back-sms">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back-sms'>
            Back to SMS Workflows
          </div>
        </router-link>
        <router-link :to="{ name: 'AddSMSWorkflow'}"><button id="create" type="submit">Create</button></router-link>
        <router-link :to="{ name: 'CompanySMSWorkflow'}"><button id="sms-cancel" type="submit">Cancel</button></router-link>
      </div>
      <div class="main">
        <div class="main-sms-container">
          <div class="add-main-title">
            Name SMS Workflow
          </div>
          <input class="add-sms-input" type="text" v-model="user.search" placeholder="Type a name for the SMS workflow">
          <div class="sms-action">
            <div class="circle-big">
              <div class="circle-box">
                <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <path d="M24.7133515,13.5075766 L15.4490463,5.20674095 C15.1919891,4.97649025 14.8079564,4.97649025 14.5509537,5.20674095 L5.2866485,13.5075766 C5.00376022,13.7610585 4.97542234,14.2010585 5.22337875,14.4903621 C5.47133515,14.7794986 5.90179837,14.8085237 6.18468665,14.5549861 L6.90201635,13.912312 L6.90201635,24.2696379 C6.90201635,24.6542061 7.20697548,24.9660167 7.58321526,24.9660167 L12.7457766,24.9660167 L17.2542234,24.9660167 L22.4167302,24.9660167 C22.79297,24.9660167 23.0979292,24.6542061 23.0979292,24.2696379 L23.0979292,13.9123677 L23.8152589,14.5550975 C23.9445777,14.6708635 24.1046866,14.7277994 24.2639782,14.7277994 C24.453406,14.7277994 24.6418529,14.6475209 24.7765123,14.4904178 C25.0246322,14.2010585 24.9962943,13.7611142 24.7133515,13.5075766 Z M13.4269755,23.5733148 L13.4269755,17.8366574 L16.57297,17.8366574 L16.57297,23.5733148 L13.4269755,23.5733148 Z M21.7356403,12.6969916 L21.7356403,23.5732591 L17.9355313,23.5732591 L17.9355313,17.1402786 C17.9355313,16.7557103 17.6304632,16.4438997 17.2543324,16.4438997 L12.7458856,16.4438997 C12.3697003,16.4438997 12.0646866,16.7557103 12.0646866,17.1402786 L12.0646866,23.5733148 L8.26446866,23.5733148 L8.26446866,12.6969916 C8.26446866,12.6952089 8.26425068,12.6935376 8.26425068,12.6918106 L15,6.65643454 L21.7358583,12.6917549 C21.7359128,12.6935933 21.7356403,12.6952089 21.7356403,12.6969916 Z M13.4741144,11.5592201 C13.4741144,11.943844 13.7790736,12.2555989 14.1553134,12.2555989 L15.8446866,12.2555989 C16.2208719,12.2555989 16.5258856,11.943844 16.5258856,11.5592201 C16.5258856,11.1745961 16.2208719,10.8628412 15.8446866,10.8628412 L14.1553134,10.8628412 C13.7791281,10.8628412 13.4741144,11.1745961 13.4741144,11.5592201 Z" id="path-1">
                  </path>
                </svg>
              </div>
            </div>
            <div class="sms-grid-1">
              <div class="sms-grid-title">
                Trigger
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Trigger" class="sms-grid-select" v-model="user.trigger">
                <option value="Choose trigger">Choose trigger</option>
                <option value="User entered info">User entered info</option>
              </select>
            </div>
          </div>
          <div v-if="actions.action == ''" class="connect">
            <div class="add-circle">
              <svg class="sms-grid-add" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M14.9776692,5 C9.47601504,5 5,9.47593985 5,14.977594 C5,20.4792481 9.47593985,24.955188 14.977594,24.955188 C20.4792481,24.955188 24.9551128,20.4792481 24.9551128,14.977594 C24.9551128,9.47593985 20.4793233,5 14.9776692,5 Z M14.9776692,23.8273684 C10.0978195,23.8273684 6.12781955,19.8574436 6.12781955,14.977594 C6.12781955,10.0977444 10.0978195,6.12781955 14.9776692,6.12781955 C19.8573684,6.12781955 23.8273684,10.0978195 23.8273684,14.977594 C23.8273684,19.8573684 19.8573684,23.8273684 14.9776692,23.8273684 Z M18.4926901,14.3550877 L15.7499108,14.3550877 L15.7499108,11.6578947 C15.7499108,11.2944737 15.4504601,11 15.0808967,11 C14.7113333,11 14.4118826,11.2944737 14.4118826,11.6578947 L14.4118826,14.3550877 L11.6690141,14.3550877 C11.2994507,14.3550877 11,14.6495614 11,15.0129825 C11,15.3764035 11.2994507,15.6708772 11.6690141,15.6708772 L14.4117934,15.6708772 L14.4117934,18.3681579 C14.4117934,18.7315789 14.7112441,19.0260526 15.0808075,19.0260526 C15.4503709,19.0260526 15.7498216,18.7315789 15.7498216,18.3681579 L15.7498216,15.6708772 L18.4926009,15.6708772 C18.8621643,15.6708772 19.161615,15.3764035 19.161615,15.0129825 C19.161615,14.6495614 18.8621643,14.3550877 18.4926901,14.3550877 Z" id="path-1">
                </path>
              </svg>
            </div>
            <button id="add" @click="actions.action = 1" type="submit">Add Action</button>
            <button id="add" type="submit">Add Condition</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import CompanyNavigationComponent from '@/components/CompanyNavigationComponent'

import TestComponent from '@/components/cadmin/components/smsWorkflow/addAction'



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
          actions: {
            action: '',
          },
          isModalVisible: false,
                user:{
                trigger: 'Choose trigger',
                action: 'At work text',
                condition: 'Respond received',
                delay: '15 minutes',
                action2: 'Schedule call',
                dateTime: 'May 12, 2018 at 3:15 PM',
                delay2: 'Immediately',
                action3: 'Call at 3:15 PM',
                condition2: 'Call answered',
                action4: 'Text re-schedule call',
                action5: 'Re-send at work text',
                delay3: '2 hours',
            },

        }
    },
    components:{
      CompanyNavigationComponent,
      TestComponent,
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
.add-yes{
  height: 30px;
  width: 60px;
  border-radius: 125px;
  background-color: #24E2B8;
  color: #FFFFFF;
  float: left;
  display: inline-block;
  margin-top: 5px;
  margin-right: 10px;
}
.add-yes-action{
  height: 30px;
  width: 60px;
  border-radius: 125px;
  background-color: #24E2B8;
  color: #FFFFFF;
  float: left;
  display: inline-block;
  margin-top: 10px;
  margin-right: 10px;
}
.add-yes-text{
  padding-left: 15px;
  padding-top: 7px;
}
.add-no-text{
  padding-left: 15px;
  padding-top: 7px;
}
.add-no{
  height: 30px;
  width: 60px;
  border-radius: 125px;
  background-color: #D2305B;
  color: #FFFFFF;
  float: left;
  display: inline-block;
  margin-top: 5px;
  margin-right: 10px;
}
.add-no-action{
  height: 30px;
  width: 60px;
  border-radius: 125px;
  background-color: #D2305B;
  color: #FFFFFF;
  float: left;
  display: inline-block;
  margin-top: 10px;
  margin-right: 10px;
}
.add-yes-no{
  display: inline-block;
  float: left;
  width: 100%;
  margin-bottom: 30px;
  margin-left: 40px;
}
</style>
