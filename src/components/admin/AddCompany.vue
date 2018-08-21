<template>
    <div class="container">
      <navigation-component title="Companies"></navigation-component>
      <div class="main-add-navi">
        <div class="res-div">
          <div class="head-title">
            Companies
          </div>
        </div>
        <router-link :to="{ name: 'Companies'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Companies
          </div>
        </router-link>
          <button id="product" @click="create()" type="submit">Add Company</button>
          <router-link :to="{ name: 'Companies'}"><button id="cancel" type="submit">Cancel</button></router-link>
        </div>
        <div class="main-add">
          <div class="add-company">
            <div class="company-main">
              <div v-if="error">
                  <h5 style="color: red; text-align: center;">{{ errorMsg }}</h5>
              </div>
              <div class="company-add-title">
                Add Company Information
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Company Name
                </div>
                <input class="grid-input" type="text" v-model="company.company_name" placeholder="Company Name">
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Phone Number
                </div>
                <input class="grid-input" type="text" v-model="company.contact.phone" placeholder="Enter phone number">
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Email
                </div>
                <input class="grid-input" type="text" v-model="company.contact.email" placeholder="Thomas">
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Password
                </div>
                <input class="grid-input" type="password" v-model="company.contact.passwd" placeholder="Password">
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Address
                </div>
                <input class="grid-input" type="text" v-model="company.contact.address" placeholder="Caroline">
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Country
                </div>
                <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Country" class="grid-select" v-model="company.contact.country_uuid">
                  <option v-for="country in countries" :value="country.country_uuid">{{ country.name }}</option>
                </select>
              </div>
              <div class="grid-3">
                <div class="grid-title">
                  State
                </div>
                <input class="grid-input" type="text" v-model="company.contact.state" placeholder="MD">
              </div>
              <div class="grid-3">
                <div class="grid-title">
                  City
                </div>
                <input class="grid-input" type="text" v-model="company.contact.city" placeholder="Caroline">
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Zip Code
                </div>
                <input class="grid-input" type="text" v-model="company.contact.zipcode" placeholder="Caroline">
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Mode
                </div>
                <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Mode" class="grid-select">
                  <option value="Prepay">Prepay</option>
                  <option value="Postpay">Postpay</option>
                </select>
              </div>
              <div class="grid-4">
                <div class="grid-title">
                  Test Credit
                </div>
                <input class="grid-input" type="text" v-model="company.credit" placeholder="Enter Test Credit">
              </div>
            </div>
            <div class="company-second">
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
          selectedFile: null,
          dragging: false,
          countries: [],
          company:{
            credit: '',
            prepay: true,
            // reseller_uuid: '1',
            contact: {
              email: '',
              state: '',
              logo_file_uuid: '',
              passwd: '',
              zipcode: '',
              // name: 'Test1',
              address: '',
              city: '',
              phone: '',
              country_uuid: ''
            },
            company_url: 'http://gsadfdss.lt',
            company_name: ''
          },
          error: false,
          errorMsg: '',
        }
    },
    components:{
      modal,
      NavigationComponent
    },
    methods:{
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        },
        create(){
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
              this.axios.post('company/create', app.company).then( res => {
              this.$router.push({ name: 'Companies', params: { successMsg: 'OK' }})
              }).catch( err => {
                  var app = this

                  app.errorMsg = err.response.data.error.message
                  app.error = true
                  console.log(err.response)
              })
              this.company.contact.logo_file_uuid = response.data.object_uuid
              console.log('image upload response > ', response)
            }
          )
        },
        onFileChanged(event){
          this.selectedFile = event.target.files[0]
        },
    },
    mounted(){
      var app = this
      this.axios.all([
        this.axios.get('country/list'),
      ]).then( this.axios.spread((countries) => {
        console.log(countries)
        app.countries = countries.data.payload.items
      })).catch(error => {
        console.log(error)
      })
    },
}
</script>
<style>
</style>
