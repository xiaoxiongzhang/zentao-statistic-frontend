<template>
  <h3 style="text-align: left">排行榜</h3>
  <div style="width: 33%; display: inline-block">
    <el-card>
      <template #header>
        <div style="display: inline-block; position: relative;">
          <h3>BUG创建排行</h3>
        </div>
        <div style="display: inline-block; position: relative; right: -50%;">
          <el-radio-group size="default">
            <el-radio-button label="今日" />
            <el-radio-button label="当月" />
          </el-radio-group>
        </div>
      </template>
      <ol>
        <li class="text item">qqqqqqqqqqqqqqqqqq</li>
        <li class="text item">wwwwwwwwwwwwwwwwww</li>
        <li class="text item">eeeeeeeeeeeeeeeeee</li>
        <li class="text item">rrrrrrrrrrrrrrrrrr</li>
        <li class="text item">tttttttttttttttttt</li>
      </ol>
    </el-card>
  </div>
  <div style="width: 33%; display: inline-block">
    <el-card>
      <template #header>
        <div style="display: inline-block; position: relative;">
          <h3>BUG有效率排行</h3>
        </div>
        <div style="display: inline-block; position: relative; right: -50%;">
          <el-radio-group size="default">
            <el-radio-button label="今日" />
            <el-radio-button label="当月" />
          </el-radio-group>
        </div>
      </template>

    </el-card>
  </div>
  <div style="width: 33%; display: inline-block">
    <el-card>
      <template #header>
        <div style="display: inline-block; position: relative;">
        <h3>BUG未解决排行</h3>
        </div>
        <div style="display: inline-block; position: relative; right: -50%;">
          <el-radio-group size="default">
            <el-radio-button label="今日" />
            <el-radio-button label="当月" />
          </el-radio-group>
        </div>
      </template>

    </el-card>
  </div>
</template>

<script>
export default {
  name: "RankView"
}
</script>

<style scoped>

h3 {
  text-align: left;
}

.text {
  font-size: 18px;
}

.item {
  margin-bottom: 15px;
}
</style>
