<template>
    <div class="container">
      <navigation-component title="Vendors"></navigation-component>
      <div class="main-add-navi">
        <div class="res-div">
          <div class="head-title">
            Vendors
          </div>
        </div>
        <router-link :to="{ name: 'Vendors'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Vendors
          </div>
        </router-link>
        <router-link :to="{ name: 'AddVendor'}"><button v-on:click="create()" id="product" type="submit">Add Vendor</button></router-link>
        <router-link :to="{ name: 'Vendors'}"><button id="cancel" type="submit">Cancel</button></router-link>
      </div>
        <div class="main-add">
          <div class="add-vendor">
            <div class="vendor-main">
              <div v-if="error">
                  <h5 style="color: red; text-align: center;">{{ errorMsg }}</h5>
              </div>
              <div class="vendor-add-title">
                Add Vendor Information
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Company
                </div>
                <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Company" class="grid-select" v-model="vendor.company_uuid" required>
                  <option value="">Select Company</option>
                  <option v-for="company in companies" :value="company.company_uuid">{{ company.company_name}}</option>
                </select>
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Contact
                </div>
                <input class="grid-input" type="text" v-model="vendor.contact_person" placeholder="Thomas">
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Type
                </div>
                <select id="vendors" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Type" class="grid-select" v-model="user.type">
                  <option value="SMPP">SMPP</option>
                </select>
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Rate Email
                </div>
                <input class="grid-input" type="text" v-model="vendor.rate_email" placeholder="Thomas">
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Sales Email
                </div>
                <input class="grid-input" type="text" v-model="vendor.sales_email" placeholder="Thomas">
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  NOC Email
                </div>
                <input class="grid-input" type="text" v-model="vendor.noc_email" placeholder="Thomas">
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Vendor Name
                </div>
                <input class="grid-input" type="text" v-model="vendor.vendor_name" placeholder="Vendor Name">
              </div>
            </div>
            <div class="vendor-second">
              <div class="grid-title">
                Choose Logo
              </div>
              <div class="upload">
                <div v-if="selectedFile == null" class="upload-title">
                  Drop photo here or browse
                </div>
                <button v-if="selectedFile == null" class="upload-button" type="submit">Upload photo</button>
                <div v-if="selectedFile != null" class="upload-title">
                  {{ selectedFile.name }}
                </div>
                <form role="form" enctype="multipart/form-data" @submit.prevent="onSubmit">
                  <div class="dropArea" @ondragover="onFileChanged($event)" :class="dragging ? 'dropAreaDragging' : ''" @dragenter="dragging=true" @dragend="dragging=false" @dragleave="dragging=false">
                    <input type="file" class="upload-input" name="selectedFile" required multiple @change="onFileChanged($event)" accept="image/*">
                  </div>
                </form>
              </div>
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
          isModalVisible: false,
          vendors: true,
          error: false,
          errorMsg: '',
          selectedFile: null,
          dragging: false,
          companies: [],
          vendor: [],
          vendor: {
            company_uuid: null,
          },
                user:{
                contact: 'Chad Sullivan',
                type: 'SMPP',
            },
            user2:{
              country: 'China',
              operator: 'China Mobile',
              sellRate: '0.0012'
            },
            user3:{
              country: 'United States',
              operator: 'AT & T',
              sellRate: '0.0003'
            },
            vendor:{
              vendorName1: 'Vendor BB',
              vendorName2: 'Vendor CC',
              vendorRate1: '0.0009',
              vendorRate2: '0.0008'
            }
        }
    },
    components:{
      modal,
      NavigationComponent,
    },
    mounted(){
      var app = this
      this.axios.all([
        this.axios.get('company/list'),
      ]).then( this.axios.spread((companies) => {
        app.companies = companies.data.payload.items
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
        create(){
          var app = this
          this.axios.post('vendor/create', app.vendor).then(res => {
          this.$router.push({ name: 'Vendors', params: { successMsg: 'OK' }})
          }).catch( err => {
            var app = this

            app.errorMsg = err.res.data.error.message
            app.error = true
            console.log(err.res)
          })
        },
        onFileChanged(event){
          this.selectedFile = event.target.files[0]
          var sendData = new FormData()

          sendData.append('file', this.selectedFile)
          sendData.append('belongs_to', 'user.logo')
          sendData.append('public', true)

          this.axios.post('file', sendData).then(res => {
          this.vendor.logo_file_uuid = res.data.object_uuid
          console.log(res)
          }).catch(err => {
            console.log(err)
          })
        },
    },
}
</script>
