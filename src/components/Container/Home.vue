<template>
  <div class="home-wrapper">
    <p>一、使用input标签实现六个格子验证码输入框</p>
    <div class="six-input-box">
      <six-input-box></six-input-box>
      <el-button class="button-send">获取验证码</el-button>
    </div>
  </div>
</template>

<script>
import SixInputBox from '../../../common/components/SixInputBox.vue'
export default {
  components: {
    SixInputBox
  }
}
</script>
<style>
.home-wrapper {
  margin-left: 30px;
}
.six-input-box {
  display: flex;
  flex-direction: row;
  height: 50px;
}
.button-send {
  margin-left: 20px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  position: absolute;
  color: #333;
}
</style>
