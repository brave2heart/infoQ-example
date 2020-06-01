<template>
  <div class="table-select-wrapper">
    <div class="head-wrapper">
      <span>{{`已选 ${selectedLampsNum} 用户`}}</span>
      <el-button @click="selectAllClicked">全选</el-button>
    </div>
    <el-table ref="multipleTable"
              class="table"
              :data="tableData"
              @select="handleSelectionChange"
              @select-all="handleSelectionChange"
              border>
      <el-table-column type="selection"
                       align="center"
                       width="55">
      </el-table-column>
      <el-table-column label="序号"
                       align="center"
                       prop="index"
                       width="60">
      </el-table-column>
      <el-table-column label="日期"
                       align="center"
                       width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       align="center"
                       width="120">
      </el-table-column>
      <el-table-column prop="address"
                       label="地址"
                       align="center"
                       show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <el-pagination class="pagination"
                   layout="total, sizes, prev, pager, next, jumper"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page.sync="currentPage"
                   :page-sizes="[10, 20, 30]"
                   :page-size="pageSize"
                   :total="total"
                   background>
    </el-pagination>
  </div>
</template>
<script>

export default {
  data () {
    return {
      radioValue: '',
      tableData: [],
      multipleSelection: [],
      selectData: [],
      currentPage: 1,
      pageSize: 10,
      selectedLampsNum: 0,
      isSelectAll: false,
      total: 50

    }
  },
  created () {
    this.getTableData()
  },
  methods: {
    selectAllClicked () {
      this.isSelectAll = !this.isSelectAll
      this.selectedLampsNum = this.total
      this.selectAllUser()
    },
    selectAllUser () {
      if (this.isSelectAll) {
        this.$nextTick(() => {
          this.tableData.forEach(item => {
            this.$refs.multipleTable.toggleRowSelection(item, true)
          })
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleCurrentChange (value) {
      this.currentPage = value
      this.getTableData()
    },
    handleSizeChange (value) {
      this.pageSize = value
      this.getTableData()
    },
    getTableData () {
      this.tableData = []
      for (let index = 0; index < 10; index++) {
        this.tableData.push({
          index: (this.currentPage - 1) * this.pageSize + index + 1,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        })
      }
      // 全选
      this.selectAllUser()
      // 设置已勾选状态
      if (this.selectData[this.currentPage - 1] !== undefined) {
        var selectUserList = this.selectData[this.currentPage - 1]
        this.$nextTick(() => {
          this.tableData.forEach(item => {
            selectUserList.forEach(user => {
              if (item.index === user.index) {
                this.$refs.multipleTable.toggleRowSelection(item, true)
              }
            })
          })
        })
      }
    },
    handleSelectionChange (value) {
      this.selectedLampsNum = 0
      this.selectData[this.currentPage - 1] = value
      this.selectData.forEach(item => {
        this.selectedLampsNum = this.selectedLampsNum + item.length
      })
    }
  }
}
</script>
<style scoped>
.table-select-wrapper {
  width: 600px;
}
.head-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.table {
  width: 600px;
  margin-top: 10px;
}
.pagination {
  margin-top: 10px;
}
</style>
