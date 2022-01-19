<template>
  <div class="community">
    <!-- 选项卡片 -->
    <div class="box-option">
      <el-card class="option-card">
        <span>数据共享分类</span>
        <ul>
          <li><div>全部内容</div></li>
          <li><div>数据分享</div></li>
          <li><div>资料分享</div></li>
        </ul>
      </el-card>
    </div>

    <!-- 数据卡片 -->
    <!-- <div class="allData-card">
      <el-card class="data-card">
        <div class="row-1">
          <div class="img-wrap">
            <img src="../../assets/img/fish-logo.png" alt="">
          </div>
          <span class="username">1111111</span>
        </div>
      </el-card> -->
       <!-- <el-card class="data-card">
        <div class="row-1">
          <div class="img-wrap">
            <img src="../../assets/img/fish-logo.png" alt="">
          </div>
          <span class="username">1111111</span>
        </div>
      </el-card> -->
    <!-- </div> -->

  </div>
</template>

<script>
export default {
  name: 'Community'
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
    width: 80%;
    .option-card {
      width: 80%;
      border-radius: 20px;
      ul {
        display: inline-block;
        width: 60%;
        height: 40px;
      }
      ul > li{
        display: inline-block;
        list-style: none;
        background-color: red;
        margin-right: 50px;
      }
    }
  }
  // .allData-card {
  //   .data-card {
  //     border-radius: 20px;
  //     .row-1 {
  //       height: 50px;
  //       .img-wrap {
  //         width: 80px;
  //         height: 50px;
  //         img {
  //           width: 100%;
  //           height: 100%;
  //         }
  //       }
  //       .username {
  //         line-height: 50px;
  //         margin-left: 6%;
  //       }
  //     }
  //   }
  // }  
}
</style>