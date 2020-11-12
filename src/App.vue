<template>
  <div id="app">
    <h1>Remult with Vue</h1>
    <nav>
      <router-link to="/users">User List</router-link>
      | <router-link to="/add-user">Add User</router-link> 
      | <router-link to="/sign-in" v-if="!context.isSignedIn()">
        Sign In
      </router-link>
      <span v-if="context.isSignedIn()"> Hello {{ context.user.name }} </span>
      | <router-link to="/update-password" v-if="context.isSignedIn()"> Update Password</router-link> |
      <button v-if="context.isSignedIn()" v-on:click="signOut">Sign Out</button>
    </nav>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { authorization, context } from "./common";
import router from "./router";

@Component
export default class App extends Vue {
  context = context;
  async errorCaptured(err: any) {
    alert(err.message);
  }
  signOut() {
    authorization.signOut();
    router.push({ path: "/sign-in" });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
