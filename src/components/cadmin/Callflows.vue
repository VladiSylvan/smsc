<template>
    <div class="container">
      <company-navigation-component title="DIDs"></company-navigation-component>
      <div class="main-navi">
        <div class="res-div">
          <div class="head-title">
            DIDs
          </div>
        </div>
        <div class="navbar">
          <div class="nav-link-1">
            <router-link :to="{ name: 'CompanyDIDs' }">
              <div class="nav-text">
                All DIDs
              </div>
            </router-link>
          </div>
          <div class="nav-link-2">
            <div id="active" class="nav-text">
              All Callflows
              <div class="nav-line-bill-2"></div>
            </div>
          </div>
          <div class="nav-link-3">
            <router-link :to="{ name: 'Suppression' }">
              <div class="nav-text">
                Suppression
              </div>
            </router-link>
          </div>
        </div>
          <input class="did-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchCallflow" placeholder="Search for callflow">
          <router-link :to="{ name: 'CompanyDIDs'}"><button v-on:click="showModal()" id="did" type="submit">Buy DID</button></router-link>
          <router-link :to="{ name: 'CreateCallflow'}"><button id="did" type="submit">New Callflow</button></router-link>
        </div>
        <div class="main">
          <div class="main-container">
            <table class="did-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr class="did-table-th">
                  <th class="did-active"></th>
                  <th class="did-name">Name</th>
                  <th class="did-used-by">Used by</th>
                  <th class="did-option"></th>
                  <th class="did-option"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="did-online">
                  <td class="did-active"><div class="product-active"></div></td>
                  <td class="did-name">Test callflow</td>
                  <td class="did-used-by">2 numbers</td>
                  <td class="did-option"><div class="did-control-info"><router-link :to="{ name: 'ResellerEditDIDs' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="did-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="did-offline">
                  <td class="did-active"><div class="product-not-active"></div></td>
                  <td class="did-name">Test callflow2</td>
                  <td class="did-used-by">1 numbers</td>
                  <td class="did-option"><div class="did-control-info"><router-link :to="{ name: 'ResellerEditDIDs' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="did-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
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
