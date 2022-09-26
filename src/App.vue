<template>
  <main-layout><router-view v-if="toLogIn" /></main-layout>
</template>

<script setup>
import MainLayout from "@/layout/MainLayout.vue";

import { ref } from "vue";

import useUsersStore from "@/stores/UserStore";

const usersStore = useUsersStore();

// if show Fallback Content of Slots
let toLogIn = ref(false);

usersStore.$subscribe((mutation, state) => {
  // console.log("tracked!");
  // console.log("toLogin: " + state.toLogin);

  toLogIn.value = state.toLogin;
});
</script>
