<template>
  <el-container class="el-container-box screen-height">
    <el-main>
      <el-card style="margin: 5px 0">
        <template #header>
          <b>BUG数据</b>
        </template>
        <div style="margin: 10px 0">
          <span style="font-size: 14px">Bug类型：</span>
          <el-select v-model="bugType" @change="bugTypeSelect" class="m-2" placeholder="Bug类型">
            <el-option
                v-for="item in bugOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>

        <div>
          <span style="font-size: 14px">子系统：</span>
          <el-input placeholder="子系统" style="width: 200px" clearable/>

          <span style="margin-left: 25px; font-size: 14px">版本类型：</span>
          <el-select @change="bugTypeSelect" class="m-2" placeholder="版本类型">
            <el-option
                v-for="item in versionTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>

          <span style="margin-left: 25px; font-size: 14px">版本号：</span>
          <el-select @change="bugTypeSelect" class="m-2" placeholder="版本号">
            <el-option
                v-for="item in versionNoOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>

        <div>
          <span style="font-size: 14px">创建人：</span>
          <el-input placeholder="创建人" style="width: 200px" clearable/>

          <span style="margin-left: 25px;font-size: 14px">创建时间：</span>
          <el-date-picker
              type="date"
              placeholder="创建时间"
              size="small"
              style="width: 190px"
          />
          <el-button type="primary" size="default" style="margin: 10px 0 15px 30px;">搜索</el-button>
        </div>
      </el-card>

      <el-card style="margin: 5px 0">
        <el-table :data="tableData" style="width: 100%" highlight-current-row>
          <template #empty>
            <el-empty description="无数据"/>
          </template>

          <el-table-column type="selection" align="center"></el-table-column>
          <el-table-column prop="name" label="BUG标题" min-width="180" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="status" label="BUG状态" width="180" align="center">
            <template #default="scope">
              <el-tag class="ml" style="margin: 15px 5px" type="danger">进行中：{{ scope.row.status }}</el-tag>
            </template>
          </el-table-column>

          <el-table-column prop="prodVersion" label="优先级" align="center"></el-table-column>
          <el-table-column prop="testVersion" label="创建人" align="center"></el-table-column>
          <el-table-column prop="increaseBugNum" label="创建时间" align="center"></el-table-column>
          <el-table-column prop="tester" label="解决方案" align="center"></el-table-column>
        </el-table>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "bugIndex",
  data() {
    return {
      bugType: '全部',
      bugOptions: [
        {
          label: '全部',
          value: '0',
        },
        {
          label: '已激活',
          value: '1',
        },
        {
          label: '已解决',
          value: '2',
        },
        {
          label: '已关闭',
          value: '3',
        },
      ],
      versionTypeOptions: [
        {
          label: '里程碑',
          value: 1
        },
        {
          label: '迭代',
          value: 2
        },
      ],
      versionNoOptions: [],
    }
  },
  methods: {
    bugTypeSelect(val) {
      console.log(val)
      console.log(this.bugType)
    },
  },
}
</script>

<style scoped>
.m-2 {
  margin: 5px;
}

</style>