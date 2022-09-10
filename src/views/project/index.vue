<template>
  <el-container class="el-container-box screen-height">
    <el-main>
      <el-tabs type="border-card">
        <el-tab-pane label="全部">
          <project-table></project-table>
        </el-tab-pane>
        <el-tab-pane label="定位">
          <project-table></project-table>
        </el-tab-pane>
        <el-tab-pane label="地图">
          <project-table></project-table>
        </el-tab-pane>
        <el-tab-pane label="交付">
          <project-table></project-table>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>

</template>

<script>
import projectTable from "@/views/project/components/projectTable";

export default {
  name: "projectIndex",
  components: {
    projectTable
  }
}
</script>

<style scoped>

</style>