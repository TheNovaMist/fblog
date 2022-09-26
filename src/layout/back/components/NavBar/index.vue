<template>
  <div class="right-menu flex justify-end items-center h-full pr-8">
    <el-dropdown>
      <el-button type="primary">
        菜单<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleToHome">首页</el-dropdown-item>
          <el-dropdown-item @click="handleLogout">注销</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import useUsersStore from "@/stores/UserStore";

const router = useRouter();
const userStore = useUsersStore();

function handleToHome() {
  router.push("/admin/");
}

async function handleLogout() {
  console.log(userStore.token);

  await userStore
    .logout()
    .then(() => {
      // console.log("NavBar logout... \n store token:");
      // console.log(userStore.token);
      window.sessionStorage.removeItem("token");
    })
    .catch((error) => {
      console.log(error);
    });

  router.push("/login");
}
</script>
