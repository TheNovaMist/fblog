<template>
  <div class="w-full">
    <slot>
      <blog-back-end v-if="isAdmin" />
      <blog-front-end v-if="!isAdmin" />
    </slot>
  </div>
</template>

<script setup>
import BlogBackEnd from "@/pages/BlogBackEnd.vue";
import BlogFrontEnd from "@/pages/BlogFrontEnd.vue";
import { ref } from "vue";

import { useUsersStore } from "@/stores/user";

const usersStore = useUsersStore();

let isAdmin = ref(false);

usersStore.$subscribe((mutation, state) => {
  // console.log("tracked!");
  // console.log("state.isAdmin: " + state.isAdmin);

  isAdmin.value = state.isAdmin;
});
</script>
