<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="项目名称" width="180" />
    <el-table-column prop="iterCount" label="迭代数" width="180" />
    <el-table-column prop="ongoing" label="进行中" />
    <el-table-column prop="blocking" label="阻塞中" />
    <el-table-column prop="completed" label="已完成" />
    <el-table-column prop="bugInfo" label="版本BUG" />
    <el-table-column prop="unsolvedBug" label="历史遗留BUG" />
    <el-table-column prop="progress" label="进度" />
  </el-table>
</template>

<script>
export default {
  name: "projectTable",
  data() {
    return {
      tableData: [
        {
          name: 'Tom',
          iterCount: 3,
          ongoing: 6,
          blocking: 1,
          completed: 1,
          bugInfo: 'Tom',
          unsolvedBug: 11,
          progress: 'Tom',
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>