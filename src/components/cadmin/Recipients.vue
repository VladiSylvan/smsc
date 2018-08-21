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
          <router-link :to="{ name: 'AddCampaign'}"><button id="product" type="submit">Add Campaign</button></router-link>
        </div>
        <div class="main">
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
                <tr class="recipients-online">
                  <td class="recipients-active-td"><div class="product-active"></div></td>
                  <td class="recipients-name">Mario Haynes</td>
                  <td class="recipients-phone">175-843-6478</td>
                  <td class="recipients-address">254 Schumm Forest</td>
                  <td class="recipients-option"><div class="did-control-info"><router-link :to="{ name: 'CompanyEditDIDs' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="recipients-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="recipients-online">
                  <td class="recipients-active-td"><div class="product-active"></div></td>
                  <td class="recipients-name">Cecilia Fitzgerald</td>
                  <td class="recipients-phone">397-060-0359</td>
                  <td class="recipients-address">69 Ciara Brook</td>
                  <td class="recipients-option"><div class="did-control-info"><router-link :to="{ name: 'CompanyEditDIDs' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="recipients-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="recipients-online">
                  <td class="recipients-active-td"><div class="product-active"></div></td>
                  <td class="recipients-name">Susan Morris</td>
                  <td class="recipients-phone">011-151-1553</td>
                  <td class="recipients-address">2383 Lewis Turnpike</td>
                  <td class="recipients-option"><div class="did-control-info"><router-link :to="{ name: 'CompanyEditDIDs' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="recipients-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="recipients-offline">
                  <td class="recipients-active-td"><div class="product-not-active"></div></td>
                  <td class="recipients-name">Rodney Moreno</td>
                  <td class="recipients-phone">780-454-9508</td>
                  <td class="recipients-address">286 Towne Mountains Apt. 891</td>
                  <td class="recipients-option"><div class="did-control-info"><router-link :to="{ name: 'CompanyEditDIDs' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="recipients-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="recipients-offline">
                  <td class="recipients-active-td"><div class="product-not-active"></div></td>
                  <td class="recipients-name">Emma Hale</td>
                  <td class="recipients-phone">782-956-2332</td>
                  <td class="recipients-address">2603 Maye Cove</td>
                  <td class="recipients-option"><div class="did-control-info"><router-link :to="{ name: 'CompanyEditDIDs' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
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
