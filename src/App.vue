<template>
  <div id="app">
    <router-view :key="$route.fullpath"></router-view>
  </div>
</template>

<script>
import { senToken,serviceLink } from "@/api/project";

export default {
  name: "app",
  // created() {
  //   let docEle = document.documentElement,
  //     resizeEvt =
  //       "orientationchange" in window ? "orientationchange" : "resize",
  //     resizeFun = () => {
  //       let clientWidth = docEle.clientWidth;
  //       if (!clientWidth) return;
  //       docEle.style.fontSize = 100 * (clientWidth / 1920) + "px";
  //     };
  //   if (!document.addEventListener) return;
  //   window.addEventListener(resizeEvt, resizeFun, false);
  //   window.addEventListener("DOMContentLoaded", resizeFun, false);
  //   resizeFun();
  // }
  created() {
    // senToken().then(res => {
    //   console.log(res,'res');
      
    // })
    serviceLink().then(res => {
      let ip = res.data.path_link;
      window.localStorage.setItem('ip',ip)
    })
  }
  
};
</script>

<style lang="less">
@import "./style/base.less";
@import "./style/global.less";
@import "./style/bootstarp-ui.less";
@import "./style/antdesign.less";
@import "./style/media.less";

#app {
  width: 100%;
  // height: 100%;
}
</style>
