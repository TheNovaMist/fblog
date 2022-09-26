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

    <el-checkbox-group
      v-model="checkList"
      :check-list-all="checkListAll"
      class="flex flex-col"
    >
      <div v-for="c in checkListAll" :key="c" class="mb-4">
        <el-row>
          <el-col :span="8">
            <div class="ml-8">
              <el-checkbox :label="c" /></div
          ></el-col>
          <el-col :span="8" :offset="8">
            <div class="float-right mr-8">
              <el-button v-show="isDelMode" @click="deleteTag(c)"
                >删除</el-button
              >
            </div>
          </el-col>
        </el-row>
      </div>
    </el-checkbox-group>
    <div>{{ checkList }}</div>
    <div class="m-4 flex justify-center">
      <el-button
        v-if="showSubmitBtn"
        type="primary"
        class="w-28"
        @click="handleSubmit"
        >确认</el-button
      >

      <el-button
        v-if="showCloseBtn"
        type="primary"
        class="w-28"
        @click="closeModal"
        >Close</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

import TagStore from "@/stores/TagStore";

const tagStore = TagStore();

const tagList = ref(tagStore.tagList);

// 用于渲染 el-checkbox 列表的全局标签数组，只需要标题的值
// ["科技", "生活"]
const checkListAll = ref(tagList.value.map((t) => t.slug));

// el-checkbox-group 绑定的表单值，是单个文章的
const checkList = ref(tagStore.postTags.map((t) => t.slug));

// store改变则更新内部状态
tagStore.$subscribe((mutation, state) => {
  tagList.value = state.tagList;
  // 修改数据结构
  checkListAll.value = state.tagList.map((t) => t.slug);
  // console.log("postTags", state.postTags);
  checkList.value = state.postTags.map((t) => t.slug);
});

const emit = defineEmits(["close", "showAddTag", "updatePostList"]);

// 控制组件显示
const isDelMode = ref(false);

const showAddTag = computed(() => {
  return !isDelMode.value;
});

const showSubmitBtn = computed(() => {
  return !isDelMode.value;
});

const showCloseBtn = computed(() => {
  return !isDelMode.value;
});

/**
 * 处理关闭窗口事件
 */
function closeModal() {
  emit("close");
}

/**
 * 打开新建标签的窗口
 *
 */
function handleAddTag() {
  emit("showAddTag");
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
  tagStore.removeTag(title);
}

/**
 * 处理更新标签事件
 */
async function handleSubmit() {
  console.log("checkList: ", checkList.value);
  await tagStore.setPostTags(checkList.value);

  // 表格中文章的标签是 getPostList 一起请求过来的
  // 未使用全局状态 只能进行回调
  emit("updatePostList");
  // close window
  closeModal();
}
</script>
