import request from "@/utils/request";

export function getTagList() {
  return request({
    url: "/api/tag",
    method: "get",
  });
}

export function createTag(data) {
  return request({
    url: "/api/tag",
    method: "post",
    data,
  });
}

export function deleteTag(data) {
  return request({
    url: "/api/tag",
    method: "delete",
    data,
  });
}
