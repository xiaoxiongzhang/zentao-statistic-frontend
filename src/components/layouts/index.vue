<template>
  <div style="height: 100%; background-color: lightgray">
    <el-container>
      <el-header class="header-c">
        <header-wrap></header-wrap>
      </el-header>
      <el-container>
        <el-aside class="sidebar">
          <side-bar></side-bar>
        </el-aside>
        <el-container>
          <el-header class="header-in">
            <p>header</p>
          </el-header>

          <el-main class="main">
            <router-view></router-view>
          </el-main>
        </el-container>
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
  }
}
</script>

<style scoped>
.sidebar {
  border-radius: 5px;
  width: auto;
  margin-top: 3px;
}

.header-c {
  text-align: center;
  background-color: darkslategray;
  height: 80px;
  border-radius: 5px;
}

.header-in {
  text-align: left;
  height: 45px;
  margin: 5px 15px 0 15px;
  background-color: white;
  border-radius: 5px
}

.main {
  /*background-color: white;*/
  margin: 0 5px 5px 5px;
  border-radius: 5px;
  padding: 0;

}
</style>
