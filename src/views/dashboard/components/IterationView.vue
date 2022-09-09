<template>
  <h3 style="text-align: left">迭代版本</h3>
  <div style="width: 70%; display: inline-block">
    <el-card>
      <div id="iterBarChart" style="height: 300px; width: 100%"></div>
    </el-card>
  </div>
  <div style="width: 30%; display: inline-block">
    <el-card>
      <div id="iterPieChart" style="height: 300px; width: 100%"></div>
    </el-card>
  </div>

</template>

<script>
import {inject} from "vue";

export default {
  name: "IterationView",
  mounted() {
    let echarts = inject('echarts')
    let barChart = echarts.init(document.getElementById("iterBarChart"));
    barChart.setOption({
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [23, 24, 18, 25, 27, 28, 25]
        }
      ]
    })

    let pieChart = echarts.init(document.getElementById("iterPieChart"));
    pieChart.setOption({
      series: [
        {
          type: 'pie',
          emphasis: {
            show: true
          },
          data: [
            {
              value: 335,
              name: '正常关闭'
            },
            {
              value: 234,
              name: '延期关闭'
            }
          ]
        }
      ]
    })
  }
}
</script>

<style scoped>

</style>
