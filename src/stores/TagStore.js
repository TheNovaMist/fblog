import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { getTagList, createTag, deleteTag } from "@/api/tag";

// setup版本
export default defineStore("tagStore", () => {
  const tagList = ref([]);

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
  return { tagList, getTagList, addTag, removeTag, updateTagList };
});
