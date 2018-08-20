<template>
    <div class="container">
        <div class="row">
            <div class="register-logo">
                <img src="@/assets/logo.png">
            </div>
            <div class="register">
                <div class="content">
                    <h1>Sign up</h1>
                    <div v-if="error">
                        <h5 style="color: red; text-align: center;">{{ errorMsg }}</h5>
                    </div>
                    <form v-on:submit="register()">
                      <div class="row">
                        <div class="col-md-6">
                          <label>First Name</label>
                          <input required class="input-first-name" type="text" v-model="user.contact.name" placeholder="Enter first name">
                          <label>Company Name</label>
                          <input required class="input-company-name" type="text" v-model="user.company_name" placeholder="Enter company name">
                          <label>Phone Number</label>
                          <input required class="input-phone-number" type="text" v-model="user.contact.phone" placeholder="Enter phone number">
                        </div>
                        <div class="col-md-6">
                          <label>Second Name</label>
                          <input required class="input-second-name" type="text" v-model="user.secondName" placeholder="Enter second name">
                          <label>Email</label>
                          <input required class="input-register-email" type="text" v-model="user.contact.email" placeholder="elyse_sauer@yahoo.com">
                          <label>Address</label>
                          <input required class="input-address" type="text" v-model="user.contact.address" placeholder="Enter address">
                        </div>
                        <div class="col-md-12">
                          <div class="label-contact-person">Contact Person</div>
                          <input required class="input-contact-person" type="text" v-model="user.contactPerson" placeholder="Enter contact person">
                        </div>
                        <div class="col-md-3">
                          <label>Country</label>
                          <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Country" class="country" v-model="user.contact.country_uuid">
                            <option v-for="country in countries" :value="country.country_uuid">{{ country.name }}</option>
                          </select>
                        </div>
                        <div class="col-md-3">
                          <label id="state">State</label>
                          <input required class="state" type="text" v-model="user.contact.state" placeholder="Enter state">
                        </div>
                        <div class="col-md-3">
                          <label>City</label>
                          <input required class="input-city" type="text" v-model="user.contact.city" placeholder="Enter city">
                        </div>
                        <div class="col-md-3">
                          <label>Zip Code</label>
                          <input required class="input-zipCode" type="text" v-model="user.contact.zipcode" placeholder="Enter zip code">
                        </div>
                        <div class="col-md-6">
                          <label>Password</label>
                          <input required class="input-register-password" type="password" v-model="user.contact.passwd" placeholder="********">
                        </div>
                        <div class="col-md-6">
                          <label>Re-enter Password</label>
                          <input required class="input-repassword" type="password" v-model="user.passwd2" placeholder="********">
                        </div>
                      </div>
                        <button id="register" type="submit">Sign up</button>
                        <div class="no-account">
                            Have an account? <router-link :to="{ name: 'Login'}">Log in</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            countries: [],
            user:{
                // company_url: '',
                contact: {
                    email: '',
                    state: '',
                    // logo_file_uuid: '1',
                    passwd: '',
                    zipcode: '',
                    name: '',
                    address: '',
                    city: '',
                    phone: '',
                    country_uuid: ''
                },
                company_name: '',
            },
            error: false,
            errorMsg: '',
        }
    },
    methods:{
        register(){
          var app = this
          event.preventDefault()
          if (this.user.contact.passwd == this.user.passwd2 && this.user.contact.passwd.length > 5){
            this.axios.post('registration/create', app.user).then( res => {
                this.$router.push({ name: 'Login', params: { successMsg: 'OK' }})
            }).catch( err => {
                var app = this

                app.errorMsg = err.response.data.error.message
                app.error = true
                console.log(err.response)
            })
          }
          else{
            if(app.user.contact.passwd != app.user.passwd2){
              app.errorMsg = "Password and re-password must match!"
            }
            if(app.user.contact.passwd.length < 6){
              app.errorMsg = "Password too short. Minimum length: 6"
            }
            app.error = true
          }
        }
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
    .col-md-6{
      width: 45.83%;
    }
    .col-md-12{
      width: 96%;
    }
    .col-md-3{
      width: 20.8%;
    }
    .register-logo{
        text-align: center;
        margin-top: 45px;
    }
    .register{
        width: 810px;
        border-radius: 4px;
        background-color: #FFFFFF;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
        margin: auto;
        margin-top: 75px;
    }
    .content{
        padding: 60px;
    }
    input[type="text"], input[type="password"]{
      border: 1px solid #EDEEF3;
      border-radius: 4px;
      background-color: #FFFFFF;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-repeat: no-repeat;
      background-position-x: 5px;
      background-position-y: 5px;
      color: #55616E;
      font-family: "Helvetica Neue";
      font-size: 14px;
      line-height: 25px;
    }
    .input-first-name, .input-second-name, .input-company-name, .input-phone-number, .input-register-email, .input-address, .input-register-password, .input-repassword{
      width: calc(100% - 15px);
      height: 40px !important;
      margin-bottom: 20px;
      margin-top: 5px;
      padding-left: 15px;
    }

    .input-contact-person{
      width: calc(50% - 30px);
      height: 40px !important;
      margin-bottom: 20px;
      margin-top: 5px;
      padding-left: 15px;
    }

    .label-contact-person{
      width: 600px;
      color: #000000;
      font-family: "Circular Std Book";
      font-size: 12px;
      font-weight: 300;
      letter-spacing: 0.21px;
      line-height: 15px;
      text-transform: uppercase;
    }

    .input-city{
        width: 165px !important;
        height: 40px !important;
        border: 1px solid #EDEEF3;
        border-radius: 4px;
        background-color: #FFFFFF;
        padding: 10px 15px;
        font-size: 14px;
        line-height: 25px;
    	font-family: "Helvetica Neue";
    	color: #55616E;
        margin-bottom: 20px;
        margin-top: 5px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .input-zipCode{
        width: 155px !important;
        height: 40px !important;
        border: 1px solid #EDEEF3;
        border-radius: 4px;
        background-color: #FFFFFF;
        padding: 10px 15px;
        font-size: 14px;
        line-height: 25px;
    	font-family: "Helvetica Neue";
    	color: #55616E;
        margin-bottom: 20px;
        margin-top: 5px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .country{
        width: 175px !important;
        height: 40px !important;
        border: 1px solid #EDEEF3;
        border-radius: 4px;
        background-color: #FFFFFF;
        padding: 10px 15px;
        font-size: 14px;
        line-height: 25px;
    	  font-family: "Helvetica Neue";
    	  color: #55616E;
        margin-bottom: 20px;
        margin-top: 5px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .state{
        width: 145px !important;
        height: 40px !important;
        border: 1px solid #EDEEF3;
        border-radius: 4px;
        background-color: #FFFFFF;
        padding: 10px 15px;
        font-size: 14px;
        line-height: 25px;
    	  font-family: "Helvetica Neue";
    	  color: #55616E;
        margin-bottom: 20px;
        margin-top: 5px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin-left: 10px;
    }
    label{
    	color: #000000;	font-family: "Circular Std Book";
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 0.21px;
        line-height: 15px;
        text-transform: uppercase;
    }
    label#state{
      margin-left: 10px;
    }
    button#register{
        height: 40px;
        width: 90px;
        border-radius: 4px;
        background-color: #51A3F3;
        color: #FFFFFF;
        font-family: "Helvetica Neue";
        font-size: 15px;
        font-weight: 300;
        line-height: 30px;
        text-align: center;
        margin-top: 15px;
    }
    .no-account{
        float: right;
        color: #55616E;
        font-family: "Helvetica Neue";
        font-size: 16px;
        line-height: 20px;
        margin-top: 25px;
    }
    .no-account a{
        color: #51A3F3;
        font-family: "Helvetica Neue";
        font-size: 16px;
        line-height: 20px;
        text-decoration: none;
    }
</style>
