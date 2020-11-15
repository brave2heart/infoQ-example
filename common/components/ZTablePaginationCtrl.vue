<template>
  <div class="table-pagination-area-wrapper">
    <div class="table-wrapper">
      <el-table :data="tableList"
                @selection-change="handleSelectionChange"
                border>
        <div v-for="(item,index) in tableHeader"
             :key="index">
          <el-table-column :label="item.label"
                           :prop="item.prop"
                           :width="item.width"
                           :type="item.type"
                           :align="item.align"></el-table-column>
        </div>
        <el-table-column v-for="item in tableHeader"
                         :key="item"
                         :label="item.label"
                         :prop="item.prop"
                         :width="item.width"
                         :type="item.type"
                         :align="item.align"></el-table-column>
        <el-table-column label="操作"
                         align="center"
                         width="350px">
          <template slot-scope="scope">
            <el-button v-for="(button,index) in scope.row.buttons"
                       :key="index"
                       :type="button.type"
                       :size="button.size"
                       :icon="button.icon"
                       :disabled="button.disabled"
                       @click="tableButtonClicked(index,scope.$index, scope.row)">
              <span v-if="button.text">{{button.text}}</span>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-wrapper">
      <div class="pagination-content">
        <div class="pagination">
          <el-pagination :total="total"
                         :current-page.sync="paginationCurrentPage"
                         :page-sizes="[10, 20, 30, 40, 50]"
                         :page-size="paginationPageSize"
                         layout="prev,pager, next, jumper, total,sizes"
                         @current-change="paginationCurrentChange"
                         @size-change="paginationSizeChange"
                         background></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
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
    tableData: {
      type: Array
    },
    allTotal: {
      type: Number
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
    }
  },
  data () {
    return {
      tableList: [],
      total: 0,
      paginationCurrentPage: 1,
      paginationPageSize: 10
    }
  },
  created () {
    console.log("created -> this.tableData", this.tableData)
    this.initTableList(this.tableData);
  },
  methods: {
    initTableList (data) {
      console.log("initTableList -> data", data)
      this.tableList = []
      for (let i = 0; i < data.length; i++) {
        data[i].index = i + 1
        this.tableList.push(data[i])
      }
    },
    tableButtonClicked (buttonIndex, tableIndex, row) {
      this.$emit('tableButtonClicked', { buttonIndex: buttonIndex, tableIndex: tableIndex, row: row })
    },
    paginationCurrentChange (value) {
      this.$emit('paginationCurrentChange', value)
    },
    paginationSizeChange (value) {
      this.$emit('paginationSizeChange', value)
    },
    handleSelectionChange () {

    }
  }
}
</script>
<style scoped>
.table-pagination-area-wrapper {
  width: 100%;
  height: 100%;
}
.table-wrapper {
  margin-left: 22px;
  margin-right: 22px;
}
/* .operation-wrapper .el-button + .el-button {
    margin-left: 5px !important;
} */
.pagination-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 22px;
  margin-right: 22px;
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