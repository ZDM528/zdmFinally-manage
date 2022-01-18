<template>
  <div class="container">
    <!-- 导航栏 -->
    <el-menu :default-active="activeKey" class="el-menu-demo" mode="horizontal" background-color="#fff" text-color="#000" :active-text-color="variables.menuActiveText" style="border-shadow: 10px 0px 10px rgba(0, 0, 0, 1)" @select="handleSelect" router>
      <div class="logo-img">
        <a href="/">
          <img src="../../assets/img/logo.png" alt="" />
        </a>
      </div>
      <el-menu-item index="/warehouse">数据仓库</el-menu-item>
      <el-menu-item index="/mainPage">数据社区</el-menu-item>
      <el-menu-item index="/personRoom">个人空间</el-menu-item>
      <div class="login">
        <el-button type="warning" @click="pay">充值 VIP</el-button>
        <el-button type="primary" @click="login" :disabled="disabled">{{ disabled ? "已登录" : " 登录" }}</el-button>
        <el-button type="danger" @click="register">注册</el-button>
      </div>
      <div class="user">用户:{{ !disabled ? "未登录" : `${Cookies.get("username")}` }}</div>
    </el-menu>

    <!-- 充值VIP对话框 -->
    <pay-dialog :showPayDialog="showPayDialog" @closePayDialog="closePayDialog" />

    <!-- 登录/注册对话框 -->
    <Dialog :dialogFormVisible="dialogFormVisible" :title="title" :submitType="submitType" @dialogClose="dialogClose" @hasLogin="hasLogin" />

    <keep-alive include="MainPage">
      <router-view style="padding: 0 10%"></router-view>
    </keep-alive>

    <!-- footer -->
    <div class="footer">
      <div class="copyright">Copyright @2022 广东金融学院</div>
    </div>
  </div>
</template>

<script>
import variables from "@/styles/_variable.scss";
import Dialog from "../frontend/components/Dialog.vue";
import PayDialog from './PayDialog'
import Cookies from "js-cookie";
export default {
  data() {
    return {
      title: "",
      dialogFormVisible: false,
      submitType: "",
      showPayDialog: false,
      activeKey: "/warehouse",
      disabled: false,
    };
  },
  components: {
    Dialog,
    PayDialog
  },
  computed: {
    variables() {
      return variables;
    },
    Cookies() {
      return Cookies;
    },
  },
  created() {
    if (Cookies.get("username") && Cookies.get("username") !== "") {
      this.disabled = true;
    }
  },
  methods: {
    handleSelect() {},
    pay() {
      this.showPayDialog = true
    },
    login() {
      this.title = "登录";
      this.submitType = "登录";
      this.dialogFormVisible = true;
    },
    register() {
      this.title = "注册";
      this.submitType = "注册";
      this.dialogFormVisible = true;
    },
    dialogClose() {
      this.dialogFormVisible = false;
    },
    hasLogin() {
      this.disabled = true;
    },
    closePayDialog() {
      this.showPayDialog = false
    }
  },
};
</script>

<style lang="scss" scope>
body {
  background-color: rgba(157, 161, 160, 0.479);
}
.container {
  min-height: 100%;
  .el-menu-demo {
    display: flex;
    box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.4);
    padding-left: 15%;
    padding-right: 15%;
    .logo-img {
      margin-right: 40px;
      width: 50px;
      a {
        display: inline-block;
        img {
          padding: 10% 0;
          width: 100%;
          height: 40%;
        }
      }
    }
    .login {
      margin-left: auto;
      margin-top: 10px;
      margin-right: 20px;
    }
    .user {
      width: 15%;
      height: 55px;
      color: #409EFF;
      text-align: center;
      line-height: 55px;
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    color: #b1adad;
    text-align: center;
    background-color: #fff;
    margin-top: 10px;
    .copyright {
      padding: 30px;
    }
  }
}
</style>