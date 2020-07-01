<template>
  <div class="suspended-case">
    <div class="suspended-box animated" :class="{ 'fadeOutLeft': !hideNav,'fadeInLeft': addAnimation}">
      <img class="suspended-img u-s" src="~@/assets/img/home-img/uspendedCase.png" />
      <a-icon type="close-circle" @click="closeNav" class="close-nave" />
      <div class="suspended-text-box t-c">
        <div
          v-for="(item,index) in jumpList"
          :key="index"
          class="suspended-text colorfff"
          :class="item.class"
        >
          <span @click="goProject(item)">{{ item.text }}</span>
        </div>
      </div>
    </div>

    <div class="show-nav animated" :class="{ 'fadeOutLeft': hideNav,'fadeInLeft': !addAnimation}" @click="showNav">
      <div class="text font12">
        展开导航
      </div>
    </div>

    <div class="icon t-c o-h">
      <div @mouseenter="enter" @mouseleave="leave">
        <a-icon type="qrcode" />
        <div class="colorfff">
          <span>联系我们</span>
        </div>
      </div>
      <div @click="showDrawer">
        <a-icon type="phone" />
        <div class="colorfff">
          <span>咨询电话</span>
        </div>
      </div>
      <div @click="backTop">
        <a-icon type="up" />
        <div class="colorfff">
          <span>点击至顶</span>
        </div>
      </div>
    </div>

    <a-drawer
      title
      width="290"
      placement="right"
      :closable="true"
      :visible="isShowDrawer"
      @close="onClose"
      :mask="false"
      wrapClassName="drawew"
      :maskClosable="true"
      :zIndex="zIndex"
    >
      <img
        class="avator"
        src="~@/assets/img/avatar.png"
      />
      <p class="time">咨询热线（9:00 至 23:00）</p>
      <p class="phone">19195682297</p>
      <p class="line"></p>
      <p class="text">你也可以填写你的联系方式，</p>
      <p class="text2">我们会主动和你联系。</p>
      <a-button class="contact-manner" type="primary" ghost @click="goAbousUs">填写联系方式</a-button>
    </a-drawer>
    <div
      class="wechat-QRcode-box bg-f t-c color000"
      :class="{'is-show-wechat-QRCode':isShowWechatQRCode }"
    >
      <div class="wechat-QRcode-img">
        <img src="~@/assets/img/gw-qrcode (2).png" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store";

export default {
  name: "suspendedCase",

  data() {
    return {
      jumpList: [
        {
          text: "#经典案例#",
          class: "no-hover"
        },
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
        },
        {
          text: "返回顶部",
          type: "logo"
        }
      ],
      isShowWechatQRCode: false, // 显示隐藏二维码
      isShowDrawer: false, // 显示隐藏drawer
      zIndex: 1, // drawer zIndex
      addAnimation: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  computed: {
    ...mapState(["hideNav"])
  },
  methods: {
    // 跳转项目页
    goProject(item) {
      if (item.text == "返回顶部") {
        this.backTop();
      } else {
        this.$router.push({ name: item.path, query: { type: item.type } });
      }
    },
    // 关闭导航栏
    closeNav() {
      this.$store.commit("changeHideNav", false);
      this.addAnimation = false;
    },
    // 展示导航栏
    showNav() {
      this.$store.commit("changeHideNav", true);
      this.addAnimation = true;
    },
    // 移入
    enter() {
      this.isShowWechatQRCode = true;
    },
    // 移出
    leave() {
      this.isShowWechatQRCode = false;
    },
    // 返回顶部
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    // 计算距离顶部的高度
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
    },
    // 显示Drawer
    showDrawer() {
      this.isShowDrawer = true;
      this.zIndex = 100;
    },
    // 关闭Drawer
    onClose() {
      this.isShowDrawer = false;
      this.zIndex = 1;
    },
    goAbousUs() {
      this.onClose();
      this.$router.push({ name: "linkus" });
    }
  }
};
</script>

<style lang='less' scoped>
.suspended-case {
  position: fixed;
  z-index: 100;
  display: block;
  bottom: 3px;
  left: 30px;

  .suspended-box {
    display: flex;
    .suspended-img {
      position: relative;
    }
    .close-nave {
      cursor: pointer;
      font-size: 20px;
    }
    .suspended-text-box {
      position: absolute;
      left: 0;
      width: 132px;
      height: 552px;
      padding-top: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      z-index: 99;

      .suspended-text {
        &:nth-child(1) {
          font-size: 18px;
          color: #004a9f;
        }
        &:last-child {
          color: #ffffff;
          padding-top: 62px;
        }
        span {
          cursor: pointer;
          &:hover {
            color: salmon;
          }
        }
      }
      .no-hover {
        span {
          cursor: auto !important;
          &:hover {
            color: #004a9f !important;
          }
        }
      }
    }
  }

  .hidden-nav {
    display: none;
  }

  .show-nav {
    position: fixed;
    left: 0px;
    z-index: 99;
    bottom: 162px;
    cursor: pointer;
    .text {
      width: 20px;
      color: #f5f7fa;
      padding: 5px 0;
      background: #333;
      overflow: hidden;
      text-align: center;
    }
  }

  .hidden-text {
    display: none;
  }

  .icon {
    position: fixed;
    right: 30px;
    top: 430px;
    width: 60px;
    color: #f5f7fa;
    cursor: pointer;
    div {
      width: 100%;
      height: 50px;
      line-height: 50px;
      margin: 2px auto;
      background-color: #333;
      display: flex;
      justify-content: center;
      flex-direction: column;
      overflow: hidden;
      span {
        font-size: 12px;
      }

      /deep/ i {
        padding-top: 5px;
        font-size: 20px;
      }
    }
  }

  .wechat-QRcode-box {
    position: fixed;
    right: 110px;
    top: 434px;
    font-size: 9px;
    opacity: 0;
    .wechat-QRcode-img {
      padding: 10px 10px 8px;
    }
  }
  .is-show-wechat-QRCode {
    opacity: 1;
    transition: all 1.2s;
  }
}
</style>