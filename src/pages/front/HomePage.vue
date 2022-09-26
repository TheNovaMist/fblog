<template>
  <div class="home pt-8">
    <el-row class="justify-around">
      <el-col :span="16">
        <el-row v-for="card in cards" :key="card.id" class="post-item mb-8">
          <PostCard :card="card" /> </el-row
      ></el-col>
      <el-col class="side hidden-sm-and-down" :span="6">
        <div class="item mb-8"><Tag /></div>
        <div class="item mb-8"><Friend /></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import Tag from "@/components/TagCard.vue";
import Friend from "@/components/FriendsCard.vue";
import PostCard from "@/components/PostCard.vue";

import { onMounted, ref } from "vue";

import { getPostList } from "@/api/article";

const cards = ref([]);

onMounted(async () => {
  const data = await getPostList();
  cards.value = data;
});
</script>
