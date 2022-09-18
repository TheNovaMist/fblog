/** FIXME: router?
 *
 */
import { asyncRoutes, adminRoutes as constantRoutes } from "@/router/index";
import { defineStore } from "pinia";

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role));
  } else {
    return true;
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = [];

  routes.forEach((route) => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });

  return res;
}

export const useRouteStore = defineStore("permission", {
  state: () => ({
    routes: [],
    addRoutes: [],
  }),

  actions: {
    generateRoutes(roles) {
      return new Promise((resolve) => {
        let accessedRoutes;
        if (roles.includes("admin")) {
          accessedRoutes = asyncRoutes || [];
          console.log(" admin............");
        } else {
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);

          console.log("not admin............");
        }

        console.log(accessedRoutes);
        this.SET_ROUTES(accessedRoutes);
        resolve(accessedRoutes);
      });
    },

    // mutations in vue
    SET_ROUTES(routes) {
      // FIXME: routes undefined
      // this.addRoutes = routes;

      // this.routes = constantRoutes.concat(routes);
      // FIXME: just use constantRoutes

      console.log(constantRoutes);
      this.routes = constantRoutes;
    },
  },
});
