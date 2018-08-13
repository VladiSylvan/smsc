<template>
    <div class="container">
      <navigation-component title="Filters"></navigation-component>
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
                  <th class="filter-text">Text to block</th>
                  <th class="filter-applied">Applied to Vendor(s)</th>
                  <th class="filter-applied-client">Applied to Client(s)</th>
                  <th class="filter-blocked">Blocked Calling Number / ID</th>
                  <th class="filter-option"></th>
                  <th class="filter-option"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="filters-online">
                  <td class="filter-active-td"><div class="product-active"></div></td>
                  <td class="filter-text">Computer Hardware Desktops</td>
                  <td class="filter-applied">Apple</td>
                  <td class="filter-applied-client">Owen Mills</td>
                  <td class="filter-blocked">
                    <div class="blocked-text">
                      871-281-3671 <div class="blocked-by">bocked by</div> Jerry Morrison
                    </div>
                    <div class="blocked-text">
                      871-281-3671 <div class="blocked-by">bocked by</div> Pinterest
                    </div>
                  </td>
                  <td class="filter-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Edit.svg"></div></td>
                  <td class="filter-option"><div class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr class="filters-offline">
                  <td class="filter-active-td"><div class="product-not-active"></div></td>
                  <td class="filter-text">Windows Registry Cleaner Checklist</td>
                  <td class="filter-applied">Google</td>
                  <td class="filter-applied-client">Billy Turner</td>
                  <td class="filter-blocked">
                    <div class="blocked-text">
                      060-307-6942 <div class="blocked-by">bocked by</div> Glenn Rhodes
                    </div>
                    <div class="blocked-text">
                      624-270-8113 <div class="blocked-by">bocked by</div> Airbnb
                    </div>
                  </td>
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
import NavigationComponent from '@/components/NavigationComponent'

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
<style>
.undo-title{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  display: inline-block;
  float: right;
  margin-top: 5px;
  margin-right: 30px;
}
.undo-image{
  display: inline-block;
  float: right;
  margin-right: 15px;
}
.undo-undo{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  display: inline-block;
  float: right;
  margin-top: 5px;
  margin-right: 15px;
}
.filters-table{
  border: none;
  max-width: calc(100% - 10px);
  width: 100%;
  margin-top: 20px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  text-align: left;
}
.filters-table-th{
  height: 37px;
  font-weight: 600;
}
.filters-online{
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
  height: 50px;
}
.filters-offline{
  background-color: #F0F1FA;
  box-shadow: inset 0 -1px 0 0 rgba(189,191,216,0.36);
  height: 50px;
}
.filter-active{
  width: 20px;
  padding-left: 7px;
}
.filter-active-td{
  width: 20px;
  padding-left: 7px;
  vertical-align: text-top;
  padding-top: 15px;
}
.filter-text{
  width: 269px;
  vertical-align: text-top;
}
.filter-applied{
  width: 174px;
  vertical-align: text-top;
}
.filter-applied-client{
  width: 164px;
  vertical-align: text-top;
}
.filter-blocked{
  width: 363px;
  vertical-align: text-top;
}
.filter-option{
  width: 50px;
}
.blocked-text{
  padding: 3px;
}
.blocked-by{
  color: #55616E;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 20px;
  display: inline-block;
}

.product-active{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #24E2B8;
  float: left;
  margin-left: 3px;
}
.product-not-active{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #D2305B;
  float: left;
  margin-left: 3px;
}
.did-control-info{
  width: 30px;
  height: 30px;
  float: left;
  margin-top: -10px;
}
.filters-input-search{
  width: 302px;
  margin-left: 20px;
  margin-top: 20px;
  height: 40px !important;
  padding-left: 40px;
}
button#did{
  	height: 40px;
    width: 130px;
    border-radius: 4px;
    background-color: #51A3F3;
    border-radius: 4px;
    color: #fff;
    font-family: "Helvetica Neue";
    font-size: 15px;
    font-weight: 300;
    line-height: 30px;
    text-align: center;
    margin-top: 20px;
    float: right;
    margin-right: 20px;
}
.main{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
.main-container{
  float: left;
  display: inline-block;
  width: calc(100% - 30px);
  margin-left: 20px;
  margin-right: 20px;
}
@media only screen and (max-width: 1200px) {
    .filter-input-search{
      max-width: calc(100% - 80px);
    }
}
@media only screen and (max-width: 990px) {
    .logo{
      display: none;
    }
    .logo-small{
      display: inline-block;
    }
    .navi-logo{
      max-width: 38.8333333333%;
      width: 100%;
    }
    .navi-circle-open{
      display: inline-block;
    }
    .navi-circle-close{
      display: none;
    }
    ul, .sidebar-hide{
      display: none;
    }
    .main{
      max-width: 100%;
    }
}
</style>
