<template>
  <div class="bg-neutral-100 flex flex-auto">
    <el-container>
      <el-aside width="200px" class="bg-sky-500">
        <sidebar />
      </el-aside>
      <el-container>
        <el-header class="bg-white border-b border-slate-300">
          <nav-bar />
        </el-header>
        <el-main>
          <div class="m-8">
            <router-view v-slot="{ Component }">
              <transition name="slide-fade">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Sidebar from "@/layout/components/Sidebar/index.vue";
import NavBar from "@/layout/components/NavBar/index.vue";
</script>

<style>
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 1;
}
</style>
