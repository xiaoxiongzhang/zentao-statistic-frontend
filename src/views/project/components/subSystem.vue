<template>
  <el-page-header style="margin: 20px 0" @back="goBack">
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </el-page-header>

  <el-card style="margin: 5px 0">
    <div id="projectDataChart" style="height: 350px;width: 100%"></div>
  </el-card>

  <el-card style="margin: 5px 0">
    <div class="date-selector">
      <el-date-picker
          v-model="dateRange"
          type="daterange"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="default"
      />
      <el-button type="primary" size="default" style="margin: 10px 0 15px 30px;">搜索</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" highlight-current-row>
      <template #empty>
        <el-empty description="无数据"/>
      </template>

      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column prop="name" label="子系统名称" min-width="120" align="center" show-overflow-tooltip>
        <template #default="scope">
          <router-link to="/project/1/subsystem/1/iteration">{{ scope.row.name }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="prodVersion" label="线上版本" align="center"></el-table-column>
      <el-table-column prop="testVersion" label="当前测试版本" align="center"></el-table-column>
      <el-table-column prop="endTime" label="计划截至时间" align="center"></el-table-column>
      <el-table-column prop="unsolvedBugNum" label="未解决Bug数" align="center"></el-table-column>
      <el-table-column prop="increaseBugNum" label="当日新增" align="center"></el-table-column>
      <el-table-column prop="tester" label="测试负责人" align="center"></el-table-column>
      <el-table-column prop="status" label="状态" width="180" align="center">
        <template #default="scope">
          <el-tag class="ml" style="margin: 15px 5px" type="danger">进行中：{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" align="center" show-overflow-tooltip></el-table-column>

    </el-table>
  </el-card>
</template>

<script>
import {inject} from "vue";

export default {
  name: "dataView",
  data() {
    return {
      dateRange: '',
      tableData: [
        {
          name: '基站运维系统',
          prodVersion: 'v1.0.0',
          testVersion: 'v1.1.0',
          endTime: '2022-10-01',
          unsolvedBugNum: 25,
          increaseBugNum: 12,
          tester: 'abc',
          status: 'ongoing',
          remark: '',
        },
        {
          name: '基站运维系统',
          prodVersion: 'v1.0.0',
          testVersion: 'v1.1.0',
          endTime: '2022-10-01',
          unsolvedBugNum: 25,
          increaseBugNum: 12,
          tester: 'abc',
          status: 'ongoing',
          remark: '',
        },
        {
          name: '基站运维系统',
          prodVersion: 'v1.0.0',
          testVersion: 'v1.1.0',
          endTime: '2022-10-01',
          unsolvedBugNum: 25,
          increaseBugNum: 12,
          tester: 'abc',
          status: 'ongoing',
          remark: '',
        },
        {
          name: '基站运维系统',
          prodVersion: 'v1.0.0',
          testVersion: 'v1.1.0',
          endTime: '2022-10-01',
          unsolvedBugNum: 25,
          increaseBugNum: 12,
          tester: 'abc',
          status: 'ongoing',
          remark: '',
        },
        {
          name: '基站运维系统',
          prodVersion: 'v1.0.0',
          testVersion: 'v1.1.0',
          endTime: '2022-10-01',
          unsolvedBugNum: 25,
          increaseBugNum: 12,
          tester: 'abc',
          status: 'ongoing',
          remark: '',
        },
        {
          name: '基站运维系统',
          prodVersion: 'v1.0.0',
          testVersion: 'v1.1.0',
          endTime: '2022-10-01',
          unsolvedBugNum: 25,
          increaseBugNum: 12,
          tester: 'abc',
          status: 'ongoing',
          remark: '',
        },        {
          name: '基站运维系统',
          prodVersion: 'v1.0.0',
          testVersion: 'v1.1.0',
          endTime: '2022-10-01',
          unsolvedBugNum: 25,
          increaseBugNum: 12,
          tester: 'abc',
          status: 'ongoing',
          remark: '',
        },        {
          name: '基站运维系统',
          prodVersion: 'v1.0.0',
          testVersion: 'v1.1.0',
          endTime: '2022-10-01',
          unsolvedBugNum: 25,
          increaseBugNum: 12,
          tester: 'abc',
          status: 'ongoing',
          remark: '',
        },        {
          name: '基站运维系统',
          prodVersion: 'v1.0.0',
          testVersion: 'v1.1.0',
          endTime: '2022-10-01',
          unsolvedBugNum: 25,
          increaseBugNum: 12,
          tester: 'abc',
          status: 'ongoing',
          remark: '',
        },        {
          name: '基站运维系统',
          prodVersion: 'v1.0.0',
          testVersion: 'v1.1.0',
          endTime: '2022-10-01',
          unsolvedBugNum: 25,
          increaseBugNum: 12,
          tester: 'abc',
          status: 'ongoing',
          remark: '',
        },        {
          name: '基站运维系统',
          prodVersion: 'v1.0.0',
          testVersion: 'v1.1.0',
          endTime: '2022-10-01',
          unsolvedBugNum: 25,
          increaseBugNum: 12,
          tester: 'abc',
          status: 'ongoing',
          remark: '',
        },        {
          name: '基站运维系统',
          prodVersion: 'v1.0.0',
          testVersion: 'v1.1.0',
          endTime: '2022-10-01',
          unsolvedBugNum: 25,
          increaseBugNum: 12,
          tester: 'abc',
          status: 'ongoing',
          remark: '',
        },
        {
          name: '基站运维系统',
          prodVersion: 'v1.0.0',
          testVersion: 'v1.1.0',
          endTime: '2022-10-01',
          unsolvedBugNum: 25,
          increaseBugNum: 12,
          tester: 'abc',
          status: 'ongoing',
          remark: '',
        },
        {
          name: '基站运维系统',
          prodVersion: 'v1.0.0',
          testVersion: 'v1.1.0',
          endTime: '2022-10-01',
          unsolvedBugNum: 25,
          increaseBugNum: 12,
          tester: 'abc',
          status: 'ongoing',
          remark: '',
        },
        {
          name: '基站运维系统',
          prodVersion: 'v1.0.0',
          testVersion: 'v1.1.0',
          endTime: '2022-10-01',
          unsolvedBugNum: 25,
          increaseBugNum: 12,
          tester: 'abc',
          status: 'ongoing',
          remark: '',
        },
      ]
    }
  },
  mounted() {
    let echarts = inject('echarts')
    window.onresize = function () {//自适应大小
      lineChart.resize();
    }

    let lineChart = echarts.init(document.getElementById("projectDataChart"));
    lineChart.setOption({
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
      },
      yAxis: {},
      series: [
        {
          data: [10, 22, 28, 23, 19],
          type: 'line',
          smooth: true
        }
      ]
    })
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>