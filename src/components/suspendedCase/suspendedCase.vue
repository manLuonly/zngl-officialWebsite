<template>
  <div class="suspended-case">
    <div class="suspended-box">
      <!-- srcset="../../assets/img/home-img/uspendedCase.png 800w, ../../assets/img/home-img/uspendedCase.png 1024w, ../../assets/img/home-img/uspendedCase.png 1440w" -->
      <img class="suspended-img" src="../../assets/img/home-img/uspendedCase.png" />
      <div class="suspended-text-box">
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
      ]
    };
  },

  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    goProject(item) {
      if (item.text == "返回顶部") {
        this.backTop();
      } else {
        this.$router.push({ name: item.path, query: { type: item.type } });
      }
    },
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
    // 为了计算距离顶部的高度
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
        // margin: 18px 20px;
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
}
</style>