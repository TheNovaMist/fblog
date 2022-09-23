import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

// setup版本
export default defineStore("tagStore", () => {
  let tagList = ref([]);
  const getTagList = computed(() => tagList.value);
  async function fetchTagList() {
    try {
      const data = await axios.get("http://127.0.0.1:8080/tag");
      // 变为响应式要用 .value
      tagList.value = data.data;

      console.log(tagList.value);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

  async function addTag(newTag) {
    tagList.value = [newTag, ...tagList.value];

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    console.log(newTag);

    // 添加到数据库;
    try {
      const data = await axios.post(
        "http://127.0.0.1:8080/tag",
        {
          title: newTag.title,
          slug: newTag.slug,
        },
        headers
      );
      // 变为响应式要用 .value
      // 没有同步数据 默认没有问题
      // tagList.value = data.data;

      console.log(data.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

  async function deleteTag(slug) {
    tagList.value = tagList.value.filter((item) => item.slug != slug);

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const requestBody = {
      slug: slug,
    };

    console.log(slug);

    // 从数据库中删除;
    try {
      await axios.delete("http://127.0.0.1:8080/tag", {
        data: requestBody,
        headers: headers,
      });
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }
  return { tagList, getTagList, addTag, deleteTag, fetchTagList };
});
