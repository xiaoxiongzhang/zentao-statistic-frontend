<template>

  <div style="height: 100%">
    <el-menu
        router
        default-active="/dashboard"
        class="el-menu-vertical el-menu-width"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        active-text-color="#fff000"
        text-color="#ffffff"
        height="100%"
    >
      <div style="padding-top: 20px; padding-bottom: 10px;text-align: center;">
        <el-icon v-if="isCollapse" @click="switchCollapse">
          <Expand/>
        </el-icon>
        <el-icon v-else @click="switchCollapse">
          <Fold/>
        </el-icon>
      </div>
      <el-menu-item index="/dashboard">
        <el-icon>
          <HomeFilled/>
        </el-icon>
        <template #title>看板</template>
      </el-menu-item>
      <el-menu-item index="/project">
        <el-icon>
          <Menu/>
        </el-icon>
        <template #title>项目数据</template>
      </el-menu-item>
      <el-menu-item index="/bug">
        <el-icon>
          <Histogram/>
        </el-icon>
        <template #title>BUG数据</template>
      </el-menu-item>
      <el-menu-item index="/execution">
        <el-icon>
          <List/>
        </el-icon>
        <template #title>执行统计</template>
      </el-menu-item>
      <el-menu-item index="/projectManagement">
        <el-icon>
          <Management/>
        </el-icon>
        <template #title>项目管理</template>
      </el-menu-item>
      <el-menu-item index="/setting">
        <el-icon>
          <setting/>
        </el-icon>
        <template #title>权限管理</template>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: "sideBar",
  data() {
    return {
      isCollapse: false
    }
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    switchCollapse() {
      this.isCollapse = !this.isCollapse
    }

  }

}
</script>

<style scoped>
.el-menu-vertical {
  /*height: calc(100vh - 100px);*/
  height: 100%;
}

.el-menu-width:not(.el-menu--collapse) {
  width: 200px
}

</style>
