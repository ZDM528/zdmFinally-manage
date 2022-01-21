<template>
  <div class="community">
    <!-- 选项卡片 -->
    <div class="box-option">
      <el-card class="option-card">
        <span style="color: #409eff">数据共享分类</span>
        <ul>
          <li v-for="(item, index) in items" :key="index" @click="optionClick(item)" :class="{ active: item.active }">{{ item.title }}</li>
        </ul>
        <el-button type="danger" @click="post">我要发帖</el-button>
      </el-card>
    </div>

    <!-- 数据卡片 -->
    <div class="allData-card">
      <el-card class="data-card" v-for="(item, index) in dataList" :key="index">
        <div class="row-1">
          <div class="img-wrap">
            <img src="../../assets/img/fish-logo.png" alt="" />
          </div>
          <span class="name">{{ item.name }}</span>
        </div>
        <div class="row-2">
          <div class="type">{{ item.type }}</div>
          <div class="title">{{ item.title }}</div>
          <div class="content">{{ item.content }}</div>
        </div>

        <!-- 评论区域 -->
        <div class="comment-box">
          <div v-show="commentArr[index]">评论用户：{{`${Cookies.get('username')}`}}</div>
          <div v-for="(item, index1) in commentArr[index]" :key="index1" class="comment-content">
            {{ item }}
          </div>
        </div>

        <div class="row-3">
          <el-input v-model="comment[index]" placeholder="请输入评论" class="input"></el-input>
          <el-button type="primary" class="btn" @click="commentSubmit(index)">提交</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { getCommunityData } from "../../api/community";
import Cookies from "js-cookie";
export default {
  name: "Community",
  data() {
    return {
      items: [
        { title: "全部内容", active: true },
        { title: "资料分享", active: false },
        { title: "问题互助", active: false },
      ],
      active: false,
      comment: [],
      commentArr: [],
      hasComment: {},
      dataList: [],
    };
  },
  created() {
    for (let i = 0; i < 30; i++) {
      if (Cookies.get(`content${i}`)) {
        Vue.set(this.commentArr, i, Cookies.get(`content${i}`).split(","));
        this.hasComment[i] = true;
      }
    }
    this.bus.$off('updateData'); 
    this.bus.$on('updateData', () => {
      this.updateData()
    })
  },
  mounted() {
    this.getDataList(this.items[0]);
  },
  computed: {
    Cookies() {
      return Cookies;
    },
  },
  methods: {
    commentSubmit(index) {
      if (!Cookies.get("username")) {
        this.$message.error("请先登录！");
      } else {
        if (!this.hasComment[index]) {
          this.hasComment[index] = true;
          Vue.set(this.commentArr, index, []);
        }
        this.commentArr[index].push(this.comment[index]);
        for (let i = 0; i < this.commentArr.length; i++) {
          let arr = this.commentArr[i];
          if (arr instanceof Array) {
            Cookies.set(`content${i}`, arr);
          }
        }
        this.comment[index] = null
      }
    },
    async optionClick(item) {
      this.$nextTick(function () {
        this.items.forEach(function (item) {
          Vue.set(item, "active", false);
        });
        Vue.set(item, "active", true);
        this.getDataList(item);
      });
    },
    async getDataList(item) {
      let { data } = await getCommunityData({
        type: item.title,
      });
      if (data) {
        this.dataList = data.reverse();
        console.log("获取数据社区数据列表成功！");
      }
    },
    post() {
      this.$router.push("/community/post");
    },
    updateData() {
      // console.log('兄弟组件传值成功')
      for(let i=1; i<this.dataList.length-1 ;i++) {
        if(Cookies.get(`content${i-1}`)) {
          Cookies.set(`content${i}`, Cookies.get(`content${i-1}`))
        }
      }
      Cookies.remove(`content0`)
    }
  },
};
</script>

<style lang="scss" scoped>
.community {
  position: relative;
  margin-top: 20px;
  .box-option {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
    font-size: 18px;
    .option-card {
      position: absolute;
      width: 80%;
      left: 50%;
      transform: translate(-50%);
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
    top: 110px;
    left: 50%;
    transform: translate(-50%);
    width: 45%;
    .comment-box {
      margin-top: 5px;
      .comment-content {
        color: rgb(175, 170, 170);
        margin-left: 30px;
        margin-top: 5px;
      }
    }
    .data-card {
      border-radius: 20px;
      margin-top: 20px;
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
          color: rgb(102, 96, 96);
        }
      }
      .row-3 {
        margin-top: 20px;
        .input {
          width: 80%;
          margin-right: 15px;
        }
      }
    }
  }
}
</style>