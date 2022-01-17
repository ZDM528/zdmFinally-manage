<template>
  <div>
    <el-menu :default-active="activeKey" class="el-menu-demo" mode="horizontal" background-color="#fff" text-color="#000" :active-text-color="variables.menuActiveText" style="border-shadow: 10px 0px 10px rgba(0, 0, 0, 1)" @select="handleSelect" router>
      <el-menu-item index="/mainPage">数据列表</el-menu-item>
      <el-menu-item index="/mainPage">数据社区</el-menu-item>
      <el-menu-item index="/personRoom">个人空间</el-menu-item>
    </el-menu>
    <keep-alive include="MainPage">
      <router-view style="padding: 0 10%"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import variables from "@/styles/_variable.scss";
export default {
  data() {
    return {};
  },
  computed: {
    variables() {
      return variables;
    },
  },
  methods: {
    handleSelect() {},
  },
};
</script>

<style>
.el-menu-demo {
  box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.4);
  padding-left: 20%;
  padding-right: 20%;
}
</style>