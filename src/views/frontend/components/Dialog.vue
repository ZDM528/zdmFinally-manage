<template>
    <el-dialog :title="title" :visible.sync="showDialog" width="30%" @close="dialogClosed">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="loginForm">
        <el-form-item prop="username">
          <el-input type="text" placeholder="用户名" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submit" type="primary" @click="submitForm('ruleForm')">{{ submitType }}</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    title: String,
    dialogFormVisible: Boolean,
    submitType: String
  },
  watch: {
    dialogFormVisible() {
       this.showDialog = this.dialogFormVisible
    }
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    }
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      }
      callback();
    }
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: validateUser, trigger: "blur" }],
      },
      showDialog:false
    }
  },
  methods: {
    dialogClosed() {
      this.$emit("dialogClose")
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

<style scoped>

</style>

