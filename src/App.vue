<template>
  <div id="app">
    <layout-index></layout-index>
  </div>
</template>

<script>
import LayoutIndex from "@/components/layouts";
import * as echarts from 'echarts'
import {provide} from "vue";

export default {
  name: 'App',
  components: {
    LayoutIndex
  },
  setup() {
    provide('echarts', echarts)               //provide
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  height: 100%;
}
</style>
