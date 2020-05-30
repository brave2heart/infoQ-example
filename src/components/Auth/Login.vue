<template>
  <div class="login-page">
    <div class="login-content">
      <el-input v-model="username"
                placeholder="请输入用户名"></el-input>
      <el-input class="input-password"
                v-model="password"
                placeholder="请输入用密码"></el-input>
      <el-button class="button-login"
                 @click="loginClicked">登录</el-button>

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginClicked () {
      this.$router.push('/Home')
    }
  }
}
</script>
<style scoped>
.login-page {
  display: flex;
  justify-self: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: cornflowerblue;
}
.login-content {
  width: 260px;
  position: absolute;
  top: 50%;
  left: 50%;
}
.input-password {
  margin-top: 10px;
  margin-bottom: 10px;
}
.button-login {
  width: 260px;
}
</style>
