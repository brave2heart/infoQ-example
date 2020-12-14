<template>
    <div class="home-wrapper">
        <h1>一、使用input标签实现六个格子验证码输入框</h1>
        <div class="six-input-box">
            <six-input-box></six-input-box>
            <el-button class="button-send">获取验证码</el-button>
        </div>
        <h1>二、Table+Pagination组件实现全选和已选功能</h1>
        <table-select></table-select>
        <h1>三、Tree组件的几种使用场景</h1>
        <h2>1、普通模式 + 全部展开/全部收缩 + 全选/清空</h2>
        <tree-select></tree-select>
        <h2>2、普通模式 + 单选</h2>
        <tree-radio></tree-radio>
        <h2>3、懒加载 + 单选</h2>
        <tree-lazy-radio></tree-lazy-radio>
        <h1>四、ZTablePaginationCtrl组件的基本使用</h1>
        <div style="margin:30px">
            <el-button size="mini" @click="isPaginationClicked">是否显示分页</el-button>
            <el-button size="mini" @click="isOperationClicked">是否显示操作栏</el-button>
        </div>
        <z-table-pagination-ctrl :tableHeader="tableHeader" :tableData="tableData" :allTotal="allTotal" :isPagination="isPagination" :isOperation="isOperation"></z-table-pagination-ctrl>
    </div>
</template>

<script>
import SixInputBox from '../../../common/components/SixInputBox.vue'
import TableSelect from '../../../common/components/TableSelect.vue'
import TreeSelect from '../../../common/components/TreeSelect.vue'
import TreeRadio from '../../../common/components/TreeRadio.vue'
import TreeLazyRadio from '../../../common/components/TreeLazyRadio.vue'
import ZTablePaginationCtrl from '../../../common/components/ZTablePaginationCtrl.vue'
export default {
  components: {
    SixInputBox,
    TableSelect,
    TreeSelect,
    TreeRadio,
    TreeLazyRadio,
    ZTablePaginationCtrl
  },
  data () {
    return {
      tableHeader: [],
      tableData: [],
      allTotal: 0,
      isPagination: true,
      isOperation: true
    }
  },
  created () {
    this.tableHeader = [
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

    this.tableData.push({
      'devname': 'Type001',
      'devid': '01211241252512CAD1235123',
      buttons: [
        {
          text: '查看',
          type: 'primary',
          size: 'mini',
          icon: 'el-icon-view'
        },
        {
          text: '编辑',
          type: 'success',
          size: 'mini',
          icon: 'el-icon-edit'
        },
        {
          text: '删除',
          type: 'danger',
          size: 'mini',
          icon: 'el-icon-delete'
        }
      ]
    })
    this.tableData.push(
      {
        'devname': 'Type002',
        'devid': '11111111111111111111111',
        buttons: [
          {
            type: 'primary',
            size: 'mini',
            icon: 'el-icon-view'
          },
          {
            type: 'success',
            size: 'mini',
            icon: 'el-icon-edit'
          },
          {
            type: 'danger',
            size: 'mini',
            icon: 'el-icon-delete'
          }
        ]
      }
    )
    this.allTotal = this.tableData.length
  },
  methods: {
    addDeviceClicked () {
    },
    isPaginationClicked () {
      this.isPagination = !this.isPagination
    },
    isOperationClicked () {
      this.isOperation = !this.isOperation
    }
  }
}
</script>
<style>
.home-wrapper {
    margin-left: 30px;
    height: 100vh;
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
