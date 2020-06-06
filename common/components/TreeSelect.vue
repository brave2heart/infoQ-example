<template>
  <div class="tree-select-wrapper">
    <div class="head-wrapper">
      <el-button size="mini"
                 :type="isStretch?'primary':''"
                 @click="stretchClicked">{{isStretch?'全部收缩':'全部展开'}}</el-button>
      <el-button size="mini"
                 :type="isSelect?'danger':''"
                 @click="selectClicked">{{isSelect?'清空':'全选'}}</el-button>
    </div>
    <el-tree ref="treeRef"
             class="tree-wrapper"
             :data="treeData"
             node-key="id"
             show-checkbox>
    </el-tree>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isStretch: false,
      isSelect: false,
      treeData: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                },
                {
                  label: '三级 1-1-2'
                }
              ]
            }]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1'
            },
            {
              label: '二级 2-2'
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1'
            },
            {
              label: '二级 3-2'
            }
          ]
        }]
    }
  },
  created () {
    this.setTreeDataNodeId(this.treeData)
  },
  methods: {
    stretchClicked () {
      this.isStretch = !this.isStretch
      // tree为Tree组件的ref值，isexpand为true或false
      this.$nextTick(() => {
        for (var i = 0; i < this.$refs.treeRef.store._getAllNodes().length; i++) {
          this.$refs.treeRef.store._getAllNodes()[i].expanded = this.isStretch
        }
      })
    },
    selectClicked () {
      this.isSelect = !this.isSelect
      this.$nextTick(() => {
        for (var i = 0; i < this.$refs.treeRef.store._getAllNodes().length; i++) {
          this.$refs.treeRef.store._getAllNodes()[i].checked = this.isSelect
        }
      })
    },
    // 给tree属性设置id
    setTreeDataNodeId (treeData) {
      var count = 1
      function travel (data) {
        data.forEach(item => {
          item.id = count
          count = count + 1
          if (item.children) {
            travel(item.children)
          }
        })
      }
      travel(treeData)
    }
  }
}
</script>
<style scoped>
.tree-select-wrapper {
  width: 600px;
}
.tree-wrapper {
  margin-top: 10px;
  margin-bottom: 10px;
}
.head-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
