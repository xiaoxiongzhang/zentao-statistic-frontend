<template>
  <h3 style="text-align: left">BUG数据</h3>
  <div style="width: 40%; display: inline-block">
    <el-card>
      <div id="bugPieChart" style="height: 300px; width: 100%"></div>
    </el-card>
  </div>
  <div style="width: 60%; display: inline-block">
    <el-card>
      <div id="bugBarChart" style="height: 300px; width: 100%"></div>
    </el-card>
  </div>

  <div style="width: 50%; display: inline-block">
    <el-card>
      <div id="bugBarChart2" style="height: 300px; width: 100%"></div>
    </el-card>
  </div>
  <div style="width: 50%; display: inline-block">
    <el-card>
      <div id="bugPieChart2" style="height: 300px; width: 100%"></div>
    </el-card>
  </div>

</template>

<script>
import {inject} from "vue";

export default {
  name: "BugView",
  mounted() {
    let echarts = inject('echarts')
    // ----------------------------
    let pieChart = echarts.init(document.getElementById("bugPieChart"));
    pieChart.setOption({
      title: {
        text: '当月未解决Bug分布',
      },
      series: [
        {
          type: 'pie',
          emphasis: {
            show: true
          },
          data: [
            {
              value: 335,
              name: '定位'
            },
            {
              value: 234,
              name: '地图'
            },
            {
              value: 234,
              name: '交付'
            }
          ]
        }
      ]
    })

    // ****************
    let barChart = echarts.init(document.getElementById("bugBarChart"));
    barChart.setOption({
      title: {
        text: 'Bug变动情况',
      },
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
    // ****************

    let barChart2 = echarts.init(document.getElementById("bugBarChart2"));
    barChart2.setOption({
      title: {
        text: '历史未解决Bug超时情况',
      },
      xAxis: {
        type: 'value',
      },
      yAxis: {
        data: ['2~7天内', '7~15天内', '15~30天内', '30~60天内', '60天以上']
      },
      series: [
        {
          type: 'bar',
          data: [23, 45, 18, 25, 12]
        }
      ]
    })
    // ****************
    let pieChart2 = echarts.init(document.getElementById("bugPieChart2"));
    pieChart2.setOption({
      title: {
        text: '历史未解决Bug严重级别情况',
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        top: 40,
        data: ['提示级', '一般级', '严重级', '致命级']
      },
      series: [
        {
          type: 'pie',
          emphasis: {
            show: true
          },
          label: {show: false},
          labelLine: {show: false},
          data: [
            {
              value: 335,
              name: '提示级'
            },
            {
              value: 234,
              name: '一般级'
            },
            {
              value: 234,
              name: '严重级'
            },
            {
              value: 85,
              name: '致命级'
            }
          ]
        }
      ]
    })


  }

}
</script>

<style scoped>
.el-card {
  height: 350px;
  margin: 2px 5px;
}
</style>
