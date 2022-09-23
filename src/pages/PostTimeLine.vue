<template>
  <div class="flex justify-start mt-20 pl-40">
    <el-timeline>
      <el-timeline-item
        v-for="(post, index) in postList"
        :key="index"
        :timestamp="parseTime2(post.createAt)"
        size="large"
        type="success"
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
import { computed, onMounted, ref } from "vue";
import { getPostList } from "@/api/article";
import { getPostListByTag } from "@/api/article";

import { parseTime2 } from "@/utils";
import { useRoute } from "vue-router";

// 根据传入参数请求不同接口
const props = defineProps({ byTag: { type: Boolean, default: false } });
const route = useRoute();

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

const postList = ref([]);

onMounted(async () => {
  let data;

  if (props.byTag) {
    console.log("request post list by Tag");

    console.log(route.params.id);
    data = await getPostListByTag(route.params.id);
  } else {
    console.log("request all list");
    data = await getPostList();
  }
  // 测试拼接
  postList.value = [...sortedPostList.value, ...data];
});
</script>

<style>
.el-timeline-item__wrapper {
  margin-bottom: 8%;
}
.el-timeline-item__content {
  font-size: large;
}
.el-timeline-item__timestamp is-bottom {
  font-size: large;
}
</style>
