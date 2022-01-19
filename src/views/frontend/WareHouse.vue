<template>
  <div class="warehouse">
    <el-card class="option-card">
      <!-- 选项 -->
      <el-form :inline="true" :model="optionForm" class="demo-form-inline">
        <el-form-item label="获取方式">
          <el-select v-model="optionForm.access" placeholder="获取方式">
            <el-option label="不限" value="不限"></el-option>
            <el-option label="免费" value="免费"></el-option>
            <el-option label="会员免费" value="会员免费"></el-option>
            <el-option label="会员特供" value="会员特供"></el-option>
            <el-option label="单独付费" value="单独付费"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数据类别">
          <el-select v-model="optionForm.dataSort" placeholder="数据类别">
            <el-option label="不限" value="不限"></el-option>
            <el-option label="企业数据" value="企业数据"></el-option>
            <el-option label="地理数据" value="地理数据"></el-option>
            <el-option label="学习资料" value="学习资料"></el-option>
            <el-option label="测算数据" value="测算数据"></el-option>
            <el-option label="环境数据" value="环境数据"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="dataSubmit">查询</el-button>
        </el-form-item>
      </el-form>

      <!-- 数据列表 -->
      <el-table :data="dataList" border style="width: 100%" class="el-table">
        <el-table-column prop="name" label="名称" width="190"></el-table-column>
        <el-table-column prop="info" label="基本信息" width="190"></el-table-column>
         <el-table-column prop="dataSort" label="数据类别" width="190"></el-table-column>
        <el-table-column prop="access" label="价格" width="190"></el-table-column>
        <el-table-column prop="right" label="操作" width="189">
          <el-button size="mini" type="primary" @click="detailClick">查看</el-button>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
    </el-card>
  </div>
</template>

<script>
import { getWareList } from "../../api/wareHouse";
export default {
  name: "WareHouse",
  data() {
    return {
      optionForm: {
        access: "不限",
        dataSort: "不限",
      },
      dataList: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    //查询数据
    dataSubmit() {
      this.getList();
    },
    //获取页面数据
    async getList() {
      let res = await getWareList({
        access: this.optionForm.access,
        dataSort: this.optionForm.dataSort,
      });
      if (res) {
        this.dataList = res.data;
        console.log("获取列表数据成功");
      }
    },
    detailClick() {},
  },
};
</script>

<style lang="scss" scoped>
.warehouse {
  position: relative;
  margin-top: 20px;
  text-align: center;
  .option-card {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 800px;
    border-radius: 20px;
    .el-table {
      margin-bottom: 20px;
    }
  }
}
</style>
