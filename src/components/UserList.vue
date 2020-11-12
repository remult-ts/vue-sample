<template>
  <div>
    <h2>User List {{users.length}}</h2>
    <div v-for="user in users" :key="user.id.value">
      <input v-model="user.name.value" />
    </div>
  </div>
</template>

<script lang="ts">
import { context } from "@/common";
import { Users } from "@/users/users";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class UserList extends Vue {
  users: Users[] = [];
  async loadUsers() {
    try {
      this.users = await context.for(Users).find();
    } catch (err) {
      alert(err.message);
    }
  }
  mounted() {
    this.loadUsers();
  }
}
</script>