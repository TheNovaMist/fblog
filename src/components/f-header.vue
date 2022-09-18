<template>
  <el-header>
    <el-menu
      mode="horizontal"
      :default-active="activeIndex"
      :ellipsis="false"
      :router="true"
      @select="handleSelect"
    >
      <div class="grow"></div>
      <!-- 开启 router 模式 -->
      <el-menu-item index="1" :route="{ path: '/' }">Home</el-menu-item>
      <el-menu-item index="2" :route="{ path: '/archive' }"
        >Archive</el-menu-item
      >
      <el-menu-item index="3" :route="{ path: '/taglist' }">Tag</el-menu-item>
      <el-sub-menu index="4">
        <template #title>More</template>
        <el-menu-item index="4-1" :route="{ path: '/about' }"
          >About</el-menu-item
        >
        <el-menu-item index="4-2" :route="{ path: '/friend' }"
          >Friends</el-menu-item
        >
      </el-sub-menu>
      <div class="grow"></div>
    </el-menu>
  </el-header>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref("1");
// const activeIndex2 = ref("1");
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>
