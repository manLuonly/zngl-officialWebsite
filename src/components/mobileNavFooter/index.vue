<template>
  <div class="mobile-nav-footer">
    <ul class="nav-bar">
      <router-link
        v-for="(item, index) in navList"
        :key="index"
        :class="item.class"
        :to="{ path: item.path  }"
        tag="li"
        active-class="z-act"
      >
        <i class="img"></i>
        <span v-text="item.name"></span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mobileNavFooter",

  data() {
    return {
      navList: [
        { class: "home", name: "首页", path: "/home" },
        { class: "program", name: "应用方案", path: "/program" },
        { class: "applets", name: "小程序", path: "/applets" },
        { class: "publicnumber", name: "公众号", path: "/publicnumber" },
        { class: "project", name: "经典项目", path: "/project" },
        { class: "linkus", name: "联系我们", path: "/linkus" }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang='less' scoped>
.mobile-nav-footer {
  display: none;
  height: 2.5rem;
  .nav-bar {
    position: fixed;
    bottom: 0;
    display: flex;
    flex-shrink: 0;
    width: 100%;
    height: 2.5rem;
    border-top: 0.5px solid #ededed;
    background: #eeeeee;
    img {
      width: 1.23rem;
      height: 1.23rem;
    }
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0.7rem;
      .img {
        display: block;
        width: 1.29rem;
        height: 1.29rem;
        background-size: 100%;
      }
      &.home {
        .img {
          // background: url("../../assets/img/mobile-footer/home.png") 100% 100% no-repeat;
          background: url("../../assets/img/mobile-footer/home.png") no-repeat;
        }
        &.z-act .img {
          background: url("../../assets/img/mobile-footer/home-on.png") no-repeat;
        }
      }
      &.program {
        .img {
          background: url("../../assets/img/mobile-footer/program.png") no-repeat;
        }
        &.z-act .img {
          background: url("../../assets/img/mobile-footer/program-on.png") no-repeat;
        }
      }
      &.applets {
        .img {
          background: url("../../assets/img/mobile-footer/sm.png") no-repeat;
        }
        &.z-act .img {
          background: url("../../assets/img/mobile-footer/sm-on.png") no-repeat;
        }
      }
      &.publicnumber {
        .img {
          background: url("../../assets/img/mobile-footer/pb-num.png") no-repeat;
        }
        &.z-act .img {
          background: url("../../assets/img/mobile-footer/pb-num-on.png") no-repeat;
        }
      }
      &.project {
        .img {
          background: url("../../assets/img/mobile-footer/case.png") no-repeat;
        }
        &.z-act .img {
          background: url("../../assets/img/mobile-footer/case-on.png") no-repeat;
        }
      }
      &.linkus {
        .img {
          background-image: url("../../assets/img/mobile-footer/contact-us.png") no-repeat;
        }
        &.z-act .img {
          background-image: url("../../assets/img/mobile-footer/contact-us-on.png") no-repeat;
        }
      }
      &.z-act {
        color: rgb(5, 86, 167);
      }
    }
  }
}
</style>