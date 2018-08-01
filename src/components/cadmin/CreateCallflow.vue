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
            DIDs
          </div>
        </div>
        <profile-component></profile-component>
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
        <li id="active">
          <router-link :to="{ name: 'CompanyDIDs'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M22.8623041,6.4771831 L13.5686636,6.4771831 C13.5290323,6.12976526 13.382765,5.80741784 13.1409217,5.55164319 C12.8413825,5.23474178 12.4369585,5.06028169 12.0023041,5.06028169 L6.67198157,5.06028169 C6.23723502,5.06028169 5.83290323,5.23474178 5.53336406,5.5515493 C5.23382488,5.8684507 5.07788018,6.28666667 5.09410138,6.72929577 L5.36138249,13.9882629 C5.37963134,14.4824413 5.38,15.3179343 5.36221198,15.8126761 L5.09317972,23.3000939 C5.07732719,23.7425352 5.23354839,24.1606573 5.53327189,24.4773709 C5.83290323,24.7940845 6.23732719,24.9684507 6.6718894,24.9684507 L12.0021198,24.9684507 C12.436682,24.9684507 12.841106,24.7940845 13.1407373,24.4773709 C13.3157604,24.2923944 13.4402765,24.0723005 13.5117051,23.8334272 L22.8621198,23.8334272 C24.0056221,23.8334272 24.9358525,22.8857277 24.9358525,21.7207512 L24.9358525,8.58985915 C24.9360369,7.42497653 24.0058065,6.4771831 22.8623041,6.4771831 Z M12.1457143,23.4997183 C12.1197235,23.5271362 12.0737327,23.5599061 12.0023041,23.5599061 L6.67198157,23.5599061 C6.600553,23.5599061 6.55456221,23.5271362 6.52857143,23.4997183 C6.50258065,23.4723005 6.4721659,23.4243192 6.47483871,23.3515493 L6.74387097,15.8641315 C6.76294931,15.3320188 6.76258065,14.4667606 6.74294931,13.9353052 L6.4756682,6.67643192 C6.47299539,6.60384977 6.50322581,6.55596244 6.52912442,6.5286385 C6.55493088,6.50131455 6.60073733,6.46873239 6.67198157,6.46873239 L12.002212,6.46873239 C12.0734562,6.46873239 12.1192627,6.50131455 12.1451613,6.5286385 C12.1709677,6.55605634 12.2011982,6.60384977 12.1986175,6.67643192 L11.9313364,13.9353991 C11.9117972,14.4675117 11.9113364,15.3326761 11.9304147,15.8642254 L12.1993548,23.3516432 C12.2020276,23.4243192 12.1716129,23.4723005 12.1457143,23.4997183 Z M23.5535484,21.7207512 C23.5535484,22.109108 23.2435023,22.4249765 22.8623041,22.4249765 L13.5495853,22.4249765 L13.3120737,15.81277 C13.2942857,15.3185915 13.2947465,14.4830986 13.3129032,13.9882629 L13.5376037,7.8857277 L22.8623963,7.8857277 C23.2435945,7.8857277 23.5536406,8.20159624 23.5536406,8.58995305 L23.5536406,21.7207512 L23.5535484,21.7207512 Z M21.9180645,9.61521127 L14.6610138,9.61521127 C14.2792627,9.61521127 13.9697696,9.93051643 13.9697696,10.3194366 C13.9697696,10.7083568 14.2792627,11.023662 14.6610138,11.023662 L21.9180645,11.023662 C22.2998157,11.023662 22.6093088,10.7083568 22.6093088,10.3194366 C22.6093088,9.93051643 22.2998157,9.61521127 21.9180645,9.61521127 Z M15.6228571,13.0598122 L14.8454378,13.0598122 C14.4636866,13.0598122 14.1541935,13.3751174 14.1541935,13.7640376 C14.1541935,14.1529577 14.4636866,14.4682629 14.8454378,14.4682629 L15.6228571,14.4682629 C16.0046083,14.4682629 16.3141014,14.1529577 16.3141014,13.7640376 C16.3141014,13.3751174 16.0046083,13.0598122 15.6228571,13.0598122 Z M18.6320737,13.0598122 L17.8546544,13.0598122 C17.4729032,13.0598122 17.1634101,13.3751174 17.1634101,13.7640376 C17.1634101,14.1529577 17.4729032,14.4682629 17.8546544,14.4682629 L18.6320737,14.4682629 C19.0138249,14.4682629 19.323318,14.1529577 19.323318,13.7640376 C19.323318,13.3751174 19.0139171,13.0598122 18.6320737,13.0598122 Z M21.6413825,13.0598122 L20.8639631,13.0598122 C20.482212,13.0598122 20.1727189,13.3751174 20.1727189,13.7640376 C20.1727189,14.1529577 20.482212,14.4682629 20.8639631,14.4682629 L21.6413825,14.4682629 C22.0231336,14.4682629 22.3326267,14.1529577 22.3326267,13.7640376 C22.3326267,13.3751174 22.0231336,13.0598122 21.6413825,13.0598122 Z M15.6228571,15.7551174 L14.8454378,15.7551174 C14.4636866,15.7551174 14.1541935,16.0704225 14.1541935,16.4593427 C14.1541935,16.8482629 14.4636866,17.1635681 14.8454378,17.1635681 L15.6228571,17.1635681 C16.0046083,17.1635681 16.3141014,16.8482629 16.3141014,16.4593427 C16.3141014,16.0704225 16.0046083,15.7551174 15.6228571,15.7551174 Z M18.6320737,15.7551174 L17.8546544,15.7551174 C17.4729032,15.7551174 17.1634101,16.0704225 17.1634101,16.4593427 C17.1634101,16.8482629 17.4729032,17.1635681 17.8546544,17.1635681 L18.6320737,17.1635681 C19.0138249,17.1635681 19.323318,16.8482629 19.323318,16.4593427 C19.323318,16.0704225 19.0139171,15.7551174 18.6320737,15.7551174 Z M21.6413825,15.7551174 L20.8639631,15.7551174 C20.482212,15.7551174 20.1727189,16.0704225 20.1727189,16.4593427 C20.1727189,16.8482629 20.482212,17.1635681 20.8639631,17.1635681 L21.6413825,17.1635681 C22.0231336,17.1635681 22.3326267,16.8482629 22.3326267,16.4593427 C22.3326267,16.0704225 22.0231336,15.7551174 21.6413825,15.7551174 Z M15.6228571,18.4505164 L14.8454378,18.4505164 C14.4636866,18.4505164 14.1541935,18.7658216 14.1541935,19.1547418 C14.1541935,19.543662 14.4636866,19.8589671 14.8454378,19.8589671 L15.6228571,19.8589671 C16.0046083,19.8589671 16.3141014,19.543662 16.3141014,19.1547418 C16.3141014,18.7658216 16.0046083,18.4505164 15.6228571,18.4505164 Z M18.6320737,18.4505164 L17.8546544,18.4505164 C17.4729032,18.4505164 17.1634101,18.7658216 17.1634101,19.1547418 C17.1634101,19.543662 17.4729032,19.8589671 17.8546544,19.8589671 L18.6320737,19.8589671 C19.0138249,19.8589671 19.323318,19.543662 19.323318,19.1547418 C19.323318,18.7658216 19.0139171,18.4505164 18.6320737,18.4505164 Z M21.6413825,18.4505164 L20.8639631,18.4505164 C20.482212,18.4505164 20.1727189,18.7658216 20.1727189,19.1547418 C20.1727189,19.543662 20.482212,19.8589671 20.8639631,19.8589671 L21.6413825,19.8589671 C22.0231336,19.8589671 22.3326267,19.543662 22.3326267,19.1547418 C22.3326267,18.7658216 22.0231336,18.4505164 21.6413825,18.4505164 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span v-if="show" class="side-link" id="active">DIDs</span>
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
        <li>
          <router-link :to="{ name: 'CompanyCampaigns'}">
            <img class="image-box" src="@/assets/Icon/Reseller.svg">
            <span v-if="show" class="side-link">Campaigns</span>
          </router-link>
        </li>
      </ul>
      </transition>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            DIDs
          </div>
        </div>
        <router-link :to="{ name: 'Callflows'}">
          <div class="svg-back-call">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back-call'>
            Back to Callflows
          </div>
        </router-link>
        <router-link :to="{ name: 'CreateCallflow'}"><button id="create" type="submit">Create</button></router-link>
        <router-link :to="{ name: 'Callflows'}"><button id="call-cancel" type="submit">Cancel</button></router-link>
          <div class="main-container">
            <div class="callflow-create">
              <div class="callflow-main-title">
                Create callflow
              </div>
              <div class="callflow-title">
                Callflow Name
              </div>
              <input class="callflow-input" type="text" v-model="user.search" placeholder="Enter campaign name">
            </div>
            <div class="callflow-start-main">
              <div class="callflow-circle">
                <div class="callflow-circle-box">
                  <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M24.7133515,13.5075766 L15.4490463,5.20674095 C15.1919891,4.97649025 14.8079564,4.97649025 14.5509537,5.20674095 L5.2866485,13.5075766 C5.00376022,13.7610585 4.97542234,14.2010585 5.22337875,14.4903621 C5.47133515,14.7794986 5.90179837,14.8085237 6.18468665,14.5549861 L6.90201635,13.912312 L6.90201635,24.2696379 C6.90201635,24.6542061 7.20697548,24.9660167 7.58321526,24.9660167 L12.7457766,24.9660167 L17.2542234,24.9660167 L22.4167302,24.9660167 C22.79297,24.9660167 23.0979292,24.6542061 23.0979292,24.2696379 L23.0979292,13.9123677 L23.8152589,14.5550975 C23.9445777,14.6708635 24.1046866,14.7277994 24.2639782,14.7277994 C24.453406,14.7277994 24.6418529,14.6475209 24.7765123,14.4904178 C25.0246322,14.2010585 24.9962943,13.7611142 24.7133515,13.5075766 Z M13.4269755,23.5733148 L13.4269755,17.8366574 L16.57297,17.8366574 L16.57297,23.5733148 L13.4269755,23.5733148 Z M21.7356403,12.6969916 L21.7356403,23.5732591 L17.9355313,23.5732591 L17.9355313,17.1402786 C17.9355313,16.7557103 17.6304632,16.4438997 17.2543324,16.4438997 L12.7458856,16.4438997 C12.3697003,16.4438997 12.0646866,16.7557103 12.0646866,17.1402786 L12.0646866,23.5733148 L8.26446866,23.5733148 L8.26446866,12.6969916 C8.26446866,12.6952089 8.26425068,12.6935376 8.26425068,12.6918106 L15,6.65643454 L21.7358583,12.6917549 C21.7359128,12.6935933 21.7356403,12.6952089 21.7356403,12.6969916 Z M13.4741144,11.5592201 C13.4741144,11.943844 13.7790736,12.2555989 14.1553134,12.2555989 L15.8446866,12.2555989 C16.2208719,12.2555989 16.5258856,11.943844 16.5258856,11.5592201 C16.5258856,11.1745961 16.2208719,10.8628412 15.8446866,10.8628412 L14.1553134,10.8628412 C13.7791281,10.8628412 13.4741144,11.1745961 13.4741144,11.5592201 Z" id="path-1">
                    </path>
                  </svg>
                </div>
              </div>
              <div class="callflow-title-big">
                Start Call Flow
              </div>
            </div>
            <div class="callflow-record-main">
              <div class="callflow-record">
                Record calls
              </div>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider round"></span>
              </label>
              <div class="callflow-record-question">
                Do I need to notify the caller?
              </div>
            </div>
            <div class="callflow-main-cont">
              <div class="callflow-circle-grey">
                <div class="callflow-circle-grey-box">
                  <img src="@/assets/Icon/Callflow/Greeting.svg">
                </div>
              </div>
              <div class="callflow-main-div">
                <div class="callflow-cont-title">
                  Greeting
                </div>
                <div class="callflow-cont-text">
                  Play a message to the caller. Frequently used to notify the caller about call
                  recording.
                </div>
                <div class="callflow-cont-nav">
                  <div class="callflow-cont-navbar-active">
                    Read Message
                  </div>
                  <div class="callflow-cont-navbar">
                    Play Recording
                  </div>
                </div>
                <div class="callflow-cont-text">
                  Read the following text to the caller with a robot-like voice
                </div>
                <textarea class="callflow-textarea" placeholder="This call will be recorded for quality assurance"></textarea>
                <div class="callflow-triangle">
                </div>
                <div class="callflow-link">
                  Prieview message
                </div>
              </div>
            </div>
            <div class="callflow-main-cont">
              <div class="callflow-circle-grey">
                <div class="callflow-dial-box">
                  <img style="transform: rotate(215deg);" src="@/assets/Icon/Callflow/Dial.svg">
                </div>
              </div>
              <div class="callflow-main-div">
                <div class="callflow-cont-title">
                  Dial
                </div>
                <div class="callflow-cont-text">
                  This is where the phone will ring when customers dial your tracking number.
                </div>
                <div class="callflow-input-title">
                  Destination Number
                </div>
                <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Number" class="callflow-select" v-model="user.number">
                  <option value="Number">Number</option>
                </select>
                <input class="callflow-cont-input" type="text" v-model="user.input">
                <label class="checkbox-cont">
                  <div class="callflow-checkbox-text">
                    Prevent voicemails and automated systems from answering a call.
                  </div>
                  <input type="checkbox">
                  <span class="checkbox-mark"></span>
                </label>
                <div class="callflow-grey">
                  <div class="callflow-grey-text">
                    If the destination does not answer within
                  </div>
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Seconds" class="callflow-blue-select" v-model="user.seconds">
                    <option value="20 seconds">20 seconds</option>
                  </select>
                  <div class="callflow-grey-text-second">
                    then go to the next step.
                  </div>
                </div>
              </div>
            </div>
            <div class="callflow-main-cont">
              <div class="callflow-circle-grey">
                <div class="callflow-simulcall-box">
                  <img src="@/assets/Icon/Callflow/Call.svg">
                </div>
              </div>
              <div class="callflow-main-div">
                <div class="callflow-cont-title">
                  Simulcall
                </div>
                <div class="callflow-cont-text">
                  We'll dial all numbers in the Simulcall at the same time. The first person to answer will
                  be connected to the caller.
                </div>
                <div class="callflow-radio-content">
                  <label class="callflow-radio-container">
                    <div class="callflow-radio-text">
                      Ring in sequence
                    </div>
                    <input type="radio" checked="checked" name="radio">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="callflow-radio-content">
                  <label class="callflow-radio-container">
                    <div class="callflow-radio-text">
                      Ring all at once
                    </div>
                    <input type="radio" name="radio">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="callflow-input-title">
                  Destination Numbers
                </div>
                <input class="callflow-number-input" type="text" v-model="user.input">
                <div class="callflow-cross">
                  <div class="cross"></div>
                </div>
                <div style="clear: both;"></div>
                <input class="callflow-number-input" type="text" v-model="user.input">
                <div class="callflow-cross">
                  <div class="cross"></div>
                </div>
                <div style="clear: both;"></div>
                <div class="callflow-plus">
                  <div class="plus"></div>
                </div>
                <div class="callflow-link">
                  Add Number
                </div>
                <div style="clear: both;"></div>
                <label class="checkbox-cont">
                  <div class="callflow-checkbox-text">
                    Prevent voicemails and automated systems from answering a call.
                  </div>
                  <input type="checkbox" checked="checked">
                  <span class="checkbox-mark"></span>
                </label>
                <div style="clear: both;"></div>
                <label class="checkbox-cont">
                  <div class="callflow-checkbox-text">
                    Route previous callers to the number that answered last time they called.
                  </div>
                  <input type="checkbox">
                  <span class="checkbox-mark"></span>
                </label>
                <div class="callflow-grey">
                  <div class="callflow-grey-text">
                    If the destination does not answer within
                  </div>
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Seconds" class="callflow-blue-select" v-model="user.seconds">
                    <option value="20 seconds">20 seconds</option>
                  </select>
                  <div class="callflow-grey-text-second">
                    then go to the next step.
                  </div>
                </div>
              </div>
              <div class="callflow-main-cont">
                <div class="callflow-circle-grey">
                  <div class="callflow-circle-grey-box">
                    <img src="@/assets/Icon/Callflow/Menu.svg">
                  </div>
                </div>
                <div class="callflow-main-div">
                  <div class="callflow-cont-title">
                    Menu
                  </div>
                  <div class="callflow-cont-text">
                    Prompt the caller to select from a menu of options using the keypad on their phone.
                  </div>
                  <div class="callflow-cont-nav">
                    <div class="callflow-cont-navbar-active">
                      Read Message
                    </div>
                    <div class="callflow-cont-navbar">
                      Play Recording
                    </div>
                  </div>
                  <div class="callflow-cont-text">
                    Read the following text to the caller with a robot-like voice.
                  </div>
                  <textarea class="callflow-textarea" placeholder="Press 1 for Sales, press 2 for Support."></textarea>
                  <div class="callflow-triangle">
                  </div>
                  <div class="callflow-link">
                    Prieview message
                  </div>
                  <div class="callflow-input-title">
                    If the caller
                  </div>
                  <div class="callflow-blue">
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Seconds" class="callflow-color-select" v-model="user.seconds">
                      <option value="20 seconds">20 seconds</option>
                    </select>
                    <input class="callflow-color-input" placeholder="Forward to Sales" type="text" v-model="user.input">
                    <div class="callflow-color-cross">
                      <div class="cross"></div>
                    </div>
                  </div>
                  <div class="callflow-red">
                    <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Seconds" class="callflow-color-select" v-model="user.seconds">
                      <option value="20 seconds">20 seconds</option>
                    </select>
                    <input class="callflow-color-input" placeholder="Forward to Support" type="text" v-model="user.input">
                    <div class="callflow-color-cross">
                      <div class="cross"></div>
                    </div>
                  </div>
                  <div style="clear: both;"></div>
                  <div class="callflow-plus">
                    <div class="plus"></div>
                  </div>
                  <div class="callflow-link">
                    Add Number
                  </div>
                </div>
              </div>
              <div class="callflow-main-cont">
                <div class="callflow-circle-grey">
                  <div class="callflow-circle-grey-box">
                    <img src="@/assets/Icon/Callflow/Schedule.svg">
                  </div>
                </div>
                <div class="callflow-main-div">
                  <div class="callflow-cont-title">
                    Schedule
                  </div>
                  <div class="callflow-cont-text">
                    Create a schedule that determines how your calls should be routed.
                  </div>
                  <div class="callflow-cont-text">
                    Time Zone: Athens
                  </div>
                  <div class="callflow-blue">
                    <div class="callflow-blue-text">
                      <b>Schedule Branch A:</b> If a call is received during the following times
                    </div>
                  </div>
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Weekdays" class="callflow-select-120" v-model="user.weekdays">
                    <option value="Weekdays">Weekdays</option>
                  </select>
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Between" class="callflow-select-110" v-model="user.between">
                    <option value="Between">Between</option>
                  </select>
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Hours" class="callflow-select-75" v-model="user.hour1">
                    <option value="5PM">5PM</option>
                  </select>
                  <div class="callflow-symbol-1">
                    :
                  </div>
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Minutes" class="callflow-select-60" v-model="user.minutes1">
                    <option value="00">00</option>
                  </select>
                  <div class="callflow-symbol-2">
                    &
                  </div>
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Hours" class="callflow-select-75" v-model="user.hour2">
                    <option value="8PM">8PM</option>
                  </select>
                  <div class="callflow-symbol-1">
                    :
                  </div>
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Minutes" class="callflow-select-60" v-model="user.minutes2">
                    <option value="00">00</option>
                  </select>
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Weekdays" class="callflow-select-120" v-model="user.weekends">
                    <option value="Weekends">Weekends</option>
                  </select>
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Between" class="callflow-select-110" v-model="user.between2">
                    <option value="All day">All day</option>
                  </select>
                  <div style="clear: both;"></div>
                  <div class="callflow-plus">
                    <div class="plus"></div>
                  </div>
                  <div class="callflow-link">
                    Add Time
                  </div>
                  <div class="callflow-blue">
                    <div class="callflow-blue-text">
                      <b>Schedule Branch B:</b> If a call is received during the following times
                    </div>
                  </div>
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Weekdays" class="callflow-select-120" v-model="user.weekdays">
                    <option value="Weekdays">Weekdays</option>
                  </select>
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Between" class="callflow-select-110" v-model="user.between">
                    <option value="Between">Between</option>
                  </select>
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Hours" class="callflow-select-85" v-model="user.hour3">
                    <option value="12PM">12PM</option>
                  </select>
                  <div class="callflow-symbol-1">
                    :
                  </div>
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Minutes" class="callflow-select-60" v-model="user.minutes1">
                    <option value="00">00</option>
                  </select>
                  <div class="callflow-symbol-2">
                    &
                  </div>
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Hours" class="callflow-select-85" v-model="user.hour3">
                    <option value="12PM">12PM</option>
                  </select>
                  <div class="callflow-symbol-1">
                    :
                  </div>
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Minutes" class="callflow-select-60" v-model="user.minutes2">
                    <option value="00">00</option>
                  </select>
                  <div style="clear: both;"></div>
                  <div class="callflow-plus">
                    <div class="plus"></div>
                  </div>
                  <div class="callflow-link">
                    Add Time
                  </div>
                  <div style="clear: both;"></div>
                  <button class="callflow-blue-button" type="submit">Add Schedule Branch</button>
                  <div class="callflow-red">
                    <div class="callflow-red-text">
                      <b>Any other time</b>
                    </div>
                  </div>
                </div>
                <div class="callflow-main-cont">
                  <div class="callflow-circle-grey">
                    <div class="callflow-geo-box">
                      <img src="@/assets/Icon/Callflow/Geo.svg">
                    </div>
                  </div>
                  <div class="callflow-main-div">
                    <div class="callflow-cont-title">
                      Geo-Routing
                    </div>
                    <div class="callflow-cont-text">
                      Route callers to different destinations automatically by area code, or manually by zip
                      code.
                    </div>
                    <div class="callflow-cont-nav">
                      <div class="callflow-cont-navbar-active">
                        Area Code
                      </div>
                      <div class="callflow-cont-navbar">
                        ZIP Code
                      </div>
                    </div>
                    <div class="callflow-blue">
                      <div class="callflow-blue-text">
                        <b>Location 1:</b> If the caller’s area code matches the following area codes:
                      </div>
                    </div>
                    <input class="callflow-input-90" value="815" type="text" v-model="user.areaCode1">
                    <div class="callflow-area-cross">
                      <div class="cross-2"></div>
                    </div>
                    <input class="callflow-input-90" value="918" type="text" v-model="user.areaCode2">
                    <div class="callflow-area-cross">
                      <div class="cross-2"></div>
                    </div>
                    <input class="callflow-input-90" value="" type="text" v-model="user.areaCode3">
                    <div class="callflow-area-cross">
                      <div class="cross-2"></div>
                    </div>
                    <div style="clear: both;"></div>
                    <div class="callflow-plus">
                      <div class="plus"></div>
                    </div>
                    <div class="callflow-link">
                      Add Area Code
                    </div>
                    <div class="callflow-blue">
                      <div class="callflow-blue-text">
                        <b>Location 2:</b> If the caller’s area code matches the following area codes:
                      </div>
                    </div>
                    <input class="callflow-input-90" value="417" type="text" v-model="user.areaCode4">
                    <div class="callflow-area-cross">
                      <div class="cross-2"></div>
                    </div>
                    <div style="clear: both;"></div>
                    <div class="callflow-plus">
                      <div class="plus"></div>
                    </div>
                    <div class="callflow-link">
                      Add Area Code
                    </div>
                    <div style="clear: both;"></div>
                    <button class="callflow-blue-button" type="submit">Add Location</button>
                    <div class="callflow-blue">
                      <div class="callflow-blue-text">
                        <b>Any other time</b>
                      </div>
                    </div>
                  </div>
                  <div class="callflow-main-cont">
                    <div class="callflow-circle-grey">
                      <div class="callflow-tag-box">
                        <img src="@/assets/Icon/Callflow/Tag.svg">
                      </div>
                    </div>
                    <div class="callflow-main-div">
                      <div class="callflow-cont-title">
                        Tag
                      </div>
                      <div class="callflow-cont-text">
                        Add one or more tags to the call.
                      </div>
                      <div class="callflow-input-title">
                        Apply tags
                      </div>
                      <button class="callflow-yellow-button" type="submit">
                        <div class="callflow-button-text">
                          Conversion
                        </div>
                        <div class="callflow-button-cross">
                          <div class="cross-2"></div>
                        </div>
                      </button>
                      <button class="callflow-purple-button" type="submit">
                        <div class="callflow-button-text">
                          Missed Call
                        </div>
                        <div class="callflow-button-cross">
                          <div class="cross-2"></div>
                        </div>
                      </button>
                      <div style="clear: both;"></div>
                      <div class="callflow-plus">
                        <div class="plus"></div>
                      </div>
                      <div class="callflow-link">
                        Add Tag
                      </div>
                    </div>
                  </div>
                  <div class="callflow-main-cont">
                    <div class="callflow-circle-grey">
                      <div class="callflow-hang-box">
                        <img src="@/assets/Icon/Callflow/Dial.svg">
                      </div>
                    </div>
                    <div class="callflow-main-div">
                      <div class="callflow-cont-title">
                        Hang up
                      </div>
                      <div class="callflow-cont-text">
                        The call will be disconnected.
                      </div>
                    </div>
                  </div>
                  <div class="callflow-main-cont">
                    <div class="callflow-circle-green">
                      <div class="callflow-plus-box">
                        <img src="@/assets/Icon/Callflow/Plus.svg">
                      </div>
                    </div>
                    <div class="callflow-green-div">
                      <div class="callflow-green-title">
                        What would you like to happen next?
                      </div>
                      <div class="callflow-grid">
                        <img src="@/assets/Icon/Callflow/Greeting.svg">
                      </div>
                    </div>
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
import ProfileComponent from '@/components/ProfileComponent'

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
                days: 'Last 30 days',
                number: 'Number',
                seconds: '20 seconds',
                weekdays: 'Weekdays',
                between: 'Between',
                hour1: '5PM',
                minutes1: '00',
                hour2: '8PM',
                minutes2: '00',
                weekends: 'Weekends',
                between2: 'All day',
                hour3: '12PM',
                areaCode1: '815',
                areaCode2: '918',
                areaCode3: '',
                areaCode4: '417',
            },

        }
    },
    components:{
      modal,
      ProfileComponent,
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

.checkbox-cont {
    position: relative;
    display: inline-block;
    float: left;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-bottom: 20px;
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
    height: 20px;
    width: 20px;
    border: 1px solid #D0D9E1;
    border-radius: 6px;
    background-color: #FFFFFF;
}

/* When the checkbox is checked, add a blue background */
.checkbox-cont input:checked ~ .checkbox-mark {
    background-color: #24E2B8;
    border: 1px solid #24E2B8;
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
    left: 6px;
    top: 2px;
    width: 6px;
    height: 11px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.callflow-green-title{
  color: #161D29;
  font-family: "Proxima Nova";
  font-size: 21px;
  line-height: 40px;
  text-align: center;
  margin-top: 44px;
  margin-bottom: 15px;
}
.callflow-grid{
  width: 20%;
  float: left;
  display: inline-block;
  text-align: center;
}
.callflow-plus-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 10px;
}
.callflow-hang-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 12px;
  margin-left: 9px;
  margin-right: 10px;
}
.callflow-geo-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 12px;
  margin-left: 15px;
  margin-right: 10px;
}
.callflow-tag-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 12px;
  margin-left: 13px;
  margin-right: 10px;
}
.callflow-simulcall-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 9px;
  margin-left: 9px;
  margin-right: 10px;
}
.callflow-dial-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 9px;
  margin-left: 11px;
  margin-right: 10px;
}
.callflow-blue-button{
  border-radius: 6px;
  border: 1px solid #51A3F3;
  background-color: #51A3F3;
  color: #FFFFFF;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  float: left;
  display: inline-block;
  height: 40px;
  width: auto;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 30px;
}
.callflow-button-text{
  float: left;
  display: inline-block;
  margin-top: 10px;
}
.callflow-yellow-button{
  border: 1px solid #FEDE7F;
  border-radius: 3px;
  background-color: #FEDE7F;
  color: #31333B;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  float: left;
  display: inline-block;
  height: 40px;
  width: auto;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;
  margin-right: 10px;
}
.callflow-purple-button{
  border: 1px solid #BBB4FF;
  border-radius: 3px;
  background-color: #BBB4FF;
  color: #31333B;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  float: left;
  display: inline-block;
  height: 40px;
  width: auto;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;
  margin-right: 10px;
}
.callflow-select-120{
  width: 17.1428571429%;
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  height: 40px;
  padding-left: 10px;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
}
.callflow-select-110{
  width: 15.7142857143%;
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  height: 40px;
  padding-left: 10px;
  float: left;
  margin-right: 15px;
  margin-bottom: 15px;
}
.callflow-input-90{
  width: 11%;
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  height: 36px;
  margin-top: 5px;
  padding-left: 10px;
  float: left;
  margin-right: 5px;
  margin-bottom: 15px;
}
.callflow-select-85{
  width: 12.1428571429%;
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  height: 40px;
  padding-left: 10px;
  float: left;
  margin-right: 5px;
  margin-bottom: 15px;
}
.callflow-select-75{
  width: 10.7142857143%;
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  height: 40px;
  padding-left: 10px;
  float: left;
  margin-right: 5px;
  margin-bottom: 15px;
}
.callflow-select-60{
  width: 8.57142857143%;
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  height: 40px;
  padding-left: 10px;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
}
.callflow-symbol-1{
  margin-right: 5px;
  margin-top: 10px;
  float: left;
  display: inline-block;
  margin-bottom: 15px;
}
.callflow-symbol-2{
  margin-right: 10px;
  margin-top: 10px;
  float: left;
  display: inline-block;
  margin-bottom: 15px;
}

.callflow-blue{
  width: calc(100% + 56px);
  height: 60px;
  border-left: 4px solid #51A3F3;
  background-color: #E5F1FD;
  float: left;
  margin-left: -30px;
  display: inline-block;
  margin-bottom: 10px;
}

.callflow-red{
  width: calc(100% + 56px);
  height: 60px;
  border-left: 4px solid #FF4F60;
  background-color: #FFF1F2;
  float: left;
  margin-left: -30px;
  display: inline-block;
  margin-bottom: 20px;
}


.callflow-plus{
  float: left;
  display: inline-block;
  height: 40px;
  padding-top: 3px;
  padding-right: 10px;
}
.callflow-cross{
  float: left;
  display: inline-block;
  height: 40px;
  padding-top: 10px;
  padding-left: 15px;
}
.callflow-area-cross{
  float: left;
  display: inline-block;
  height: 40px;
  padding-top: 15px;
  padding-right: 10px;
  padding-left: 5px;
}
.callflow-color-cross{
  float: left;
  display: inline-block;
  height: 40px;
  padding-top: 20px;
  padding-left: 15px;
}
.callflow-button-cross{
  float: left;
  display: inline-block;
  height: 40px;
  padding-top: 12px;
  padding-left: 10px;
}
.cross{
  position: relative;
  display: inline-block;
  float: left;
  height: 15px; /* this can be anything */
  width: 15px;  /* ...but maintain 1:1 aspect ratio */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cross::before,
.cross::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px; /* cross thickness */
    background-color: grey;
}

.cross::before {
    transform: rotate(45deg);
}

.cross::after {
    transform: rotate(-45deg);
}


.cross-2{
  position: relative;
  display: inline-block;
  float: left;
  height: 17px; /* this can be anything */
  width: 17px;  /* ...but maintain 1:1 aspect ratio */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cross-2::before,
.cross-2::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px; /* cross thickness */
    background-color: grey;
}

.cross-2::before {
    transform: rotate(45deg);
}

.cross-2::after {
    transform: rotate(-45deg);
}

.plus{
  position: relative;
  display: inline-block;
  float: left;
  height: 15px; /* this can be anything */
  width: 15px;  /* ...but maintain 1:1 aspect ratio */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.plus::before,
.plus::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 3px; /* cross thickness */
    background-color: #51A3F3;
}

.plus::before {
    transform: rotate(0deg);
}

.plus::after {
    transform: rotate(-90deg);
}

.callflow-radio-content{
  display: inline-block;
  float: left;
  margin-right: 15px;
  margin-bottom: 15px;
}
.callflow-radio-text{
  margin-left: 45px;
  margin-top: 22px;
}
.callflow-checkbox-text{
  margin-left: 35px;
  margin-top: 2px;
}
/* The container */
.callflow-radio-container {
  position: relative;
  display: inline-block;
  float: left;
  margin-left: -15px;
}

/* Hide the browser's default radio button */
.callflow-radio-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    border: 1px solid #BDBFD8;
    background-color: #FFF;
    border-radius: 50%;
    margin-top: 23px;
    margin-left: 15px;
}

/* On mouse-over, add a grey background color */
.callflow-radio-container:hover input ~ .checkmark {
    background-color: #FFF;
}

/* When the radio button is checked, add a blue background */
.callflow-radio-container input:checked ~ .checkmark {
    background-color: #24E2B8;
    border: 2px solid #24E2B8;
    margin-top: 22px;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the indicator (dot/circle) when checked */
.callflow-radio-container input:checked ~ .checkmark:after {
    display: block;
}

/* Style the indicator (dot/circle) */
.callflow-radio-container .checkmark:after {
 	top: 3px;
	left: 3px;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #FFFFFF;
}



.callflow-grey{
  width: calc(100% + 56px);
  height: 70px;
  border-left: 4px solid #51A3F3;
  background-color: #F4F6F7;
  float: left;
  margin-left: -30px;
  display: inline-block;
  margin-bottom: 20px;
}
.callflow-checkbox{
  float: left;
  display: inline-block;
  margin-right: 15px;
  margin-top: 13px;
}
.callflow-input-text{
  color: #31333B;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 40px;
  float: left;
  display: inline-block;
}
.callflow-grey-text{
  color: #31333B;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 40px;
  float: left;
  display: inline-block;
  height: 40px;
  margin-top: 15px;
  margin-left: 30px;
}
.callflow-blue-text{
  color: #31333B;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 40px;
  float: left;
  display: inline-block;
  height: 40px;
  margin-top: 10px;
  margin-left: 30px;
}
.callflow-red-text{
  color: #31333B;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 40px;
  float: left;
  display: inline-block;
  height: 40px;
  margin-top: 10px;
  margin-left: 30px;
}
.callflow-grey-text-second{
  color: #31333B;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 40px;
  float: left;
  display: inline-block;
  height: 40px;
  margin-top: 15px;
}
.callflow-cont-input{
  max-width: 65%;
  width: 100%;
  margin-bottom: 20px;
  height: 36px !important;
  padding-left: 10px;
  float: left;
}
.callflow-number-input{
  max-width: 44.1379310345%;
  width: 100%;
  margin-bottom: 20px;
  height: 36px !important;
  padding-left: 10px;
  float: left;
}
.callflow-color-input{
  max-width: 44.1379310345%;
  width: 100%;
  margin-bottom: 15px;
  height: 36px !important;
  padding-left: 10px;
  float: left;
  margin-top: 10px;
}
.callflow-select{
  width: 30.2857142857%;
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  height: 40px;
  padding-left: 10px;
  float: left;
  margin-right: 20px;
}
.callflow-blue-select{
  width: 19.8675496689%;
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  height: 40px;
  padding-left: 10px;
  float: left;
  margin-top: 15px;
  margin-right: 10px;
  margin-left: 10px;
}
.callflow-color-select{
  width: 19.8675496689%;
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  height: 40px;
  padding-left: 10px;
  float: left;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 25px;
}
.callflow-input-title{
  color: #70828B;
  font-family: "Proxima Nova";
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 25px;
  float: left;
  display: inline-block;
  width: 100%;
  text-transform: uppercase;
  margin-top: 15px;
}
.callflow-cont-nav{
  width: 100%;
  float: left;
  display: inline-block;
  border-bottom: 2px solid #F4F6F7;
  height: 40px;
  margin-bottom: 15px;
  margin-top: 15px;
}
.callflow-textarea{
  width: 100%;
  float: left;
  display: inline-block;
  height: 80px;
  margin-top: 5px;
  margin-bottom: 10px;
}
.callflow-triangle{
  width: 0;
	height: 0;
	border-top: 8px solid transparent;
	border-left: 10px solid #51A3F3;
	border-bottom: 8px solid transparent;
  float: left;
  display: inline-block;
  margin-right: 5px;
  margin-top: 3px;
  margin-bottom: 36px;
}
.callflow-link{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  float: left;
  display: inline-block;
}
.callflow-cont-navbar{
  width: 123px;
  color: #70828B;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  float: left;
  display: inline-block;
  margin-top: 10px;
}
.callflow-cont-navbar-active{
  width: 123px;
  border-bottom: 2px solid #51A3F3;
  color: #222A37;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  float: left;
  display: inline-block;
  margin-top: 10px;
}
.callflow-main-cont{
  width: 100%;
  float: left;
  display: inline-block;
  margin-top: 40px;
}
.callflow-green-div{
  width: 700px;
  height: auto;
  float: left;
  display: inline-block;
  border: 3px solid #24E2B8;
  border-radius: 6px;
  background-color: #FFFFFF;
  margin-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
}
.callflow-main-div{
  width: 700px;
  height: auto;
  float: left;
  display: inline-block;
  background-color: #FFFFFF;
  margin-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
}
.callflow-cont-title{
  color: #4D545E;
  font-family: "Proxima Nova";
  font-size: 21px;
  line-height: 30px;
  display: inline-block;
  float: left;
  margin-top: 37px;
  width: 85%;
  height: 30px;
}
.callflow-cont-text{
  color: #70828B;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  display: inline-block;
  float: left;
  max-width: 100%;
  width: 100%;
}
.callflow-circle-grey{
	height: 54px;
	width: 54px;
	border-radius: 30px;
	background-color: #55616E;
	box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  position: absolute;
  margin-top: 15px;
  margin-left: 15px;
}
.callflow-circle-green{
	height: 54px;
	width: 54px;
	border-radius: 30px;
	background-color: #24E2B8;
	box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  position: absolute;
  margin-top: 15px;
  margin-left: 15px;
}
.callflow-record-question{
  color: #A6B6BE;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  border-bottom: 1px dashed #D0D9E1;
  display: inline-block;
  float: left;
  margin-left: 15px;
  margin-top: 5px;
}
.callflow-start-main{
  width: 100%;
  display: inline-block;
  float: left;
}
.callflow-record-main{
  width: 100%;
  display: inline-block;
  float: left;
  margin-top: 65px;
  margin-left: 54px;
}
.callflow-record{
	color: #4D545E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  display: inline-block;
  float: left;
  margin-top: 5px;
  margin-right: 10px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 30px;
  float: left;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #24E2B8;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.callflow-circle-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 10px;
}
.callflow-circle-grey-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 12px;
  margin-left: 12px;
  margin-right: 10px;
}
.callflow-title-big{
  	color: #161D29;
    font-family: "Circular Std";
    font-size: 30px;
    font-weight: 300;
    line-height: 48px;
    text-align: center;
    display: inline-block;
    float: left;
    margin-top: 5px;
    margin-left: 14px;
}
.callflow-circle{
	height: 60px;
	width: 60px;
	border-radius: 30px;
	background-color: #51A3F3;
	box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  float: left;
  display: inline-block;
}
.callflow-main-title{
	color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  float: left;
  display: inline-block;
  max-width: 100%;
  width: 100%;
  margin-bottom: 15px;
}
.callflow-title{
  color: #000000;
  font-family: "Circular Std";
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.21px;
  line-height: 15px;
  float: left;
  display: inline-block;
  text-transform: uppercase;
  max-width: 100%;
  width: 100%;
  margin-bottom: 5px;
}
.callflow-create{
  max-width: calc(100% - 40px);
  width: 100%;
  padding: 15px;
  background-color: #FFFFFF;
  height: 115px;
  margin-bottom: 30px;
  border-radius: 4px;
}
.callflow-input{
  max-width: 45.6140350877%;
  width: 100%;
  height: 40px;
  float: left;
  display: inline-block;
  padding-left: 10px;
  margin-bottom: 30px;
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
select{
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
}
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
.nav-link-1{
  display: inline-block;
  float: left;
  height: 50px;
  width: 90px;
  margin-left: 20px;
}
.nav-line-bill-1{
  border-bottom: 2px solid #51A3F3;
  width: 90px;
  margin-top: 13px;
}
.nav-link-2{
  display: inline-block;
  float: left;
  height: 50px;
  width: 120px;
}
.nav-link-3{
  display: inline-block;
  float: left;
  height: 50px;
  width: 120px;
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
.svg-back-call{
  float: left;
  display: inline-block;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 20px;
  margin-right: 5px;
}
.back-call{
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
.did-table{
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
.did-table-th{
  height: 37px;
}
.did-online{
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
  height: 50px;
}
.did-offline{
  background-color: #F0F1FA;
  box-shadow: inset 0 -1px 0 0 rgba(189,191,216,0.36);
  height: 50px;
}
.did-active{
  width: 20px;
  padding-left: 7px;
}
.did-number{
  width: 199px;
}
.did-created{
  width: 119px;
}
.did-created-by{
  width: 223px;
}
.did-country{
  width: 116px;
}
.did-type{
  width: 118px;
}
.did-assigned{
  width: 190px;
}
.did-option{
  width: 50px;
}

.product-active{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #24E2B8;
  float: left;
  margin-left: 3px;
}
.product-not-active{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #D2305B;
  float: left;
  margin-left: 3px;
}
.did-control-info{
  width: 30px;
  height: 30px;
  float: left;
  margin-top: -10px;
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
button#create{
  	height: 40px;
    border: 1px solid #51A3F3;
    border-radius: 4px;
    background-color: #51A3F3;
    color: #FFFFFF;
    font-family: "Helvetica Neue";
    font-size: 15px;
    font-weight: 500;
    line-height: 30px;
    text-align: center;
    float: right;
    margin-right: 20px;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 20px;
}
button#call-cancel{
  	height: 40px;
    border: 1px solid #BDBFD8;
    border-radius: 4px;
    background-color: #FFFFFF;
    color: #55616E;
    font-family: "Circular Std";
    font-size: 15px;
    font-weight: 500;
    line-height: 19px;
    text-align: center;
    float: right;
    margin-right: 10px;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 20px;
    margin-right: 15px;
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
  margin-bottom: 20px;
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
    .did-input-search{
      max-width: calc(100% - 80px);
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
</style>
