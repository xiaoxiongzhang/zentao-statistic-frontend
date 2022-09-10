<template>
  <div style="height: 100%; background-color: lightgray">
    <el-container>
      <el-header class="header-c">
        <header-wrap></header-wrap>
      </el-header>
      <el-container style="height: 89vh">
        <el-aside class="sidebar">
          <side-bar></side-bar>
        </el-aside>
          <el-main class="main">
            <router-view></router-view>
          </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar from "@/components/layouts/SideBarWrap";
import HeaderWrap from "@/components/layouts/HeaderWrap";

export default {
  name: "LayoutIndex",
  components: {
    SideBar,
    HeaderWrap
  },
}
</script>

<style scoped>
.sidebar {
  border-radius: 5px;
  margin-top: 3px;
  height: auto;
  width: auto;
}

.header-c {
  text-align: center;
  background-color: darkslategray;
  height: 80px;
  border-radius: 5px;
}

.main {
  /*background-color: white;*/
  margin: 5px;
  border-radius: 5px;
  padding: 0;
}
</style>
