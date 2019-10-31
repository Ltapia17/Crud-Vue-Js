import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


var firebase = require("firebase/app");
require("firebase/firestore")

require("firebase/auth");

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "c",
  storageBucket: "",
  messagingSenderId: "",
  appId: "3",
  measurementId: ""
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

  firebaseApp.firestore()
  export default firebaseApp.firestore()

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    console.log(user)
    store.dispatch('detectarUsuario',{email: user.email,uid: user.uid})
  }else{
    store.dispatch('detectarUsuario',null)
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})


