<template>
    <div class="container">
      <navigation-component title="Users"></navigation-component>
      <div class="main-add-navi">
        <div class="res-div">
          <div class="head-title">
            Users
          </div>
        </div>
        <router-link :to="{ name: 'Users'}">
          <div class="svg-back">
            <svg class="svg" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M9.82106781,14.25 L23,14.25 L23,16.25 L9.84421387,16.25 L11.6568542,18.0626404 L10.2426407,19.4768539 L7.41842728,16.6526405 L7.41421356,16.6568542
              L7.00735931,16.25 L7,16.25 L7,16.2426407 L6,15.2426407 L6.00421371,15.238427 L6,15.2342133 L7.41421356,13.8199997 L7.41842728,13.8242134 L10.2426407,11
              L11.6568542,12.4142136 L9.82106781,14.25 Z" id="path-1">
              </path>
            </svg>
          </div>
          <div class='back'>
            Back to Users
          </div>
        </router-link>
        <router-link :to="{ name: 'EditUser'}"><button id="product" v-on:click="edit()" type="submit">Save User</button></router-link>
        <router-link :to="{ name: 'Users'}"><button id="cancel" type="submit">Cancel</button></router-link>
      </div>
      <div class="main-add">
        <div class="add-user">
          <div class="user-main">
            <div class="user-add-title">
              Edit User
            </div>
            <div class="grid-4">
              <div class="grid-title">
                First Name
              </div>
              <input class="grid-input" type="text" v-model="users.first_name" placeholder="Caroline">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Last Name
              </div>
              <input class="grid-input" type="text" v-model="users.last_name" placeholder="Thomas">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Username
              </div>
              <input class="grid-input" type="text" v-model="user.username" placeholder="Enter username">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Email
              </div>
              <input class="grid-input" type="text" v-model="users.email" placeholder="Thomas">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Password
              </div>
              <input class="grid-input" type="text" v-model="users.passwd" placeholder="********">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Re-Enter Password
              </div>
              <input class="grid-input" type="text" v-model="users.passwd" placeholder="********">
            </div>
            <div class="grid-4">
              <div class="grid-title">
                Role
              </div>
              <select :style="{ backgroundImage: 'url(' + require('@/assets/Icon/Arrow/Down.svg') + ')' }" name="Role" class="grid-select" v-model="users.rank">
                <option value="">Choose Role</option>
                <option value="VIP">VIP</option>
                <option value="Premium">Premium</option>
                <option value="Default">Default</option>
              </select>
            </div>
          </div>
          <div class="user-second">
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
          selectedFile: null,
          dragging: false,
          vendors: true,
          editImage: '',
          users: {
            first_name: '',
            last_name: '',
            email: '',
            passwd: '',
            rank: '',
          },
                user:{
                firstName: 'Caroline',
                lastName: 'Thomas',
                username: 'cthomas',
                email: 'seth-thiel@hotmail.com',
                password: '********',
                rePassword: '********',
                role: 'Choose Role',
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
    mounted(){
      var app = this
      this.axios.all([
        this.axios.get('user/' + this.$route.params.id),
      ]).then( this.axios.spread((users) => {
        console.log(users)
        app.users = users.data.payload
        this.editImage = this.users.logo_file_uuid
      })).catch(error => {
        console.log(error)
      })
    },
    methods:{
      edit(){
        var app = this
        if(this.selectedFile == null){
          var updateData = {
            first_name: this.users.first_name,
            last_name: this.users.last_name,
            email: this.users.email,
            passwd: this.users.passwd,
            rank: this.users.rank,
          }
        }
        else{
          var updateData = {
            first_name: this.users.first_name,
            last_name: this.users.last_name,
            email: this.users.email,
            logo_file_uuid: this.users.logo_file_uuid,
            passwd: this.users.passwd,
            rank: this.users.rank,
          }
        }
        this.axios.patch('user/' + this.$route.params.id, updateData).then( res => {
            this.$router.push('/sys/users')
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
        this.users.logo_file_uuid = res.data.object_uuid
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
