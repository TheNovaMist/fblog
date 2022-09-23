<template>
  <el-card shadow="always" class="w-full">
    <h5>
      <router-link :to="'/post/' + card.id">{{ card.title }}</router-link>
    </h5>
    <el-row class="post-info">
      <div class="create-time">2019-09-01</div>
      <el-tag>swagger</el-tag>
    </el-row>
    <el-row class="post-body flex flex-row !flex-nowrap" :gutter="20">
      <el-col :span="12" class="side-img hidden-sm-and-down"
        ><div>
          <img src="@/assets/side-img.jpg" alt="vue.svg" />
        </div>
      </el-col>
      <el-col :span="20" :md="12">
        <div class="side-abstract">
          <div class="post-abstract">
            {{ card.description }}
          </div>
          <router-link :to="'/post/' + card.id">
            <el-button>查看全文</el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({ card: { type: Object, default: null } });

const card = ref(props.card);

onMounted(() => {
  //   console.log(card.value);
});
</script>
