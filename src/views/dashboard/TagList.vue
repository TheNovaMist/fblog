<template>
  <el-row>
    <el-col :span="18">
      <el-card>
        <div class="tag-box">
          <div v-for="tag in store.getTagList" :key="tag.id" class="tag">
            <router-link :to="'/tag/' + tag.slug" class="tag-title">
              {{ tag.title }}
            </router-link>
          </div>
          <!-- <el-button @click="addTag">增加</el-button>
    <el-button @click="deleteTag('生活')">减少</el-button> -->
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
  console.log("close action.");
  showModal.value = false;
}

const store = TagStore();
onMounted(() => {
  store.fetchTagList();
});

// function addTag() {
//   const newTag = { id: 1, title: "生活", slug: "life" };
//   store.addTag(newTag);
// }

// function deleteTag(name) {
//   store.deleteTag(name);
// }

// const tagList = [
//   { id: 1, title: "生活", slug: "life" },
//   { id: 2, title: "读书", slug: "book" },
//   { id: 3, title: "科技", slug: "itnews" },
//   { id: 4, title: "历史", slug: "history" },
//   { id: 5, title: "娱乐", slug: "entertainment" },
//   //   { id: 6, title: "娱乐", slug: "entertainment" },
//   //   { id: 7, title: "娱乐", slug: "entertainment" },
//   //   { id: 8, title: "娱乐", slug: "entertainment" },
//   //   { id: 9, title: "娱乐", slug: "entertainment" },
// ];
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
  /* background-color: antiquewhite; */
}
.tag-title {
  /* background-color: brown; */
  font-size: 1.5em;

  flex-basis: 50px;
}
</style>
