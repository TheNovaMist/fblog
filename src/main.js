import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// element plus
import ElementPlus from "element-plus";

// 后引入防止 tailwindcss 覆盖 特别是 button
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";

// element plus icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// vue-router
import { router } from "./router/index";

// 代码高亮
import "highlight.js/styles/atom-one-dark.css";

// pinia
import { createPinia } from "pinia";
import Vuex from "vuex";

const pinia = createPinia();

// v-md-editor

import VMdEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";

// Prism
import Prism from "prismjs";
// highlight code
import "prismjs/components/prism-json";

// svg-icon
import SvgIcon from "@/components/SvgIcon/index.vue";

VMdEditor.use(vuepressTheme, {
  Prism,
});

const app = createApp(App);

// 注册Icons 全局组件
for (const iconName in ElementPlusIconsVue) {
  app.component(iconName, ElementPlusIconsVue[iconName]);
}

app.component(SvgIcon);

app
  .use(ElementPlus)
  .use(pinia)
  .use(router)
  .use(Vuex)
  .use(VMdEditor)
  .mount("#app");
