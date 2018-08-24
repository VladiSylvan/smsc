<template>
    <div class="container">
      <navigation-component title="DID"></navigation-component>
      <div class="main-navi">
        <div class="res-div">
          <div class="head-title">
            DID
          </div>
        </div>
        <div v-if="successMsg != ''">
          <h5 style="color: green; text-align: center;">
            {{ successMsg }}
          </h5>
        </div>
        <div v-if="this.$route.params.successMsg != null">
          <h5 style="color: green; text-align: center;">
            {{ this.$route.params.successMsg }}
          </h5>
        </div>
          <input class="did-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchDID" placeholder="Search for DID">
          <router-link :to="{ name: 'ImportDID'}"><button id="did" type="submit">Import DID</button></router-link>
        </div>
        <div class="main">
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
                  <td class="did-option"><div class="did-control-info"><img v-on:click="didDelete(did.did_uuid, did.number, index)" class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
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
          successMsg: '',
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
        didDelete(value, name, index){
          var r = confirm("Do you really want to delete " + name + " DID?");
          if(r == true){
            var app = this
            this.axios.delete('did/' + value).then( res => {
                // this.$router.push('/sys/did')
                this.dids.splice(index, 1)
                this.$route.params.successMsg = null
                this.successMsg = 'OK'
            }).catch( err => {
                var app = this

                app.errorMsg = err.response.data.error.message
                app.error = true
                console.log(err.response)
            })
          }
        }
    },
}
</script>
