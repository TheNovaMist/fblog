<template>
  <el-row>
    <el-col :span="18">
      <el-card>
        <div class="tag-box">
          <div v-for="tag in store.tagList" :key="tag.id" class="tag">
            <router-link :to="'/tag/' + tag.slug" class="tag-title">
              {{ tag.title }}
            </router-link>
          </div>
          <el-button @click="showModal = true">管理</el-button>
        </div>
      </el-card>
      <transition name="bounce" mode="out-in">
        <TheModalComponent
          v-if="showModal"
          @close="closeModal"
        ></TheModalComponent>
      </transition>
    </el-col>
  </el-row>
</template>

<script setup>
import TheModalComponent from "./TheModalComponent.vue";
import TagStore from "@/stores/TagStore";
import { onMounted, ref } from "vue";

let showModal = ref(false);

function closeModal() {
  // console.log("close action.");
  showModal.value = false;
}

const store = TagStore();
onMounted(() => {
  store.updateTagList();
});
</script>

<style scoped>
.tag-box {
  background-color: #f5f5f5;
  width: 100%;
  min-height: 200px;
  /* 上 右 下  左*/
  /* margin: 25% 20% auto 20%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: space;
}
.tag {
  flex-basis: 20%;
}
.tag-title {
  font-size: 1.5em;

  flex-basis: 50px;
}
</style>
