<template>
  <div class="register-page">
    <van-nav-bar title="头条注册" />
    <!-- 用户密码 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="registerRules.username"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="registerRules.password"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"
          >注册</van-button
        >
      </div>
      <!-- 跳转到登录页面 -->
      <router-link class="link" to="/login">已有账号，去登录</router-link>
    </van-form>
  </div>
</template>

<script>
import { registerAPI } from '@/api/user'
export default {
  name: 'RegisterIndex',
  data() {
    return {
      username: '',
      password: '',

      registerRules: {
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
      this.$toast.loading({
        message: '努力加载中...',
        forbidClick: true
      })
      // 如果注册成功
      try {
        await registerAPI(values)
        this.$toast.success('注册成功')
        // 跳转到登录页
        this.$router.push('/login')
      } catch (error) {
        // 如果失败
        this.$toast.fail('注册失败')
      }
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
