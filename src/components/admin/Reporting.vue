<template>
    <div class="container">
      <navigation-component title="Reporting"></navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Reporting
          </div>
        </div>
        <div class="cont-1-rep">
            <div class="chart-1-reporting">
              <div class="chart-1-title-reporting">
                Resellers
              </div>
              <div class="chart-box">
                <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
              </div>
              <resellers-line :options="{responsive: false, maintainAspectRatio: false}" :width="510" :height="280"></resellers-line>
              <input class="reporting-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.search" placeholder="Search">
              <button type="submit">Filter</button>
              <table class="reporting-table" cellspacing="0" cellpadding="0">
                <thead>
                  <tr>
                    <th class="resellers">Resellers</th>
                    <th class="date">Date</th>
                    <th class="status">Status</th>
                  </tr>
                  <tr>
                    <td class="resellers">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="resellers">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="status"><div class="not-active">Not Active</div></td>
                  </tr>
                  <tr>
                    <td class="resellers">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="resellers">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="resellers">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="status"><div class="not-active">Not Active</div></td>
                  </tr>
                  <tr>
                    <td class="resellers">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="resellers">Lou Haynes</td>
                    <td class="date">06 Nov 2018</td>
                    <td class="status"><div class="not-active">Not Active</div></td>
                  </tr>
                  <tr>
                    <td class="resellers">Nellie Ferguson</td>
                    <td class="date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                </thead>
              </table>
              <div class="show-more">
                <a href="#" id="show-more">Show more</a>
              </div>
            </div>
          </div>
          <div class="cont-2-rep">
            <div class="chart-2-reporting">
              <div class="chart-2-title-reporting">
                Visits
              </div>
              <div class="chart-box">
                <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
              </div>
              <bar-chart :options="{responsive: false, maintainAspectRatio: false}" :width="230" :height="100"></bar-chart>
            </div>
          </div>
          <div class="cont-2-rep">
            <div class="chart-2-reporting" id="second">
              <div class="chart-2-title-reporting">
                Activity
              </div>
              <div class="chart-box">
              <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
              </div>
              <bar-chart2 :options="{responsive: false, maintainAspectRatio: false}" :width="230" :height="100"></bar-chart2>
            </div>
          </div>
          <div class="cont-1-rep">
            <div class="chart-3-reporting">
              <div class="chart-3-title-reporting">
                Companies
              </div>
              <div class="chart-box">
                <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
              </div>
              <companies-line :options="{responsive: false, maintainAspectRatio: false}" :width="510" :height="280"></companies-line>
            </div>
          </div>
          <div class="cont-2-rep">
            <div class="chart-2-reporting">
              <div class="chart-2-title-reporting">
                Visits
              </div>
              <div class="chart-box">
                <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
              </div>
              <bar-chart :options="{responsive: false, maintainAspectRatio: false}" :width="230" :height="100"></bar-chart>
            </div>
          </div>
          <div class="cont-2-rep">
            <div class="chart-2-reporting" id="second">
              <div class="chart-2-title-reporting">
                Activity
              </div>
              <div class="chart-box">
                <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
              </div>
              <bar-chart2 :options="{responsive: false, maintainAspectRatio: false}" :width="230" :height="100"></bar-chart2>
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
import NavigationComponent from '@/components/NavigationComponent'

export default {
    data () {
        return {
          show: true,
          width: '60px',
          transitionName: 'fade',
          popup: false,
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            },

        }
    },
    components:{
      CommitChart,
      BarChart,
      BarChart2,
      ResellersLine,
      CompaniesLine,
      NavigationComponent,
    },
    methods:{
        sendForm(){
            event.preventDefault()
        }
    },
}
</script>
<style>
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
.resellers{
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
.status{
  width: 132px;
  height: 37px;
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
@media only screen and (max-width: 1200px) {
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
