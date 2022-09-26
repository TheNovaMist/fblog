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
npm run build
npm run preview
```


## TOOD

- 登录系统：当前登录组件请求的是 mock server，这个接口并没有在后端实现，
因此注释掉响应代码，不需要验证就能登录。