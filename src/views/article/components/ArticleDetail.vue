<template>
  <div class="createPost-container">
    <el-form
      ref="postFormRef"
      :model="postForm"
      :rules="rules"
      class="form-container"
    >
      <sticky :z-index="10" :class-name="'sub-navbar ' + postForm.status">
        <el-button
          v-loading="loading"
          style="margin-left: 10px"
          type="success"
          @click="submitForm"
        >
          Publish
        </el-button>
        <el-button v-loading="loading" type="warning" @click="draftForm">
          Draft
        </el-button>
      </sticky>

      <div class="createPost-main-container mt-6">
        <el-row>
          <el-col :span="10">
            <el-form-item
              style="margin-bottom: 40px"
              prop="title"
              label="Title"
            >
              <el-input
                v-model="postForm.title"
                required
                maxlength="100"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="10">
            <el-form-item label="Publish Time:" prop="display_time">
              <el-date-picker
                v-model="displayTime"
                type="datetime"
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="Select date and time"
              />
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item
          style="margin-bottom: 40px"
          label="Summary:"
          prop="content_short"
        >
          <el-input
            v-model="postForm.content_short"
            :rows="1"
            type="textarea"
            class="article-textarea"
            autosize
            placeholder="Please enter the content"
          />
          <span v-show="contentShortLength" class="word-counter"
            >{{ contentShortLength }}words</span
          >
        </el-form-item>

        <el-form-item prop="content" style="margin-bottom: 30px">
          <v-md-editor v-model="postForm.content" height="400px"></v-md-editor>
        </el-form-item>

        <!-- <el-form-item prop="image_uri" style="margin-bottom: 30px">
          <Upload v-model="postForm.image_uri" />
        </el-form-item> -->
      </div>
    </el-form>
  </div>
</template>

<script setup>
import MDinput from "@/components/MDinput/index.vue";
import Sticky from "@/components/Sticky/index.vue"; // 粘性header组件
import { validURL } from "@/utils/validate";
import { fetchArticle } from "@/api/article";
import { searchUser } from "@/api/remote-search";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import { ElNotification as Notify } from "element-plus";

import { createPost } from "@/api/article";
import { async } from "@firebase/util";

// props
const props = defineProps({ isEdit: { type: Boolean, default: false } });

// route
const route = useRoute();

const defaultForm = ref({
  status: "draft",
  title: "", // 文章题目
  content: "", // 文章内容
  content_short: "", // 文章摘要
  source_uri: "", // 文章外链
  image_uri: "", // 文章图片
  display_time: undefined, // 前台展示时间
  id: undefined,
  platforms: ["a-platform"],
  comment_disabled: false,
  importance: 0,
});

const validateRequire = (rule, value, callback) => {
  if (value === "") {
    Notify.error({
      message: rule.field + "为必传项",
    });
    callback(new Error(rule.field + "为必传项"));
  } else {
    callback();
  }
};
const validateSourceUri = (rule, value, callback) => {
  if (value) {
    if (validURL(value)) {
      callback();
    } else {
      Notify.error({
        message: "外链url填写不正确",
      });
      callback(new Error("外链url填写不正确"));
    }
  } else {
    callback();
  }
};

// component ref
const postFormRef = ref();

// return data()
const postForm = ref(defaultForm.value);
const loading = ref(false);
const userListOptions = ref([]);
const rules = ref({
  // image_uri: [{ validator: validateRequire }],
  title: [{ validator: validateRequire }],
  content_short: [{ validator: validateRequire }],
  content: [{ validator: validateRequire }],
  displayTime: [{ validator: validateRequire }],

  // source_uri: [{ validator: validateSourceUri, trigger: "blur" }],
});
const tempRoute = ref({});

// computed
const contentShortLength = computed(() => {
  return postForm.value.content_short.length;
});

const displayTime = computed({
  // set and get is useful when the data
  // returned by the back end api is different from the front end
  // back end return => "2013-06-25 06:59:25"
  // front end need timestamp => 1372114765000
  get() {
    return +new Date(postForm.value.display_time);
  },
  set(val) {
    postForm.value.display_time = new Date(val);
  },
});

// created()
if (props.isEdit) {
  const id = route.params && route.params.id;
  fetchData(id);
}

// Why need to make a copy of this.$route here?
// Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
// https://github.com/PanJiaChen/vue-element-admin/issues/1221
tempRoute.value = Object.assign({}, route);

// methods

function fetchData(id) {
  fetchArticle(id)
    .then((response) => {
      postForm.value = response.data;

      // just for test
      postForm.value.title += `   Article Id:${postForm.value.id}`;
      postForm.value.content_short += `   Article Id:${postForm.value.id}`;

      // set tagsview title
      setTagsViewTitle();

      // set page title
      setPageTitle();
    })
    .catch((err) => {
      console.log(err);
    });
}

function setTagsViewTitle() {
  const title = "Edit Article";
  const route = Object.assign({}, tempRoute.value, {
    title: `${title}-${postForm.value.id}`,
  });
  // TODO: use tag store
  // this.$store.dispatch("tagsView/updateVisitedView", route);
}
function setPageTitle() {
  const title = "Edit Article";
  document.title = `${title} - ${postForm.value.id}`;
}

const timestamp = computed(() => {
  console.log("display_time", postForm.value.display_time);

  if (postForm.value.display_time == undefined) {
    return new Date(Date.now()).toISOString();
  }
  return new Date(postForm.value.display_time).toISOString();
});

function submitForm() {
  console.log("postForm.value", postForm.value);

  postFormRef.value.validate(async (valid) => {
    console.log("valid", valid);
    if (valid) {
      loading.value = true;
      Notify.success({
        title: "成功",
        message: "发布文章成功",
        duration: 2000,
      });

      const data = {
        content: postForm.value.content,
        title: postForm.value.title,
        description: postForm.value.content_short,
        createAt: timestamp.value,
      };

      console.log("data", data);

      // 调用 新建文章 api
      await createPost(data)
        .then(() => {
          postForm.value.status = "published";
          loading.value = false;
        })
        .catch((error) => {
          console.log("submit failed", error);
        });
    } else {
      console.log("error submit!!");
      return false;
    }
  });
}
function draftForm() {
  if (
    postForm.value.content.length === 0 ||
    postForm.value.title.length === 0
  ) {
    Notify.warning({
      message: "请填写必要的标题和内容",
    });
    return;
  }
  Notify.success({
    message: "保存成功",
    showClose: true,
    duration: 1000,
  });
  postForm.value.status = "draft";
}

// function getRemoteUserList(query) {
//   searchUser(query).then((response) => {
//     if (!response.data.items) return;
//     userListOptions.value = response.data.items.map((v) => v.name);
//   });
// }
</script>
<style lang="scss" scoped>
@import "/src/styles/mixin.scss";

.createPost-container {
  .word-counter {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 0px;
  }
}

.article-textarea ::v-deep {
  textarea {
    padding-right: 40px;
    resize: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #bfcbd9;
  }
}
</style>
