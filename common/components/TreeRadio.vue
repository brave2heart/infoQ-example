<template>
  <div class="tree-radio-wrapper">
    <el-tree ref="tree"
             class="tree-wrapper"
             node-key="id"
             :data="treeData"
             :default-expand-all="true"
             @node-click="nodeClicked">
      <span class="node-wrapper"
            slot-scope="{node,data}">
        <span>{{data.label}}</span>
        <i v-if="node.checked"
           class="el-icon-check"
           style="color:#409EFF"></i>
      </span>
    </el-tree>
  </div>
</template>
<script>
export default {
  data () {
    return {
      props: {
        label: 'label',
        children: 'children',
        isLeaf: 'leaf'
      },
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
    nodeClicked (data, node) {
      this.$refs.tree.setCheckedKeys([])
      this.$refs.tree.store.currentNode.checked = true
    },
    // 给tree属性设置id
    setTreeDataNodeId (treeData) {
      var count = 1
      function traverse (data) {
        data.forEach(item => {
          item.id = count
          count = count + 1
          if (item.children && item.children.length > 0) {
            traverse(item.children)
          }
        })
      }
      traverse(treeData)
    }
  }
}
</script>
<style scoped>
.tree-radio-wrapper {
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
.node-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
