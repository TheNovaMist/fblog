import { login, logout, getInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { router, resetRouter } from "@/router";

import { defineStore } from "pinia";

import { useRouteStore } from "@/stores/permission";

export const useUsersStore = defineStore("users", {
  setup() {
    let routeStore = useRouteStore();

    return {
      routeStore,
    };
  },
  state: () => ({
    toLogin: false,
    isAdmin: false,
    token: getToken(),
    name: "",
    avatar: "",
    introduction: "",
    roles: [],
  }),

  actions: {
    toBlogFront() {
      this.isAdmin = false;
    },

    toBlogEnd() {
      this.isAdmin = true;
    },

    isLogin() {
      this.toLogin = true;
    },
    notLogin() {
      this.toLogin = false;
    },

    // user login
    login(userInfo) {
      // 传过来的也是一个 ref
      const { username, password } = userInfo.value;
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password })
          .then((response) => {
            const { data } = response;
            this.SET_TOKEN(data.token);
            setToken(data.token);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    logout() {
      return new Promise((resolve, reject) => {
        logout(this.token)
          .then(() => {
            this.SET_TOKEN("");
            this.SET_ROLES([]);
            removeToken();
            resetRouter();

            // reset visited views and cached views
            // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
            // dispatch("tagsView/delAllViews", null, { root: true });

            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // remove token
    resetToken() {
      return new Promise((resolve) => {
        this.SET_TOKEN("");
        this.SET_ROLES([]);
        removeToken();
        resolve();
      });
    },

    // dynamically modify permissions
    async changeRoles({ dispatch }, role) {
      const token = role + "-token";

      this.SET_TOKEN(token);
      setToken(token);

      const { roles } = await dispatch("getInfo");

      resetRouter();

      // generate accessible routes map based on roles
      const accessRoutes = await this.routeStore.generateRoutes(roles, {
        root: true,
      });

      // await dispatch("permission/generateRoutes", roles, {
      //   root: true,
      // });
      // dynamically add accessible routes
      router.addRoutes(accessRoutes);

      // reset visited views and cached views
      // dispatch("tagsView/delAllViews", null, { root: true });
    },

    // mutations in vuex
    // state, id -> (this), id

    SET_TOKEN(token) {
      this.token = token;
    },
    SET_INTRODUCTION(introduction) {
      this.introduction = introduction;
    },
    SET_NAME(name) {
      this.name = name;
    },
    SET_AVATAR(avatar) {
      this.avatar = avatar;
    },
    SET_ROLES(roles) {
      this.roles = roles;
    },
  },
});
