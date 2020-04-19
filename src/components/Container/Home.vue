<template>
  <div>
    <el-button @click="addClicked">添加设备</el-button>
    <el-dialog  title="添加设备" :visible.sync="addVisible">
      <div>
        <el-table :data="data">
          <el-table-column prop="index" label="序号">
          </el-table-column>
          <el-table-column prop="id" label="设备id"></el-table-column>
        </el-table>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      addVisible: false
    }
  },
  created () {
    for (let index = 0; index < 10; index++) {
      this.data.push({
        index: index,
        id: 'xxxxxxx'
      })
    }
  },
  methods: {
    addClicked () {
      this.addVisible = true
    }
  }
}
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
