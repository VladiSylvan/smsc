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
  <transition name="template-modal">
    <div class="template-modal-mask">
      <div class="template-modal-container">
        <div class="template-modal-header">
          <div v-on:click="closeModal()" class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div v-on:click="closeModal()" class='back'>
            Back to Templates
          </div>
        </div>
        <div class="template-modal-body">
          <table class="template-modal-table">
            <tbody>
              <tr class="template-modal-tr">
                <td class="template-modal-title">Template Name</td>
                <td class="template-modal-text">Parkerport</td>
              </tr>
              <tr class="template-modal-tr">
                <td class="template-modal-title">Created On</td>
                <td class="template-modal-text">10-03-2018</td>
              </tr>
              <tr class="template-modal-tr">
                <td class="template-modal-title">Created By</td>
                <td class="template-modal-text">
                  <div class="template-modal-avatar"></div>
                  <div class="template-modal-name-fix">San Marino</div>
                </td>
              </tr>
              <tr class="template-modal-tr">
                <td class="template-modal-title">SMS Text</td>
                <td class="template-modal-sms-text">
                  In the last five to six years the FTA satellite receiver has become an everyday
                  household electronic device.
                </td>
              </tr>
              <tr class="template-modal-tr">
                <td class="template-modal-title">Replacible portion</td>
                <td class="template-modal-text">
                  <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" class="template-modal-select">
                    <option value="Text & Numbers">Text & Numbers</option>
                  </select>
                  <input class="template-modal-input" type="text" placeholder="12-36-12">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </transition>
</template>
<style>
.template-modal-select{
  width: calc(180px);
  border: 1px solid #EDEEF3;
  border-radius: 4px;
  background-color: #FFFFFF;
  height: 40px;
  float: left;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
}
.template-modal-input{
  width: calc(295px - 13px);
  height: calc(40px - 4px);
  padding-left: 10px;
  float: left;
  display: inline-block;
}
input[type="text"]{
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
select{
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
}
.template-modal-tr{
  height: 45px;
}
.template-modal-name-fix{
  display: inline-block;
  vertical-align: top;
  margin-top: 7px;
}
.template-modal-avatar{
  height: 30px;
  width: 30px;
  background-color: #ECEEF0;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.template-modal-table{
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
.template-modal-title{
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  width: 205px;
  padding-left: 15px;
  height: 30px;
}
.template-modal-text{
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 20px;
  width: 500px;
  height: 30px;
}
.template-modal-sms-text{
  color: #55616E;
  font-family: "Helvetica Neue";
  font-size: 14px;
  line-height: 25px;
  width: 450px;
  height: 30px;
}
.svg path{
  fill: #51A3F3;
}
.svg-back{
  float: left;
  display: inline-block;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 5px;
  padding-bottom: 1px;
  cursor: pointer;
}
.back{
  color: #51A3F3;
  font-family: "Helvetica Neue";
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  float: left;
  display: inline-block;
  margin-top: 25px;
  padding-bottom: 15px;
  cursor: pointer;
}
.template-modal-mask {
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
.template-modal-container {
width: 720px;
height: 170px;
margin: 0px auto;
background-color: #fff;
border-radius: 2px;
transition: all .3s ease;
font-family: Helvetica, Arial, sans-serif;
}

.template-modal-vendors-info{
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

.template-modal-header{
  margin-top: 100px;
  width: 720px;
}
.template-modal-body {
  margin-top: 0;
  width: 720px;
  border-radius: 4px 4px 0 0;
  background-color: #FFFFFF;
}

.template-modal-body-2 {
  margin-top: 0;
  height: 69px;
  width: 720px;
  border-radius: 4px 4px 0 0;
  background-color: #FFFFFF;
  box-shadow: inset 0 -1px 0 0 #DFE3E8;
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 20px;
}

.template-modal-default-button {
float: right;
}

.template-modal-enter {
opacity: 0;
}

.template-modal-leave-active {
opacity: 0;
}

.template-modal-enter .template-modal-container,
.template-modal-leave-active .template-modal-container {
-webkit-transform: scale(1.1);
transform: scale(1.1);
}
</style>
