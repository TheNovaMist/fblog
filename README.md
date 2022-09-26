# Fblog

## Dev

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Usage

1. 启动 Spring Boot 后端接口

```bash
java -jar ./api/app.jar
```

2. 构建项目并预览

```bash
npm install
npm run build
npm run preview
```

## 项目结构

>pages 路由中切换的页面
>
>- front
>- back
>
>components 路由页面中使用的公用组件
>
>layout 前后台模板
>
>- components 子组件


## 依赖
- vue3 + vite 创建项目
- element-plus 组件库
- vue-router 路由
- pinia 全局状态管理
- tailwindcss 命名类样式

- axios 请求后端(封装成 request.js)
- marked 解析 Markdown
- mockjs 测试数据
- sass 兼容用样式


## TOOD

- [ ] 登录系统：当前登录组件请求的是 mock server，这个接口并没有在后端实现，
因此注释掉响应的**登录**、**注销**代码，不需要验证就能登录。

- [ ] 优化 401 404 页面，能否保留 原有 layout ?

- [ ] 更好的文章样式

