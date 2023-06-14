<template>
  <div class="login-container">
    <!-- 登录页导航栏 navbar -->
    <van-nav-bar title="头条登录" />

    <!-- 用户名和密码 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="userFormRules.username"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="userFormRules.password"
      />
      <!-- 提交按钮 -->
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>

    <!-- 添加router-link 跳转到注册 -->
    <router-link class="link" to="/register">注册账号</router-link>
  </div>
</template>

<script>
import { loginAPI } from '@/api/user'
import { setToken } from '@/utils/storage'
export default {
  name: 'LoginIndex',
  data() {
    return {
      username: 'zhousg',
      password: '123456',
      // 用户名和密码校验规则
      userFormRules: {
        username: [
          { required: true, message: '请填写用户名' },
          { pattern: /^\w{5,}$/, message: '用户名至少包含5个字符' }
        ],
        password: [
          { required: true, message: '请填写密码' },
          { pattern: /^\w{6,}$/, message: '密码至少包含6个字符' }
        ]
      }
    }
  },
  methods: {
    async onSubmit(values) {
      const { data } = await loginAPI(values)

      // 拿到token保存到本地 -- 在utils里封装好了
      setToken(data.token)
      this.$toast.success('登录成功')
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
