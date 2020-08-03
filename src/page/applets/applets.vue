<!-- 小程序-->
<template>
  <div class="applets">
    <div>
      <header>
        <div class="banner">
          <img src="~@/assets/img/applets-img/banner.jpg" draggable="false" />
        </div>
      </header>

      <section>
        <h1 class="font30 color000 text-center" style="margin:40px 0">一站式微信小程序满足多场景的业务需求</h1>
        <div class="flex row-around">
          <img src="~@/assets/img/applets-img/business.png" draggable="false" />
          <span style="width:23rem">小程序解决方案致力于为商家提供一体化智能营销解决方案。包括活动优惠、商品销售，会员管理，产品折扣，商品上架、下架数据体系，二次</span>
        </div>
      </section>

      <section style="background:rgba(245,245,245,1);">
        <h1 class="font30 color000 text-center p-t-40">一站式微信小程序界面展示</h1>
        <p class="font18 color000 text-center m-t-20">标准化界面，支持灵活拖拽，功能板块丰富</p>
        <img
          class="m-t-40"
          src="~@/assets/img/applets-img/interface-show.png"
          draggable="false"
          style="max-width:100%;max-height:100%"
        />
      </section>

      <section class="section">
        <h1 class="font30 color000 text-center m-t-40">一站式微信小程序体验</h1>
        <div class="slide-module">
          <div class="left">
            <div class="title flex row-around">
              <ul
                v-for="(item,index) in applets"
                :key="item.title"
                :class="{'title-ative':titleIndex==index}"
                class="applets"
              >
                <li class="applets-item" @mouseenter="enter(index)">{{ item.title }}</li>
              </ul>
            </div>
            <div></div>
          </div>
          <div class="right">
            <!-- <img :src="item.img" alt /> -->
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
      titleIndex: 0,
      applets: [
        {
          title: "餐饮小程序",
        },
        {
          title: "社区小程序",
        },
        {
          title: "教育小程序",
        },
      ],
    };
  },
  mounted() {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: false,
    });
    wow.init();
  },
  methods: {
    enter(index) {
      console.log(index, "index");
      this.titleIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
.applets {
  .slide-module {
    .left {
      width: 60%;
      .title {
        .applets {
          .applets-item {
         
          }
        }
      }
    }
    .right {
      width: 40%;
    }
  }
  .title-ative {
    color: #3388ff;
    border-bottom: 4px solid #3288ff;
    padding-bottom: 20px;
    transition: 0.5s;
  }
}
</style>
