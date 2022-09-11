<template>
  <el-container class="el-container-box">
    <div id="projectDataChart"></div>
  </el-container>
  <el-container class="el-container-box">
    <el-table :data="tableData" style="width: 100%" highlight-current-row>
      <template #empty>
        <el-empty description="无数据"/>
      </template>
    </el-table>
  </el-container>
</template>

<script>
export default {
  name: "dataView",
  data() {
    return {
      tableData: []
    }
  }
}
</script>

<style scoped>

</style>