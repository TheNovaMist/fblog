<template>
  <el-row>
    <el-col><div style="min-height: 100px"></div></el-col>
    <el-col :span="10" :offset="6">
      <TagCard />
    </el-col>
  </el-row>
</template>

<script setup>
import TagCard from "@/components/TagCard.vue";
</script>
