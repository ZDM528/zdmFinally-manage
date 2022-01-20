<template>
  <div class="give">
    <el-card class="give-card">
      <el-form :model="giveForm" status-icon :rules="giveRules" ref="ruleForm" class="giveform" label-width="70px">
        <h3 class="publish-data">发布供给信息</h3>
        <el-form-item label="名称" prop="title">
          <el-input v-model="giveForm.title" maxlength="30" show-word-limit placeholder="数据名称"></el-input>
        </el-form-item>
        <el-form-item label="数据类别" prop="type">
          <el-select v-model="giveForm.type" placeholder="请选择数据类别" class="option-box">
            <el-option label="企业数据" value="企业数据"></el-option>
            <el-option label="地理数据" value="地理数据"></el-option>
            <el-option label="学习资料" value="学习资料"></el-option>
            <el-option label="测算数据" value="测算数据"></el-option>
            <el-option label="环境数据" value="环境数据"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="基本信息" prop="content">
          <el-input type="textarea" placeholder="请输入基本信息" v-model="giveForm.content" 
            maxlength="100" show-word-limit :rows="6"></el-input>
        </el-form-item>
        <el-form-item label="数据集" prop="file">
          <el-upload class="avatar" action="string" :on-success="handleAvatarSuccess" :http-request="uploadImg" 
            :limit="1" accept=".xlsx">
            <el-button size="small" type="primary">上传文件</el-button>
            <div slot="tip" class="remind">只能上传excel文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" class="btn" @click="publishSubmit('ruleForm')">发布</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { addProjectData } from '../../api/share'
export default {
  name: 'Give',
  data() {
    var validateTitle = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入数据名称"));
      }
      callback();
    };
    var validateType = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请选择数据类别"));
      }
      callback();
    };
    var validateContent = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入基本信息"));
      }
      callback();
    };
    var validateFile = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请上传文件"));
      }
      callback();
    };
    return {
      imageUrl: '',
      giveForm: {
        title: '',
        type: '',
        content: '',
        file: ''
      },
      giveRules: {
        title: [{ validator: validateTitle, trigger: 'blur' }],
        type: [{ validator: validateType, trigger: 'blur' }],
        content: [{ validator: validateContent, trigger: 'blur' }],
        file: [{ validator: validateFile, trigger: 'blur' }]
      }
    }
  },
  mounted() {
    this.imageUrl == "";
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log("success", URL.createObjectURL(file.raw));
      this.imageUrl = URL.createObjectURL(file.raw); //获取当前文件的内存URL
    },
    async uploadImg(param) {
      // 通过FormData将文件转成二进制数据
      const formData = new FormData();
      // 文件转二进制
      formData.append("file", param.file);
      const result = await addProjectData(formData);
      // console.log("result", result);
      if (result.code === 200) {
        this.$message.success("成功上传数据集");
      }
    },
    publishSubmit(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let res = await addProjectData(this.giveForm)
          if (res.code === 200) {
            this.$message.success('发布成功！')
            this.$refs[formName].resetFields()
          } else {
            this.$message.error('发布失败！')
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.give {
  position: relative;
  margin-top: 20px;
  text-align: center;
  .give-card {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 60%;
    border-radius: 20px;
    .publish-data {
      color: rgb(81, 137, 241);
    }
    .option-box {
      position: fixed;
      left: 90px;
    }
    .avatar {
      position: fixed;
      left: 100px;
      .remind {
        margin-top: 10px;
      }
    }
    .btn {
      width: 20%;
      margin-top: 45px;
      margin-right: 50px;
    }
  }
}
</style>