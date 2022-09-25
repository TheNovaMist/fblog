import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { getTagList, createTag, deleteTag } from "@/api/tag";
import { getPostTags } from "../api/tag";

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
   * 更新当前文章标签
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
  return {
    tagList,
    getTagList,
    postTags,
    postId,
    addTag,
    usePost,
    removeTag,
    updateTagList,
  };
});
