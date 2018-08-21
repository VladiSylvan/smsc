<template>
    <div class="container">
      <company-navigation-component title="Alert"></company-navigation-component>
      <div class="main-navi">
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
      </div>
      <div class="main">
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
