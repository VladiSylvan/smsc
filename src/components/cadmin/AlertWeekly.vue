<template>
    <div class="container">
      <company-navigation-component title="Alert"></company-navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Alert
          </div>
        </div>
        <div class="navbar-profile">
          <div class="nav-link-profile">
            <router-link :to="{ name: 'Alert' }">
              <div class="nav-text-profile">
                Daily Usage
              </div>
            </router-link>
          </div>
          <div class="nav-link-profile">
              <div id="active" class="nav-text-profile">
                Weekly Usage
                <div class="nav-line-profile"></div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="cont-1-alert">
            <div class="chart-1-alert">
              <alert-weekly-line :options="{responsive: false, maintainAspectRatio: false}" :width="1000" :height="280"></alert-weekly-line>
              <input class="alert-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.search" placeholder="Search">
              <button class="alert-filter" type="submit">Filter</button>
              <table class="alert-table" cellspacing="0" cellpadding="0">
                <thead>
                  <tr>
                    <th class="company">Company</th>
                    <th class="date">Date</th>
                    <th class="sms">SMS</th>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">97322</td>
                  </tr>
                  <tr>
                    <td class="company">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="sms">86906</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">49288</td>
                  </tr>
                  <tr>
                    <td class="company">Littelfort</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">18248</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">97322</td>
                  </tr>
                  <tr>
                    <td class="company">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="sms">86906</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">49288</td>
                  </tr>
                  <tr>
                    <td class="company">Littelfort</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">18248</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="sms">97322</td>
                  </tr>
                  <tr>
                    <td class="company">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="sms">86906</td>
                  </tr>
                  <tr>
                    <td class="company">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="sms">86906</td>
                  </tr>
                </thead>
              </table>
              <div class="show-more">
                <a href="#" id="show-more">Show more</a>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import AlertWeeklyLine from '@/components/cadmin/AlertWeeklyLine'
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
      AlertWeeklyLine,
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
.alert-search{
  height: 36px !important;
  max-width: calc(37.9090909091% - 43px);
  margin-left: 13px;
  padding-left: 40px;
  width: 100%;
}
.alert-table{
  margin-left: 20px;
  border: none;
  max-width: calc(100% - 40px);
  width: 100%;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  text-align: left;
}
.company{
  width: 174px;
  padding-left: 15px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.date{
  width: 170px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.sms{
  width: 701px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.show-more{
  text-align: center;
  margin-top: 5px;
  margin-bottom: 23px;
}
a#show-more{
  	height: 15px;
    width: 69px;
    color: #51A3F3;
    font-family: "SF Pro Text";
    font-size: 13px;
    line-height: 15px;
    text-decoration: none;
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
