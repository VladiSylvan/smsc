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
            <div v-if="users" class="chat-menu">
              <input v-on:click="users = !users" class="sms-input-menu" type="text" v-model="user.smsInputMenu" placeholder="Type a number or name">
              <router-link :to="{ name: 'SMSCenterEmpty' }">
                <div class="chat-menu-users">
                  <div class="chat-menu-avatar"></div>
                  <div class="chat-menu-name">
                    Glen Moody
                  </div>
                </div>
              </router-link>
              <div class="chat-menu-title">
                Recent
              </div>
              <div class="chat-menu-recent">
                <div class="chat-menu-avatar"></div>
                <div class="chat-menu-name">
                  Cole Hart
                </div>
              </div>
              <div class="chat-menu-recent">
                <div class="chat-menu-avatar"></div>
                <div class="chat-menu-name">
                  John Davidson
                </div>
              </div>
              <div class="chat-menu-recent">
                <div class="chat-menu-avatar"></div>
                <div class="chat-menu-name">
                  Olivia Copeland
                </div>
              </div>
              <div class="chat-menu-recent">
                <div class="chat-menu-avatar"></div>
                <div class="chat-menu-name">
                  Evelyn Graves
                </div>
              </div>
              <div class="chat-menu-recent">
                <div class="chat-menu-avatar"></div>
                <div class="chat-menu-name">
                  John Davidson
                </div>
              </div>
            </div>
            <input v-on:click="users = !users" class="sms-input" type="text" v-model="user.smsInput" placeholder="Type a number or name">
          </div>
          <div class="chat-messages">
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
          users: false,
          isModalVisible: false,
                user:{
                system: 'Overall system',
                days: 'Last 30 days',
                smsInputMenu: 'Glen',
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
