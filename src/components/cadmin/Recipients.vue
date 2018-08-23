<template>
    <div class="container">
      <company-navigation-component title="Recipients"></company-navigation-component>
      <div class="main-navi">
        <div class="res-div">
          <div class="head-title">
            Recipients
          </div>
        </div>
          <input class="recipients-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchRecipients" placeholder="Search for recipients">
          <router-link :to="{ name: 'AddRecipient'}"><button id="product" type="submit">Add Recipient</button></router-link>
        </div>
        <div class="main">
          <div v-if="successMsg != ''">
            <h5 style="color: green; text-align: center;">
              {{ successMsg }}
            </h5>
          </div>
          <div class="main-container">
            <table class="recipients-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr class="recipients-table-th">
                  <th class="recipients-active"></th>
                  <th class="recipients-name">Recipients name</th>
                  <th class="recipients-phone">Phone number</th>
                  <th class="recipients-address">Address</th>
                  <th class="filter-option"></th>
                  <th class="filter-option"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="recipient in recipients" class="recipients-online">
                  <td class="recipients-active-td"><div class="product-active"></div></td>
                  <td class="recipients-name">{{ recipient.recipient_name }}</td>
                  <td class="recipients-phone">{{ recipient.phone_number }}</td>
                  <td class="recipients-address">{{ recipient.address }}</td>
                  <td class="recipients-option"><div class="did-control-info"><router-link :to="{ name: 'EditRecipient', params: { id: recipient.recipient_uuid } }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="recipients-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
</template>
<script>
import modal from '@/components/modal.vue'
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
          del: false,
          recipients: [],
          successMsg: '',
          isModalVisible: false,
                user:{
                system: 'Overall system',
                days: 'Last 30 days'
            },

        }
    },
    components:{
      modal,
      CompanyNavigationComponent,
    },
    mounted(){
      var app = this
      this.axios.all([
        this.axios.get('recipient/list'),
      ]).then( this.axios.spread((recipients) => {
        console.log(recipients)
        app.recipients = recipients.data.payload.items
      })).catch(error => {
        console.log(error)
      })
    },
}
</script>
