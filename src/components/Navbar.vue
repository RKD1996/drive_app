<template>
  <div>
    <div class="navbar">
      <ul class="nav">
        <li class="logo">Beta Drive App</li>
        <li>
          <ul class="nav-menu">
            <li>Create Folder</li>
            <li @click="select('s_file')">File Upload  <input ref="s_file" class="hide" type="file" @change="prevFiles('s_file')" > </li>
            <li @click="select('m_file')">Folder Upload <input ref="m_file" class="hide" type="file" @change="prevFiles('m_file')" multiple></li>
            <li>Drop Zone</li>
          </ul>
        </li>
      </ul>
    </div>
    {{eve}}
  </div>
</template>
<script>
import firebase from 'firebase'
import DB from '../main'

  export default {
    name: 'navbar',
    data () {
      return {
        eve: '',
        items: [],
        date: new Date(),
        location: firebase.storage().ref("test-e2bde.appspot.com")
      };
    },
    methods: {
      select (e) {
        this.$refs[e].click()
        console.log(this.location)
      },
      prevFiles (e) {
        console.log(this.$refs[e].files.length)
        for(let i = 0; i < this.$refs[e].files.length; i++){
          console.log(this.$refs[e].files[i].type)
          this.location.put(this.$refs[e].files[i], {contentType: this.$refs[e].files[i].type}).then( function (res) {
            console.log(res)
          }).catch(function (err) {
            console.log(err.message)
          })
        }
      }
    }
  }
</script>
<style scoped>
ul{
  list-style: none;
}
.navbr {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
  margin: 0;
}
.nav{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0;
  margin: 0;
  position: relative;
  width: 99.8%;
  border: 1px solid #ddd;
}
.nav .logo {
  font-size: 25px;
  width: 20%;
  border: 1px solid #ddd;
  border-bottom: 1px solid #fff;
  padding: 10px;
  text-align: center;
}
.nav .nav-menu{
  position: absolute;
  border-top: 1px solid #fff !important;
  border: 1px solid #ddd;
  width: 20%;
  padding: 10px;
  height: 88.2vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}
.nav .nav-menu li{
  width: 100%;
  text-align: center;
  padding: 20px 0;
}
.hide{
  display: none;
}
</style>
