<template>
  <div :class="{ 'has-logo': showLogo }" class="h-full">
    <el-scrollbar wrap-class="scrollbar-wrapper" class="h-full bg-slate-700">
      <logo v-if="showLogo" :collapse="isCollapse" />
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="menuBg"
        :text-color="menuText"
        :unique-opened="false"
        :active-text-color="menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="item in permission_routes.routes"
          :key="item.path"
          :item="item"
          :base-path="item.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
// v-for="route in permission_routes"

import Logo from "./Logo.vue";
import SidebarItem from "./SidebarItem.vue";
import vari from "@/styles/variables.module.scss";

import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useAppStore } from "@/stores/app";
import { useSettingsStore } from "@/stores/settings";
import { useRouteStore } from "@/stores/permission";

const { menuText, menuBg, menuActiveText } = vari;

const routes = [
  { path: "/admin/dashboard", title: "dashboard" },
  { path: "/admin/form", title: "form" },
  { path: "/admin/markdown-demo", title: "markdown" },
  { path: "/admin/article/list", title: "article" },
];

// route
const route = useRoute();
const { meta, path } = route;

// store
const appStore = useAppStore();
const settingsStore = useSettingsStore();
const permission_routes = useRouteStore();

onMounted(() => {
  // console.log("permission_routes generateRoutes");
  permission_routes.generateRoutes("ysama");
  // console.log(permission_routes.routes);
});

const activeMenu = computed(() => {
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});

const showLogo = computed(() => {
  /** FIXME: always true for dev
   *
   */
  return true;
  // return settingsStore.sidebarLogo;
});

const variables = computed(() => {
  return vari;
});

// FIXME: 变为 function
const isCollapse = computed(() => {
  return !appStore.sidebar.opened;
});
</script>

<style scoped>
.el-menu {
  /* --el-menu-bg-color: #304156; */
}
</style>
