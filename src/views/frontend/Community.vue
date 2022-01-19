<template>
  <div class="community">
    <!-- 选项卡片 -->
    <div class="box-option">
      <el-card class="option-card">
        <span>数据共享分类</span>
        <ul>
          <li v-for="(item, index) in items" :key="index" @click="selectStyle(item)" :class="{'active': item.active}">{{ item.title }}</li>
        </ul>
      </el-card>
    </div>

    <!-- 数据卡片 -->
    <div class="allData-card">
      <el-card class="data-card">
        <div class="row-1">
          <div class="img-wrap">
            <img src="../../assets/img/fish-logo.png" alt="">
          </div>
          <span class="name">1111111</span>
        </div>
        <div class="row-2">
          <div class="type">数据分享</div>
          <div class="title">标题</div>
          <div class="content">内容</div>
        </div>

        <!-- 评论区域 -->
        <div v-for="(item, index) in commentArr" :key="index">
          {{ item }}
        </div>

        <div class="row-3">
          <el-input v-model="comment" placeholder="请输入评论" class="input"></el-input>
          <el-button type="primary" class="btn" @click="commentSubmit">提交</el-button>
        </div>
      </el-card>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Cookies from 'js-cookie'
export default {
  name: 'Community',
  data () {
    return {
      items: [{ title: '全部内容', active: true }, { title: '数据分享', active: false }, { title: '资料分享', active: false }],
      active: false,
      comment: '',
      commentArr: []
    }
  },
  created () {
    if (Cookies.get("content")) {
      this.commentArr = Cookies.get("content").split(',')
    }
  },
  computed: {
    Cookies () {
      return Cookies
    }
  },
  methods: {
    commentSubmit () {
      if (!Cookies.get('username')) {
        this.$message.error('请先登录！')
      } else {
        this.commentArr.push(this.comment)
        Cookies.set('content', this.commentArr)
      }
    },
    selectStyle (item) {
      this.$nextTick(function () {
        this.items.forEach(function (item) {
          Vue.set(item, 'active', false);
        });
        Vue.set(item, 'active', true);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.community {
  position: relative;
  width: 100%;
  margin-top: 20px;
  .box-option {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 70%;
    font-size: 20px;
    .option-card {
      width: 80%;
      border-radius: 20px;
      ul {
        display: inline-block;
        text-align: center;
        width: 60%;
        height: 35px;
        .active {
          background-color: rgb(135, 155, 243);
        }
      }
      ul > li {
        display: inline-block;
        list-style: none;
        padding-top: 1%;
        margin-right: 10%;
        width: 20%;
        height: 100%;
        border-radius: 20px;
        white-space: nowrap;
        cursor: pointer;
        &:hover {
          background-color: rgb(135, 155, 243);
        }
      }
    }
  }
  .allData-card {
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translate(-50%);
    width: 40%;
    .data-card {
      border-radius: 20px;
      .row-1 {
        display: flex;
        height: 50px;
        .img-wrap {
          width: 12%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .name {
          line-height: 50px;
          margin-left: 6%;
        }
      }
      .row-2 {
        margin-top: 15px;
        .type {
          color: rgb(240, 167, 98);
          font-size: 20px;
          margin-bottom: 5px;
        }
        .title {
          font-weight: bold;
          margin-bottom: 5px;
        }
        .content {
          color: rgb(145, 136, 136);
        }
      }
      .row-3 {
        margin-top: 20px;
        .input {
          width: 60%;
          margin-right: 15px;
        }
        .btn {
          width: 15%;
        }
      }
    }
  }
}
</style>