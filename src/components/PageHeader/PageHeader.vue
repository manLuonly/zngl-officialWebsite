<!-- 公共头部  -->
<template>
  <div class="page-header" ref="container">
    <a-affix :offsetTop="0.00000001" style="height:48px">
      <div class="logo-layout-box" style="position:relative;z-index:99">
        <div class="logo-box" @click="goHome">
          <div class="logo">
            <img src="@/assets/img/logo.png" class="logo" />
          </div>
          <span class="name">智能桂联</span>
        </div>
        <span class="title-name">智能桂联</span>
        <div :class="src" @click="isShowNavIcon"></div>
      </div>

      <div class="menu">
        <ul class="menu-ul" v-show="isShowOnIcon">
          <router-link
            v-for="item in projectNavList"
            :key="item.text"
            @click.native="goProject(item)"
            :to="{ path: item.path  }"
            tag="li"
          >
            <span class="nuxt-link-exact-active">{{ item.text }}</span>
          </router-link>
        </ul>
      </div>

      <div class="mask m-0" v-show="isShowOnIcon" @click="hideMen"></div>

      <div class="nav d-flex justify-content-center">
        <div class="row align-items-center">
          <!-- exact -->
          <router-link
            :class="_navStyle"
            v-for="tab in navList"
            :key="tab.name"
            :to="{path:tab.path}"
          >{{ tab.name }}</router-link>
        </div>
      </div>
    </a-affix>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PageHeader",
  data() {
    return {
      navList: [
        { name: "首页", path: "/home" },
        { name: "应用方案", path: "/program" },
        { name: "小程序", path: "/applets" },
        { name: "公众号", path: "/publicnumber" },
        { name: "经典项目", path: "/project" },
        { name: "联系我们", path: "/linkus" }
      ],
      projectNavList: [
        {
          text: "logo设计",
          path: "project",
          type: "logo"
        },
        {
          text: "包装设计",
          path: "project",
          type: "pg"
        },
        {
          text: "品牌VI设计",
          path: "project",
          type: "vi"
        },
        {
          text: "广告设计",
          path: "project",
          type: "pt"
        },
        {
          text: "画册设计",
          path: "project",
          type: "pa"
        },
        {
          text: "APP开发",
          path: "project",
          type: "app"
        },
        {
          text: "网站开发",
          path: "project",
          type: "web"
        },
        {
          text: "小程序开发",
          path: "project",
          type: "sm"
        },
        {
          text: "公众号开发",
          path: "project",
          type: "pb"
        }
      ],
      isShowOnIcon: false
    };
  },
  watch: {},
  computed: {
    ...mapState({
      isProject: state => state.isProject
    }),
    _navStyle() {
      return this.$route.meta.title === "详情" ? "detailsCol" : "col-xl r-link";
    },
    src() {
      return this.isShowOnIcon ? "nav-btn-on" : "nav-btn";
    }
  },
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },
    isShowNavIcon() {
      this.isShowOnIcon = !this.isShowOnIcon;
    },
    // 跳转项目页
    goProject(item) {    
      this.$router.push({ name: item.path, query: { type: item.type } });
      this.isShowOnIcon = false;      
    },
    hideMen() {
      this.isShowOnIcon = false;
    }
  }
};
</script>

<style lang="less" scoped>
.page-header {
  width: 100%;
  height: 80px;
  .logo-box {
    position: absolute;
    left: 10%;
    top: 50%;
    z-index: 99;
    width: 76px;
    height: 80px;
    cursor: pointer;
    .logo {
      width: 100%;
      padding-bottom: 3px;
    }
    .name {
      width: 76px;
      height: 18px;
      font-family: SourceHanSansCN-Regular;
      font-size: 17px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 19px;
      letter-spacing: 2px;
      color: #ffffff;
    }
  }
  .title-name {
    display: none;
  }

  .navCss() {
    position: absolute;
    display: none;
    top: 8px;
    right: 10px;
    width: 26px;
    height: 30px;
  }

  .nav-btn {
    .navCss();
    background: url("../../assets/img/mobile-footer/menu.png") 100% 100%
      no-repeat;
  }
  .nav-btn-on {
    .navCss();
    background: url("../../assets/img/mobile-footer/menu-on.png") 100% 100%
      no-repeat;
  }

  .menu {
    display: none;
    width: 100%;
    z-index: 99;
    position: relative;
    .menu-ul {
      width: 100%;
      transition: all 0.5s;
      li {
        height: 2.5rem;
        color: #fff;
        padding: 0 1rem;
        border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
        box-sizing: border-box;
        background: #505050;
        line-height: 2.5rem;
        .nuxt-link-exact-active {
          color: #fff;
          font-size: 0.9rem;
        }
      }
    }
  }

  .mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 98;
    background: rgba(0, 0, 0, 0.8);
    touch-action: none; // 手机禁止拖动
  }

  .nav {
    position: relative;
    background-color: #000000;
    opacity: 0.8;
    .row {
      width: 50%;
      height: 80px;
      font-size: 14px;
      .col-xl {
        padding: 30px 5px;
        text-align: center;
        color: #ffffff;
      }
    }
  }

  .r-link {
    &.router-link-exact-active {
      color: #ffffff !important;
    }
  }
  .detailsCol {
    margin-right: 40px;
    font-size: 14px;
    color: #fff;
  }
}
</style>