<template>
    <div class="container">
      <company-navigation-component title="SMS Center"></company-navigation-component>
      <div class="main-navi">
        <div class="res-div">
          <div class="head-title">
            SMS Center
          </div>
        </div>
      </div>
      <div class="main">
        <div class="messages">
          <div class="new-message">
            <div class="svg-add">
              <svg class="svg-white" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M14.9776692,5 C9.47601504,5 5,9.47593985 5,14.977594 C5,20.4792481 9.47593985,24.955188 14.977594,24.955188 C20.4792481,24.955188 24.9551128,20.4792481 24.9551128,14.977594 C24.9551128,9.47593985 20.4793233,5 14.9776692,5 Z M14.9776692,23.8273684 C10.0978195,23.8273684 6.12781955,19.8574436 6.12781955,14.977594 C6.12781955,10.0977444 10.0978195,6.12781955 14.9776692,6.12781955 C19.8573684,6.12781955 23.8273684,10.0978195 23.8273684,14.977594 C23.8273684,19.8573684 19.8573684,23.8273684 14.9776692,23.8273684 Z M18.4926901,14.3550877 L15.7499108,14.3550877 L15.7499108,11.6578947 C15.7499108,11.2944737 15.4504601,11 15.0808967,11 C14.7113333,11 14.4118826,11.2944737 14.4118826,11.6578947 L14.4118826,14.3550877 L11.6690141,14.3550877 C11.2994507,14.3550877 11,14.6495614 11,15.0129825 C11,15.3764035 11.2994507,15.6708772 11.6690141,15.6708772 L14.4117934,15.6708772 L14.4117934,18.3681579 C14.4117934,18.7315789 14.7112441,19.0260526 15.0808075,19.0260526 C15.4503709,19.0260526 15.7498216,18.7315789 15.7498216,18.3681579 L15.7498216,15.6708772 L18.4926009,15.6708772 C18.8621643,15.6708772 19.161615,15.3764035 19.161615,15.0129825 C19.161615,14.6495614 18.8621643,14.3550877 18.4926901,14.3550877 Z" id="path-1">
                </path>
              </svg>
            </div>
            <router-link :to="{ name: 'SMSCenterNew' }">
              <div class="new-message-text">
                New Message
              </div>
            </router-link>
          </div>
          <div class="message">
            <table class="sms-table" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>
                  <td class="sms-avatar"><div class="avatar"></div></td>
                  <td class="sms-message">
                    <div class="sms-table-name">
                      Maud Stewart
                    </div>
                    <div class="sms-table-msg">
                      What Makes A Hotel
                    </div>
                  </td>
                  <td class="sms-date">
                    <div class="sms-table-date">
                      22 Sep
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="sms-avatar-active"><div class="avatar"></div></td>
                  <td class="sms-message-active">
                    <div class="sms-table-name">
                      Glen Moody
                    </div>
                    <div class="sms-table-msg">
                      What Makes A Hotel
                    </div>
                  </td>
                  <td class="sms-date-active">
                    <div class="sms-table-date">
                      22 Sep
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="sms-avatar"><div class="avatar"></div></td>
                  <td class="sms-message">
                    <div class="sms-table-name">
                      Lillie Walton
                    </div>
                    <div class="sms-table-msg">
                      What Makes A Hotel
                    </div>
                  </td>
                  <td class="sms-date">
                    <div class="sms-table-date">
                      22 Sep
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="sms-avatar"><div class="avatar"></div></td>
                  <td class="sms-message">
                    <div class="sms-table-name">
                      Lenora Copeland
                    </div>
                    <div class="sms-table-msg">
                      What Makes A Hotel
                    </div>
                  </td>
                  <td class="sms-date">
                    <div class="sms-table-date">
                      22 Sep
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="sms-avatar"><div class="avatar"></div></td>
                  <td class="sms-message">
                    <div class="sms-table-name">
                      Abbie Ortiz
                    </div>
                    <div class="sms-table-msg">
                      What Makes A Hotel
                    </div>
                  </td>
                  <td class="sms-date">
                    <div class="sms-table-date">
                      22 Sep
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="sms-avatar"><div class="avatar"></div></td>
                  <td class="sms-message">
                    <div class="sms-table-name">
                      Randy Schwartz
                    </div>
                    <div class="sms-table-msg">
                      What Makes A Hotel
                    </div>
                  </td>
                  <td class="sms-date">
                    <div class="sms-table-date">
                      22 Sep
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="sms-avatar"><div class="avatar"></div></td>
                  <td class="sms-message">
                    <div class="sms-table-name">
                      Mable Spencer
                    </div>
                    <div class="sms-table-msg">
                      What Makes A Hotel
                    </div>
                  </td>
                  <td class="sms-date">
                    <div class="sms-table-date">
                      22 Sep
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="sms-avatar"><div class="avatar"></div></td>
                  <td class="sms-message">
                    <div class="sms-table-name">
                      Maude Lamb
                    </div>
                    <div class="sms-table-msg">
                      What Makes A Hotel
                    </div>
                  </td>
                  <td class="sms-date">
                    <div class="sms-table-date">
                      22 Sep
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="sms-avatar"><div class="avatar"></div></td>
                  <td class="sms-message">
                    <div class="sms-table-name">
                      Ruth McLaughlin
                    </div>
                    <div class="sms-table-msg">
                      What Makes A Hotel
                    </div>
                  </td>
                  <td class="sms-date">
                    <div class="sms-table-date">
                      22 Sep
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="sms-avatar"><div class="avatar"></div></td>
                  <td class="sms-message">
                    <div class="sms-table-name">
                      Glen Parsons
                    </div>
                    <div class="sms-table-msg">
                      What Makes A Hotel
                    </div>
                  </td>
                  <td class="sms-date">
                    <div class="sms-table-date">
                      22 Sep
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="sms-avatar"><div class="avatar"></div></td>
                  <td class="sms-message">
                    <div class="sms-table-name">
                      William Cortez
                    </div>
                    <div class="sms-table-msg">
                      What Makes A Hotel
                    </div>
                  </td>
                  <td class="sms-date">
                    <div class="sms-table-date">
                      22 Sep
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="sms-avatar"><div class="avatar"></div></td>
                  <td class="sms-message">
                    <div class="sms-table-name">
                      Leo Bowman
                    </div>
                    <div class="sms-table-msg">
                      What Makes A Hotel
                    </div>
                  </td>
                  <td class="sms-date">
                    <div class="sms-table-date">
                      22 Sep
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="chat">
          <div class="chat-input">
            <div class="chat-sms-avatar"></div>
            <div class="chat-sms-name">
              Glen Moody
            </div>
            <div class="chat-sms-more">
              <img src="@/assets/Icon/More.svg">
            </div>
            <div class="chat-sms-call">
              <img src="@/assets/Icon/Call.svg">
            </div>
          </div>
          <div class="chat-messages">
            <div class="chat-message">
              <div class="chat-receiver">
                <div class="chat-receiver-text">
                  Quite a number of devices and sources on the market today will work with the use of HDMI.
                  The Blu-Ray disc player, a relatively new innovation, was created with the use of HDMI specifically
                  in mind.
                </div>
                <div style="clear: both;"></div>
                <div class="chat-receiver-info">
                  352-626-4573 · 05 Jan 2018
                </div>
              </div>
            </div>
            <div class="chat-message">
              <div class="chat-sender">
                <div class="chat-avatar"></div>
                <div class="chat-sender-text">
                   Most personal computers that are sold today are ready for use with HDMI, as are the majority of
                   video game consoles in the stores currently. A set-top box also is usually compatible with HDMI,
                   as are such entertainment options as digital television. Essentially, any type of computer interface
                   today will function with the use of HDMI. How Does HDMI Work?
                </div>
                <div style="clear: both;"></div>
                <div class="chat-sender-info">
                  05 Jan 2018 · 149-777-3171
                </div>
              </div>
            </div>
            <div class="chat-message">
              <div class="chat-receiver">
                <div class="chat-receiver-image">
                </div>
                <div style="clear: both;"></div>
                <div class="chat-receiver-text">
                  Quite a number of devices and sources on the market today will work with the use of HDMI.
                  The Blu-Ray disc player, a relatively new innovation, was created with the use of HDMI specifically
                  in mind.
                </div>
                <div style="clear: both;"></div>
                <div class="chat-receiver-info">
                  352-626-4573 · 05 Jan 2018
                </div>
              </div>
            </div>
            <div class="chat-message">
              <div class="chat-sender">
                <div class="chat-avatar"></div>
                <div class="chat-sender-text">
                   5 Reasons To Purchase Desktop Computers
                </div>
                <div style="clear: both;"></div>
                <div class="chat-sender-info">
                  05 Jan 2018 · 243-357-5470 · <span class="chat-info">Sent as SMS</span>
                </div>
              </div>
            </div>
          </div>
          <input class="chat-insert" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Image.svg') + ')' }" type="text" v-model="user.smsInsert" placeholder="Type your message here">
          <div class="send-button">
            <img class="send-image" src="@/assets/Icon/Send.svg">
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import AlertDailyLine from '@/components/cadmin/AlertDailyLine'
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
          isModalVisible: false,
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            },

        }
    },
    components:{
      AlertDailyLine,
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
