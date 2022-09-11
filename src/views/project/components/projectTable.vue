<template>
  <el-table :data="tableData" style="width: 100%" highlight-current-row>
    <template #empty>
      <el-empty description="无数据"/>
    </template>
<!--    <el-table-column type="selection" align="center"></el-table-column>-->

    <el-table-column prop="name" label="项目名称" min-width="120" align="center" show-overflow-tooltip>
      <template #default="scope">
<!--        <a :href="scope.row.name">{{ scope.row.name }}</a>-->
        <router-link to="/project/1/subsystem">{{ scope.row.name }}</router-link>
      </template>
    </el-table-column>

    <el-table-column prop="iterCount" label="迭代数" align="center"></el-table-column>
    <el-table-column prop="ongoing" label="进行中" align="center"></el-table-column>
    <el-table-column prop="blocking" label="阻塞中" align="center"></el-table-column>
    <el-table-column prop="completed" label="已完成" align="center"></el-table-column>

    <el-table-column prop="bugInfo" label="版本BUG" width="180" align="center">
      <template #default="scope">
        <el-tag class="ml" type="danger">未解决：{{ scope.row.bugInfo }}</el-tag>
        <el-tag class="ml" type="warning">已创建：{{ scope.row.bugInfo }}</el-tag>
        <el-tag class="ml" type="info">已解决：{{ scope.row.bugInfo }}</el-tag>
        <el-tag class="ml" type="success">已关闭：{{ scope.row.bugInfo }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column prop="unsolvedBug" label="历史遗留BUG" align="center"></el-table-column>

    <el-table-column prop="progress" label="进度" width="180" align="center">
      <template #default="scope">
        <el-progress :percentage="scope.row.progress" status="success"/>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "projectTable",
  data() {
    return {
      tableData: [
        {
          name: '定位ssssssss',
          iterCount: 3,
          ongoing: 6,
          blocking: 1,
          completed: 1,
          bugInfo: 6,
          unsolvedBug: 11,
          progress: 50,
        },
      ]
    }
  }
}
</script>

<style scoped>
.ml {
  display: block;
  width: 50%;
  margin: 5px;
  position: relative;
  left: 22%;
  line-height: 20px;
}

/*el-table-column {*/
/*  text-align: center;*/
/*}*/

</style>