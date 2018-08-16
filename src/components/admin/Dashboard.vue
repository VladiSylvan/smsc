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
.main{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
@media only screen and (max-width: 990px) {
    .main{
      max-width: 100%;
    }
}
</style>
