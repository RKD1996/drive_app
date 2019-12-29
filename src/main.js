import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.config.productionTip = false

var firebaseConfig = {
   apiKey: "AIzaSyDKo1Cw2Oii6J6LyPspmVz0dTakTut3jd8",
   authDomain: "match-maker-3c0c7.firebaseapp.com",
   databaseURL: "https://match-maker-3c0c7.firebaseio.com",
   projectId: "match-maker-3c0c7",
   storageBucket: "match-maker-3c0c7.appspot.com",
   messagingSenderId: "700032089783",
   appId: "1:700032089783:web:38239e6c46d652e9fe9732"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
