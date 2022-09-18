<template>
  <div class="bg-neutral-100 w-full h-fit flex flex-auto">
    <el-container direction="vertical">
      <VHeader />

      <el-row class="flex justify-center main-content">
        <!-- 响应式 24 -->
        <el-col
          :xs="16"
          :md="16"
          :style="{ minHeight: minHeight + 'px' }"
          class="bg-white"
        >
          <router-view />
        </el-col>
      </el-row>

      <VFooter />
    </el-container>
  </div>
</template>

<script setup>
import VFooter from "@/components/f-footer.vue";
import VHeader from "@/components/f-header.vue";

import { onMounted, ref } from "vue";

// test mock server
import axios from "axios";

// import { useUsersStore } from "./stores/user";

// // get token
// const usersStore = useUsersStore();

const minHeight = ref(0);
const navBarFixed = ref(false);

onMounted(() => {
  minHeight.value = document.documentElement.clientHeight;
  window.addEventListener("scroll", watchScroll);
  window.onresize = function () {
    minHeight.value = document.documentElement.clientHeight;

    console.log("window resize");
  };
});

function watchScroll() {
  var scrollTop = ref(
    window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
  );
  //  当滚动超过 50 时，实现吸顶效果
  navBarFixed.value = scrollTop.value > 50;
}

// FIXME: 只是判断是否存在token
// const isAdmin = ref(usersStore.token);

// const isAdmin = true;

onMounted(() => {
  axios.get("/api/getUser").then((res) => {
    console.log("getUser...............");
    console.log(res);
  });
});
</script>
