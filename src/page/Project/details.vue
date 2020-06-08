<template>
  <div class="details">
    <header class="header">
      <div class="title section">
        <div class="back" @click="goBack">
          <a-icon type="left" />
          <span>返回</span>
        </div>
        <h1>[智能桂联经典案例] 朋友圈文案</h1>
      </div>
    </header>

    <main class="main">
      <section class="img-box section" v-for="(item,index) in imgList" :key="index">
        <img v-lazy="item.url" class="img" />
      </section>
    </main>

    <footer class="footer section">
      <div class="text-box">
        <span class="up text-truncate" @click="getArticle">上一篇: 震惊!专家说在非洲每过60秒我们就会过去一分钟!</span>
        <span class="down text-truncate" @click="getArticle">下一篇: 是中国人都转起来!</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "details1",

  data() {
    return {
      imgList: [
        {
          url: require("../../assets/img/home-img/banner1.jpg")
        },
        {
          url: require("../../assets/img/swiper/2.png")
        },
        {
          url: require("../../assets/img/program-img/primary.png")
        },
        {
          url: require("../../assets/img/publicnumber-img/right.png")
        },
        {
          url: require("../../assets/img/program-img/technology.png")
        }
      ]
    };
  },
  mounted() {},
  methods: {
    // 返回上一页
    goBack() {
      this.$router.push({ name: "project" });
    },
    // 获取文章
    getArticle() {}
  }
};
</script>

<style lang='less' scoped>
.details {
  .header {
    .title {
      color: #333;
      padding-top: 40px;
      h1 {
        text-align: center;
        font-size: 26px;
      }
      .back {
        display: block;
        width: 100px;
        cursor: pointer;
        i {
          display: inline-flex;
        }
      }
    }
  }

  .main {
    .img-box {
      text-align: center;
      padding: 30px;
      .img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }
  }

  .footer {
    .text-box {
      display: flex;
      justify-content: space-around;
    }
    span {
      flex: 1;
      cursor: pointer;
    }
  }
}
</style>