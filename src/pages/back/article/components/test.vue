<template>
  <el-checkbox-group v-model="postTags" :tag-list="tagList">
    <div v-for="c in tagList" :key="c" class="mb-4">
      <el-checkbox :label="c" />
    </div>
  </el-checkbox-group>
</template>
