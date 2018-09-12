<template>
    <div class="container">
      <navigation-component title="Users"></navigation-component>
      <div class="main-navi">
        <div class="res-div">
          <div class="head-title">
            Users
          </div>
        </div>
          <div class="main-header">
            <div v-if="successMsg != ''">
              <h5 style="color: green; text-align: center;">
                {{ successMsg }}
              </h5>
            </div>
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
                <tr v-for="user, index in users">
                  <td class="users-avatar"><div class="user-avatar"><img v-if="user.logo_file_uuid != null" class="image-resize" :src="getLogo(user.logo_file_uuid)"></div></td>
                  <td class="users-name">{{ user.full_name }}</td>
                  <td class="users-username">{{ user.user_name }}</td>
                  <td class="users-company">{{ user.company_name }}</td>
                  <td class="users-reseller">{{ user.reseller_name }}</td>
                  <td class="users-start">{{ user.created_on | moment("DD MMM YYYY") }}</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'EditUser', params: { id: user.user_id } }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img v-on:click="userDelete(user.user_id, user.full_name, index)" class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
              </tbody>
            </table>
            <div class="pagination">
              <button type="button" id="previousPage" @click="previousPage()" disabled>Previous</button>
              <button type="button" id="nextPage" @click="nextPage()">Next</button>
            </div>
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
          totalPages: 0,
          pageNumber: 0,
          successMsg: '',
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
        this.axios.get('user/list?full_name=*' + val + '*'),
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
      this.getData()
    },
    methods:{
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        },
        userDelete(value, name, index){
          var r = confirm("Do you really want to delete " + name + " user?");
          if(r == true){
            var app = this
            this.axios.delete('user/' + value).then( res => {
                this.users.splice(index, 1)
                this.$route.params.successMsg = null
                this.successMsg = 'User successfully deleted!'
                this.getData()
            }).catch( err => {
                var app = this
                app.errorMsg = err.response.data.error.message
                app.error = true
                console.log(err.response)
            })
          }
        },
        getLogo(value){
          var logo = "http://88.198.219.62/api_smsc/v1/file/" + value
          return logo
        },
        getData(page = 0){
          var app = this
          var test = {
            page: 1
          }
          this.axios.all([
            this.axios.get('user/list?page=' + page),
            this.axios.get('company/list'),
            this.axios.get('file/list', test)
          ]).then( this.axios.spread((users, companies, uploads) => {
            app.users = users.data.payload.items
            app.companies = companies.data.payload.items
            this.totalPages = Math.floor(users.data.payload.total / users.data.payload.per_page)
            if(this.totalPages == 0){
              document.getElementById('nextPage').setAttribute('disabled', 'disabled')
            }
          })).catch(error => {
            console.log(error)
          })
        },
        nextPage(){
          this.pageNumber++;
          document.getElementById('previousPage').removeAttribute('disabled')
          if(this.pageNumber == this.totalPages){
            document.getElementById('nextPage').setAttribute('disabled', 'disabled')
          }
          this.getData(this.pageNumber)
        },
        previousPage(){
          this.pageNumber--
          if(this.pageNumber == 0){
            document.getElementById('previousPage').setAttribute('disabled', 'disabled')
          }
          if(this.pageNumber < this.totalPages){
            document.getElementById('nextPage').removeAttribute('disabled')
          }
          this.getData(this.pageNumber)
        }
    },
}
</script>
