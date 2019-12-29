<template>
  <div class="vf">
    <LD v-if="load"/>
      <h2>{{$router.params.id}}</h2>
      <div class="files">
        <div class="file" v-for="t in allFiles">
          <p> <i class="material-icons file-icon">insert_drive_file</i> <span>{{t.name}}</span><i class="material-icons delete-icon" @click="deleteFile(t)">delete</i></p>
        </div>
      </div>
  </div>
</template>
<script>
import firebase from 'firebase'
import LD from '@/components/loader.vue'

  export default {
    name: 'viewfiles',
    components: {
      LD
    },
    data() {
      return {
        allFiles: [{}],
        load: false,

      }
    },
    methods: {
      getData() {
        let vm = this
        this.load = true
        firebase.storage().ref().child(localStorage.getItem('id')).listAll().then(function (res) {
          vm.allFiles = res.items
          vm.load = false
        }).catch(function (err) {
          console.log(err)
        })
      },
      deleteFile(e) {
        console.log(e)
        let vm = this
        this.load = true
        firebase.storage().ref(e.fullPath).delete().then(function (res) {
          vm.getData()
          vm.load = false
        })
      }
    },
    created() {
      localStorage.setItem('id', this.$router.params.id)
      this.getData()
    }
  }
</script>
<style scoped>
  .vf {
    padding: 10px;
  }
  .file {
      background: white;
      border: 1px solid #ccc;
      padding: 2px 20px;
      margin: 5px;
      text-align: center;
      border-radius: 10px;
  }
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
