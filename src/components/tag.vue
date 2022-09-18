<template>
  <el-card class="tag-box">
    <template #header>
      <span>标签</span>
    </template>
    <div class="tag-item flex justify-around">
      <el-tag
        v-for="tag in tagList"
        :key="tag"
        type="success"
        class="hover:bg-white hover:cursor-pointer"
        @click="taglink(tag)"
        >{{ tag }}</el-tag
      >
    </div>
  </el-card>
</template>

<script setup>
import { useRouter } from "vue-router";

const tagList = ["生活", "科技", "历史"];

const router = useRouter();

// 需要在 route 中声明
function taglink(tag) {
  router.push({
    name: "tag",
    params: { id: tag },
  });
}
</script>
