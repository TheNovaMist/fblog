<template>
  <div class="login-container">
    <el-form
      ref="loginRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          type="text"
          tabindex="1"
          autocomplete="off"
        />
      </el-form-item>

      <el-tooltip
        v-model="capsTooltip"
        content="Caps lock is On"
        placement="right"
        manual
      >
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="off"
            @keyup="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            show-pwd
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="handleLogin"
        >Login</el-button
      >

      <div style="position: relative">
        <div class="tips">
          <span>Username : admin</span>
          <span>Password : any</span>
        </div>
        <div class="tips">
          <span style="margin-right: 18px">Username : editor</span>
          <span>Password : any</span>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { validUsername } from "@/utils/validate";
import { onMounted, ref, nextTick } from "vue";
import useUsersStore from "@/stores/UserStore";

import { useRouter } from "vue-router";

// router
const router = useRouter();

// user store
const userStore = useUsersStore();

// validator
const validateUsername = (rule, value, callback) => {
  if (!validUsername(value)) {
    callback(new Error("Please enter the correct user name"));
  } else {
    callback();
  }
};
const validatePassword = (rule, value, callback) => {
  if (value.length < 6) {
    callback(new Error("The password can not be less than 6 digits"));
  } else {
    callback();
  }
};

const loginForm = ref({
  username: "admin",
  password: "111111",
});

const loginRules = ref({
  username: [{ required: true, trigger: "blur", validator: validateUsername }],
  password: [{ required: true, trigger: "blur", validator: validatePassword }],
});

const passwordType = ref("password");

const capsTooltip = ref(false);
const loading = ref(false);
const redirect = ref();
const otherQuery = ref({});

// ref ??????
const username = ref();
const password = ref();
const loginRef = ref();

// userStore

onMounted(() => {
  // ???????????? ?????? .value.focus()
  if (loginForm.value.username === "") {
    username.value.focus();
  } else if (loginForm.value.password === "") {
    password.value.focus();
  }
});

// methods

function checkCapslock(e) {
  const { key } = e;
  capsTooltip.value = key && key.length === 1 && key >= "A" && key <= "Z";
}

// ????????????
function showPwd() {
  if (passwordType.value === "password") {
    passwordType.value = "";
  } else {
    passwordType.value = "password";
  }
  nextTick(() => {
    password.value.focus();
  });
}
function handleLogin() {
  loginRef.value.validate((valid) => {
    if (valid) {
      // console.log("submit success!");

      loading.value = true;
      // userStore.login(loginForm)

      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Success!"); // Yay! Everything went well!
        }, 250);
      })
        .then(() => {
          window.sessionStorage.setItem("token", "res.token");
          // console.log(redirect.value || "/admin/");
          router.push({
            path: redirect.value || "/admin/",
            query: otherQuery.value,
          });
          loading.value = false;

          // ????????????login-layout?????????admin-layout
          userStore.notLogin();
        })
        .catch((error) => {
          console.log("something wrong happen. :(");
          console.log(error);
          loading.value = false;
        });
    } else {
      console.log("error submit!!");
      return false;
    }
  });
}

// function getOtherQuery(query) {
//   return Object.keys(query).reduce((acc, cur) => {
//     if (cur !== "redirect") {
//       acc[cur] = query[cur];
//     }
//     return acc;
//   }, {});
// }
</script>

<script>
export default {
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          // this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true,
    },
  },
  mounted() {
    console.log(`
******************** NOTICE ********************
*This LOGIN page request mock server api,  
*but the truely backend api HAS NOT implement LOGIN API yet.
*So the function of auth login has been disabled. :)
************************************************
          `);
  },
};
</script>

<style lang="scss">
/* ??????input ??????????????? ??????????????? */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    // display: inline-block;
    height: 47px;
    width: 85%;

    .el-input__wrapper {
      padding: 0;
    }

    input {
      background: $bg;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      // padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
