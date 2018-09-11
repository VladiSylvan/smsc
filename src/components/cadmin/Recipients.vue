<template>
    <div class="container">
      <company-navigation-component title="Recipients"></company-navigation-component>
      <div class="main-navi">
        <div class="res-div">
          <div class="head-title">
            Recipients
          </div>
        </div>
          <input class="recipients-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="search" placeholder="Search for recipients">
          <router-link :to="{ name: 'AddRecipient'}"><button id="product" type="button">Add Recipient</button></router-link>
          <button id="product" type="button" @click="fileImport()">Import</button>
          <form>
            <input id="fileToImport" type="file" hidden>
          </form>
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
                <tr v-for="recipient, index in recipients" class="recipients-online">
                  <td class="recipients-active-td"><div class="product-active"></div></td>
                  <td class="recipients-name">{{ recipient.recipient_name }}</td>
                  <td class="recipients-phone">{{ recipient.phone_number }}</td>
                  <td class="recipients-address">{{ recipient.address }}</td>
                  <td class="recipients-option"><div class="did-control-info"><router-link :to="{ name: 'EditRecipient', params: { id: recipient.recipient_uuid } }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="recipients-option"><div style="cursor: pointer" class="did-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg" @click="deleteRecipient(recipient.recipient_uuid, index)"></div></td>
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
          search: '',
          recipients: [],
          successMsg: '',
          pageNumber: 0,
          totalPages: 0,
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
    watch: {
      search: function (val) {
        var app = this
        this.axios.all([
          this.axios.get('recipient/list?recipient_name=' + val + '*'),
        ]).then( this.axios.spread((res) => {
          app.recipients = res.data.payload.items
          this.pageNumber = 0
          document.getElementById('previousPage').setAttribute('disabled', 'disabled')
          document.getElementById('nextPage').removeAttribute('disabled')
        })).catch(error => {
          console.log(error)
        })
      },
    },
    methods:{
      getData(page = 0){
        this.axios.get('recipient/list?page=' + page).then(res => {
          this.recipients = res.data.payload.items
          this.totalPages = Math.floor(res.data.payload.total / res.data.payload.per_page)
          if(this.totalPages == 0){
            document.getElementById('nextPage').setAttribute('disabled', 'disabled')
          }
        }).catch(err => {
          console.log(err)
        })
      },
      fileImport(){
        document.getElementById('fileToImport').click()
      },
      deleteRecipient(id, index){
        if(confirm('Do you really want to delete this recipient?')){
          this.axios.delete('recipient/' + id).then(res => {
            this.recipients.splice(index, 1)
          }).catch(err => {
            console.log(err)
          })
        }
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
    mounted(){
      this.getData()
    },
}
</script>
