<template>
  <div class="all">
    <LD v-if="load"/>
    <div class="">
      <h2>Folders</h2>
      <hr>
      <div class="folders">
        <div class="folder" v-for="f in allFolders">
          <a @click="openFolder(f.name)"> <i class="material-icons folder-icon">folder_open</i> {{f.name}} </a>
        </div>
      </div>
      <h2>Files</h2>
      <hr>
      <div class="files">
        <div class="file" v-for="fi in allFiles">
          <a><i class="material-icons file-icon">insert_drive_file</i> <span>{{fi.name}}</span> <i class="material-icons delete-icon" @click="deleteFile(fi)">delete</i></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
import LD from '@/components/loader.vue'

  export default {
    name : 'ai',
    components: {
      LD
    },
    data () {
      return {
        allFolders: [],
        allFiles: [],
        link: '',
        openzone: false,
        load: true
      }
    },
    methods: {
      getAllData () {
        let vm = this
        this.load = true
        firebase.storage().ref().listAll().then(function (res) {
          vm.allFiles = res.items
          vm.allFolders = res.prefixes
          vm.load = false
        }).catch(function (err) {
          console.log(err)
        })
      },
      openFolder (e) {
        console.log(e)
        this.$router.params = {id: e}
        this.$router.push('/' + e)
      },
      deleteFile(e) {
        console.log(e)
        let vm = this
        this.load = true
        firebase.storage().ref(e.fullPath).delete().then(function (res) {
          vm.getAllData();
          vm.load = false
        })
      },
      openZone () {
        console.log(this.openzone = !this.openzone)
      }
    },
    mounted () {
      this.getAllData()
    },
    created () {
      this.getAllData()
    }
  }
</script>
<style scoped>
  .all{
    padding: 10px;
  }
  .hide{
    display: none;
  }
  .folders {
    display: flex;
    flex-wrap: wrap;
}

.folder, .file {
    background: white;
    border: 1px solid #ccc;
    padding: 2px 20px;
    margin: 5px;
    text-align: center;
    border-radius: 10px;
}

i.material-icons.folder-icon {font-size: 125px;display: block;}

.files {
    display: flex;
    flex-wrap: wrap;
}

.file .file-icon {
  font-size: 15px;
  cursor: pointer;
}

.file span {
  font-size: 15px;
  cursor: pointer;
  text-transform: capitalize;
}

i.material-icons.delete-icon {
    font-size: 15px;
    margin-left: 15px;
    cursor: pointer;
    transition: .3s;
}

.delete-icon:hover {
  color: red;
}

</style>
