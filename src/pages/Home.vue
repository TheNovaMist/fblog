<template>
  <div class="home pt-8">
    <el-row class="justify-around">
      <el-col :span="16">
        <el-row v-for="card in cards" :key="card.id" class="post-item mb-8">
          <el-card shadow="always">
            <h5>
              <router-link :to="'/post/' + card.id">{{
                card.title
              }}</router-link>
            </h5>
            <el-row class="post-info">
              <div class="create-time">2019-09-01</div>
              <el-tag>swagger</el-tag>
            </el-row>
            <el-row class="post-body flex flex-row !flex-nowrap">
              <div class="side-img hidden-sm-and-down">
                <img src="@/assets/side-img.jpg" alt="vue.svg" />
              </div>
              <div class="side-abstract">
                <div class="post-abstract">
                  {{ card.description }}
                </div>
                <router-link :to="'/post/' + card.id">
                  <el-button>查看全文</el-button>
                </router-link>
              </div>
            </el-row>
          </el-card>
        </el-row></el-col
      >
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
  });
});
</script>
