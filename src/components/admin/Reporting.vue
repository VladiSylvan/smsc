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
              <button type="submit" id="reporting">Filter</button>
              <table class="reporting-table" cellspacing="0" cellpadding="0">
                <thead>
                  <tr>
                    <th class="reporting-resellers">Resellers</th>
                    <th class="reporting-date">Date</th>
                    <th class="reporting-status">Status</th>
                  </tr>
                  <tr>
                    <td class="reporting-resellers">Nellie Ferguson</td>
                    <td class="reporting-date">29 Apr 2018</td>
                    <td class="reporting-status"><div class="reporting-active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="reporting-resellers">Lou Haynes</td>
                    <td class="reporting-date">06 Nov 2018</td>
                    <td class="reporting-status"><div class="reporting-not-active">Not Active</div></td>
                  </tr>
                  <tr>
                    <td class="reporting-resellers">Nellie Ferguson</td>
                    <td class="reporting-date">29 Apr 2018</td>
                    <td class="reporting-status"><div class="reporting-active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="reporting-resellers">Nellie Ferguson</td>
                    <td class="reporting-date">29 Apr 2018</td>
                    <td class="reporting-status"><div class="reporting-active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="reporting-resellers">Lou Haynes</td>
                    <td class="reporting-date">06 Nov 2018</td>
                    <td class="reporting-status"><div class="reporting-not-active">Not Active</div></td>
                  </tr>
                  <tr>
                    <td class="reporting-resellers">Nellie Ferguson</td>
                    <td class="reporting-date">29 Apr 2018</td>
                    <td class="reporting-status"><div class="reporting-active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="reporting-resellers">Lou Haynes</td>
                    <td class="reporting-date">06 Nov 2018</td>
                    <td class="reporting-status"><div class="reporting-not-active">Not Active</div></td>
                  </tr>
                  <tr>
                    <td class="reporting-resellers">Nellie Ferguson</td>
                    <td class="reporting-date">29 Apr 2018</td>
                    <td class="reporting-status"><div class="reporting-active">Active</div></td>
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
