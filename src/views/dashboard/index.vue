<template>
  <div class="dashboard-container">
    <TagList />
  </div>
</template>

<script setup>
import TagList from "./TagList.vue";
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
