<!-- 小程序-->
<template>
  <div class="applets">
    <div>
      <!-- <div class="module1" v-for="(item,index) in List" :key="index">
        <h1 class="module1-title-text wow slideInUp" :class="item.h1class">{{ item.title }}</h1>
        <span class="module1-content-text wow slideInUp" :class="item.spanclass">{{ item.content }}</span>
        <div class="module1-img-box wow slideInUp">
          <img v-lazy="item.url" />
        </div>
      </div>-->
      <header>
        <div class="banner">
          <img src="~@/assets/img/applets-img/banner.jpg" draggable="false" />
        </div>
      </header>

      <section class="module1 section" style="margin-top:40px">
        <h1 class="module1-title-text animated slideInUp">一站式微信小程序满足多场景的业务需求</h1>
        <span
          class="module1-content-text animated slideInUp"
        >小程序解决方案致力于为商家提供一体化智能营销解决方案。包括活动优惠、商品销售，会员管理，产品折扣，商品上架、下架数据体系，二次营销等服务，帮助商家快速时间获客能力，实现商品及订单双倍高，为商家获取最大的收益。</span>
        <div class="module1-img-box animated slideInUp">
          <img v-lazy="require('../../assets/img/applets-img/big-img-1.png')" draggable="false" />
        </div>
      </section>

      <section class="module1">
        <h1 class="module1-title-text padding-h1 wow slideInUp">一站式微信小程序界面展示</h1>
        <span
          class="module1-content-text center-text wow slideInUp"
        >强劲的功能系统，专属品牌小程序+门店小程序，适合个人、门店、商家。</span>
        <div class="module1-img-box wow slideInUp">
          <img v-lazy="require('../../assets/img/applets-img/big-img-2.png')" draggable="false" />
        </div>
      </section>

      <section>
        <div class="module2">
          <h1 class="module2-title-text wow slideInUp">小程序核心功能</h1>
          <span class="module2-content-text wow slideInUp">标准化界面，支持灵活拖拽，功能板块丰富。</span>
          <div class="module2-nav wow slideInUp">
            <div class="module2-nav-box" v-for="item in spriteList1" :key="item.text">
              <div class="module2-nav-img" :style="bg(item.start,item.end)"></div>
              <div class="module2-nav-text">{{ item.text }}</div>
            </div>
          </div>
          <div class="module2-nav wow slideInUp ps2" style="margin-top: 70px;">
            <div class="module2-nav-box" v-for="item in spriteList2" :key="item.text">
              <div class="module2-nav-img" :style="bg(item.start,item.end)"></div>
              <div class="module2-nav-text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";

export default {
  name: "Service",
  data() {
    return {
      List: [
        {
          title: "一站式微信小程序解决方案满足多场景的业务需求",
          content:
            "小程序解决方案致力于为商家提供一体化智能营销解决方案。包括活动优惠、商品销售，会员管理，产品折扣，商品上架、下架数据体系，二次营销等服务，帮助商家快速时间获客能力，实现商品及订单双倍高，为商家获取最大的收益。",
          url: require("../../assets/img/applets-img/big-img-1.png")
        },
        {
          title: "一站式微信小程序界面展示",
          content: "标准化界面，支持灵活拖拽，功能板块丰富。",
          url: require("../../assets/img/applets-img/big-img-2.png"),
          h1class: "padding-h1",
          spanclass: "center-text"
        }
      ],
      spriteList1: [
        {
          text: "分享到群",
          start: 0,
          end: 0
        },
        {
          text: "线下扫码",
          start: -37,
          end: 0
        },
        {
          text: "搜索查找",
          start: -74,
          end: 0
        },
        {
          text: "聊天置顶",
          start: -120,
          end: 0
        },
        {
          text: "推荐给好友",
          start: -161,
          end: 0
        }
      ],
      spriteList2: [
        {
          text: "地址查找",
          start: 0,
          end: -50
        },
        {
          text: "在线支付",
          start: -38,
          end: -50
        },
        {
          text: "历史列表",
          start: -83,
          end: -50
        },
        {
          text: "公众号关联",
          start: -127,
          end: -50
        },
        {
          text: "更多功能",
          start: -174,
          end: -50
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
  methods: {
    bg(start, end) {
      return {
        background: `url(${require(`../../assets/img/applets-img/sprites.png`)}) ${start}px ${end}px`
      };
    }
  }
};
</script>

<style lang="less" scoped>
.reuseTieleText () {
  font-size: 30px;
  line-height: 19px;
  letter-spacing: 1px;
  color: #000000;
  margin-bottom: 20px;
  text-align: center;
}

.reusecontentText() {
  display: block;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 40px;
  text-indent: 2em;
}

.applets {
  .module1 {
    .module1-title-text {
      .reuseTieleText();
    }
    .module1-content-text {
      .reusecontentText();
    }
    .padding-h1 {
      padding-top: 20px;
    }
    .center-text {
      text-align: center;
    }
    .module1-img-box {
      text-align: center;
    }
    &:nth-child(1) {
      max-width: 1200px;
      margin: 0 auto;
    }
    &:nth-last-child(2) {
      background-color: #f5f5f5;
    }
  }

  .module2 {
    max-width: 1200px;
    margin: 40px auto;
    .module2-title-text {
      .reuseTieleText();
    }
    .module2-content-text {
      text-align: center;
      .reusecontentText();
    }
    .module2-nav {
      display: flex;
      justify-content: space-between;
      .module2-nav-box {
        width: 150px;
        .module2-nav-img {
          width: 39px;
          height: 40px;
          margin: 0 auto;
        }
        .module2-nav-text {
          text-align: center;
          font-size: 22px;
          color: #333333;
          margin-top: 40px;
        }
      }
    }
  }
}
</style>
