<template>
    <div class="container">
      <reseller-navigation-component title="Filters"></reseller-navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Filters
          </div>
        </div>
          <input class="filters-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchFilters" placeholder="Search for filter">
          <div class="main-container">
            <table class="filters-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr class="filters-table-th">
                  <th class="filter-active"></th>
                  <th class="reseller-filter-text">Text to block</th>
                  <th class="filter-option"></th>
                  <th class="filter-option"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="filters-online">
                  <td class="filter-active-td"><div class="product-active"></div></td>
                  <td class="reseller-filter-text">Computer Hardware Desktops And Notebooks And Handhelds Oh My</td>
                  <td class="filter-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                  <td class="filter-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="filters-offline">
                  <td class="filter-active-td"><div class="product-not-active"></div></td>
                  <td class="reseller-filter-text">Windows Registry Cleaner Checklist</td>
                  <td class="filter-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                  <td class="filter-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
</template>
<script>
import modal from '@/components/modal.vue'
import ResellerNavigationComponent from '@/components/ResellerNavigationComponent'

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
      ResellerNavigationComponent,
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
