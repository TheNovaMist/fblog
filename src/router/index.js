import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/front/HomePage.vue";
import About from "@/pages/front/AboutPage.vue";
import Archive from "@/pages/front/ArchivePage.vue";
import Friends from "@/pages/front/FriendsPage.vue";
import Tags from "@/pages/front/TagsPage.vue";

import ArchiveByTag from "@/pages/front/ArchiveByTag.vue";
import Article from "@/pages/front/Article.vue";

import useUsersStore from "@/stores/UserStore";

export const adminRoutes = [
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    component: () => import("@/pages/back/dashboard/index.vue"),
    meta: { title: "Dashboard", icon: "dashboard" },
  },
  {
    path: "/admin/form",
    name: "Form",
    component: () => import("@/pages/back/form/index.vue"),
    meta: { title: "Form", icon: "dashboard" },
  },

  {
    path: "/admin/markdown-demo",
    name: "Markdown",
    component: () => import("@/pages/back/components-demo/markdown.vue"),
    meta: { title: "Markdown", icon: "dashboard" },
  },

  {
    path: "/admin/article",
    redirect: "/admin/article/list",
    name: "Example",
    meta: {
      title: "Example",
      icon: "el-icon-s-help",
    },
    children: [
      {
        path: "create",
        component: () => import("@/pages/back/article/create.vue"),
        name: "CreateArticle",
        meta: { title: "Create Article", icon: "edit" },
      },
      {
        path: "edit/:id(\\d+)",
        component: () => import("@/pages/back/article/edit.vue"),
        name: "EditArticle",
        meta: {
          title: "Edit Article",
          noCache: true,
          activeMenu: "/example/list",
        },
        hidden: true,
      },
      {
        path: "list",
        component: () => import("@/pages/back/article/list.vue"),
        name: "ArticleList",
        meta: { title: "Article List", icon: "list" },
      },
    ],
  },
];

const frontEndRoutes = [
  {
    path: "/404",
    component: () => import("@/pages/error-page/404.vue"),
    hidden: true,
    meta: { title: "Tab", icon: "tab" },
  },
  {
    path: "/401",
    component: () => import("@/pages/error-page/401.vue"),
    hidden: true,
    meta: { title: "Tab", icon: "tab" },
  },

  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { title: "Tab", icon: "tab" },
  },
  {
    path: "/taglist",
    name: "TagList",
    component: Tags,
    meta: { title: "Tab", icon: "tab" },
  },
  {
    path: "/friend",
    name: "Friend",
    component: Friends,
    meta: { title: "Tab", icon: "tab" },
  },
  {
    path: "/archive",
    name: "Archive",
    component: Archive,
    meta: { title: "Tab", icon: "tab" },
  },
  {
    path: "/tag/:id",
    name: "tag",
    component: ArchiveByTag,
    meta: { title: "Tab", icon: "tab" },
  },
  {
    path: "/post/:id",
    component: Article,
    meta: { title: "Tab", icon: "tab" },
  },
];

const constantRoutes = [
  ...frontEndRoutes,

  // admin routes
  { path: "/admin", name: "Admin", redirect: "/admin/dashboard" },

  ...adminRoutes,

  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/login/index.vue"),
  },

  // 404 page must be placed at the end !!!
  { path: "/:pathMatch(.*)*", redirect: "/404", hidden: true },
];

// TODO: 动态路由 根据权限
export const asyncRoutes = [];

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter({
    history: createWebHistory(),
    routes: [],
  });
  router.matcher = newRouter.matcher; // reset router
}

export const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  },
});

router.beforeEach((to, from) => {
  const usersStore = useUsersStore();
  const userToken = window.sessionStorage.getItem("token");

  // 直接访问 /login
  if (to.path.startsWith("/login")) {
    // console.log("userToken: " + userToken);

    // 如果已经登录就跳转到后台
    if (userToken) {
      return { name: "Admin" };
    }
    usersStore.isLogin();
  }

  if (to.path.startsWith("/admin")) {
    usersStore.toBlogEnd();
    // console.log("to blog back");
    // console.log("userStore.isAdmin: " + usersStore.isAdmin);

    // console.log("userToken: " + userToken);

    if (!userToken) {
      // 显示单页登录layout
      usersStore.isLogin();

      return { name: "Login" };
    }
  } else {
    usersStore.toBlogFront();
    // console.log("to blog front");
    // console.log("userStore.isAdmin: " + usersStore.isAdmin);
  }
});
