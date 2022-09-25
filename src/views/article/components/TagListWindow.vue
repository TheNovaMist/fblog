<template>
  <div
    class="bg-white rounded-lg text-lg pt-6 shadow-lg w-96 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
  >
    <div class="px-6 pb-6 text-center flex flex-row justify-between">
      <div></div>
      <div></div>
      <h3 class="text-xl mb-2 font-semibold">Tag List</h3>
      <div>
        <el-button @click="closeModal">Close</el-button>
        <el-button @click="showAddTag">New</el-button>
      </div>
    </div>
    <ul class="cursor-pointer border-t border-gray-100 text-center">
      <li
        v-for="tag in props.tagList"
        :key="tag.id"
        class="border-b text-blue-500 border-gray-100 w-full px-6 py-3 hover:bg-gray-100 flex justify-between"
      >
        <div>{{ tag.title }}</div>

        <el-button @click="deleteTag(tag.slug)">删除</el-button>
      </li>
    </ul>
    <div class="m-4 flex justify-center">
      <el-button type="primary" class="w-28">确认</el-button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import TagStore from "@/stores/TagStore";

const tagStore = TagStore();

const props = defineProps(["tagList"]);

const emit = defineEmits(["close", "showAddTag", "fetchTagList"]);

/**
 * 处理关闭窗口事件
 */
function closeModal() {
  emit("close");
}

/**
 * 处理删除标签时事件
 * 使用全局状态管理 tagStore
 */
function deleteTag(title) {
  tagStore.deleteTag(title);

  emit("fetchTagList");
}

/**
 * 打开新建标签的窗口
 *
 */
function showAddTag() {
  console.log("open add tag window...");
  emit("showAddTag");
}

onMounted(() => {});
</script>
