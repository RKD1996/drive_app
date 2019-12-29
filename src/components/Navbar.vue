<template>
  <div>
    <div class="navbar">
      <LD v-if="load"/>
      <ul class="nav">
        <li class="logo">Beta Drive App</li>
        <li>
          <ul class="nav-menu">
            <li @click="select('s_file')">File Upload  <input ref="s_file" class="hide" type="file" @change="prevFiles('s_file')" multiple> </li>
            <li @click="select('m_file')">Folder Upload <input ref="m_file" class="hide" type="file" @change="prevFiles('m_file')" webkitdirectory mozdirectory msdirectory odirectory directory ></li>
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
import LD from '@/components/loader.vue'

  export default {
    name: 'navbar',
    components: {
      LD
    },
    data () {
      return {
        eve: '',
        items: [],
        date: new Date(),
        location: firebase.storage().ref('match-maker-3c0c7.appspot.com'),
        load: false
      };
    },
    methods: {
      select (e) {
        this.$refs[e].click()
      },
      prevFiles (e) {
        let vm = this
        let nav = vm.$router.go()
          this.load = true
        if (e == 'm_file') {
          for(let i = 0; i < this.$refs[e].files.length; i++){
            firebase.storage().ref().child(this.$refs[e].files[0].webkitRelativePath.split('/')[0] + '/' + this.$refs[e].files[i].name).put(this.$refs[e].files[i], {contentType: this.$refs[e].files[i].type}).then( function (res) {
              nav
              vm.load = false
            }).catch(function (err) {
              console.log(err.message)
            })
          }
        } else{
          for(let i = 0; i < this.$refs[e].files.length; i++){
            firebase.storage().ref().child('/' + this.$refs[e].files[i].name).put(this.$refs[e].files[i], {contentType: this.$refs[e].files[i].type}).then( function (res) {
              nav
              vm.load = false
            }).catch(function (err) {
              console.log(err.message)
            })
          }
        }
      }
    }
  }
</script>
<style scoped>
ul{
  list-style: none;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  z-index: 100;
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
  background: #126FCC;
}
.nav .logo {
  font-size: 35px;
  width: 20%;
  border: 1px solid #ddd;
  border-bottom: 1px solid #fff;
  padding: 10px;
  text-align: center;
  background: white;
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
  width: 70%;
      text-align: center;
      padding: 15px 0;
      background: #ddd;
    border-radius: 25px;
    margin-top: 10px;
    background: #126FCC;
    cursor: pointer;
    color: white;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    transition: .3s;
}
.nav .nav-menu li:hover{
  box-shadow: 0 0 8px rgba(0,0,0,0.6);
}
.hide{
  display: none;
}
</style>
