<template>
  <div class="about">
    <el-row class="flex justify-center">
      <el-col :span="20" class="bg-white">
        <h2>ehllo</h2>
        <div class="statement">
          <div class="item">fblog vue3 版本</div>
          <div class="item">vue3 element-plus vue-router tailwindcss</div>
        </div>
        <div class="statement">
          <div class="item">架构</div>
          <div class="item">采用前后端分离的模式</div>
          <div class="item">后端使用 spring boot 提供接口</div>
        </div>

        <el-card shadow="always">
          <template #header>特色功能</template>
          <div class="item">架构</div>
          <div class="item">采用前后端分离的模式</div>
          <div class="item">后端使用 spring boot 提供接口</div>
        </el-card>

        <h2>留言</h2>
        <el-card shadow="always">
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :size="formSize"
            :rules="rules"
          >
            <el-form-item label="昵称" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="ruleForm.email" />
            </el-form-item>
            <el-form-item label="评论" prop="comment">
              <el-input v-model="ruleForm.comment" type="textarea" />
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >提交</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

const ruleFormRef = ref("");
const formSize = ref("default");
const ruleForm = ref({
  name: "Hello",
  email: "",
  comment: "",
});

const rules = ref({
  name: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "change",
    },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],

  email: [
    {
      type: "email",
      required: true,
      message: "请输入正确的地址",
      trigger: "change",
    },
  ],
  comment: [
    {
      required: true,
      message: "请输入内容",
      trigger: "blur",
    },
  ],
});

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style>
.statement {
  border-left: 3px solid #f56c6c;
  padding: 20px;
  background-color: #ebeef5;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
