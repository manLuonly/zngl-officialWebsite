<template>
  <div class="suspended-case">
    <div class="suspended-box">
      <!-- srcset="../../assets/img/home-img/uspendedCase.png 800w, ../../assets/img/home-img/uspendedCase.png 1024w, ../../assets/img/home-img/uspendedCase.png 1440w" -->
      <img class="suspended-img" src="../../assets/img/home-img/uspendedCase.png" v-show="hideNav" />
      <a-icon type="close" @click="closeNav" v-show="hideNav" class="close-nave" />
      <div class="suspended-text-box" v-show="hideNav">
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

    <div class="icon" v-show="hideIcon">
      <!-- @click="isShowQRcode" -->
      <div @mouseenter="enter" @mouseleave="leave">
        <a-icon type="qrcode" />
      </div>
      <div @click="closeIcon">
        <a-icon type="right" />
      </div>
      <div @click="backTop">
        <a-icon type="up" />
      </div>
    </div>

    <div class="wechat-QRcode-box" v-show="isShowWechatQRCode">
      <div class="wx-arrow">
        <span>◆</span>
      </div>
      <div class="wechat-QRcode-img">
        <img src="../../assets/img/gw-qrcode (2).png" />
      </div>
    </div>
  </div>
</template>

<script>
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
      hideNav: true,
      hideIcon: false,
      isShowWechatQRCode: false
    };
  },

  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
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
      this.hideNav = false;
      this.hideIcon = true;
    },
    // 关闭悬浮icon
    closeIcon() {
      this.hideNav = true;
      this.hideIcon = false;
    },
    isShowQRcode() {
      this.isShowWechatQRCode = !this.isShowWechatQRCode;
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
  left: 20px;

  .suspended-box {
    display: flex;
    .suspended-img {
      position: relative;
    }
    .close-nave {
      cursor: pointer;
      // margin-top: 10px;
      font-size: 20px;
    }
    .suspended-text-box {
      position: absolute;
      width: 132px;
      height: 552px;
      padding-top: 60px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

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

  .icon {
    position: fixed;
    left: 0;
    top: 430px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 82px;
    background: #333;
    border-radius: 0 0.5rem 0.5rem 0;
    width: 20px;
    overflow: hidden;
    text-align: center;
    color: #f5f7fa;
    // animation: 2s linear infinite;
    // transition: right 0.4s;
    cursor: pointer;
  }

  .wechat-QRcode-box {
    position: fixed;
    left: 40px;
    top: 390px;
    margin-top: 10px;
    background-color: #ffffff;
    color: #000000;
    font-size: 9px;
    text-align: center;
    .wx-arrow {
      position: absolute;
      top: 35px;
      right: 69px;
      z-index: -1;
      span {
        font-family: Simsun;
        font-size: 32px;
        line-height: 32px;
        overflow: hidden;
        color: #73d661;
        color: Rgba(0, 0, 0, 0.5);
      }
    }
    p {
      font-size: 9px;
      margin: 0;
    }
  }
}
</style>