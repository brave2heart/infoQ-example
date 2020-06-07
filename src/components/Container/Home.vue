<template>
  <div class="home-wrapper">
    <p>一、使用input标签实现六个格子验证码输入框</p>
    <div class="six-input-box">
      <six-input-box></six-input-box>
      <el-button class="button-send">获取验证码</el-button>
    </div>
    <p>二、Table+Pagination组件实现全选和已选功能</p>
    <table-select></table-select>
    <p>三、Tree组件的几种使用场景</p>
    <p>1、普通模式 + 全部展开/全部收缩 + 全选/清空</p>
    <tree-select></tree-select>
    <p>2、普通模式 + 单选</p>
    <tree-radio></tree-radio>
    <p>3、懒加载 + 单选</p>
    <tree-lazy-radio></tree-lazy-radio>
  </div>
</template>

<script>
import SixInputBox from '../../../common/components/SixInputBox.vue'
import TableSelect from '../../../common/components/TableSelect.vue'
import TreeSelect from '../../../common/components/TreeSelect.vue'
import TreeRadio from '../../../common/components/TreeRadio.vue'
import TreeLazyRadio from '../../../common/components/TreeLazyRadio.vue'
export default {
  components: {
    SixInputBox,
    TableSelect,
    TreeSelect,
    TreeRadio,
    TreeLazyRadio
  },
  methods: {
    addDeviceClicked () {

    }
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
