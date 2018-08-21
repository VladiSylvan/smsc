<template>
    <div class="container">
      <company-navigation-component title="DIDs"></company-navigation-component>
      <div class="main-navi">
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
        </div>
        <div class="main">
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
              <div class="callflow-main-div">
                <div class="callflow-circle-grey">
                  <div class="callflow-circle-grey-box">
                    <img src="@/assets/Icon/Callflow/Greeting.svg">
                  </div>
                </div>
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
              <div class="callflow-main-div">
                <div class="callflow-circle-grey">
                  <div class="callflow-dial-box">
                    <img style="transform: rotate(215deg);" src="@/assets/Icon/Callflow/Dial.svg">
                  </div>
                </div>
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
                <label class="checkbox-call-cont">
                  <div class="callflow-checkbox-text">
                    Prevent voicemails and automated systems from answering a call.
                  </div>
                  <input type="checkbox">
                  <span class="checkbox-call-mark"></span>
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
              <div class="callflow-main-div">
                <div class="callflow-circle-grey">
                  <div class="callflow-simulcall-box">
                    <img src="@/assets/Icon/Callflow/Call.svg">
                  </div>
                </div>
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
                    <span class="checkmark-call"></span>
                  </label>
                </div>
                <div class="callflow-radio-content">
                  <label class="callflow-radio-container">
                    <div class="callflow-radio-text">
                      Ring all at once
                    </div>
                    <input type="radio" name="radio">
                    <span class="checkmark-call"></span>
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
                <label class="checkbox-call-cont">
                  <div class="callflow-checkbox-text">
                    Prevent voicemails and automated systems from answering a call.
                  </div>
                  <input type="checkbox" checked="checked">
                  <span class="checkbox-call-mark"></span>
                </label>
                <div style="clear: both;"></div>
                <label class="checkbox-call-cont">
                  <div class="callflow-checkbox-text">
                    Route previous callers to the number that answered last time they called.
                  </div>
                  <input type="checkbox">
                  <span class="checkbox-call-mark"></span>
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
                <div class="callflow-main-div">
                  <div class="callflow-circle-grey">
                    <div class="callflow-circle-grey-box">
                      <img src="@/assets/Icon/Callflow/Menu.svg">
                    </div>
                  </div>
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
                <div class="callflow-main-div">
                  <div class="callflow-circle-grey">
                    <div class="callflow-circle-grey-box">
                      <img src="@/assets/Icon/Callflow/Schedule.svg">
                    </div>
                  </div>
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
                  <div class="callflow-main-div">
                    <div class="callflow-circle-grey">
                      <div class="callflow-geo-box">
                        <img src="@/assets/Icon/Callflow/Geo.svg">
                      </div>
                    </div>
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
                    <div class="callflow-main-div">
                      <div class="callflow-circle-grey">
                        <div class="callflow-tag-box">
                          <img src="@/assets/Icon/Callflow/Tag.svg">
                        </div>
                      </div>
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
                    <div class="callflow-main-div">
                      <div class="callflow-circle-grey">
                        <div class="callflow-hang-box">
                          <img src="@/assets/Icon/Callflow/Dial.svg">
                        </div>
                      </div>
                      <div class="callflow-cont-title">
                        Hang up
                      </div>
                      <div class="callflow-cont-text">
                        The call will be disconnected.
                      </div>
                    </div>
                  </div>
                  <div class="callflow-main-cont">
                    <div class="callflow-green-div">
                      <div class="callflow-circle-green">
                        <div class="callflow-plus-box">
                          <img src="@/assets/Icon/Callflow/Plus.svg">
                        </div>
                      </div>
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
