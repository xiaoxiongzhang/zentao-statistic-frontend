<template>
  <h3 style="text-align: left">排行榜</h3>
  <div>
    <el-card>
      <template #header>
        <div>
          <h3>BUG创建排行</h3>
        </div>
      </template>
    </el-card>
  </div>
  <div>
    <h3>BUG有效率排行</h3>
    <el-card></el-card>
  </div>
  <div>
    <h3>BUG未解决排行</h3>
    <el-card></el-card>
  </div>
</template>

<script>
export default {
  name: "RankView"
}
</script>

<style scoped>
.el-card {
  height: 350px;
  margin: 5px;
}
</style>
