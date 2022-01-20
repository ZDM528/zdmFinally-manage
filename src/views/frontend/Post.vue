<template>
  <div class="post">
    <el-card class="post-card">
      <el-form :model="postForm" status-icon  label-position="left" :rules="postRules" ref="ruleForm" class="postform">
        <el-form-item label="主题板块" prop="type">
          <el-select v-model="postForm.type" placeholder="请选择主题">
            <el-option label="资料分享" value="资料分享"></el-option>
            <el-option label="问题互助" value="问题互助"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="帖子标题" prop="title" placeholder="请选择主题">
          <el-input v-model="postForm.title" maxlength="15" show-word-limit></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="textarea" placeholder="请输入内容" v-model="postForm.content" 
            maxlength="100" show-word-limit></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" class="btn">发布</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      postForm: {
        type: '',
        title: '',
        content: ''
      },
      postRules: {
        type: [{ required: true, message: '请选择主题', trigger: 'blur' }],
        title: [{ required: true, message: '请输入帖子标题', trigger: 'blur' }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  position: relative;
  margin-top: 20px;
  text-align: center;
  .post-card {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 600px;
    border-radius: 20px;
  }
}
</style>