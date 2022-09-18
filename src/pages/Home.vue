<template>
  <div class="home pt-8">
    <el-row class="justify-around">
      <el-col :span="16">
        <el-row v-for="n in 5" :key="n" class="post-item mb-8">
          <el-card shadow="always">
            <h5><router-link to="/post/1">测试标题</router-link></h5>
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
                  Iconfont-国内功能很强大且图标内容很丰富的矢量图标库,
                  提供矢量图标下载、在快照
                  在小程序中使用阿里文字图标在小程序中使用阿里文字图标库前在小程序中使用阿里文字图标库前库前端开发的便捷工具
                  - AndrewNeo - CSDN博客 著作权归作者所有。
                  商业转载请联系作者获得授权，非商业转载请注明出处。
                  作者：it疯子也 来源：https://www.fengziy.cn
                </div>
                <router-link to="/post/1">
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
</script>
