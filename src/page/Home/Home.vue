<!-- 首页-->
<template>
  <div class="home">
    <div class="color-Piece"></div>
    <Banner></Banner>
    <div class="section">
      <div class="home-intro">
        <a-row :gutter="30" class="row font16" type="flex">
          <a-col :span="11" class="wow fadeInLeft">
            <h1 class="left_title">公司简介</h1>
            <div
              class="text_indent2"
            >智能桂联是一家具有原创作经验丰富的团队，专业UI设计、网站开发、小程序开发、结合自主研发的智能灌溉、智能家居等智能核心技术。拥有多维度的万物互联应用解决方案，以7×24×4的服务理念为用户提供满意的设计、技术服务及专业解决方案。</div>
          </a-col>
          <a-col :span="13" class="d-flex align-items-end justify-content-end wow fadeInRight">
            <img
              v-lazy="require('../../assets/img/home-img/LOGO.png')"
              style="height:300px; width:430px;"
            />
          </a-col>
        </a-row>

        <div class="center-text">
          <h1 class="center_title wow slideInUp">用设计塑造品牌价值</h1>
          <div class="text_indent2 font16 wow slideInUp">
           智能桂联已经服务各行业超过三百多家的公司以及店铺，我们有信心赢得客户良好口碑和高度满意的依据，唯有客户的满意才能让我们继续努力向前冲，追随时
            代的发展，保持设计的原创。秉承“客户满意就是我们的成功”的服务理念，为用户提供便利、经济的个性化全程智能应用解决方案，让用户体验互联网智能时代。
          </div>
        </div>

        <div class="bottom-box wow slideInUp">
          <img src="../../assets/img/home-img/bottom-img.jpg" class="bottom-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";

export default {
  name: "Home",

  data() {
    return {};
  },
  created() {},
  mounted() {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: false
    });
    wow.init();
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.home {
  // min-height: 100%;
  .color-Piece {
  }
  .home-intro {
    .text_indent2 {
      text-indent: 2em;
    }
    .row {
      margin-top: 40px;
      .left_title {
        line-height: 40px;
        margin-bottom: 20px;
        padding-left: 10px;
        font-size: 30px;
        font-weight: bold;
      }
      .left_title_noboder {
        .left_title;
        line-height: 20px;
        margin-bottom: 40px;
        padding-right: 20px;
        border: 0;
      }
      .right_title {
        .left_title;
        padding: 0;
        padding-right: 10px;
        text-align: right;
        border: 0;
        border-right: 10px solid #ccc;
      }
      .right_title_noboder {
        .right_title;
        line-height: 20px;
        padding-right: 20px;
        margin-bottom: 40px;
        border: 0 !important;
      }
      .look-more_btn {
        float: right;
      }
    }

    .center-text {
      margin-top: 80px;
      .center_title {
        margin-bottom: 20px;
        text-align: center;
        font-size: 30px;
      }
    }

    .bottom-box {
      margin-top: 40px;
      .bottom-img {
        width: 100%;
      }
    }
  }
}
</style>