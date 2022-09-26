<template>
  <div class="sidebar-logo-container">
    <router-link
      key="expand"
      class="sidebar-logo-link flex flex-row justify-between bg-slate-600"
      to="/admin"
    >
      <img v-if="logo" :src="logo" class="sidebar-logo w-10 h-10" />
      <h4 class="sidebar-title text-slate-200 mt-2">{{ title }}</h4>
      <div></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SidebarLogo",
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      title: "fblog",
      logo: "https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png",
    };
  },
};
</script>
