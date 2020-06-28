<template>
  <div id="app">
    <router-view :key="$route.fullpath" v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
import { senToken, serviceLink } from "@/api/project";

export default {
  name: "app",
  provide() {
    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true //控制视图是否显示的变量
    };
  },
  created() {
    serviceLink().then(res => {
      let ip = res.data.path_link;
      window.localStorage.setItem("ip", ip);
    });
  },
  methods: {
    reload() {
      this.isRouterAlive = false; //先关闭，
      this.$nextTick(function() {
        this.isRouterAlive = true; //再打开
      });
    }
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
