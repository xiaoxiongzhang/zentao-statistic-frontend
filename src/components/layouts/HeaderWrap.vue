<template>
<div class="el-header-cs">
  <h1>大有时空禅道统计平台</h1>
  <div>
    <el-avatar>
      <el-icon>
        <UserFilled/>
      </el-icon>
    </el-avatar>
  </div>
</div>
</template>

<script>
export default {
  name: "HeaderWrap"
}
</script>

<style scoped>
.el-header-cs {
  display: flex;
  text-align: left;
  font-size: 20px;
  color: aliceblue;
  line-height: 35px;
}
.el-header-cs > div {
  flex: 1;
  margin: auto;
  text-align: right;
  position: relative;
  right: 1%;
}

</style>
