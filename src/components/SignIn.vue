<template>
  <div>
    <h2>Sign In</h2>
    <input v-model="name" /> <button v-on:click="signIn">Sign In</button>
  </div>
</template>

<script lang="ts">
import { authorization, context } from "@/common";
import router from "@/router";
import { Users } from "@/users/users";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SignIn extends Vue {
  name = "";
  async signIn() {
    const jwt = await Users.signIn(this.name);
    authorization.afterSignIn(jwt, true);
    alert("Hello " + context.user.name);
    router.push({ path: "/users" });
  }
}
</script>
