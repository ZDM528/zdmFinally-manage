<template>
  <el-dialog title="充值VIP" :visible.sync="showDialog" width="50%" @close="payDialogClosed" class="dialog">
    <h4>用户账号：{{`${Cookies.get('username')}`}}</h4>
    <div class="box">
      <h4>方案选择：</h4>
      <div class="price-img"><img src="../../assets/img/price.png" /></div>
    </div>
    <h4>优惠券： 无</h4>
    <div class="box">
      <h4>支付方式：</h4>
      <div class="pay-img"><img src="../../assets/img/pay.png" /></div>
    </div>
    <el-button type="danger" class="submit-btn" @click="submit">确定</el-button>
  </el-dialog>
</template>

<script>
import { pay } from '../../api/vip'
import Cookies from "js-cookie";
export default {
  name: 'PayDialog',
  props: {
    showPayDialog: Boolean,
  },
  watch: {
    showPayDialog() {
      this.showDialog = this.showPayDialog
    }
  },
  computed: {
    Cookies() {
      return Cookies
    }
  },
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    payDialogClosed () {
      this.$emit('closePayDialog')
    },
    //确认充值
    async submit() {
      if (confirm('您是否确认充值')) {
        let res = await pay({
          id: Cookies.get('id'),
          username: Cookies.get('username')
        })
        if (res.code === 200) {
          this.$message.success('充值成功!')
          this.$emit('closePayDialog')
        } else {
          this.$message.error('充值失败!')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.price-img,
.pay-img {
  width: 40%;
  height: 20%;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}
.submit-btn {
  width: 20%;
  margin-left: 80%;
}
</style>