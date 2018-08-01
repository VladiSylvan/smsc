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
            SMS Center
          </div>
        </div>
        <profile-component></profile-component>
      </nav>
      <transition name="fade">
      <ul v-bind:class="{'sidebar-hide': !show}" >
        <li>
          <router-link :to="{ name: 'Profile'}">
            <img class="image-box" src="@/assets/Icon/Users.svg">
            <span v-if="show" class="side-link">Profile</span>
          </router-link>
        </li>
        <li id="active">
          <router-link :to="{ name: 'ResellerSMSCenter'}">
            <div class="image-box">
              <svg class="svg-active" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M21.4696919,6.01274052 L8.50140056,6.01274052 C6.57070028,6.01274052 5,7.56586589 5,9.47489504 L5,17.3839913 C5,19.2930204 6.57070028,20.8460904 8.50140056,20.8460904 L16.7615126,20.8461458 L20.7156303,24.7558251 C20.8496359,24.8883819 21.0286835,24.9586764 21.2109804,24.9586764 C21.3011765,24.9586764 21.3921569,24.9413936 21.4787675,24.9058863 C21.7404482,24.7987551 21.9110924,24.5463819 21.9110924,24.2662566 L21.9110924,20.8187259 C23.6342857,20.6035219 24.9710924,19.1452303 24.9710924,17.3839913 L24.9710924,9.47489504 C24.9710924,7.56586589 23.4003922,6.01274052 21.4696919,6.01274052 Z M23.5705322,17.3840466 C23.5705322,18.5294752 22.6281232,19.4613061 21.4696919,19.4613061 L21.2108123,19.4613061 C20.8240896,19.4613061 20.5105322,19.7713994 20.5105322,20.1537259 L20.5105322,22.5945889 L17.5467787,19.664102 C17.4154622,19.5342041 17.237423,19.4613061 17.0515966,19.4613061 L8.50140056,19.4613061 C7.34296919,19.4613061 6.40056022,18.5294752 6.40056022,17.3840466 L6.40056022,9.47495044 C6.40056022,8.32952187 7.34296919,7.39769096 8.50140056,7.39769096 L21.4696919,7.39769096 C22.6281232,7.39769096 23.5705322,8.32952187 23.5705322,9.47495044 L23.5705322,17.3840466 Z M20.1396078,10.915793 L9.83148459,10.915793 C9.4447619,10.915793 9.13120448,11.2257755 9.13120448,11.6082128 C9.13120448,11.9905948 9.4447619,12.3006327 9.83148459,12.3006327 L20.1396078,12.3006327 C20.5263305,12.3006327 20.839888,11.9905948 20.839888,11.6082128 C20.839888,11.2257755 20.5263866,10.915793 20.1396078,10.915793 Z M20.1396078,14.793344 L9.83148459,14.793344 C9.4447619,14.793344 9.13120448,15.1033265 9.13120448,15.4857638 C9.13120448,15.8682012 9.4447619,16.1781837 9.83148459,16.1781837 L20.1396078,16.1781837 C20.5263305,16.1781837 20.839888,15.8681458 20.839888,15.4857638 C20.839888,15.1033819 20.5263866,14.793344 20.1396078,14.793344 Z" id="path-1">
                </path>
              </svg>
            </div>
            <span v-if="show" class="side-link" id="active">SMS Center</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ResellerProduct'}">
            <img class="image-box" src="@/assets/Icon/Product.svg">
            <span v-if="show" class="side-link">Product</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'MailTemplateRegister'}">
            <img class="image-box" src="@/assets/Icon/Reseller.svg">
            <span v-if="show" class="side-link">Mail Template</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ResellerTemplate'}">
            <img class="image-box" src="@/assets/Icon/Template.svg">
            <span v-if="show" class="side-link">Templates</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ResellerBilling'}">
            <img class="image-box" src="@/assets/Icon/Billing.svg">
            <span v-if="show" class="side-link">Billing</span>
          </router-link>
        </li>
        <div v-if="show" class="side-title">
          Manage
        </div>
        <li>
          <router-link :to="{ name: 'ResellerUsers'}">
            <img class="image-box" src="@/assets/Icon/Users.svg">
            <span v-if="show" class="side-link">Users</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ResellerCompanies'}">
            <img class="image-box" src="@/assets/Icon/Companies.svg">
            <span v-if="show" class="side-link">Companies</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ResellerVendors'}">
            <img class="image-box" src="@/assets/Icon/Vendors.svg">
            <span v-if="show" class="side-link">Vendors</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ResellerDIDs'}">
            <img class="image-box" src="@/assets/Icon/DID.svg">
            <span v-if="show" class="side-link">DIDs</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ResellerFilters'}">
            <img class="image-box" src="@/assets/Icon/Filters.svg">
            <span v-if="show" class="side-link">Filters</span>
          </router-link>
        </li>
      </ul>
      </transition>
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
            <router-link :to="{ name: 'ResellerSMSCenterNew' }">
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
          isModalVisible: false,
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            },

        }
    },
    components:{
      AlertDailyLine,
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
.chat-message{
  max-width: calc(100% - 30px);
  width: 100%;
  height: auto;
  float: left;
  display: inline-block;
  padding-right: 15px;
  padding-left: 15px;
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
.sms-table{
  border: none;
  max-width: calc(100%);
  width: 100%;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  text-align: left;
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
.svg-blue path{
  fill: #51A3F3;
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
.side a{
  text-decoration: none;
  color: #55616E;
}
.side#active a{
  text-decoration: none;
  color: #FFFFFF;
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
.billing-control-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
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
}
@media only screen and (max-width: 750px) {
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
