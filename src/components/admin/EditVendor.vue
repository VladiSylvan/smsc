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
        <router-link :to="{ name: 'EditVendor'}"><button id="product" v-on:click="edit()">Save Vendor</button></router-link>
        <router-link :to="{ name: 'Vendors'}"><button id="cancel" type="submit">Cancel</button></router-link>
      </div>
      <div class="main-add">
        <div class="add-vendor">
          <div class="vendor-main">
            <div class="vendor-add-title">
              Edit Vendor Information
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Company Name
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Company" class="grid-select" v-model="vendors.company_uuid">
                <option v-for="company in companies" :value="company.company_uuid">{{ company.company_name}}</option>
              </select>
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Contact
              </div>
              <input class="grid-input" type="text" v-model="vendors.contact_person" placeholder="Thomas">
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
              <input class="grid-input" type="text" v-model="vendors.rate_email" placeholder="Thomas">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Sales Email
              </div>
              <input class="grid-input" type="text" v-model="vendors.sales_email" placeholder="Thomas">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                NOC Email
              </div>
              <input class="grid-input" type="text" v-model="vendors.noc_email" placeholder="Thomas">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Vendor Name
              </div>
              <input class="grid-input" type="text" v-model="vendors.vendor_name" placeholder="Vendor Name">
            </div>
          </div>
          <div class="vendor-second">
            <div class="grid-title">
              Change Photo
            </div>
            <div class="upload-edit">
              <div class="upload-image">
                <div class="upload-circle"></div>
              </div>
              <div class="upload-container">
                <div v-if="selectedFile == null" class="upload-title-edit">
                  Drop photo here or browse
                </div>
                <button v-if="selectedFile == null" class="upload-button-edit" type="submit">Upload photo</button>
                <div v-if="selectedFile != null" class="upload-title-edit">
                  {{ selectedFile.name }}
                </div>
              </div>
              <form role="form" enctype="multipart/form-data" @submit.prevent="onSubmit">
                <div class="dropArea" @ondragover="onFileChanged($event)" :class="dragging ? 'dropAreaDragging' : ''" @dragenter="dragging=true" @dragend="dragging=false" @dragleave="dragging=false">
                  <input type="file" class="upload-input-edit" name="selectedFile" required multiple @change="onFileChanged($event)" accept="image/*">
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
          companies: [],
          selectedFile: null,
          dragging: false,
          vendors: {
            noc_email: '',
            rate_email: '',
            sales_email: '',
            vendor_name: '',
            company_uuid: '',
            contact_person: '',
            logo_file_uuid: '',
          },
                user:{
                companyName: 'Appolo Inc.',
                contact: 'Chad Sullivan',
                type: 'SMPP',
                rateEmail: 'Thomas',
                salesEmail: 'Thomas',
                nocEmail: 'Thomas',
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
    mounted(){
      var app = this
      this.axios.all([
        this.axios.get('vendor/' + this.$route.params.id),
        this.axios.get('company/list'),
      ]).then( this.axios.spread((vendors, companies) => {
        console.log(vendors)
        app.vendors = vendors.data.payload
        app.companies = companies.data.payload.items
      })).catch(error => {
        console.log(error)
      })
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
        },
        edit(){
          if(this.selectedFile === null){
            var app = this
            event.preventDefault();
            var updateData = {
              noc_email: this.vendors.noc_email,
              rate_email: this.vendors.rate_email,
              sales_email: this.vendors.sales_email,
              vendor_name: this.vendors.vendor_name,
              company_uuid: this.vendors.company_uuid,
              contact_person: this.vendors.contact_person,
              logo_file_uuid: this.vendors.logo_file_uuid,
            }
            this.axios.patch('vendor/' + this.$route.params.id, updateData).then( res => {
                this.$router.push({ name: 'Vendors', params: { successMsg: 'OK' }})
            }).catch( err => {
                var app = this

                // app.errorMsg = err.response.data.error.message
                app.error = true
                console.log(err.response)
            })
          }
          else{
            let data = new FormData();
            data.append('file', this.selectedFile);
            data.append('belongs_to', 'user.logo')

            this.axios.post(
              '/file',
              data
            ).then(
              response => {
                var app = this
                event.preventDefault();
                var updateData = {
                  noc_email: this.vendors.noc_email,
                  rate_email: this.vendors.rate_email,
                  sales_email: this.vendors.sales_email,
                  vendor_name: this.vendors.vendor_name,
                  company_uuid: this.vendors.company_uuid,
                  contact_person: this.vendors.contact_person,
                  logo_file_uuid: response.data.object_uuid,
                }
                this.axios.patch('vendor/' + this.$route.params.id, updateData).then( res => {
                    this.$router.push({ name: 'Vendors', params: { successMsg: 'OK' }})
                }).catch( err => {
                    var app = this

                    // app.errorMsg = err.response.data.error.message
                    app.error = true
                    console.log(err.response)
                })
                console.log('image upload response > ', response)
              }
            )
          }
        },
        onFileChanged(event){
          this.selectedFile = event.target.files[0]
        },
    },
}
</script>
