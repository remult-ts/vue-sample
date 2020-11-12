<template>
  <div>
    <h2>Add User</h2>
    <input v-model="newUser.name.value" />
    <button v-on:click="addTheUser">add User</button>
  </div>
</template>

<script lang="ts">
import { context } from '@/common';
import router from "@/router";
import { Users } from "@/users/users";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class AddUser extends Vue {
  newUser = context.for(Users).create();
  async addTheUser() {
    await this.newUser.save();
    router.push({ path: "/users" });
  }
}
</script>