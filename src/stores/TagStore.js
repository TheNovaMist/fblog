import { defineStore } from "pinia";
import { ref } from "vue";

import {
  getTagList,
  createTag,
  deleteTag,
  updatePostTags,
  getPostTags,
} from "@/api/tag";

// setup版本
export default defineStore("tagStore", () => {
  const tagList = ref([]);

  const postId = ref();
  const postTags = ref([]);

  /**
   * 更新标签列表
   * 调用 /api/tag
   */
  async function updateTagList() {
    await getTagList()
      .then((data) => {
        tagList.value = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function addTag(newTag) {
    await createTag(newTag)
      .then(() => {
        // 更新标签列表
        updateTagList();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function removeTag(slug) {
    await deleteTag({ slug: slug })
      .then(() => {
        // 更新标签列表
        updateTagList();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * 获取当前文章标签
   */
  async function usePost(id) {
    postId.value = id;

    await getPostTags({ id: id })
      .then((data) => {
        postTags.value = data;
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("update Post, id: ", id, "postTags: ", postTags.value);
  }

  /**
   * 更新当前文章标签
   */
  async function setPostTags(tags) {
    // 封装数据
    let data = {
      pid: postId.value,
      tags: tags.map((t) => {
        let tag = {
          title: t,
          slug: t,
        };
        return tag;
      }),
    };

    console.log("request data: ", data);

    await updatePostTags(data)
      .then(async () => {
        // 重新获取列表
        await usePost(postId.value);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return {
    tagList,
    postTags,
    postId,

    setPostTags,
    addTag,
    usePost,
    removeTag,
    updateTagList,
  };
});
