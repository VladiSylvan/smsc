<template>
    <div class="container">
      <navigation-component title="Users"></navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Users
          </div>
        </div>
          <div class="main-header">
            <input class="user-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="search" placeholder="Search for user">
            <div class="user-header-title">
              Filter by:
            </div>
            <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Company" class="company-select" v-model="user.company">
              <option value="Company">Company</option>
            </select>
            <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Choose Company" class="company-select-2" v-model="filter">
              <option value="">Choose Company</option>
              <option v-for="company in companies" :value="company.company_uuid">{{ company.company_name}}</option>
            </select>
            <router-link :to="{ name: 'AddUser'}"><button id="users" type="submit">Add User</button></router-link>
          </div>
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
                  <th class="users-role-th">Role</th>
                  <th class="users-option-th"></th>
                  <th class="users-option-th"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user, index in users">
                  <td class="users-avatar"><div class="user-avatar"></div></td>
                  <td class="users-name">{{ user.first_name }} {{ user.last_name }}</td>
                  <td class="users-username">{{ user.first_name }}</td>
                  <td class="users-company">{{ user.company_name }}</td>
                  <td class="users-reseller">{{ user.reseller_name }}</td>
                  <td class="users-start">{{ user.created_on | moment("DD MMM YYYY") }}</td>
                  <td class="users-role">{{ user.rank }}</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'EditUser' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img v-on:click="userDelete(user.user_id, index)" class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
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
          users: [],
          uploads: [],
          search: '',
          filter: '',
          del: false,
          isModalVisible: false,
          companies: [],
                user:{
                system: 'Overall system',
                days: 'Last 30 days',
                company: 'Company',
            },

        }
    },
    components:{
      modal,
      NavigationComponent,
    },
    watch: {
    search: function (val) {
      console.log('val')
      var app = this
      this.axios.all([
        this.axios.get('user/list?first_name=' + val + '*'),
      ]).then( this.axios.spread((users) => {
        console.log(users)
        app.users = users.data.payload.items
      })).catch(error => {
        console.log(error)
      })
    },
    filter: function (val) {
      var app = this
      this.axios.all([
        this.axios.get('user/list?company_uuid=' + val),
      ]).then( this.axios.spread((users) => {
        console.log(users)
        app.users = users.data.payload.items
      })).catch(error => {
        console.log(error)
      })
    },
  },
    mounted(){
      var app = this
      var test = {
        page: 1
      }
      this.axios.all([
        this.axios.get('user/list'),
        this.axios.get('company/list'),
        this.axios.get('file/list', test)
      ]).then( this.axios.spread((users, companies, uploads) => {
        console.log(uploads)
        app.users = users.data.payload.items
        app.companies = companies.data.payload.items
        console.log(users)
      })).catch(error => {
        console.log(error)
      })
    },
    methods:{
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        },
        userDelete(value, index){
          var app = this
          event.preventDefault();
          this.axios.delete('user/' + value).then( res => {
              this.users.splice(index, 1)
          }).catch( err => {
              var app = this

              app.errorMsg = err.response.data.error.message
              app.error = true
              console.log(err.response)
          })
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
