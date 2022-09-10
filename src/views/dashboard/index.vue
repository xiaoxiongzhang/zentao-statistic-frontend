<template>
  <el-container class="el-container-box">
    <el-main>
      <data-view></data-view>
    </el-main>
  </el-container>
  <el-container class="el-container-box">
    <el-main>
      <iteration-view></iteration-view>
    </el-main>
  </el-container>
  <el-container class="el-container-box">
    <el-main>
      <bug-view></bug-view>
    </el-main>
  </el-container>
  <el-container class="el-container-box">
    <el-main>
      <rank-view></rank-view>
    </el-main>
  </el-container>
</template>

<script>
import DataView from "@/views/dashboard/components/DataView";
import IterationView from "@/views/dashboard/components/IterationView";
import BugView from "@/views/dashboard/components/BugView";
import RankView from "@/views/dashboard/components/RankView";

export default {
  name: "dashboardIndex",
  components: {
    DataView,
    IterationView,
    BugView,
    RankView,
  }
}
</script>

<style scoped>

</style>
