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
          <div v-on:click="closeModal()" class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div v-on:click="closeModal()" class='back'>
            Back to Companies
          </div>
        </div>
        <div class="modal-body">
          <table class="company-modal-table">
            <tbody>
              <tr>
                <td class="email-type">NOC Email</td>
                <td class="email">angeline.dach@yahoo.com</td>
              </tr>
              <tr>
                <td class="email-type">Rate Email</td>
                <td class="email">drake_bernhard@yahoo.com</td>
              </tr>
              <tr>
                <td class="email-type">Sales Email</td>
                <td class="email">mckenzie.blanca@austyn.biz</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </transition>
</template>
<style>
.company-modal-table{
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
.email-type{
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  width: 255px;
  padding-left: 15px;
  height: 30px;
}
.email{
  color: #212B36;
  font-family: "SF Pro Text";
  font-size: 14px;
  line-height: 20px;
  width: 450px;
  height: 30px;
}
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
width: 720px;
height: 170px;
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
  margin-top: 100px;
  width: 720px;
}
.modal-body {
  margin-top: 0;
  width: 720px;
  border-radius: 4px 4px 0 0;
  background-color: #FFFFFF;
}

.modal-body-2 {
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
