<template>
    <div class="table-pagination-area-wrapper" :style="tablePaginationAreaWrapperStyle">
        <div class="table-wrapper">
            <el-table ref="multipleTable" :data="tableList" @selection-change="handleSelectionChange" border :style="tableListStyle">
                <el-table-column v-for="(item,index) in tableHeader" :key="index" :label="item.label" :prop="item.prop" :width="item.width" :type="item.type" :align="item.align"></el-table-column>
                <el-table-column v-if="isOperation" label="操作" align="center" width="300px">
                    <template slot-scope="scope">
                        <el-button v-for="(button,index) in scope.row.buttons" :key="index" class="operation-button" :type="button.type" :size="button.size" :icon="button.icon" :disabled="button.disabled" @click="tableButtonClicked(index,scope.$index, scope.row)">
                            <span v-if="button.text">{{button.text}}</span>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div v-if="isPagination" class="pagination-wrapper">
            <div class="pagination-content">
                <div class="pagination">
                    <el-pagination ref="paginationRef" :total="total" :current-page.sync="paginationCurrentPage" :page-sizes="[10, 20, 30, 40, 50]" :page-size="paginationPageSize" :layout="layout" @current-change="paginationCurrentChange" @size-change="paginationSizeChange" background></el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    tableWidth: {
      type: String,
      default: '100%'
    },
    tableHeight: {
      type: String,
      default: '100%'
    },
    tableOverflowY: {
      type: String,
      default: 'hidden'
    },
    // 表格表头数据，动态设置
    tableHeader: {
      type: Array,
      default: () => [
        {
          label: '',
          prop: '',
          width: '60',
          type: 'selection',
          align: 'center'
        },
        {
          label: '序号',
          prop: 'index',
          width: '60',
          type: '',
          align: 'center'
        },
        {
          label: '设备名称',
          prop: 'devname',
          width: '',
          align: 'center',
          type: ''
        },
        {
          label: '设备id',
          prop: 'devid',
          width: '',
          align: 'center',
          type: ''
        }
      ]
    },
    // 表格数据
    tableData: {
      type: Array
    },
    // 分页样式
    layout: {
      type: String,
      default: 'prev,pager, next, jumper, total,sizes'
    },
    // 总条数
    allTotal: {
      type: Number
    },
    // 是否显示操作栏
    isOperation: {
      type: Boolean,
      default: true
    },
    // 是否需要分页功能
    isPagination: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    tableData: {
      handler (newVal) {
        this.initTableList(newVal)
      }
    },
    allTotal: {
      handler (newVal) {
        this.total = newVal
      }
    },
    paginationCurrentPage: {
      handler (newVal, oldVal) {
        // 当total的值发生改变，当前页数有可能会发生改变，此时，需要同步更新父组件之前获取的当前页的值
        this.$emit('paginationCurrentChange', newVal)
      },
      deep: true
    }
  },
  computed: {
    tablePaginationAreaWrapperStyle () {
      return {
        width: this.tableWidth
      }
    },
    tableListStyle () {
      return {
        height: this.tableHeight,
        overflowY: this.tableOverflowY,
        overflowX: 'hidden'
      }
    }
  },
  created () {
    this.tableData && this.initTableList(this.tableData)
    this.total = this.allTotal
  },
  data () {
    return {
      tableList: [],
      total: 0,
      paginationCurrentPage: 1,
      paginationPageSize: 10
    }
  },
  methods: {
    initTableList (data) {
      this.tableList = []
      for (let i = 0; i < data.length; i++) {
        data[i].index = (this.paginationCurrentPage - 1) * this.paginationPageSize + i + 1
        this.tableList.push(data[i])
      }
      this.$nextTick(() => {
        this.tableList.forEach(item => {
          // toggleRowSelection(row, selected)方法接受两个参数，row传递被勾选行的数据，selected设置是否选中
          item.isSelect && this.$refs.multipleTable.toggleRowSelection(item, true)
        })
      })
    },
    handleSelectionChange (value) {
      this.$emit('handleSelectionChange', value)
    },
    tableButtonClicked (buttonIndex, tableIndex, row) {
      this.$emit('tableButtonClicked', { buttonIndex: buttonIndex, tableIndex: tableIndex, row: row })
    },
    clearSelection () {
      this.$refs.multipleTable.clearSelection()
    },
    paginationCurrentChange (value) {
      this.paginationCurrentPage = value
      this.$emit('paginationCurrentChange', value)
    },
    paginationSizeChange (value) {
      this.paginationPageSize = value
      this.$emit('paginationSizeChange', value)
    }
  }
}
</script>
<style scoped>
.table-pagination-area-wrapper {
    height: 100%;
}
.pagination-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 22px;
    padding-top: 9px;
    padding-bottom: 9px;
    border-left: 1px solid #ebeef5;
    border-right: 1px solid #ebeef5;
    border-bottom: 1px solid #ebeef5;
}
.pagination-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 11px;
}
.pagination {
    margin-right: 12px;
    text-align: left;
}
</style>
<style>
.pagination-wrapper .pagination-content .pagination .el-pagination__total {
    margin-left: 15px !important;
}
</style>
