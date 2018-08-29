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
        <router-link :to="{ name: 'EditCompany'}"><button id="product" v-on:click="edit()" type="submit">Save Company</button></router-link>
        <router-link :to="{ name: 'Companies'}"><button id="cancel" type="submit">Cancel</button></router-link>
      </div>
      <div class="main-add">
        <div class="add-company">
          <div class="company-main">
            <div v-if="error">
                <h5 style="color: red; text-align: center;">{{ errorMsg }}</h5>
            </div>
            <div class="company-add-title">
              Edit Company Information
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Company Name
              </div>
              <input class="grid-input" type="text" v-model="companies.company_name" placeholder="Company Name">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Phone Number
              </div>
              <input class="grid-input" type="text" v-model="companies.contact.phone" placeholder="Enter phone number">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Email
              </div>
              <input class="grid-input" type="text" v-model="companies.contact.email" placeholder="Thomas">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Password
              </div>
              <input class="grid-input" type="password" v-model="companies.contact.passwd" placeholder="Password">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Address
              </div>
              <input class="grid-input" type="text" v-model="companies.contact.address" placeholder="Caroline">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Country
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Country" class="grid-select" v-model="companies.contact.country_uuid">
                <option v-for="country in countries" :value="country.country_uuid">{{ country.name }}</option>
              </select>
            </div>
            <div class="grid-3">
              <div class="grid-title">
                State
              </div>
              <input class="grid-input" type="text" v-model="companies.contact.state" placeholder="MD">
            </div>
            <div class="grid-3">
              <div class="grid-title">
                City
              </div>
              <input class="grid-input" type="text" v-model="companies.contact.city" placeholder="Caroline">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Zip Code
              </div>
              <input class="grid-input" type="text" v-model="companies.contact.zipcode" placeholder="Caroline">
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
              <input class="grid-input" type="text" v-model="companies.credit" placeholder="Enter Test Credit">
            </div>
          </div>
          <div class="company-second">
            <div class="grid-title">
              Change Photo
            </div>
            <div class="upload-edit">
              <div v-if="selectedFile == null" class="upload-image">
                <div class="upload-circle"><img v-if="editImage != null" class="image-resize-upload" :src="getLogo(editImage)"></div>
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
          vendors: true,
          error: false,
          errorMsg: '',
          selectedFile: null,
          dragging: false,
          editImage: '',
          countries: [],
          companies:{
            company_name: '',
            credit: '',
            contact:{
              phone: '',
              country_uuid: '',
              passwd: '',
              email: '',
              address: '',
              state: '',
              city: '',
              zipcode: '',
              logo_file_uuid: '',
            }
          },
                user:{
                companyName: 'Appolo Inc.',
                phoneNumber: '459-362-5221',
                email: 'seth-thiel@hotmail.com',
                address: '894 Wallace Roads',
                country: 'Luxembourg',
                state: 'Nebraska',
                city: 'Port Joyce',
                zipCode: '75832-4568',
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
        this.axios.get('company/' + this.$route.params.id),
        this.axios.get('country/list'),
      ]).then( this.axios.spread((companies, countries) => {
        console.log(companies)
        app.companies = companies.data.payload
        app.countries = countries.data.payload.items
        this.editImage = this.companies.contact.logo_file_uuid
      })).catch(error => {
        console.log(error)
      })
    },
    components:{
      modal,
      NavigationComponent,
    },
    methods:{
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        },
        edit(){
          var app = this
          var updateData = {
            company_name: this.companies.company_name,
            credit: this.companies.credit,
            contact:{
              phone: this.companies.contact.phone,
              email: this.companies.contact.email,
              address: this.companies.contact.address,
              country_uuid: this.companies.contact.country_uuid,
              passwd: this.companies.contact.passwd,
              state: this.companies.contact.state,
              city: this.companies.contact.city,
              zipcode: this.companies.contact.zipcode,
              logo_file_uuid: this.companies.contact.logo_file_uuid,
            }
          }
          this.axios.patch('company/' + this.$route.params.id, updateData).then( res => {
              this.$router.push({ name: 'Companies', params: { successMsg: 'OK' }})
          }).catch( err => {
              var app = this

              // app.errorMsg = err.response.data.error.message
              app.error = true
              console.log(err.response)
          })
        },
        onFileChanged(event){
          this.selectedFile = event.target.files[0]
          var sendData = new FormData()

          sendData.append('file', this.selectedFile)
          sendData.append('belongs_to', 'user.logo')
          sendData.append('public', true)

          this.axios.post('file', sendData).then(res => {
          this.companies.contact.logo_file_uuid = res.data.object_uuid
          console.log(res)
          }).catch(err => {
            console.log(err)
          })
        },
        getLogo(value){
          var logo = "http://88.198.219.62/api_smsc/v1/file/" + value
          return logo
        }
    },
}
</script>
