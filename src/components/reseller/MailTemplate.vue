<template>
    <div class="container">
      <reseller-navigation-component title="Mail Template"></reseller-navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Mail Template
          </div>
        </div>
        <div class="cont-1-rep">
            <div class="header-title">
              Welcome to Mail Template!
            </div>
            <div class="header-text">
              Many of us are so used to working on computer desktop that when it comes time to puschase a new
              computer, we don't consider other options.
            </div>
            <div class="chart-1-reporting">
              <div class="chart-1-title-reporting">
                Usage
              </div>
              <div class="usage">
                <div class="mail-nav-link">
                  <div id="active" class="mail-nav-text">
                    Daily
                    <div class="nav-line-mail"></div>
                  </div>
                </div>
                <div class="mail-nav-link">
                  <router-link :to="{ name: 'ResellerBillingPayment' }">
                    <div class="mail-nav-text">
                      Weekly
                    </div>
                  </router-link>
                </div>
              </div>
              <resellers-line :options="{responsive: false, maintainAspectRatio: false}" :width="510" :height="280"></resellers-line>
              <input class="reporting-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.search" placeholder="Search">
              <button type="submit">Filter</button>
              <table class="reporting-table" cellspacing="0" cellpadding="0">
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
                </thead>
              </table>
              <div class="show-more">
                <a href="#" id="show-more">Show more</a>
              </div>
            </div>
          </div>
          <div class="cont-1-rep">
            <div class="chart-3-reporting">
              <div class="chart-3-title-reporting">
                Credit Below Limit
              </div>
              <div class="credit">
                <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Days" class="mail-days" v-model="user.days">
                  <option value="Last 7 days">Last 7 days</option>
                </select>
              </div>
              <table class="reporting-table" cellspacing="0" cellpadding="0">
                <thead>
                  <tr>
                    <th class="title">Title</th>
                    <th class="date">Date</th>
                    <th class="status">Status</th>
                  </tr>
                  <tr>
                    <td class="title">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="status"><div class="active">Below</div></td>
                  </tr>
                  <tr>
                    <td class="title">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="status"><div class="not-active">Not Active</div></td>
                  </tr>
                  <tr>
                    <td class="title">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="title">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="title">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="status"><div class="not-active">Not Active</div></td>
                  </tr>
                  <tr>
                    <td class="title">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="title">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="status"><div class="not-active">Not Active</div></td>
                  </tr>
                  <tr>
                    <td class="title">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="title">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div class="cont-1-rep">
            <div class="chart-3-reporting">
              <div class="chart-3-title-reporting">
                Invoice
              </div>
              <table class="invoice-table" cellspacing="0" cellpadding="0">
                <thead>
                  <tr>
                    <th class="created">Created</th>
                    <th class="company2">Company</th>
                    <th class="paid">Paid</th>
                    <th class="amount">Amount</th>
                  </tr>
                  <tr>
                    <td class="created">29 Dec 2018</td>
                    <td class="company2"><div class="mail-avatar"></div> <div class="mail-avatar-fix">Appolo Inc.</div></td>
                    <td class="paid">07 Jul 2018</td>
                    <td class="amount">$74</td>
                  </tr>
                  <tr>
                    <td class="created">15 Mar 2018</td>
                    <td class="company2"><div class="mail-avatar"></div> <div class="mail-avatar-fix">Universal Inc.</div></td>
                    <td class="paid">04 Jan 2018</td>
                    <td class="amount">$38</td>
                  </tr>
                  <tr>
                    <td class="created">08 Nov 2018</td>
                    <td class="company2"><div class="mail-avatar"></div> <div class="mail-avatar-fix">Appolo Inc.</div></td>
                    <td class="paid">29 Feb 2018</td>
                    <td class="amount">$71</td>
                  </tr>
                  <tr>
                    <td class="created">03 Jun 2018</td>
                    <td class="company2"><div class="mail-avatar"></div> <div class="mail-avatar-fix">Appolo Inc.</div></td>
                    <td class="paid">20 Jun 2018</td>
                    <td class="amount">$76</td>
                  </tr>
                  <tr>
                    <td class="created">17 Jan 2018</td>
                    <td class="company2"><div class="mail-avatar"></div> <div class="mail-avatar-fix">Appolo Inc.</div></td>
                    <td class="paid">03 Feb 2018</td>
                    <td class="amount">$61</td>
                  </tr>
                </thead>
              </table>
              <div class="show-more">
                <a href="#" id="show-more">Show more</a>
              </div>
            </div>
          </div>
          <div class="cont-1-rep">
            <div class="chart-3-reporting">
              <div class="chart-3-title-reporting">
                Payment Received
              </div>
              <table class="invoice-table" cellspacing="0" cellpadding="0">
                <thead>
                  <tr>
                    <th class="date2">Date</th>
                    <th class="company3">Company</th>
                    <th class="description">Description</th>
                    <th class="amount2">Amount</th>
                  </tr>
                  <tr>
                    <td class="date2">04 Apr 2018</td>
                    <td class="company3"><div class="mail-avatar"></div> <div class="mail-avatar-fix">Appolo Inc.</div></td>
                    <td class="description">Payment ID#367192</td>
                    <td class="amount2">$74</td>
                  </tr>
                  <tr>
                    <td class="date2">12-30-2018</td>
                    <td class="company3"><div class="mail-avatar"></div> <div class="mail-avatar-fix">Universal Inc.</div></td>
                    <td class="description">Payment ID#367192</td>
                    <td class="amount2">$38</td>
                  </tr>
                  <tr>
                    <td class="date2">07-30-2018</td>
                    <td class="company3"><div class="mail-avatar"></div> <div class="mail-avatar-fix">Appolo Inc.</div></td>
                    <td class="description">Payment ID#367192</td>
                    <td class="amount2">$71</td>
                  </tr>
                  <tr>
                    <td class="date2">08-10-2018</td>
                    <td class="company3"><div class="mail-avatar"></div> <div class="mail-avatar-fix">Appolo Inc.</div></td>
                    <td class="description">Payment ID#367192</td>
                    <td class="amount2">$76</td>
                  </tr>
                  <tr>
                    <td class="date2">05-08-2018</td>
                    <td class="company3"><div class="mail-avatar"></div> <div class="mail-avatar-fix">Appolo Inc.</div></td>
                    <td class="description">Payment ID#367192</td>
                    <td class="amount2">$61</td>
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
    </div>
</template>
<script>
import CommitChart from '@/components/admin/CommitChart'
import BarChart from '@/components/admin/BarChart'
import BarChart2 from '@/components/admin/BarChart2'
import ResellersLine from '@/components/admin/ResellersLine'
import CompaniesLine from '@/components/admin/CompaniesLine'
import ResellerNavigationComponent from '@/components/ResellerNavigationComponent'

export default {
    data () {
        return {
          show: true,
          width: '60px',
          transitionName: 'fade',
          popup: false,
                user:{
                system: 'Overall system',
                days: 'Last 7 days'
            },

        }
    },
    components:{
      CommitChart,
      BarChart,
      BarChart2,
      ResellersLine,
      CompaniesLine,
      ResellerNavigationComponent,
    },
    methods:{
        sendForm(){
            event.preventDefault()
        }
    },
}
</script>
<style>
.mail-avatar-fix{
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
}
.mail-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.mail-days{
    width: 170px;
    height: 40px;
    border: 1px solid #EDEEF3;
    border-radius: 4px;
    background-color: #FFFFFF;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 25px;
    font-family: "Helvetica Neue";
    color: #55616E;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
    margin-right: 15px;
}
select{
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
}
.usage{
  display: inline-block;
  float: right;
  width: 150px;
}
.credit{
  display: inline-block;
  float: right;
  width: 185px;
}
.mail-nav-text{
  color: #BDBFD8;
  font-family: "Circular Std";
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  text-align: center;
  margin-top: 15px;
}
.mail-nav-text#active{
  color: #51A3F3;
  font-weight: 500;
}
a{
  text-decoration: none;
}
.mail-nav-link{
  display: inline-block;
  float: left;
  height: 50px;
  width: 35px;
  margin-left: 20px;
}
.nav-line-mail{
  border-bottom: 2px solid #51A3F3;
  width: 45px;
  margin-top: 13px;
}
.header-text{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 13px;
  line-height: 25px;
  margin-left: 20px;
  display: inline-block;
  float: left;
}
.header-title{
  height: auto;
  width: calc(100% - 60px);
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 20px;
  margin-bottom: 10px;
}
.svg-active path{
  fill: white;
}
.reporting-table{
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
.invoice-table{
  border: none;
  max-width: calc(100%);
  width: 100%;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  text-align: left;
}
.company{
  width: 174px;
  padding-left: 15px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.title{
  width: 174px;
  padding-left: 15px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.date{
  width: 189px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.sms{
  width: 132px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.status{
  width: 132px;
  height: 37px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.created{
  width: 134px;
  height: 44px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
  padding-left: 15px;
}
.company2{
  width: 169px;
  height: 44px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.paid{
  width: 96px;
  height: 44px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.amount{
  width: 96px;
  height: 44px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.date2{
  padding-left: 15px;
  width: 124px;
  height: 44px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.company3{
  width: 129px;
  height: 44px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.description{
  width: 162px;
  height: 44px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}
.amount2{
  width: 70px;
  height: 44px;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
}

.active{
  box-sizing: border-box;
  height: 24px;
  width: 59px;
  border: 2px solid #FFFFFF;
  border-radius: 100px;
  background-color: #24E2B8;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  padding-top: 2px;
}
.not-active{
  box-sizing: border-box;
  height: 24px;
  width: 85px;
  border: 2px solid #FFFFFF;
  border-radius: 100px;
  background-color: #D2305B;
  color: #FFFFFF;
  font-family: "SF Pro Text";
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  padding-top: 2px;
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
.reporting-search{
  height: 36px !important;
  width: calc(69.621421976% - 30px);
  margin-left: 13px;
  padding-left: 40px;
}
button{
  	height: 36px;
    width: calc(16.7737765466% + 10px);
    border: 1px
    solid #BDBFD8;
    border-radius: 4px;
    background-color: #FFFFFF;
    font-family: "Helvetica Neue";
    font-size: 15px;
    font-weight: 300;
    line-height: 30px;
    text-align: center;
    margin-top: 15px;
    margin-left: 10px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.cont-1-rep{
  width: 47.5%;
  float: left;
}
.cont-2-rep{
  width: 22.9%;
  float: left;
}
.main{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
.header{
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 61.1111111111%;
  float: left;
}
.header-min{
  display: inline-block;
  vertical-align: top;
  margin-left: -150px;
  margin-right: 150px;
  position: relative;
  z-index: 1000;
}
.chart-1-reporting{
  width: 100%;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-left: 20px;
}
.chart-1-title-reporting{
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
.chart-3-reporting{
  height: auto;
  width: 100%;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-left: 40px;
}
.chart-3-title-reporting{
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
.chart-box{
  height: 30px;
  width: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
}
.chart-2-reporting{
  height: auto;
  width: 100%;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-left: 40px;
  position: relative;
}
.chart-2-title-reporting{
  height: 30px;
  width: calc(100% - 60px);
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
.chart-2-reporting#second{
  margin-left: 60px;
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
    .res-div{
      display: inline-block;
    }
    .cont-1-rep, .cont-2-rep{
      width: calc(100% - 30px);
    }
    .chart-1-reporting, .chart-2-reporting, .chart-2-reporting#second, .chart-3-reporting, .chart-3#second{
      margin-left: 15px;
      margin-right: 15px;
    }
}
@media only screen and (max-width: 750px) {
    .main{
      max-width: 100%;
    }
}
</style>
