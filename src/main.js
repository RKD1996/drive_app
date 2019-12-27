import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.config.productionTip = false

var config = {
    apiKey: "AIzaSyDw2MYn4KMjIgLqlwoWhLuybdFF6nAbWfI",
    authDomain: "test-e2bde.firebaseapp.com",
    databaseURL: "https://test-e2bde.firebaseio.com",
    projectId: "test-e2bde",
    storageBucket: "test-e2bde.appspot.com",
    messagingSenderId: "668845510040",
    appId: "1:668845510040:web:c056e9dade4d03ceb46fed"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
