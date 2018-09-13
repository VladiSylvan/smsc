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
          <div class="new-message" @click="newMessage()">
            <div class="svg-add">
              <svg class="svg-white" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M14.9776692,5 C9.47601504,5 5,9.47593985 5,14.977594 C5,20.4792481 9.47593985,24.955188 14.977594,24.955188 C20.4792481,24.955188 24.9551128,20.4792481 24.9551128,14.977594 C24.9551128,9.47593985 20.4793233,5 14.9776692,5 Z M14.9776692,23.8273684 C10.0978195,23.8273684 6.12781955,19.8574436 6.12781955,14.977594 C6.12781955,10.0977444 10.0978195,6.12781955 14.9776692,6.12781955 C19.8573684,6.12781955 23.8273684,10.0978195 23.8273684,14.977594 C23.8273684,19.8573684 19.8573684,23.8273684 14.9776692,23.8273684 Z M18.4926901,14.3550877 L15.7499108,14.3550877 L15.7499108,11.6578947 C15.7499108,11.2944737 15.4504601,11 15.0808967,11 C14.7113333,11 14.4118826,11.2944737 14.4118826,11.6578947 L14.4118826,14.3550877 L11.6690141,14.3550877 C11.2994507,14.3550877 11,14.6495614 11,15.0129825 C11,15.3764035 11.2994507,15.6708772 11.6690141,15.6708772 L14.4117934,15.6708772 L14.4117934,18.3681579 C14.4117934,18.7315789 14.7112441,19.0260526 15.0808075,19.0260526 C15.4503709,19.0260526 15.7498216,18.7315789 15.7498216,18.3681579 L15.7498216,15.6708772 L18.4926009,15.6708772 C18.8621643,15.6708772 19.161615,15.3764035 19.161615,15.0129825 C19.161615,14.6495614 18.8621643,14.3550877 18.4926901,14.3550877 Z" id="path-1">
                </path>
              </svg>
            </div>
            <!-- <router-link :to="{ name: 'SMSCenterNew' }"> -->
              <div class="new-message-text">
                New Message
              </div>
            <!-- </router-link> -->
          </div>
          <div class="message">
            <table class="sms-table" cellspacing="0" cellpadding="0">
              <tbody>
                <!-- <tr style="background: #fff!important; cursor: default">
                  <td style="padding: 15px">No recent messages</td>
                </tr> -->
                <tr v-for="recipient in history" @click="selectRecipient(recipient)">
                  <td class="sms-avatar"><div class="avatar"></div></td>
                  <td class="sms-message">
                    <div class="sms-table-name">
                      {{ recipient.recipient_name }}
                    </div>
                    <div class="sms-table-msg">
                      ...
                    </div>
                  </td>
                  <td class="sms-date">
                    <div class="sms-table-date">
                      22 Sep
                    </div>
                  </td>
                </tr>
                <!-- <tr>
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
                </tr> -->
              </tbody>
            </table>
          </div>
        </div>
        <div class="chat">
          <div class="chat-input">
            <span v-if="recipientSelected">
              <div class="chat-sms-avatar"></div>
              <div class="chat-sms-name">
                {{ recipient_name }}
              </div>
              <div class="chat-sms-more">
                <img src="@/assets/Icon/More.svg">
              </div>
              <div class="chat-sms-call">
                <img src="@/assets/Icon/Call.svg">
              </div>
            </span>
            <span v-if="!recipientSelected">
              <input class="sms-input" type="text" placeholder="Type a number or name" v-model="recipientSearchText">
              <div class="recipients-dropdown" v-if="recipientSearch">
                <table>
                  <tr v-for="recipient in filter(allRecipients)" @click="selectRecipient(recipient)">
                    <td class="list">
                      <div class="chat-sms-avatar" style="margin-top: 2px">
                        <img :src="getImage(recipient.recipient_uuid)" alt="">
                      </div>
                      <div class="chat-sms-name" style="margin-top: 4px">
                        {{ recipient.recipient_name }}
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </span>
          </div>
          <div class="chat-messages">
            <div class="chat-message" id="messageBox" v-for="message in messages">
              <div class="chat-receiver">
                <div class="chat-receiver-text">
                  {{ message.text }}
                </div>
                <div style="clear: both;"></div>
                <div class="chat-receiver-info">
                  <!-- 352-626-4573 · 05 Jan 2018 -->
                </div>
              </div>
            </div>
            <!-- Will need this later -->
            <!-- <div class="chat-message">
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
            </div> -->
          </div>
           <!-- class="chat-insert" -->
          <form @submit="sendMessage">
            <div class="message-zone">
              <div class="attachment-button">
                <img src="@/assets/Icon/Image.svg" class="send-image">
              </div>
              <div class="tex-tarea">
                <textarea v-model="message.text" placeholder="Type your message here" style="width: 100%; border: none; padding: 5px; outline: none"></textarea>
              </div>
              <div class="send-button">
                <button id="submitMessage" type="submit" disabled><img class="send-image" src="@/assets/Icon/Send.svg"></button>
              </div>
            </div>
          </form>
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
          recipientSelected: false,
          recipientSearchText: '',
          recipientSearch: false,
          recipient_name: '',
          message: {
            recipient_uuid: '',
            text: ''
          },
          history: [],
          historySingle: [],
          lastMessage: [],
          messages: [],
          allRecipients: [],
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
    watch:{
      recipientSelected(selection){
        if(selection){
          document.getElementById('submitMessage').removeAttribute('disabled')
        } else {
          document.getElementById('submitMessage').setAttribute('disabled', 'disabled')
        }
      },
      recipientSearchText(item){
        if(item){
          this.recipientSearch = true
        } else {
          this.recipientSearch = false
        }
      }
    },
    mounted(){
      this.getAllRecipients()
    },
    methods:{
        sendForm(){
            event.preventDefault()
        },
        sendMessage(){
          console.log(this.message)
          this.axios.post('sms/create', this.message).then(res => {
            this.getRecipientMessages(this.message.recipient_uuid)
            this.message.text = ''
            // this.getChatHistory()
          }).catch(err => {
            console.log(err)
          })
        },
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        },
        filter(item){
          var temp = []
          var counter = 0

          item.forEach(item => {
            if(temp.length >= 5){
              return
            }
            (item.recipient_name).toLowerCase().includes(this.recipientSearchText.toLowerCase()) ? temp.push(item) : false

          })
          return temp
        },
        getImage(recipient){
          return ''
        },
        getAllRecipients(){
          this.axios.get('recipient/list?per_page=50000').then(res => {
            this.allRecipients = res.data.payload.items
            this.getChatHistory()
          }).catch(err => {
            console.log(err)
          })
        },
        selectRecipient(recipient){
          this.message.recipient_uuid = recipient.recipient_uuid
          this.recipient_name = recipient.recipient_name
          this.recipientSearch = false
          this.recipientSearchText = ''
          this.recipientSelected = true

          this.getRecipientMessages(recipient.recipient_uuid)
        },
        newMessage(){
          this.message.recipient_uuid = ''
          this.recipient_name = ''
          this.recipientSelected = false
        },
        getRecipientMessages(recipient){
          this.axios.get('sms/list?recipient_uuid=' + recipient + '&order_by=sms_uuid').then(res => {
            this.messages = res.data.payload.items
          }).catch(err => {
            console.log(err)
          })
          this.messages.reverse()
        },
        getChatHistory(){
          this.history = []
          this.allRecipients.forEach(item => {
            this.axios.get('sms/list?recipient_uuid=' + item.recipient_uuid + '&order_by=sms_uuid').then(res => {
              if(res.data.payload.items.length > 0){
                // this.history.push(item.recipient_uuid)
                this.getRecipient(item.recipient_uuid)
              }
            }).catch(err => {
              console.log(err)
            })
          })
        },
        getRecipient(recipient){
          this.axios.get('recipient/' + recipient).then(res => {
            this.history.push(res.data.payload)
          }).catch(err => {
            console.log(err)
          })
        },
        getLastMessage(recipient){
          this.axios.get('sms/list?recipient_uuid=' + recipient).then(res => {
            this.lastMessage = res.data.payload.items[0]
          }).catch(err => {
            console.log(err)
          })
        }
    },
}
</script>
