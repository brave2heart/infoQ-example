<template>
  <div class="tree-select-wrapper">
    <el-tree ref="tree"
             class="tree-wrapper"
             node-key="id"
             :props="props"
             :load="loadNode"
             @node-click="nodeClicked"
             lazy>
      <span class="node-wrapper"
            slot-scope="{node,data}">
        <span>{{data.label}}</span>
        <i v-if="data.isChecked"
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
      }
    }
  },
  methods: {
    loadNode (node, resolve) {
      // 初始化数据
      if (node.level === 0) {
        this.treeData = [{
          label: 'lazy-' + (node.level + 1),
          isChecked: false,
          children: []
        }]
        resolve(this.treeData)
        this.setTreeDataNodeId(this.treeData)
        return
      }
      setTimeout(() => {
        const data = [
          {
            label: 'lazy-1-' + node.level,
            isChecked: false,
            children: []
          },
          {
            label: 'lazy-1-2',
            isChecked: false,
            children: [],
            leaf: true

          }]
        node.data.children = data
        resolve(data)
        this.setTreeDataNodeId(this.treeData)
      }, 500)
    },
    nodeClicked (data, node) {
      this.setTreeDataNodeCheckedAllFalse(this.treeData)
      data.isChecked = true
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
    },
    setTreeDataNodeCheckedAllFalse (treeData) {
      function traverse (data) {
        data.forEach(item => {
          item.isChecked = false
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
.node-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
