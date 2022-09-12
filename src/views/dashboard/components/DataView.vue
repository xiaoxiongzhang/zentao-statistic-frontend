<template>
  <h3 style="text-align: left">数据概览</h3>
  <div style="text-align: center;">
    <div class="data-box">
      <el-card class="el-card-cs">
        <el-card shadow="hover" class="data-box-card">
          <h4>进行中版本数</h4>
          <div class="left-text">
            <b>25</b>
          </div>
          <div>
            <p style="font-size: 20px;margin: 0"><b>昨日</b></p>
            <p style="font-size: 20px;margin-top: 5px"> {{ 5 }} <b>个</b></p>
          </div>
          <div id="customerChart" class="circ-chart"></div>
        </el-card>
        <el-card shadow="hover" class="data-box-card">
          <h4>已上线版本数</h4>
          <div class="left-text">
            <b>10</b>
          </div>
          <div>
            <p style="font-size: 20px;margin: 0"><b>昨日</b></p>
            <p style="font-size: 20px;margin-top: 5px"> {{ 1 }} <b>个</b></p>
          </div>
          <div class="circ-chart"></div>
        </el-card>
      </el-card>
    </div>
    <div class="data-box">
      <el-card class="el-card-cs">
        <div id="lineChart" style="height: 300px; width: 100%"></div>
      </el-card>
    </div>

  </div>
</template>

<script>
import {inject} from "vue";

export default {
  name: "DataView",
  mounted() {
    let echarts = inject('echarts')
    let myChart = echarts.init(document.getElementById("customerChart"));
    // 绘制图表
    myChart.setOption({
      title: {
        text: '',
      },
      series: [
        {
          type: 'pie',
          labelLine: {
            show: false
          },
          emphasis: {
            show: true
          },
          data: [
            {
              value: 335,
            },
            {
              value: 234,
            },
            {
              value: 1548,
            }
          ],
          radius: ['50%', '70%']
        }
      ]
    })
    window.onresize = function () {//自适应大小
      myChart.resize();
      lineChart.resize();
    }

    let lineChart = echarts.init(document.getElementById("lineChart"));
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

  }

}
</script>

<style scoped>

.data-box {
  width: 50%;
  display: inline-block;
}

.data-box-card {
  width: 90%;
  height: 150px;
  margin: 5px;
  padding: 0;
  border-radius: 5px;
  background-color: #93D2F3;
  position: relative;
  left: 4%;
  top: 50%;
}

.circ-chart {
  display: inline-block;
  height: 155px;
  width: 155px;
  position: absolute;
  top: 0;
  right: 10%;
}

h4 {
  font-size: 25px;
  text-align: left;
  position: relative;
  margin-top: 0;
  margin-bottom: 10px;
  left: 5%;
}

.left-text {
  position: absolute;
  left: 12%;
  font-size: 55px;
}

</style>

