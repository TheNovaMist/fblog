<template>
  <el-row>
    <el-col><div style="min-height: 100px"></div></el-col>
    <el-col :span="10" :offset="6">
      <FriendsCard />
    </el-col>
  </el-row>
</template>

<script setup>
import FriendsCard from "@/components/FriendsCard.vue";
</script>
