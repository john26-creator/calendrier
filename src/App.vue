<template>
  <div id="app">
  <nav  class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Menu</a>
    <div  class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li v-if="isConnected" class="nav-item active">
          <a class="nav-link" href="/calendar">Calendar</a>
        </li>
        <li v-if="!isConnected" class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
        <li v-if="!isConnected" class="nav-item">
          <a class="nav-link" href="register">Register</a>
        </li>
        <li v-if="isConnected" class="nav-item">
          <button type="button" class="b-icon" @click="disConnect()">Disconnect</button>
        </li>
      </ul>
    </div>
  </nav>
    <router-view @connect="connect()"></router-view>

  </div>

</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default {
  name: 'App',
  data() {
    return {
      isConnected : false,
      items: [
        {title: 'Shared Calendar', icon: 'mdi-calendar_today', to: '/secret'},
        {title: 'Login', icon: 'mdi-login', to: '/login'},
        {title: 'Register', icon: 'mdi-app_registration', to: '/register'},
      ],
      right: null,
    }
  },
  methods: {
    disConnect () {
      this.isConnected = false;
      console.log(("disConnect"));
     //TODO redirect
    },
    connect () {
      this.isConnected = true;
      console.log(("connect"));
    }
  }
}
</script>
