<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column align="center" label="ID" width="80">
        <template #default="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Date">
        <template #default="scope">
          <span>{{ scope.row.timestamp }}</span>
          <!-- <span>{{ parseTime2(scope.row.timestamp) }}</span> -->
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110">
        <template #default="{ row }">
          <el-tag :type="statusFilter(row.status) || 'success'">
            {{ row.status || "published" }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column min-width="200px" label="Title">
        <template #default="{ row }">
          <router-link :to="'/post/' + row.id" class="link-type">
            <span>{{ row.title }}</span>
          </router-link>
        </template>
      </el-table-column>

      <el-table-column min-width="200px" label="Tag">
        <template #default="{ row }">
          <div class="flex justify-between">
            <div>
              <el-tag v-for="tag in row.tag" :key="tag" class="mr-4">
                <router-link :to="'/tag/' + tag.slug" class="link-type"
                  >{{ tag.title }}
                </router-link>
              </el-tag>
            </div>
            <div>
              <el-button @click="handleClickSetting(row.id)">
                <el-icon :size="size" :color="color">
                  <Setting />
                </el-icon>
              </el-button>
            </div>
          </div>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" min-width="100px">
        <template #default="scope">
          <div class="flex justify-around">
            <router-link :to="'/admin/article/edit/' + scope.row.id">
              <el-button type="primary" size="small" icon="edit" :round="true">
                Edit
              </el-button>
            </router-link>
            <el-button
              type="danger"
              :round="true"
              size="small"
              icon="delete"
              @click="handleDelete(scope.row.id)"
              >Delete</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>

    <transition name="bounce" mode="out-in">
      <tag-list-window
        v-if="showTagList"
        @close="closeModal"
        @show-add-tag="showAddTagWindow"
        @update-post-list="getList"
      />
    </transition>
    <transition>
      <add-tag-window v-if="showAddTag" @close="showAddTag = false" />
    </transition>

    <pagination
      v-show="total > 0"
      v-model:page="listQuery.page"
      v-model:limit="listQuery.limit"
      :total="total"
      @pagination="getList"
    />
  </div>
</template>

<script setup>
import { getPostList, deletePost } from "@/api/article";
import Pagination from "./components/Pagination/index.vue"; // Secondary package based on el-pagination

import { parseTime2 } from "@/utils";
import { onMounted, ref } from "vue";
import AddTagWindow from "./components/AddTagWindow.vue";
import TagListWindow from "./components/TagListWindow.vue";

import TagStore from "@/stores/TagStore";

// 1. 数据

// icon
let size = 18;
let color = "#409EFC";

// tag manage
const showTagList = ref(false);
let list = ref(null);
let total = ref(0);
let listLoading = ref(true);
let listQuery = ref({
  page: 1,
  limit: 20,
});
const showAddTag = ref(false);

const tagStore = TagStore();

const curPost = ref(1);

// 2. 初始化组件

// created()
// 请求文章和标签列表
onMounted(async () => {
  getList();
  await tagStore.updateTagList();

  // console.log("update tagList", tagStore.tagList);
});

// 3. 方法

/**
 * 设置状态栏的状态
 * 当前全部默认为 published
 */
function statusFilter(status) {
  const statusMap = {
    published: "success",
    draft: "info",
    deleted: "danger",
  };
  return statusMap[status];
}

/**
 * 处理新建标签事件
 * 显示新增标签的窗口
 */
function showAddTagWindow() {
  // console.log("open add tag window");
  showAddTag.value = true;
}

/**
 * 关闭设置文章标签的窗口
 */
function closeModal() {
  // console.log("close action.");
  showTagList.value = false;
}

/**
 * 删除文章
 * TODO: 删除之前需要确认
 */
async function handleDelete(id) {
  // console.log("delete id: ", id);

  // 不删除测试数据
  var protect_array = [1, 2, 3, 4, 5, 6];
  if (protect_array.includes(id)) {
    // console.log("can't delete protect post...");
  }

  await deletePost(id);

  // 重新获取文章列表
  getList();
}

/**
 * 请求文章列表
 * 处理数据中的 datetime
 * 使用时机：
 * - onMounted
 * - 删除文章后
 */
async function getList() {
  listLoading.value = true;

  const data = await getPostList();

  // parse timestamp
  for (let d in data) {
    data[d].timestamp = parseTime2(data[d].createAt);
  }

  list.value = data;
  total.value = data.length;

  listLoading.value = false;
}

/**
 * 打开标签管理界面
 */
async function handleClickSetting(id) {
  showTagList.value = true;
  curPost.value = id;
  // console.log("curPost ", curPost.value);

  await tagStore.usePost(curPost.value);
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>

<style scoped>
/* .bounce-enter-active {
  animation: bounce-in 0.5s ease-out both;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse ease-in both;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
} */
</style>
