<template>
    <div class="container">
      <navigation-component title="Resellers"></navigation-component>
      <div class="main-add-navi">
        <div class="res-div">
          <div class="head-title">
            Resellers
          </div>
        </div>
        <router-link :to="{ name: 'Resellers'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Resellers
          </div>
        </router-link>
      </div>
      <div class="main-add">
        <div class="history-main">
          <div class="transaction-title">
            Transaction History
          </div>
          <table class="transaction-table" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th class="transaction-date-th">Date</th>
                <th class="transaction-type-th">Type</th>
                <th class="transaction-description-th">Description</th>
                <th class="transaction-company-th">Company</th>
                <th class="transaction-amount-th">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="transaction-date">29 Dec 2018</td>
                <td class="transaction-type">Monthly payment</td>
                <td class="transaction-description">Payment ID#367192</td>
                <td class="transaction-company"><div class="transaction-avatar"></div> <div class="transaction-name-fix">Appolo Inc</div></td>
                <td class="transaction-amount">$78</td>
              </tr>
              <tr>
                <td class="transaction-date">29 Dec 2018</td>
                <td class="transaction-type">DID fee</td>
                <td class="transaction-description">Payment ID#367192</td>
                <td class="transaction-company"><div class="transaction-avatar"></div> <div class="transaction-name-fix">Appolo Inc</div></td>
                <td class="transaction-amount">$78</td>
              </tr>
              <tr>
                <td class="transaction-date">29 Dec 2018</td>
                <td class="transaction-type">Yearly payment</td>
                <td class="transaction-description">Payment ID#367192</td>
                <td class="transaction-company"><div class="transaction-avatar"></div> <div class="transaction-name-fix">Appolo Inc</div></td>
                <td class="transaction-amount">$78</td>
              </tr>
              <tr>
                <td class="transaction-date">29 Dec 2018</td>
                <td class="transaction-type">Monthly payment</td>
                <td class="transaction-description">Payment ID#367192</td>
                <td class="transaction-company"><div class="transaction-avatar"></div> <div class="transaction-name-fix">Appolo Inc</div></td>
                <td class="transaction-amount">$78</td>
              </tr>
              <tr>
                <td class="transaction-date">29 Dec 2018</td>
                <td class="transaction-type">DID fee</td>
                <td class="transaction-description">Payment ID#367192</td>
                <td class="transaction-company"><div class="transaction-avatar"></div> <div class="transaction-name-fix">Appolo Inc</div></td>
                <td class="transaction-amount">$78</td>
              </tr>
              <tr>
                <td class="transaction-date">29 Dec 2018</td>
                <td class="transaction-type">Yearly payment</td>
                <td class="transaction-description">Payment ID#367192</td>
                <td class="transaction-company"><div class="transaction-avatar"></div> <div class="transaction-name-fix">Appolo Inc</div></td>
                <td class="transaction-amount">$78</td>
              </tr>
              <tr>
                <td class="transaction-date">29 Dec 2018</td>
                <td class="transaction-type">DID fee</td>
                <td class="transaction-description">Payment ID#367192</td>
                <td class="transaction-company"><div class="transaction-avatar"></div> <div class="transaction-name-fix">Appolo Inc</div></td>
                <td class="transaction-amount">$78</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>
<script>
import modal from '@/components/modal.vue'
import NavigationComponent from '@/components/NavigationComponent'

export default {
    name: 'app',
    data () {
        return {
          show: true,
          width: '60px',
          transitionName: 'fade',
          popup: false,
          isModalVisible: false,
          vendors: true,
                user:{
                productName: 'Caroline',
                country: 'China',
                operator: 'China Unicom',
                sellRate: '0.001',
                company: 'Choose Company',
                country: 'Select',
                state: 'Select State',
            },
            user2:{
              country: 'China',
              operator: 'China Mobile',
              sellRate: '0.0012'
            },
            user3:{
              country: 'United States',
              operator: 'AT & T',
              sellRate: '0.0003'
            },
            vendor:{
              vendorName1: 'Vendor BB',
              vendorName2: 'Vendor CC',
              vendorRate1: '0.0009',
              vendorRate2: '0.0008'
            }
        }
    },
    components:{
      modal,
      NavigationComponent,
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
