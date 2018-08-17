<template>
    <div class="container">
      <company-navigation-component title="SMS Workflow"></company-navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            SMS Workflow
          </div>
        </div>
          <input class="did-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchDID" placeholder="Search for SMS workflow">
          <router-link :to="{ name: 'AddSMSWorkflow'}"><button id="did" type="submit">Add Workflow</button></router-link>
          <div class="main-container">
            <table class="did-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr class="smsw-table-th">
                  <th class="smsw-active"></th>
                  <th class="smsw-name">Name</th>
                  <th class="smsw-created">Created On</th>
                  <th class="smsw-created-by">Created By</th>
                  <th class="smsw-assigned">Assigned To</th>
                  <th class="did-option"></th>
                  <th class="did-option"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="smsw-online">
                  <td class="smsw-active"><div class="product-active"></div></td>
                  <td class="smsw-name">South Cicero</td>
                  <td class="smsw-created">10-03-2018</td>
                  <td class="smsw-created-by"><div class="did-avatar"></div> <div class="did-name-fix">San Marino</div></td>
                  <td class="smsw-assigned"><div class="did-avatar"></div> <div class="did-name-fix">Appolo Inc.</div></td>
                  <td class="smsw-option"><div class="did-control-info"><router-link :to="{ name: 'EditSMSWorkflow' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="smsw-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="smsw-offline">
                  <td class="smsw-active"><div class="product-not-active"></div></td>
                  <td class="smsw-name">West Rafaelafurt</td>
                  <td class="smsw-created">06-19-2018</td>
                  <td class="smsw-created-by"><div class="did-avatar"></div> <div class="did-name-fix">Willie Collins</div></td>
                  <td class="smsw-assigned"><div class="did-avatar"></div> <div class="did-name-fix">Evelyn Houston</div></td>
                  <td class="smsw-option"><div class="did-control-info"><router-link :to="{ name: 'EditSMSWorkflow' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="smsw-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="app">
          <modal v-show="isModalVisible" @close="closeModal"/>
        </div>
    </div>
</template>
<script>
import modal from '@/components/DIDsModal.vue'
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
