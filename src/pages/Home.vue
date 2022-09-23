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
import Tag from "@/components/tag.vue";
import Friend from "../components/friend.vue";
import PostCard from "@/components/PostCard.vue";

import { db } from "@/firebase";

import { collection, onSnapshot } from "firebase/firestore";
import { onMounted, ref } from "vue";

const cards = ref([]);

onMounted(() => {
  onSnapshot(collection(db, "test"), (querySnapshot) => {
    let db_cards = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      const card = {
        id: doc.data().id,
        title: doc.data().title,
        description: doc.data().description,
      };
      db_cards.push(card);
    });

    cards.value = db_cards;

    // console.log(cards.value);
  });
});
</script>
