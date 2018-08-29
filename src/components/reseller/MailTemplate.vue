<template>
    <div class="container">
      <reseller-navigation-component title="Mail Template"></reseller-navigation-component>
      <div class="main-navi">
        <div class="res-div">
          <div class="head-title">
            Mail Template
          </div>
        </div>
      </div>
      <div class="main">
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
              <button id="reporting" type="submit">Filter</button>
              <table class="reporting-table" cellspacing="0" cellpadding="0">
                <thead>
                  <tr>
                    <th class="company">Company</th>
                    <th class="mail-date">Date</th>
                    <th class="mail-sms">SMS</th>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="mail-sms">97322</td>
                  </tr>
                  <tr>
                    <td class="company">Lou Haynes</td>
                    <td class="mail-date">06 Nov 2018</td>
                    <td class="mail-sms">86906</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="mail-sms">49288</td>
                  </tr>
                  <tr>
                    <td class="company">Littelfort</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="mail-sms">18248</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="mail-sms">97322</td>
                  </tr>
                  <tr>
                    <td class="company">Lou Haynes</td>
                    <td class="mail-date">06 Nov 2018</td>
                    <td class="mail-sms">86906</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="mail-sms">49288</td>
                  </tr>
                  <tr>
                    <td class="company">Littelfort</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="mail-sms">18248</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="mail-sms">97322</td>
                  </tr>
                  <tr>
                    <td class="company">Lou Haynes</td>
                    <td class="mail-date">06 Nov 2018</td>
                    <td class="mail-sms">86906</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="mail-sms">49288</td>
                  </tr>
                  <tr>
                    <td class="company">Littelfort</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="mail-sms">18248</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="mail-sms">97322</td>
                  </tr>
                  <tr>
                    <td class="company">Lou Haynes</td>
                    <td class="mail-date">06 Nov 2018</td>
                    <td class="mail-sms">86906</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="mail-sms">49288</td>
                  </tr>
                  <tr>
                    <td class="company">Littelfort</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="mail-sms">18248</td>
                  </tr>
                  <tr>
                    <td class="company">Nellie Ferguson</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="mail-sms">97322</td>
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
                    <th class="mail-date">Date</th>
                    <th class="status">Status</th>
                  </tr>
                  <tr>
                    <td class="title">Nellie Ferguson</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="status"><div class="active">Below</div></td>
                  </tr>
                  <tr>
                    <td class="title">Lou Haynes</td>
                    <td class="mail-date">06 Nov 2018</td>
                    <td class="status"><div class="not-active">Not Active</div></td>
                  </tr>
                  <tr>
                    <td class="title">Nellie Ferguson</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="title">Nellie Ferguson</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="title">Lou Haynes</td>
                    <td class="mail-date">06 Nov 2018</td>
                    <td class="status"><div class="not-active">Not Active</div></td>
                  </tr>
                  <tr>
                    <td class="title">Nellie Ferguson</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="title">Lou Haynes</td>
                    <td class="mail-date">06 Nov 2018</td>
                    <td class="status"><div class="not-active">Not Active</div></td>
                  </tr>
                  <tr>
                    <td class="title">Nellie Ferguson</td>
                    <td class="mail-date">29 Apr 2018</td>
                    <td class="status"><div class="active">Active</div></td>
                  </tr>
                  <tr>
                    <td class="title">Nellie Ferguson</td>
                    <td class="mail-date">29 Apr 2018</td>
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
