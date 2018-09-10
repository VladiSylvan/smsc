<template>
  <div>
    <form @submit.prevent="lol" enctype="multipart/form-data">
      <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      <button type="submit">Upload</button>
    </form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        myForm: {
          file: '',
          belongs_to: 'user.logo'
        }
      }
    },
    mounted(){
      console.log(localStorage.getItem('token'))

    },
    methods:{
      // sendForm(){
      //   console.log(this.myForm)
      //   this.axios.post('/file', this.myForm).then(res =>{
      //       console.log(res);
      //   }).catch(err => {
      //       console.log(err);
      //   });
      // },
      lol(){
        var instance = axios.create()
        instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';


        var formData = new FormData()

        formData.set('file', this.$refs.file.files[0], this.$refs.file.files[0].name)
        formData.set('belongs_to', 'user.logo')

        console.log(this.myForm)

        var config = { headers: { 'content-type': 'multipart/form-data' } }

        instance.post('file', formData, config).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })

      },
      // lol(){
      //   var instance = this.axios.create({
      //     headers: {
      //       common:{
      //         'Content-Type': 'multipart/form-data'
      //       }
      //     }
      //   });
      //   // instance.defaults.headers.common['Content-Type']['Accept'] = 'multipart/form-data';
      //   // instance['headers']['common']['Accept'] = 'multipart/form-data';
      //
      //   let formData = new FormData();
      //
      //   formData.append('belongs_to', 'user.logo');
      //   formData.append('file', this.myForm.file, {contentType: 'multipart/form-data'});
      //
      //
      //   const config = {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //       'X-Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxNzg0NDMsInVzZXJfaWQiOjF9.XD2t_6xo2qZy9hHebgJBxekfaQIEi4fzyvLq97IxC90'
      //     }
      //   }
      //
      //   instance.post('file', formData).then(res => {
      //     console.log(res)
      //   }).catch(err => {
      //     console.log(err)
      //   })
      //
      // },
      // sendForm(){
      //   const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      //   let formData = new FormData();
      //
      //     formData.append('file', this.myForm.file);
      //     formData.append('belongs_to', 'user.logo');
      //     this.axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
      //     this.axios.post('file', formData, config).then(res => {
      //       console.log(res)
      //     }).catch(err => {
      //       console.log(err)
      //     })
      // },
      handleFileUpload(){
        this.myForm.file = this.$refs.file.files[0];
      }
    }
  }
</script>
