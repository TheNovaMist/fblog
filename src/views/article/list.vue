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
import { fetchList, getPostList, deletePost } from "@/api/article";
import Pagination from "@/components/Pagination/index.vue"; // Secondary package based on el-pagination

import { parseTime2 } from "@/utils";
import { ref } from "vue";

function statusFilter(status) {
  const statusMap = {
    published: "success",
    draft: "info",
    deleted: "danger",
  };
  return statusMap[status];
}

let list = ref(null);
let total = ref(0);
let listLoading = ref(true);
let listQuery = ref({
  page: 1,
  limit: 20,
});

async function getList() {
  // console.log("get List........");

  listLoading.value = true;

  const data = await getPostList();
  // console.log("post list", data, data.length);

  // parse timestamp
  for (let d in data) {
    // console.log(data[d]);
    data[d].timestamp = parseTime2(data[d].createAt);
  }

  // console.log(data);

  list.value = data;
  total.value = data.length;

  listLoading.value = false;

  // fetchList(listQuery.value)
  //   .then((response) => {
  //     list.value = response.data.items;
  //     total.value = response.data.total;
  //     listLoading.value = false;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
}

// 删除之前要确认

async function handleDelete(id) {
  console.log("delete id: ", id);

  var protect_array = [1, 2, 3, 4, 5, 6];
  if (protect_array.includes(id)) {
    console.log("can't delete protect post...");
  }

  await deletePost(id);

  getList();
}

// !!!!!!! DO NOT DELETE !!!!!!
// created()
getList();
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
