<template>
  <el-upload action="string" list-type="picture-card" :http-request="uploadImg" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>

<script>
import { saveImage } from "../../../api/upload";
export default {
  data() {
    return {
      imageUrl: "",
      photoName: "",
    };
  },
  mounted() {
    this.imageUrl == "";
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log(URL.createObjectURL(file.raw));
      this.imageUrl = URL.createObjectURL(file.raw);
      //   this.$emit("upload-url", this.imageUrl);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt8M = file.size / 1024 / 1024 < 8;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt8M) {
        this.$message.error("上传头像图片大小不能超过 8MB!");
      }
      return isJPG && isLt8M;
    },
    async uploadImg(param) {
      //  let imgFile = new FileReader();
      // imgFile.readAsDataURL(param.file);
      // imgFile.onload=res=>{
      //     console.log(res.target.result);
      // }
      const formData = new FormData();
      formData.append("file", param.file);
      const result = await saveImage(formData);
      console.log(result);
      if (result.code === 200) {
        this.$message.success("上传图片成功");
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.avatar {
  width: 148px;
  height: 148px;
  display: block;
}
</style>