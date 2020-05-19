<!-- 布局页面 -->
<template>
  <div class="base-layout">
    <!-- 头部 -->
    <page-header></page-header>
    <transition enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>
     <!-- 悬浮案例 -->
    <suspended-case></suspended-case>
    <!-- 分享组件 -->
    <!-- <share></share> -->
    <!-- 尾部 -->
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  name: "BaseLayout"
};
</script>

<style lang="less" scoped>
.base-layout {
  width: 100%;
  height: 100%;
}
</style>