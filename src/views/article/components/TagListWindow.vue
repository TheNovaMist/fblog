<template>
  <div
    class="bg-white rounded-lg text-lg pt-6 shadow-lg w-96 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
  >
    <div class="px-6 pb-6 text-center flex flex-row justify-between">
      <div></div>
      <div></div>
      <h3 class="text-xl mb-2 font-semibold">Tag List</h3>
      <div>
        <el-button v-if="showAddTag" @click="handleAddTag">New</el-button>
        <el-button @click="delMode">{{
          !isDelMode ? "删除" : "取消删除"
        }}</el-button>
      </div>
    </div>
    <!-- <ul class="cursor-pointer border-t border-gray-100 text-center">
      <li
        v-for="tag in props.tagList"
        :key="tag.id"
        class="border-b text-blue-500 border-gray-100 w-full px-6 py-3 hover:bg-gray-100 flex justify-between"
      >
        <div>{{ tag.title }}</div>

        <el-button @click="deleteTag(tag.slug)">删除</el-button>
      </li>
    </ul> -->

    <el-checkbox-group
      v-model="checkListAll"
      :check-list-all="checkList"
      class="flex flex-col"
    >
      <div v-for="c in checkList" :key="c">
        <el-checkbox :label="c" />

        <div class="float-right mr-8">
          <el-button v-show="isDelMode" @click="deleteTag(c)">删除</el-button>
        </div>
      </div>
    </el-checkbox-group>
    <div>{{ checkListAll }}</div>
    <div class="m-4 flex justify-center">
      <el-button
        v-if="showSubmitBtn"
        type="primary"
        class="w-28"
        @click="closeModal"
        >确认</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

import TagStore from "@/stores/TagStore";

const tagStore = TagStore();

// 传入的的参数 动态
const props = defineProps(["tagList"]);
// const tagList = ref(props.tagList);

// 添加标签的时候也会更新
const checkList = ref(props.tagList.map((t) => t.slug));

const checkListAll = ref(checkList.value);

const emit = defineEmits(["close", "showAddTag", "fetchTagList"]);

const isDelMode = ref(false);

// 控制组件显示
const showAddTag = computed(() => {
  return !isDelMode.value;
});

const showSubmitBtn = computed(() => {
  return !isDelMode.value;
});

/**
 * 处理关闭窗口事件
 */
function closeModal() {
  emit("close");
}

/**
 * 删除标签模式
 */
function delMode() {
  console.log("del mode...");
  isDelMode.value = !isDelMode.value;
}

/**
 * 处理删除标签时事件
 * 使用全局状态管理 tagStore
 */
function deleteTag(title) {
  console.log("delet tag: ", title);
  tagStore.deleteTag(title);

  emit("fetchTagList");
}

/**
 * 打开新建标签的窗口
 *
 */
function handleAddTag() {
  console.log("open add tag window...");
  emit("showAddTag");
}

onMounted(() => {});
</script>
