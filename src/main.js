import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from "firebase/app";
import 'firebase/firestore';
import  axios from "axios";
import router from "./router";


Vue.prototype.$axios = axios;
Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyB3fT0qGlX84D2Rl8lXxCjQ2Ix8AkR158E",
  authDomain: "sharedcalendar-14d24.firebaseapp.com",
  projectId: "sharedcalendar-14d24",
  storageBucket: "sharedcalendar-14d24.appspot.com",
  messagingSenderId: "618289406866",
  appId: "1:618289406866:web:e5db437efbdd613b29d74b",
  measurementId: "G-YE1E11YDRB"
});

export const db = firebase.firestore();

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      vuetify,
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});


/*new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')*/

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
