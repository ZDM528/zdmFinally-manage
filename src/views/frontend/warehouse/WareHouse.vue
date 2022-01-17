<template>
  <div class="warehouse">
    <el-card class="option-card">
      <!-- 选项 -->
      <el-form :inline="true" :model="optionForm" class="demo-form-inline">
        <el-form-item label="获取方式">
          <el-select v-model="optionForm.access" placeholder="获取方式">
            <el-option label="免费" value="0"></el-option>
            <el-option label="会员免费" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数据类别">
          <el-select v-model="optionForm.dataSort" placeholder="数据类别">
            <el-option label="企业数据" value="0"></el-option>
            <el-option label="地理数据" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="dataSubmit">查询</el-button>
        </el-form-item>
      </el-form>

      <!-- 数据列表 -->
      <el-table :data="tableData" border style="width: 100%" class="el-table">
        <el-table-column prop="name" label="名称" width="190"></el-table-column>
        <el-table-column prop="information" label="基本信息" width="190"></el-table-column>
        <el-table-column prop="price" label="价格" width="190"></el-table-column>
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
export default {
  name: 'WareHouse',
  data() {
      return {
        optionForm: {
          access: '',
          dataSort: ''
        },
        tableData: [{
          name: '王小虎',
          information: '时间跨度：2000-2020',
          price: '会员免费',
          right: ''
        }, {
          name: '王小虎',
          information: '时间跨度：2000-2020',
          price: '会员免费',
          right: ''
        }, {
          name: '王小虎',
          information: '时间跨度：2000-2020',
          price: '会员免费',
          right: ''
        }, {
          name: '王小虎',
          information: '时间跨度：2000-2020',
          price: '会员免费',
          right: ''
        }, {
          name: '王小虎',
          information: '时间跨度：2000-2020',
          price: '会员免费',
          right: ''
        }, {
          name: '王小虎',
          information: '时间跨度：2000-2020',
          price: '会员免费',
          right: ''
        }, {
          name: '王小虎',
          information: '时间跨度：2000-2020',
          price: '会员免费',
          right: ''
        }]
      }
    },
    methods: {
      dataSubmit() {},
      detailClick() {}
    }
}
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
