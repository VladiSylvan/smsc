<template>
    <div class="container">
      <company-navigation-component title="SMS Center"></company-navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            SMS Center
          </div>
        </div>
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
            <div class="chat-no-messages">
              <img class="chat-no-messages-image" src="@/assets/Icon/Vendors.svg">
              <div class="chat-no-messages-text">
                No messages yet
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
<style>
.chat-message{
  max-width: calc(100% - 30px);
  width: 100%;
  height: auto;
  float: left;
  display: inline-block;
  padding-right: 15px;
  padding-left: 15px;
}
.chat-no-messages-text{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  margin-left: 45%;
}
.chat-no-messages-image{
  height: 150px;
  width: 150px;
  opacity: 0.1;
  margin-top: 41%;
  margin-left: 43%;
}
.chat-sms-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  margin-left: 15px;
  margin-top: 15px;
  margin-right: 8px;
  float: left;
}
.chat-sms-name{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  display: inline-block;
  float: left;
  margin-top: 18px;
}
.chat-sms-call{
  display: inline-block;
  float: right;
  margin-top: 15px;
  margin-right: 15px;
}
.chat-sms-more{
  display: inline-block;
  float: right;
  margin-top: 15px;
  margin-right: 15px;
}
.chat-info{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 10px;
  line-height: 12px;
}
.chat-receiver-text{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 15px;
  background-color: #F8F9FE;
  max-width: 525px;
  width: auto;
  margin-right: 15px;
  margin-top: 22px;
}
.chat-receiver-info{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 10px;
  line-height: 12px;
  float: right;
  margin-right: 30px;
  margin-top: 5px;
}
.chat-sender-info{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 10px;
  line-height: 12px;
  float: left;
  margin-left: 70px;
  margin-top: 5px;
  max-width: 100%;
  width: 100%;
}
.chat-receiver{
  float: right;
  display: inline-block;
}
.chat-receiver-image{
  display: inline-block;
  background-color: #F8F9FE;
  max-width: 270px;
  width: 100%;
  height: 300px;
  border-radius: 15px;
  margin-left: 285px;
  margin-top: 15px;
  float: right;
}
.chat-sender-text{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 15px;
  background-color: #F8F9FE;
  display: inline-block;
  float: left;
  max-width: 525px;
  width: auto;
  margin-top: 22px;
}
.chat-sender{
  float: left;
  display: inline-block;
}
.send-button{
  height: 60px;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.send-image{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 10px;
}
.sms-table-name{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  margin-top: 12px;
}
.sms-table-msg{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
}
.sms-table-date{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  margin-top: 12px;
}
.chat-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  margin-left: 15px;
  margin-top: 20px;
  margin-right: 8px;
  float: left;
}
.avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-left: 15px;
  margin-top: 12px;
  float: left;
}
.svg-white{
  fill: #FFFFFF;
}
.svg-add{
  float: left;
  display: inline-block;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 8px;
}
.chat{
  max-width: calc(73.6842105263% - 40px);
  width: 100%;
  float: right;
  display: inline-block;
  margin-top: 20px;
  margin-right: 20px;
  background-color: #FFFFFF;
  height: auto;
  margin-bottom: 20px;
}
.chat-input{
  height: 60px;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.chat-messages{
  height: 828px;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.chat-insert{
  height: 58px;
  max-width: calc(100% - 115px);
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  border: 0;
  padding-left: 55px;
  background-color: #FFFFFF;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-repeat: no-repeat;
  background-position-x: 15px;
  background-position-y: 15px;
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  width: 100%;
  float: left;
  display: inline-block;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.messages{
  max-width: 26.3157894737%;
  width: 100%;
  float: left;
  display: inline-block;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
}
.new-message{
  width: 100%;
  border-radius: 4px 0 0 0;
  background-color: #51A3F3;
  height: 60px;
}
.new-message-text{
  color: #FFFFFF;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  padding-top: 18px;
}
button{
    border: 1px
    solid #BDBFD8;
    border-radius: 4px;
    background-color: #FFFFFF;
    font-family: "Helvetica Neue";
    font-size: 15px;
    font-weight: 300;
    line-height: 30px;
    text-align: center;
}
.alert-filter{
  height: 36px;
  width: 80px;
  margin-right: 15px;
  float: right;
}
.cont-1-alert{
  width: calc(100% - 40px);
  float: left;
}
.chart-1-alert{
  width: 100%;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-left: 20px;
}
.chart-1-title-alert{
  height: 30px;
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 10px;
}
.sms-input{
  height: 36px !important;
  max-width: 327px;
  padding-left: 15px;
  width: 100%;
  margin-top: 10px;
  margin-left: 15px;
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
.sms-avatar-active{
  width: 50px;
  height: 74px;
  background-color: #F0F1FA;
  vertical-align: top;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.sms-message-active{
  width: 182px;
  height: 74px;
  background-color: #F0F1FA;
  vertical-align: top;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.sms-date-active{
  width: 60px;
  height: 74px;
  background-color: #F0F1FA;
  vertical-align: top;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}

.sms-avatar{
  width: 50px;
  height: 74px;
  background-color: #FFFFFF;
  vertical-align: top;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.sms-message{
  width: 182px;
  height: 74px;
  background-color: #FFFFFF;
  vertical-align: top;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.sms-date{
  width: 60px;
  height: 74px;
  background-color: #FFFFFF;
  vertical-align: top;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
a{
  text-decoration: none;
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
}
.navbar-profile{
  height: 50px;
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: inset 0 1px 0 0 #F8F9FE;
}
.profile-main{
  float: left;
  display: inline-block;
  width: calc(100% - 40px);
  margin-left: 20px;
  margin-right: 20px;
}
.nav-text-profile{
  color: #BDBFD8;
  font-family: "Circular Std";
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  text-align: center;
  margin-top: 15px;
}
.nav-text-profile#active{
  color: #51A3F3;
  font-weight: 500;
}
a{
  text-decoration: none;
}
.nav-link-profile{
  display: inline-block;
  float: left;
  height: 50px;
  width: 120px;
  margin-left: 20px;
}
.nav-line-profile{
  border-bottom: 2px solid #51A3F3;
  width: 125px;
  margin-top: 13px;
}
button#payment{
  	height: 40px;
    width: auto;
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
    padding-left: 15px;
    padding-right: 15px;
}
.main{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
@media only screen and (max-width: 750px) {
    .main{
      max-width: 100%;
    }
}
</style>
