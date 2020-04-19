<template>
  <div class="login-page">
    <span>
      <el-button @click="loginClicked">登录</el-button>
      <el-button>注册</el-button>
    </span>
  </div>
</template>
<script>
export default {
  data () {
    return {}
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
</style>
