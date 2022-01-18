<template>
  <el-dialog title="充值VIP" :visible.sync="showDialog" width="50%" @close="payDialogClosed">
    <h4>用户账号：小王</h4>
    <div>
      <h4>方案选择：</h4>
      <div class="price-img"><img src="../../assets/img/price.png" /></div>
    </div>
    <h4>优惠券：</h4>
    <h4>支付方式：</h4>
    <div class="pay-img"><img src="../../assets/img/pay.png" /></div>
    <el-button type="danger" class="submit-btn">确定</el-button>
  </el-dialog>
</template>

<script>
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
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    payDialogClosed () {
      this.$emit('closePayDialog')
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