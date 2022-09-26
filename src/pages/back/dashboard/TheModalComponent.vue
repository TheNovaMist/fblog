<template>
  <div>
    <div
      class="bg-white rounded-lg text-lg pt-6 shadow-lg w-96 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
    >
      <div class="px-6 pb-6 text-center flex flex-row justify-between">
        <div></div>
        <h3 class="text-xl mb-2 font-semibold">Tag List</h3>
        <el-button @click="hide">Close</el-button>
      </div>
      <ul class="cursor-pointer border-t border-gray-100 text-center">
        <li
          v-for="tag in store.tagList"
          :key="tag.id"
          class="border-b text-blue-500 border-gray-100 w-full px-6 py-3 hover:bg-gray-100 flex justify-between"
        >
          <div>{{ tag.title }}</div>

          <el-button @click="deleteTag(tag.slug)">删除</el-button>
        </li>
      </ul>
      <div class="m-5 border-2 hover:border-blue-300">
        <input
          v-model="newTag"
          class="bg-neutral-200 p-2 m-2"
          placeholder="新建标签"
        />
        <el-button @click="addTag">新建</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import TagStore from "@/stores/TagStore";
import { ref } from "vue";
const emit = defineEmits(["close", "deleteTag"]);

let newTag = ref("");

const store = TagStore();

function hide() {
  // console.log("click registered");
  emit("close");
}

function addTag() {
  // 需要检测列表中有无
  if (store.tagList.find((element) => element.title == newTag.value)) {
    // console.log("检测到重复");
    return;
  }

  // 值不为空
  if (newTag.value != "") {
    const tag = { id: -1, title: newTag.value, slug: newTag.value };
    store.addTag(tag);
  }
}

function deleteTag(title) {
  store.removeTag(title);
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s ease-out both;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse ease-in both;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
