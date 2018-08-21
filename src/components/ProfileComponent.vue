<template>
  <div class="navi-user">
    <div v-if="popup" class="user-menu">
      <div v-on:click="popup = !popup" class="username">
        {{ UserName }}
      </div>
      <div v-on:click="popup = !popup" class="user-circle"><span id="avatar">A</span></div>
      <img class="popup-image-box" src="@/assets/Icon/Users.svg">
      <span class="popup-link">Profile</span>
      <img class="popup-image-box" src="@/assets/Icon/Settings.svg">
      <span class="popup-link">Settings</span>
      <div class="popup-title">
        Switch to
      </div>
      <img class="popup-image-box" src="@/assets/Icon/Dashboard.svg">
      <router-link :to="{ name: 'Dashboard' }">
        <span class="popup-link">System Admin</span>
      </router-link>
      <img class="popup-image-box" src="@/assets/Icon/Reseller.svg">
      <router-link :to="{ name: 'Profile' }">
        <span class="popup-link">Reseller Portal</span>
      </router-link>
      <img class="popup-image-box" src="@/assets/Icon/Companies.svg">
      <router-link :to="{ name: 'Alert' }">
        <span class="popup-link">Appolo Inc.</span>
      </router-link>
      <div class="popup-logout">
        <img class="popup-image-box" src="@/assets/Icon/Arrow/Right.svg">
        <router-link :to="{ name: 'Login' }">
          <span class="popup-link">Log out</span>
        </router-link>
      </div>
    </div>
    <div v-on:click="popup = !popup" class="username">
      {{ UserName }}
    </div>
    <div v-on:click="popup = !popup" class="user-circle"><span id="avatar">A</span></div>
  </div>
</template>
<script>
export default {
    data () {
      return {
        popup: false,
        UserName: 'Linnie Weaver',
      }
    }
}
</script>
<style>
.navi-user{
  max-width: 240px;
  float: right;
  display: inline-block;
  width: auto;
}
.user-menu{
	height: auto;
	width: 228px;
	background-color: #FFFFFF;
	box-shadow: 0 10px 40px 0 rgba(0,0,0,0.1);
  vertical-align: top;
  position: fixed;
  z-index: 999999;
  float: right;
}
@-moz-document url-prefix() {
  h1 {
    color: red;
  }
}
.username{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 15px;
  line-height: 20px;
  text-align: left;
  margin-top: 20px;
  float: left;
  margin-left: 88px;
  cursor: pointer;
}
.user-circle{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-left: 10px;
  margin-bottom: 15px;
  margin-right: 10px;
  float: left;
  cursor: pointer;
}
@-moz-document url-prefix() {
  .username{
    color: #55616E;
    font-family: "Helvetica Neue";
    font-size: 15px;
    line-height: 20px;
    text-align: left;
    margin-top: 20px;
    float: left;
    margin-left: 63px;
    cursor: pointer;
  }
}
#avatar{
  	font-family: "Helvetica Neue";
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 15px;
    text-align: center;
    margin-left: 11px;
    margin-top: 7px;
    display: inline-block;
}
.popup-image-box{
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: top;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 10px;
}
#popup-link{
  	height: 20px;
    width: 158px;
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 20px;
    display: inline-block;
    margin-top: 15px;
    cursor: pointer;
}
#popup-link-active{
  	height: 20px;
    width: 158px;
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 20px;
    display: inline-block;
    margin-top: 15px;
    color: #51A3F3;
}
.popup-title{
  	height: 30px;
    width: 198px;
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
.popup-logout{
  display: inline-block;
  vertical-align: top;
  margin-top: 15px;
  margin-bottom: 15px;
}
@media only screen and (max-width: 390px) {
    .username{
      display: none;
    }
}
</style>
