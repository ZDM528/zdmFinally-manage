<template>
  <div>
    <div class="fold" @click="slideFolder">
      <i class="el-icon-s-fold"></i>
    </div>
    <div class="person">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <!-- 对应后台方法一 -->
          <!-- <img src="http://localhost:8888/getImageUrl" class="user-avatar" /> -->
          <!-- 对应后台方法二 -->
          <img :src="imgUrl" class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span style="display: block" @click="enterPerson">首页</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span style="display: block" @click="changeInfo">修改资料</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span style="display: block" @click="suitLogin">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-dialog title="个人信息" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="uploadImg">
          <upload />
        </el-form-item>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item ref="oldPassword" label="旧密码" prop="oldPass">
          <el-input v-model="form.oldPass"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPass">
          <el-input v-model="form.newPass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAdd" style="float: right; margin-left: 10px">确 定</el-button>
          <el-button @click="dialogVisible = false" style="float: right">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in routeList" :key="index" :to="{ path: item.path }">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import Upload from "../../src/components/Upload.vue";
import { getImage } from "../../src/api/upload";
export default {
  data() {
    return {
      routeList: [],
      isCollapse: false,
      imgUrl: "",
      dialogVisible: false,
      form: {
        name: "",
        oldPass: "",
        newPass: "",
        uploadImg: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { validator: this.checkName, trigger: "blur" },
        ],
        oldPass: [
          { required: true, message: "请输入旧密码", trigger: "blur" },
          { validator: this.checkName, trigger: "blur" },
        ],
        newPass: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          { validator: this.checkName, trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.getBread();
    this.getImgaeUrl();
  },
  mounted() {
    this.form.name = Cookies.get("username");
  },
  watch: {
    $route() {
      this.getBread(); //面包屑
    },
  },
  methods: {
    getBread() {
      let matched = this.$route.matched.filter((item) => item.meta && item.meta.title);
      this.routeList = matched;
    },
    async getImgaeUrl() {
      let res = await getImage();
      // const blob = new Blob([res[0].data], {
      //   type: "application/jpg;charset=utf-8",
      // });
      // let url = URL.createObjectURL(blob);
      let url = "data:image/png;base64," + new Buffer(res[0].data).toString("base64");
      this.imgUrl = url;
    },
    slideFolder() {
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse) {
        this.$emit("toggleCollapse", this.isCollapse, "70px");
      } else {
        this.$emit("toggleCollapse", this.isCollapse, "200px");
      }
    },
    suitLogin() {
      this.$router.replace("/login");
    },
    enterPerson() {},
    handleAdd() {},
    changeInfo() {
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs.form.clearValidate();
      });
      this.form.name = Cookies.get("username");
    },
  },
  components: {
    Upload,
  },
};
</script>
<style lang="scss" scoped>
.fold {
  float: left;
  width: 50px;
  line-height: 60px;
  cursor: pointer;
}
.el-breadcrumb {
  line-height: 60px;
}
.person {
  float: right;
  .avatar-container {
    margin-right: 30px;
    .avatar-wrapper {
      margin-top: -8px;
      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
      }
      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>