<template>
  <div class="public-number">
    <header>
      <div class="banner">
        <img src="../../assets/img/publicnumber-img/banner.jpg" />
      </div>
    </header>

    <main>

      <section class="section features-introduction">
        <h1 class="title animated slideInUp">功能介绍</h1>
        <div class="bg"></div>
        <div class="flex animated slideInUp">
          <div class="nav" v-for="(item,index) in navList" :key="index">
            <img v-lazy="item.url" />
            <h3 class="font20 color000">{{ item.title }}</h3>
            <span class="font12 color000">{{ item.content }}</span>
          </div>
        </div>
      </section>

      <section class="show-product">
        <h1 class="title pd wow slideInUp">产品展示</h1>
        <div class="bg"></div>
        <div class="img-box wow slideInUp">
          <img v-lazy="require('../../assets/img/publicnumber-img/left.png')" class="left" />
          <img v-lazy="require('../../assets/img/publicnumber-img/right.png')" class="right" />
        </div>
      </section>

      <section class="section">
        <h1 class="title pd wow slideInUp">案例展示</h1>
        <div class="bg"></div>
        <div class="img-box wow slideInUp">
          <el-carousel :interval="4000" arrow="always" type="card" height="468px">
            <el-carousel-item v-for="item in imgList" :key="item.url" class="u-s" >
              <!-- 禁止图片鼠标拖动图片 -->
              <img v-lazy="item.url" ondragstart="return false;" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </section>
      
    </main>
  </div>
</template>

<script>
import { WOW } from "wowjs";

export default {
  name: "publicNumber",

  data() {
    return {
      navList: [
        {
          url: require("../../assets/img/publicnumber-img/1.png"),
          title: "企业品牌展示",
          content: "企业文化，企业理想，企业展望等自定义展示内容"
        },
        {
          url: require("../../assets/img/publicnumber-img/2.png"),
          title: "产品宣传",
          content: "产品展示及宣传"
        },
        {
          url: require("../../assets/img/publicnumber-img/3.png"),
          title: "企业资讯",
          content: "企业新闻状态，行业资讯展示"
        },
        {
          url: require("../../assets/img/publicnumber-img/4.png"),
          title: "活动推广",
          content: "支持图片，文字，视频上传"
        },
        {
          url: require("../../assets/img/publicnumber-img/5.png"),
          title: "一键咨询",
          content: "企业地址信息展示，支持一键导航，一键拔号咨询"
        }
      ],
      imgList: [
        {
          url: require("../../assets/img/swiper/1.png")
        },
        {
          url: require("../../assets/img/swiper/2.png")
        },
        {
          url: require("../../assets/img/swiper/3.png")
        },
        {
          url: require("../../assets/img/swiper/4.png")
        },
        {
          url: require("../../assets/img/swiper/6.png")
        }
      ]
    };
  },
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

<style lang='less' scoped>
.public-number {
  .title {
    text-align: center;
    font-size: 30px;
    color: #000000;
  }
  .pd {
    padding-top: 20px;
  }
  .bg {
    width: 41px;
    height: 4px;
    background: #949494;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .img-box {
    display: flex;
    flex-direction: row;
    img {
      margin: 0 auto;
    }
  }

  .features-introduction {
    margin-top: 40px;

    .flex {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .nav {
        flex: 1;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 40px;
        img {
          width: 128px;
          height: 128px;
          margin: 0 auto;
        }
        h3 {
          margin-top: 40px;
          margin-bottom: 24px;
        }
        span {
          width: 183px;
          margin: 0 auto;
        }
      }
    }
  }

  .show-product {
    // height: 675px;
    background-color: #f5f5f5;
  }

  .el-carousel {
    width: 100%;
    .el-carousel__item {
      text-align: center;
      overflow: hidden;
    }
  }
}
</style>