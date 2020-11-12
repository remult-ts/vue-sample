<template>
  <div>
    <h2>Sign In</h2>
    <input v-model="name" /> <button v-on:click="signIn">Sign In</button>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { Users } from "@/users/users";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SignIn extends Vue {
  name = "";
  async signIn() {
    const user = await Users.signIn(this.name);
    alert("Hello " + user.name);
  }
}
</script>
