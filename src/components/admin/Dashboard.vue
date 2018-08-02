<template>
    <div class="container">
      <navigation-component title="Dashboard"></navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Dashboard
          </div>
          <div class="res-select">
            <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="System" class="system" v-model="user.system">
              <option value="Overall system">Overall system</option>
            </select>
            <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Days" class="days" v-model="user.days">
              <option value="Last 30 days">Last 30 days</option>
            </select>
          </div>
        </div>
        <div class="cont-1">
          <div class="chart-1">
            <div class="chart-1-title">
              Leads and Sales
            </div>
            <div class="chart-box">
              <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
            </div>
            <commit-chart :options="{responsive: false, maintainAspectRatio: false}" :width="789" :height="273"></commit-chart>
          </div>
        </div>
        <div class="cont-2">
          <div class="chart-2">
            <div class="chart-2-title">
              Visits
            </div>
            <div class="chart-box">
              <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
            </div>
            <bar-chart :options="{responsive: false, maintainAspectRatio: false}" :width="230" :height="100"></bar-chart>
          </div>
        </div>
        <div class="cont-2">
          <div class="chart-2">
            <div class="chart-2-title">
              Activity
            </div>
            <div class="chart-box">
              <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
            </div>
            <bar-chart2 :options="{responsive: false, maintainAspectRatio: false}" :width="230" :height="100"></bar-chart2>
          </div>
        </div>
        <div class="cont-3">
          <div class="chart-3">
            <div class="chart-3-title">
              Resellers
            </div>
            <div class="chart-box">
              <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
            </div>
            <resellers-line-chart :options="{responsive: false, maintainAspectRatio: false}" :width="510" :height="201.71"></resellers-line-chart>
          </div>
        </div>
        <div class="cont-3">
          <div class="chart-3" id="second">
            <div class="chart-3-title">
              Companies
            </div>
            <div class="chart-box">
              <img style="transform: rotate(180deg);" src="@/assets/Icon/Arrow/Down.svg">
            </div>
            <companies-chart :options="{responsive: false, maintainAspectRatio: false}" :width="510" :height="201.71"></companies-chart>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import CommitChart from '@/components/admin/CommitChart'
import BarChart from '@/components/admin/BarChart'
import BarChart2 from '@/components/admin/BarChart2'
import ResellersLineChart from '@/components/admin/ResellersLineChart'
import CompaniesChart from '@/components/admin/CompaniesChart'
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
      ResellersLineChart,
      CompaniesChart,
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
.svg-active path{
  fill: white;
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
.cont-1{
  width: 74%;
  float: left;
}
.cont-2{
  width: 21%;
  float: left;
}
.cont-3{
  width: 47.5%;
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
.chart-1{
  height: auto;
  width: 100%;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-left: 20px;
}
.chart-1-title{
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
.chart-2{
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
.chart-2-title{
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
.chart-3{
  height: auto;
  width: 100%;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  margin-left: 20px;
}
.chart-3-title{
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
.chart-3#second{
  margin-top: 20px;
  margin-left: 40px;
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
    .cont-1, .cont-2, .cont-3{
      width: calc(100% - 30px);
    }
    .chart-1, .chart-2, .chart-3, .chart-3#second{
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
