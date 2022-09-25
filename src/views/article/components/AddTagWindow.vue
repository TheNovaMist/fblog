<template>
  <div
    class="scale-125 bg-white rounded-lg text-lg shadow-lg w-96 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"
  >
    <el-card>
      <el-form :model="form">
        <el-form-item label="title">
          <el-input v-model="form.title" placeholder="标签名" />
        </el-form-item>
        <el-form-item label="slug">
          <el-input v-model="form.slug" placeholder="地址名 最好与标签名相同" />
        </el-form-item>
      </el-form>
      <div class="w-1/2 flex justify-around">
        <el-button @click="handleCreate">创建</el-button>
        <el-button @click="handleClose">关闭</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TagStore from "@/stores/TagStore";

const tagStore = TagStore();

const form = ref({
  title: "",
  slug: "",
});

const emit = defineEmits(["close"]);

/**
 * 处理关闭窗口的方法
 */
function handleClose() {
  emit("close");
}

/**
 * 处理创建标签的方法
 * 最后要更新 store 内部标签列表
 */
function handleCreate() {
  console.log("create tag ", form.value);
  tagStore.addTag(form.value);

  tagStore.updateTagList();
}
</script>
