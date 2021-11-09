<template>
  <div>
    <el-form ref="articleForm" :model="form" label-position="left" label-width="120px" :rules="rules">
      <el-row>
        <el-col :span="10">
          <el-form-item label="文章标题" prop="title">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="文章关键字" prop="key">
            <el-input v-model="form.key"></el-input>
          </el-form-item>
          <el-form-item label="文章标签" prop="tag">
            <el-select v-model="form.tag" placeholder="请选择文章标签">
              <el-option label="react" value="shanghai"></el-option>
              <el-option label="vue" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="文章描述">
            <el-input v-model="form.description" type="textarea"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          dd
        </el-col>
      </el-row>
      <div id="vditor" name="description"></div>
    </el-form>
  </div>
</template>
<script>
import Vditor from 'vditor';
import "vditor/src/assets/scss/index.scss";
export default {
  data () {
    return {
      form: {
        title: '',
        key: '',
        tag: ''
      },
      contentEditor: {},
      rules: {
        title: { required: true, message: '请输入文章标题', trigger: 'blur' },
        key: { required: true, message: '请输入文章关键字', trigger: 'blur' },
        tag: { required: true, message: '请选择活动区域', trigger: 'change' }
      }
    }
  },
  methods: {
    onSubmit () {

    },
  },
  mounted () {
    this.contentEditor = new Vditor('vditor', {
      height: 500,
      placeholder: '开始编写文章',
      theme: 'classic',
      counter: {
        enable: true,
        type: 'markdown'
      },
      preview: {
        delay: 0,
        hljs: {
          style: 'monokai',
          lineNumber: true
        }
      },
      tab: '\t',
      typewriterMode: true,
      toolbarConfig: {
        pin: true
      },
      cache: {
        enable: false
      },
      hint: {
        emoji: {
          1: '😭',
          2: '😀',
          3: '😃',
          4: '😄',
          5: '😁',
          6: '😆',
          7: '😅',
          8: '🤣',
          9: '🙂',
          10: '😂',
          11: '🙃',
          12: '😉',
          13: '😊',
          14: '😇',
          15: '😍',
          16: '🤩',
          17: '😘',
          18: '😗',
          19: '😚',
          20: '😙',
          21: '😋',
          22: '😛',
          23: '😜',
          24: '🤪',
          25: '😝',
          26: '🤑',
          27: '🤗',
          28: '🤭',
          29: '🤫',
          30: '🤔',
          31: '🤐',
          32: '🤨',
          33: '😏',
          34: '😴',
          35: '😷',
          36: '😡'
        }
      },
      mode: 'sv',
      toolbar: [
        'emoji',
        'headings',
        'bold',
        'italic',
        'strike',
        'link',
        '|',
        'list',
        'ordered-list',
        'check',
        'outdent',
        'indent',
        '|',
        'quote',
        'line',
        'code',
        'inline-code',
        'insert-before',
        'insert-after',
        '|',
        // 'record',
        'table',
        '|',
        'undo',
        'redo',
        '|',
        'edit-mode',
        // 'content-theme',
        'code-theme',
        'export',
        {
          name: 'more',
          toolbar: [
            'fullscreen',
            'both',
            'preview',
            'info',
            'help',
          ],
        }],
    })
  }
}
</script>

<style>
</style>