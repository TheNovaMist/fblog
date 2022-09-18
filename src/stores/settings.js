import variables from "@/styles/element-variables.scss";
import defaultSettings from "@/settings";

import { defineStore } from "pinia";

const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings;

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    theme: variables.theme,
    showSettings: showSettings,
    tagsView: tagsView,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo,
  }),

  actions: {
    changeSetting(data) {
      this.CHANGE_SETTING(data);
    },

    // mutations in vuex
    // state, id -> (this), id

    CHANGE_SETTING({ key, value }) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.hasOwnProperty(key)) {
        this[key] = value;
      }
    },
  },
});
