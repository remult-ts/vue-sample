<template>
  <div>
    <h2>User List {{ users.length }}</h2>
    <div v-for="user in users" :key="user.id.value">
      <input v-model="user.name.value" />
      <input v-model="user.isAdmin.value" type="checkbox"/>
      admin |
      <button v-on:click="user.save()" v-if="user.wasChanged()">
        Save Changes
      </button>
      created on: {{ user.createdDate.displayValue }}
      <button v-on:click="deleteUser(user)">Delete</button>
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
      this.users = await context.for(Users).find({
        orderBy: (u) => u.name,
      });
    } catch (err) {
      alert(err.message);
    }
  }
  async deleteUser(user: Users) {
    await user.delete();
    this.loadUsers();
  }
  mounted() {
    this.loadUsers();
  }
}
</script>