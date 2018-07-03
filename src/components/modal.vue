<script>
  export default {
    name: 'modal',
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
</script>
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <div class="modal-title">
            Routing <img v-on:click="closeModal()" class="modal-close" src="@/assets/Icon/Close.svg">
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-info-country">
            Country
          </div>
          <div class="modal-info-operator">
            Operator
          </div>
          <div class="modal-info-sellrate">
            Sell Rate
          </div>
          <div class="modal-info-vendors">
            Vendors
          </div>
        </div>
        <div class="modal-body-2">
          <div class="modal-active"></div>
          <div class="modal-info-country-2">
            China
          </div>
          <div class="modal-info-operator">
            China Mobile
          </div>
          <div class="modal-info-sellrate">
            0.001
          </div>
          <div class="modal-info-vendors">
            <div class="modal-vendors">
              Vendor BB <div class="modal-vendors-info">0.0009</div>
            </div>
            <div class="modal-vendors">
              Vendor CC <div class="modal-vendors-info">0.0008</div>
            </div>
          </div>
        </div>
        <div class="modal-body-2">
          <div class="modal-active"></div>
          <div class="modal-info-country-2">
            China
          </div>
          <div class="modal-info-operator">
            China Unicom
          </div>
          <div class="modal-info-sellrate">
            0.0012
          </div>
          <div class="modal-info-vendors">
            <div class="modal-vendors">
              Vendor BB <div class="modal-vendors-info">0.0009</div>
            </div>
            <div class="modal-vendors">
              Vendor CC <div class="modal-vendors-info">0.0008</div>
            </div>
          </div>
        </div>
        <div class="modal-body-2">
          <div class="modal-not-active"></div>
          <div class="modal-info-country-2">
            United States
          </div>
          <div class="modal-info-operator">
            AT & T
          </div>
          <div class="modal-info-sellrate">
            0.0003
          </div>
          <div class="modal-info-vendors">
            <div class="modal-vendors">
              Vendor BB <div class="modal-vendors-info">0.0009</div>
            </div>
            <div class="modal-vendors">
              Vendor CC <div class="modal-vendors-info">0.0008</div>
            </div>
          </div>
        </div>
        <div class="modal-body-2">
          <div class="modal-active"></div>
          <div class="modal-info-country-2">
            China
          </div>
          <div class="modal-info-operator">
            China Mobile
          </div>
          <div class="modal-info-sellrate">
            0.001
          </div>
          <div class="modal-info-vendors">
            <div class="modal-vendors">
              Vendor BB <div class="modal-vendors-info">0.0009</div><br>
            </div>
            <div class="modal-vendors">
              Vendor CC <div class="modal-vendors-info">0.0008</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style>
.modal-mask {
position: fixed;
z-index: 9998;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, .5);
display: table;
transition: opacity .3s ease;
}
.modal-container {
width: 589px;
height: 334px;
margin: 0px auto;
background-color: #fff;
border-radius: 2px;
transition: all .3s ease;
font-family: Helvetica, Arial, sans-serif;
}

.modal-vendors-info{
  	height: 18px;
    width: 60px;
    border: 1px solid #BDBFD8;
    border-radius: 4px;
    background-color: #FFFFFF;
    color: #55616E;
    font-family: "Circular Std";
    font-size: 11px;
    font-weight: 300;
    line-height: 15px;
    text-align: center;
    display: inline-block;
    float: right;
}

.modal-header{
  margin-top: 0;
  height: 60px;
  width: 589px;
  border-radius: 4px 4px 0 0;
  background-color: #F8F9FE;
  box-shadow: 0 10px 40px 0 rgba(0,0,0,0.1);
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
}
.modal-title{
  margin-top: 100px;
  margin-left: 15px;
  padding-top: 15px;
}

.modal-close{
  float: right;
  margin-right: 15px;
}

.modal-active{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #24E2B8;
  margin-top: 15px;
  float: left;
  margin-left: 8px;
  display: inline-block;
}
.modal-not-active{
  box-sizing: border-box;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #D2305B;
  margin-top: 15px;
  float: left;
  margin-left: 8px;
  display: inline-block;
}

.modal-info-country{
  margin-left: 35px;
  width: 133px;
  padding-top: 11px;
  float: left;
  display: inline-block;
}
.modal-info-country-2{
  margin-left: 13px;
  width: 133px;
  padding-top: 11px;
  float: left;
  display: inline-block;
}

.modal-info-operator{
  width: 150px;
  padding-top: 11px;
  float: left;
  display: inline-block;
}

.modal-info-sellrate{
  width: 121px;
  padding-top: 11px;
  float: left;
  display: inline-block;
}

.modal-info-vendors{
  width: 150px;
  padding-top: 11px;
  float: left;
  display: inline-block;
}

.modal-vendors{
  padding-bottom: 5px;
}

.modal-body {
  margin-top: 0;
  height: 37px;
  width: 589px;
  border-radius: 4px 4px 0 0;
  background-color: #FFFFFF;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
}

.modal-body-2 {
  margin-top: 0;
  height: 69px;
  width: 589px;
  border-radius: 4px 4px 0 0;
  background-color: #FFFFFF;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 20px;
}

.modal-default-button {
float: right;
}

.modal-enter {
opacity: 0;
}

.modal-leave-active {
opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
-webkit-transform: scale(1.1);
transform: scale(1.1);
}
</style>
