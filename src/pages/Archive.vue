<template>
  <div class="flex justify-center">
    <el-timeline>
      <el-timeline-item
        v-for="(post, index) in sortedPostList"
        :key="index"
        :timestamp="post.createAt"
        size="large"
        type="success"
        class="mt-6"
      >
        <router-link
          :to="{
            path: '/post/' + post.id,
            //   params: {
            //     id: post.id,
            //   },
          }"
          >{{ post.title }}</router-link
        >
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script setup>
import { computed } from "vue";

const sortedPostList = computed(() => [
  { id: 1, title: "今年中秋是否会出现超级月亮？", createAt: "2022-09-10" },
  { id: 2, title: "40系显卡来了，你会买吗？", createAt: "2022-09-09" },
  { id: 3, title: "蜜雪冰城最畅销的饮品或不是柠檬水", createAt: "2022-09-10" },
  {
    id: 4,
    title: "我的春天去了哪里，上海一名男子从冬天睡到了夏天",
    createAt: "2022-09-08",
  },
]);

// :timestamp="TimestampToDate(post.createAt)"
</script>
