<template>
    <div class="container">
      <navigation-component title="DID"></navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            DID
          </div>
        </div>
          <input class="did-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchDID" placeholder="Search for DID">
          <router-link :to="{ name: 'ImportDID'}"><button id="did" type="submit">Import DID</button></router-link>
          <div class="main-container">
            <table class="did-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr class="did-table-th">
                  <th class="did-active"></th>
                  <th class="did-number">Number</th>
                  <th class="did-created">Created On</th>
                  <th class="did-created-by">Created By</th>
                  <th class="did-country">Country</th>
                  <th class="did-type">Type</th>
                  <th class="did-assigned">Assigned To</th>
                  <th class="did-option"></th>
                  <th class="did-option"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="did, index in dids" class="did-online">
                  <td class="did-active"><div class="product-active"></div></td>
                  <td class="did-number">{{ did.number }}</td>
                  <td class="did-created">{{ did.created_on | moment("MM-DD-YYYY") }}</td>
                  <td class="did-created-by"><div class="did-avatar"></div> <div class="did-name-fix">{{ did.created_by }}</div></td>
                  <td class="did-country">{{ did.country_name }}</td>
                  <td class="did-type">{{ did.type }}</td>
                  <td class="did-assigned"><div class="did-avatar"></div> <div class="did-name-fix">{{ did.vendor_uuid }}</div></td>
                  <td class="did-option"><div class="did-control-info"><router-link :to="{ name: 'EditDID', params: { id: did.did_uuid }}"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="did-option"><div class="did-control-info"><img v-on:click="didDelete(did.did_uuid, index)" class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
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
          dids: [],
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
    mounted(){
      var app = this
      this.axios.all([
        this.axios.get('did/list'),
      ]).then( this.axios.spread((dids) => {
        console.log(dids)
        app.dids = dids.data.payload.items
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
        didDelete(value, index){
          var app = this
          var value
          event.preventDefault();
          this.axios.delete('did/' + value).then( res => {
              // this.$router.push('/sys/did')
              this.dids.splice(index, 1)
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
