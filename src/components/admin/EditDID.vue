<template>
    <div class="container">
      <navigation-component title="DID"></navigation-component>
      <div class="main-add">
        <div class="res-div">
          <div class="head-title">
            DID
          </div>
        </div>
        <router-link :to="{ name: 'DID'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to DID
          </div>
        </router-link>
        <router-link :to="{ name: 'EditDID'}"><button v-on:click="edit()" id="product" type="submit">Save DID</button></router-link>
        <router-link :to="{ name: 'DID'}"><button id="cancel" type="submit">Cancel</button></router-link>
        <div class="add-did">
          <div class="did-main">
            <div class="did-add-title">
              Edit DID
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Phone Number
              </div>
              <input class="grid-input" type="text" v-model="dids.number" placeholder="640-463-3807">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Location
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Location" class="grid-select" v-model="dids.country_uuid">
                <option v-for="country in countries" :value="country.country_uuid">{{ country.name }}</option>
              </select>
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Billing Rule
              </div>
              <div class="grid-5">
                <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Rule" class="grid-select" v-model="user.billingRule">
                  <option value="$1.00">$1.00</option>
                </select>
              </div>
              <div class="grid-5-second">
                <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Rule Time" class="grid-select" v-model="user.billingRuleTime">
                  <option value="per month">per month</option>
                </select>
              </div>
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Company
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Company" class="grid-select" v-model="dids.company_uuid">
                <option v-for="company in companies" :value="company.company_uuid">{{ company.company_name }}</option>
              </select>
            </div>
          </div>
          <div class="vendor-second">
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
          countries: [],
          companies: [],
          dids:{
            auto_resp_uuid: '',
            company_uuid: '',
            max_sms_per_hour: 0,
            country_uuid: '',
            vendor_uuid: '',
            max_sms_per_day: 0,
            number: '',
            type: 'Local',
          },
                user:{
                location: 'North Malcolm',
                billingRule: '$1.00',
                billingRuleTime: 'per month',
                company: 'Appolo Inc.'
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
    methods:{
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        },
        edit(){
          var app = this
          event.preventDefault();
          var updateData = {
            company_uuid: this.dids.company_uuid,
            max_sms_per_hour: 0,
            country_uuid: this.dids.country_uuid,
            max_sms_per_day: 0,
            number: this.dids.number,
            type: 'Local',
          }
          this.axios.patch('did/' + this.$route.params.id, updateData).then( res => {
              this.$router.push('/sys/did')
          }).catch( err => {
              var app = this

              // app.errorMsg = err.response.data.error.message
              app.error = true
              console.log(err.response)
          })
        }
    },
    mounted(){
      var app = this
      this.axios.all([
        this.axios.get('did/' + this.$route.params.id),
        this.axios.get('country/list'),
        this.axios.get('company/list'),
      ]).then( this.axios.spread((dids, countries, companies) => {
        console.log(dids)
        console.log(countries)
        console.log(companies)
        app.dids = dids.data.payload
        app.countries = countries.data.payload.items
        app.companies = companies.data.payload.items
      })).catch(error => {
        console.log(error)
      })
    },
}
</script>
<style>
.upload-circle{
  box-sizing: border-box;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #F0F1FA;
  margin: 5px;
}
.upload-image{
  border: 1px dashed #5171F3;
  border-radius: 50%;
  height: 90px;
  width: 90px;
  text-align: center;
  float: left;
  display: inline-block;
  margin-right: 15px;
}
.upload-edit{
  background-color: #FFFFFF;
  height: 220px;
}
.upload-container{
  float: left;
  display: inline-block;
  height: 90px;
  margin-top: 15px;
}
.upload-title-edit{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  text-align: center;
}
.upload-button-edit{
  border-radius: 4px;
  background-color: #51A3F3;
  color: #FFFFFF;
  font-family: "Helvetica Neue";
  font-size: 15px;
  font-weight: 500;
  line-height: 30px;
  height: 36px;
  width: 136px;
}
.did-add-title{
  color: #000000;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin: 15px;
}
.product-input-name{
  color: #000000;
  font-family: "Circular Std";
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.21px;
  line-height: 15px;
  text-transform: uppercase;
  margin-bottom: 5px;
  padding-top: 10px;
}
.main-add{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
@media only screen and (max-width: 750px) {
    .main-add{
      max-width: 100%;
    }
}
</style>
