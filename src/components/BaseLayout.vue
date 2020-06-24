<!-- 布局页面 -->
<template>
  <div class="base-layout">
    <!-- 头部 -->
    <!-- v-model="isShow" v-show="isShow" -->
    <page-header ></page-header>

    <transition enter-active-class="animated fadeIn">
      <keep-alive include="Project">
      <router-view></router-view>
      </keep-alive>
    </transition>

    <!-- 悬浮案例 -->
    <suspended-case></suspended-case>

    <!-- 分享组件 -->
    <!-- <share></share> -->

    <!-- 尾部 -->
    <page-footer></page-footer>
    <!-- 手机端尾部 -->
    <mobile-nav-footer></mobile-nav-footer>
  </div>
</template>

<script>
export default {
  name: "BaseLayout",
  computed: {
    isShow() {
      if (this.$route.name == "details") {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.base-layout {
  width: 100%;
  // height: 100%;
}
</style>