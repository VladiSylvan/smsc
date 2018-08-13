<template>
    <div class="container">
      <reseller-navigation-component title="Users"></reseller-navigation-component>
      <div class="main">
        <div class="res-div">
          <div class="head-title">
            Users
          </div>
        </div>
          <div class="main-header">
            <input class="user-input-search" :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Search.svg') + ')' }" type="text" v-model="user.searchUser" placeholder="Search for user">
            <div class="user-header-title">
              Filter by:
            </div>
            <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Company" class="company" v-model="user.company">
              <option value="Company">Company</option>
            </select>
            <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Choose Company" class="company2" v-model="user.chooseCompany">
              <option value="Choose Company">Choose Company</option>
            </select>
            <router-link :to="{ name: 'ResellerAddUser'}"><button id="users" type="submit">Add User</button></router-link>
          </div>
          <div class="main-container">
            <table class="users-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <th class="users-avatar-th"></th>
                  <th class="users-name-th">Name</th>
                  <th class="users-username-th">Username</th>
                  <th class="users-company-th">Company</th>
                  <th class="users-reseller-th">Reseller</th>
                  <th class="users-start-th">Start from</th>
                  <th class="users-option-th"></th>
                  <th class="users-option-th"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="users-avatar"><div class="user-avatar"></div></td>
                  <td class="users-name">Nellie Ferguson</td>
                  <td class="users-username">nellief</td>
                  <td class="users-company">San Marino</td>
                  <td class="users-reseller">Mason Carroll</td>
                  <td class="users-start">29 Apr 2018</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'ResellerEditUser' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr>
                  <td class="users-avatar"><div class="user-avatar"></div></td>
                  <td class="users-name">Frances Ruiz</td>
                  <td class="users-username">Peanut</td>
                  <td class="users-company">Latvia</td>
                  <td class="users-reseller">Connor Phillips</td>
                  <td class="users-start">20 Feb 2018</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'ResellerEditUser' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr>
                  <td class="users-avatar"><div class="user-avatar"></div></td>
                  <td class="users-name">Keith Gardner</td>
                  <td class="users-username">Samson</td>
                  <td class="users-company">Grenada</td>
                  <td class="users-reseller">Tom Terry</td>
                  <td class="users-start">05 May 2018</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'ResellerEditUser' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr>
                  <td class="users-avatar"><div class="user-avatar"></div></td>
                  <td class="users-name">Abbie Obrien</td>
                  <td class="users-username">Madison</td>
                  <td class="users-company">Pakistan</td>
                  <td class="users-reseller">Martha Duncan</td>
                  <td class="users-start">23 Sep 2018</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'ResellerEditUser' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
                <tr>
                  <td class="users-avatar"><div class="user-avatar"></div></td>
                  <td class="users-name">Willie Neal</td>
                  <td class="users-username">Jack</td>
                  <td class="users-company">India</td>
                  <td class="users-reseller">Ada Beck</td>
                  <td class="users-start">02 Jun 2018</td>
                  <td class="users-option"><div class="product-control-info"><router-link :to="{ name: 'ResellerEditUser' }"><img class="control-box" src="@/assets/Icon/Edit.svg"></router-link></div></td>
                  <td class="users-option"><div class="product-control-info"><img class="control-box" src="@/assets/Icon/Delete.svg"></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
</template>
<script>
import modal from '@/components/modal.vue'
import ResellerNavigationComponent from '@/components/ResellerNavigationComponent'

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
          isModalVisible: false,
                user:{
                system: 'Overall system',
                days: 'Last 30 days',
                company: 'Company',
                chooseCompany: 'Choose Company',
            },

        }
    },
    components:{
      modal,
      ResellerNavigationComponent,
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
        }
    },
}
</script>
<style>
a{
  text-decoration: none;
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
}
.reseller-menu{
	height: 210px;
	width: 228px;
	background-color: #FFFFFF;
	box-shadow: 0 10px 40px 0 rgba(0,0,0,0.1);
  display: inline-block;
  vertical-align: top;
  position: fixed;
  z-index: 1;
  float: right;
  margin-left: -220px;
  margin-top: -35px;
}
.reseller-menu-link{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  margin-left: 15px;
  margin-right: 15px;
}
.reseller-menu-link:first-child{
  margin-top: 35px;
}
.reseller-span{
  padding-top: 10px;
  padding-left: 15px;
}
.reseller-menu-add{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  background-color: #F8F9FE;
}
.reseller-menu-button{
  float: right;
  display: inline-block;
  margin-top: -5px;
  margin-right: -7px;
}
.users-table{
  border: none;
  max-width: calc(100% - 10px);
  width: 100%;
  margin-top: 20px;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 16px;
  text-align: left;
}
.user-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
}
.users-avatar-th{
  width: 45px;
  padding-left: 8px;
  height: 37px;
}
.users-name-th{
  width: 204px;
  height: 37px;
}
.users-username-th{
  width: 169px;
  height: 37px;
}
.users-company-th{
  width: 182px;
  height: 37px;
}
.users-reseller-th{
  width: 190px;
  height: 37px;
}
.users-start-th{
  width: 200px;
  height: 37px;
}
.users-option-th{
  width: 54px;
  height: 37px;
}


.users-avatar{
  width: 45px;
  padding-left: 8px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.users-name{
  width: 204px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.users-username{
  width: 169px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.users-company{
  width: 182px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.users-reseller{
  width: 190px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.users-start{
  width: 200px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.users-option{
  width: 54px;
  height: 44px;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #F0F1FA;
}
.product-control-info{
  width: 30px;
  height: 30px;
  float: left;
  margin-top: -10px;
  margin-left: 15px;
}
.user-header-title{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  float: left;
  margin-left: 20px;
  display: inline-block;
  margin-top: 30px;
}
.user-input-search{
  max-width: 26.3636363636%;
  width: 100%;
  height: 40px !important;
  padding-left: 40px;
  margin-left: 20px;
  margin-top: 20px;
  float: left;
}
button#users{
  	height: 40px;
    max-width: 11.8181818182%;
    width: 100%;
    border-radius: 4px;
    background-color: #51A3F3;
    border-radius: 4px;
    color: #fff;
    font-family: "Helvetica Neue";
    font-size: 15px;
    font-weight: 300;
    line-height: 30px;
    text-align: center;
    margin-top: 20px;
    margin-right: 20px;
    float: right;
}
.main{
  max-width: calc(100% - 300px);
  width: 100%;
  display: inline-block;
  vertical-align: top;
  float: left;
}
.main-container{
  float: left;
  display: inline-block;
  width: calc(100% - 30px);
  margin-left: 20px;
  margin-right: 20px;
}
.side#active svg g{
  fill: white;
}
.company{
    max-width: 13.6363636364%;
    width: 100%;
    height: 40px !important;
    border: 1px solid #EDEEF3;
    border-radius: 4px;
    background-color: #FFFFFF;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 25px;
    font-family: "Helvetica Neue";
    color: #55616E;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    float: left;
    margin-top: 20px;
    margin-left: 10px;
}
.company2{
    max-width: 16.3636363636%;
    width: 100%;
    height: 40px !important;
    border: 1px solid #EDEEF3;
    border-radius: 4px;
    background-color: #FFFFFF;
    padding: 10px 15px;
    font-size: 14px;
    line-height: 25px;
    font-family: "Helvetica Neue";
    color: #55616E;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    float: left;
    margin-top: 20px;
    margin-left: 10px;
}
.side-link{
  	height: 20px;
    width: 220px;
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 20px;
    display: inline-block;
    margin-top: 10px;
}
.side-link#active{
  	color: #FFFFFF;
}
ul{
	height: 100vh;
	max-width: 300px;
  width: 100%;
	background-color: #F0F1FA;
  display: inline-block;
  float: left;
  margin: 0;
  padding: 0;
}
li a{
  text-decoration: none;
  color: #55616E;
  cursor: pointer;
}
.sidebar-hide {
	height: 100vh;
	width: 60px;
	background-color: #F0F1FA;
  display: inline-block;
  float: left;
  margin-right: 75px;
}
li{
  height: 40px;
  width: 100%;
  color: #55616E;
  display: inline-block;
  cursor: pointer;
}
.side-hide{
  height: 40px;
  width: 60px;
  color: #55616E;
  display: inline-block;
}
.side-hide#active{
	border-radius: 0 4px 4px 0;
	background: linear-gradient(135deg, #51A3F3 0%, #51B5F3 100%);
  color: #FFFFFF;
  fill: #FFFFFF;
}
li#active{
	border-radius: 0 4px 4px 0;
	background: linear-gradient(135deg, #51A3F3 0%, #51B5F3 100%);
  color: #FFFFFF;
  fill: #FFFFFF;
}
li:first-child{
  margin-top: 10px;
}
.image-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 10px;
}
.control-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
}
.side-title{
  	height: 30px;
    width: 270px;
    color: #BDBFD8;
    font-family: "Circular Std";
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 30px;
    display: inline-block;
    text-transform: uppercase;
    margin-left: 15px;
    margin-top: 21px;
}
.navigation{
  max-width: 100%;
  height: 60px;
  background-color: #FFFFFF;
}
.navi-logo{
  max-width: 300px;
  display: inline-block;
  width: 100%;
}
.navi-circle-open{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: none;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  margin-right: 10px;
  transform: rotate(180deg);
}
.navi-circle-open-menu{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  margin-right: 10px;
  transform: rotate(180deg);
}
.navi-circle-close{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  margin-right: 10px;
}
.navi-head{
  max-width: 560px;
  display: inline-block;
  width: auto;
}
.head-title{
    display: inline-block;
    vertical-align: top;
    vertical-align: top;
    color: #55616E;
    font-family: "Circular Std";
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    margin-left: 15px;
    margin-top: 15px;
    margin-right: 32px;
}
.logo{
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-right: 20px;
}
.logo-small{
  display: none;
  vertical-align: top;
  margin-top: 15px;
  margin-right: 20px;
}
@media only screen and (max-width: 1200px) {
    .navi-head{
      display: none;
    }
    .navi-logo{
      max-width: 40.8333333333%;
      width: 100%;
    }
    .user-input-search{
      max-width: calc(100% - 80px);
    }
    .company, .company2{
      max-width: 30%;
      width: 100%;
    }
}
@media only screen and (max-width: 990px) {
    .logo{
      display: none;
    }
    .logo-small{
      display: inline-block;
    }
    .navi-logo{
      max-width: 38.8333333333%;
      width: 100%;
    }
    .navi-circle-open{
      display: inline-block;
    }
    .navi-circle-close{
      display: none;
    }
    ul, .sidebar-hide{
      display: none;
    }
    .main{
      max-width: 100%;
    }
}
</style>
