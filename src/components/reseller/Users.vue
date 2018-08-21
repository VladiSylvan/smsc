<template>
    <div class="container">
      <reseller-navigation-component title="Users"></reseller-navigation-component>
      <div class="main-navi">
        <div class="res-div">
          <div class="head-title">
            Users
          </div>
        </div>
          <div class="main-header">
            <input class="user-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchUser" placeholder="Search for user">
            <div class="user-header-title">
              Filter by:
            </div>
            <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Company" class="company-select" v-model="user.company">
              <option value="Company">Company</option>
            </select>
            <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Choose Company" class="company-select-2" v-model="user.chooseCompany">
              <option value="Choose Company">Choose Company</option>
            </select>
            <router-link :to="{ name: 'ResellerAddUser'}"><button id="users" type="submit">Add User</button></router-link>
          </div>
        </div>
        <div class="main">
          <div class="main-container">
            <table class="users-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <th class="users-avatar-th"></th>
                  <th class="users-name-th">Name</th>
                  <th class="users-username-th">Username</th>
                  <th class="users-company-th">Company</th>
                  <th class="users-reseller-th">Reseller</th>
                  <th class="users-start-th">Start from</th>
                  <th class="users-option-th"></th>
                  <th class="users-option-th"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="users-avatar"><div class="user-avatar"></div></td>
                  <td class="users-name">Nellie Ferguson</td>
                  <td class="users-username">nellief</td>
                  <td class="users-company">San Marino</td>
                  <td class="users-reseller">Mason Carroll</td>
                  <td class="users-start">29 Apr 2018</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'ResellerEditUser' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr>
                  <td class="users-avatar"><div class="user-avatar"></div></td>
                  <td class="users-name">Frances Ruiz</td>
                  <td class="users-username">Peanut</td>
                  <td class="users-company">Latvia</td>
                  <td class="users-reseller">Connor Phillips</td>
                  <td class="users-start">20 Feb 2018</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'ResellerEditUser' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr>
                  <td class="users-avatar"><div class="user-avatar"></div></td>
                  <td class="users-name">Keith Gardner</td>
                  <td class="users-username">Samson</td>
                  <td class="users-company">Grenada</td>
                  <td class="users-reseller">Tom Terry</td>
                  <td class="users-start">05 May 2018</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'ResellerEditUser' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr>
                  <td class="users-avatar"><div class="user-avatar"></div></td>
                  <td class="users-name">Abbie Obrien</td>
                  <td class="users-username">Madison</td>
                  <td class="users-company">Pakistan</td>
                  <td class="users-reseller">Martha Duncan</td>
                  <td class="users-start">23 Sep 2018</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'ResellerEditUser' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr>
                  <td class="users-avatar"><div class="user-avatar"></div></td>
                  <td class="users-name">Willie Neal</td>
                  <td class="users-username">Jack</td>
                  <td class="users-company">India</td>
                  <td class="users-reseller">Ada Beck</td>
                  <td class="users-start">02 Jun 2018</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'ResellerEditUser' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
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
                days: 'Last 30 days',
                company: 'Company',
                chooseCompany: 'Choose Company',
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
