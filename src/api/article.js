import request from "@/utils/request";

export function fetchList(query) {
  return request({
    url: "/api/article/list",
    method: "get",
    params: query,
  });
}

export function fetchArticle(id) {
  return request({
    url: "/api/article/detail",
    method: "get",
    params: { id },
  });
}

export function fetchPv(pv) {
  return request({
    url: "/api/article/pv",
    method: "get",
    params: { pv },
  });
}

export function createArticle(data) {
  return request({
    url: "/api/article/create",
    method: "post",
    data,
  });
}

export function updateArticle(data) {
  return request({
    url: "/api/article/update",
    method: "post",
    data,
  });
}

export function getPostList(data) {
  return request({
    url: "/v2/api/post",
    method: "get",
    data,
  });
}

export function getPostListByTag(tid) {
  return request({
    url: "/v2/api/tag/" + tid,
    method: "get",
  });
}

export function getPostById(id) {
  return request({
    url: "/v2/api/post/" + id,
    method: "get",
  });
}

export function getTagList() {
  return request({
    url: "/v2/api/tag",
    method: "get",
  });
}

export function createPost(data) {
  return request({
    url: "/v2/api/post",
    method: "post",
    data,
  });
}

export function deletePost(id) {
  return request({
    url: "/v2/api/post/" + id,
    method: "delete",
  });
}

export function updatePost(id, data) {
  return request({
    url: "/v2/api/post/" + id,
    method: "put",
    data,
  });
}
