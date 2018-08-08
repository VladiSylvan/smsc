<template>
    <div class="container">
        <div class="row">
            <div class="register-logo">
                <img src="@/assets/logo.png">
            </div>
            <div class="register">
                <div class="content">
                    <h1>Sign up</h1>
                    <form v-on:submit="register()">
                      <div class="row">
                        <div class="col-md-6">
                          <label>First Name</label>
                          <input required class="input-first-name" type="text" v-model="user.firstName" placeholder="Enter first name">
                          <label>Company Name</label>
                          <input required class="input-company-name" type="text" v-model="user.companyName" placeholder="Enter company name">
                          <label>Phone Number</label>
                          <input required class="input-phone-number" type="text" v-model="user.phoneNumber" placeholder="Enter phone number">
                        </div>
                        <div class="col-md-6">
                          <label>Second Name</label>
                          <input required class="input-second-name" type="text" v-model="user.secondName" placeholder="Enter second name">
                          <label>Email</label>
                          <input required class="input-register-email" type="text" v-model="user.email" placeholder="elyse_sauer@yahoo.com">
                          <label>Address</label>
                          <input required class="input-address" type="text" v-model="user.address" placeholder="Enter address">
                        </div>
                        <div class="col-md-12">
                          <div class="label-contact-person">Contact Person</div>
                          <input required class="input-contact-person" type="text" v-model="user.contactPerson" placeholder="Enter contact person">
                        </div>
                        <div class="col-md-3">
                          <label>Country</label>
                          <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Country" class="country" v-model="user.country">
                            <option value="Luxembourg">Luxembourg</option>
                          </select>
                        </div>
                        <div class="col-md-3">
                          <label id="state">State</label>
                          <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="State" class="state" v-model="user.state">
                            <option value="Nebraska">Nebraska</option>
                          </select>
                        </div>
                        <div class="col-md-3">
                          <label>City</label>
                          <input required class="input-city" type="text" v-model="user.city" placeholder="Enter city">
                        </div>
                        <div class="col-md-3">
                          <label>Zip Code</label>
                          <input required class="input-zipCode" type="text" v-model="user.zipCode" placeholder="Enter zip code">
                        </div>
                        <div class="col-md-6">
                          <label>Password</label>
                          <input required class="input-register-password" type="text" v-model="user.password" placeholder="********">
                        </div>
                        <div class="col-md-6">
                          <label>Re-enter Password</label>
                          <input required class="input-repassword" type="text" v-model="user.rePassword" placeholder="********">
                        </div>
                      </div>
                        <button type="submit">Sign up</button>
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
                user:{
                firstName: '',
                secondName: '',
                companyName: '',
                email: '',
                phoneNumber: '',
                address: '',
                country: 'Luxembourg',
                state: 'Nebraska',
                city: '',
                zipCode: '',
                password: '',
                rePassword: ''
            },
            error: false,
            errorMsg: '',
        }
    },
    methods:{
        register(){
          var app = this

          this.axios.post('registration/create', app.user).then( res => {
              this.$router.push('/login')
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
    select{
      -webkit-appearance: none;
      -moz-appearance: none;
      background: transparent;
      background-repeat: no-repeat;
      background-position-x: 100%;
      background-position-y: 5px;
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
    h1{
        color: #000000;
        font-family: "Circular Std Medium";
        font-size: 24px;
        font-weight: bold;
        line-height: 24px;
        text-align: center;
        margin-bottom: 30px;
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
    button{
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
