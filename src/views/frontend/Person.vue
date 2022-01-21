<template>
  <div class="person">
    <el-card class="person-card">
      <div class="info">
        <div class="person-info">基本信息</div>
        <div class="common">用户名： {{ `${Cookies.get("username")}` }}</div>
        <div class="common">个人积分： {{ `${Cookies.get("score")}` }}</div>
        <div class="common">
          <span class="need">我的需求：</span>
          <!-- 我的需求 -->
          <span v-if="!needData">无</span>
          <el-table :data="needData" border style="width: 100%" class="need-table" v-else-if="needData">
            <el-table-column prop="title" label="标题" width="190"></el-table-column>
            <el-table-column prop="detail" label="详情描述" width="190"></el-table-column>
            <el-table-column prop="type" label="服务类型" width="130"></el-table-column>
            <el-table-column prop="name" label="联系人" width="130"></el-table-column>
            <el-table-column prop="phone" label="手机号码" width="150"></el-table-column>
          </el-table>
        </div>
        <div class="common">
          <span class="publish">我的供给：</span>
          <!-- 我的供给 -->
          <span v-if="!giveData">无</span>
          <el-table :data="giveData" border style="width: 100%" class="give-table" v-else-if="giveData">
            <el-table-column prop="name" label="名称" width="190" fixed="left"></el-table-column>
            <el-table-column prop="dataSort" label="数据类别" width="190"></el-table-column>
            <el-table-column prop="info" label="基本信息" width="130"></el-table-column>
            <el-table-column prop="isChecked" label="审核情况" width="150"></el-table-column>
            <el-table-column prop="file" label="数据集" width="219" fixed="right">
              <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="detailClick(scope.row)">下载</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getPersonData } from '../../api/share'
import Cookies from 'js-cookie'
export default {
  name: 'Person',
  data() {
    return {
      needData: [],
      giveData: []
    }
  },
  mounted() {
    this.getPersonData()
  },
  computed: {
    Cookies() {
      return Cookies
    }
  },
  methods: {
    async getPersonData() {
      const {data} = await getPersonData({
        userId: Cookies.get('id')
      })
      if(data) {
        this.needData = data.need
        this.giveData = data.give
      }
    },
    detailClick() {
    }
  }
}
</script>

<style lang="scss" scoped>
.person {
  position: relative;
  margin-top: 20px;
  text-align: center;
  .person-card {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 60%;
    border-radius: 20px;
    .info {
      margin-top: 20px;
      .person-info {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .common {
        padding-left: 6%;
        text-align: left;
        margin-bottom: 20px;
        .need-table {
          margin-top: 10px;
        }
        .give-table {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>