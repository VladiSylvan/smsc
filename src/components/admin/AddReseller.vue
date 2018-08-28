<template>
    <div class="container">
      <navigation-component title="Resellers"></navigation-component>
      <div class="main-add-navi">
        <div class="res-div">
          <div class="head-title">
            Resellers
          </div>
        </div>
        <router-link :to="{ name: 'Resellers'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Resellers
          </div>
        </router-link>
        <router-link :to="{ name: 'AddReseller'}"><button id="product" v-on:click="create()" type="submit">Add Reseller</button></router-link>
        <router-link :to="{ name: 'Resellers'}"><button id="cancel" type="submit">Cancel</button></router-link>
      </div>
      <div class="main-add">
        <div class="add-reseller">
          <div class="reseller-main">
            <div class="reseller-add-title">
              Add Reseller Information
            </div>
            <div class="grid-1">
              <div class="grid-title">
                First Name
              </div>
              <input class="grid-input" type="text" v-model="reseller.first_name" placeholder="Caroline">
            </div>
            <div class="grid-1">
              <div class="grid-title">
                Last Name
              </div>
              <input class="grid-input" type="text" v-model="reseller.last_name" placeholder="Thomas">
            </div>
            <div class="grid-1">
              <div class="grid-title">
                Username
              </div>
              <input class="grid-input" type="text" v-model="user.username" placeholder="cthomas">
            </div>
            <div class="grid-1">
              <div class="grid-title">
                Phone Number
              </div>
              <input class="grid-input" type="text" v-model="reseller.contact.phone" placeholder="Caroline">
            </div>
            <div class="grid-1">
              <div class="grid-title">
                Email
              </div>
              <input class="grid-input" type="text" v-model="reseller.contact.email" placeholder="Enter Email">
            </div>
            <div class="grid-1">
              <div class="grid-title">
                Company
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Company" class="grid-select" v-model="user.company_uuid" required>
                <option v-for="company in companies" :value="company.company_uuid">{{ company.company_name}}</option>
              </select>
            </div>
            <div class="grid-2">
              <div class="grid-title">
                Address
              </div>
              <input class="grid-input" type="text" v-model="reseller.contact.address" placeholder="Caroline">
            </div>
            <div class="grid-3-sec">
              <div class="grid-title">
                Zip Code
              </div>
              <input class="grid-input" type="text" v-model="reseller.contact.zipcode" placeholder="75832-4568">
            </div>
            <div class="grid-4-sec">
              <div class="grid-title">
                Country
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Country" class="grid-select" v-model="reseller.contact.country_uuid">
                <option v-for="country in countries" :value="country.country_uuid">{{ country.name }}</option>
              </select>
            </div>
            <div class="grid-3-sec">
              <div class="grid-title">
                State
              </div>
              <input class="grid-input" type="text" v-model="reseller.contact.state" placeholder="MD">
            </div>
            <div class="grid-3-sec">
              <div class="grid-title">
                City
              </div>
              <input class="grid-input" type="text" v-model="reseller.contact.city" placeholder="Port Joyce">
            </div>
          </div>
          <div class="reseller-second">
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
              <form role="form" @submit.prevent="onSubmit">
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
          selectedFile: null,
          dragging: false,
          countries: [],
          reseller: {
            first_name: '',
            contact: {
              country_uuid: '',
              city: '',
              zipcode: '',
              address: '',
              // logo_file_uuid: '',
              state: '',
              phone: '',
              email: ''
            },
            last_name: '',
            reseller_url: 'http://reseller.com'
          },
          companies: [],
          vendors: true,
                user:{
                productName: 'Caroline',
                country: 'China',
                operator: 'China Unicom',
                sellRate: '0.001',
                company: 'Choose Company',
                country: 'Select',
                state: 'Select State',
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
        this.axios.get('country/list'),
      ]).then( this.axios.spread((companies, countries) => {
        app.companies = companies.data.payload.items
        app.countries = countries.data.payload.items
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
          this.axios.post('reseller/create', app.reseller).then(res => {
          this.$router.push({ name: 'Resellers', params: { successMsg: 'OK' }})
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
          this.reseller.contact.logo_file_uuid = res.data.object_uuid
          console.log(res)
          }).catch(err => {
            console.log(err)
          })
        },
    },
}
</script>
