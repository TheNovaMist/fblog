import request from "@/utils/request";

export function getTagList() {
  return request({
    url: "/v2/api/tag",
    method: "get",
  });
}

export function createTag(data) {
  return request({
    url: "/v2/api/tag",
    method: "post",
    data,
  });
}

export function deleteTag(data) {
  return request({
    url: "/v2/api/tag",
    method: "delete",
    data,
  });
}
export function getPostTags(data) {
  return request({
    url: "/v2/api/getPostTag",
    method: "post",
    data,
  });
}
