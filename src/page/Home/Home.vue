<!-- 首页-->
<template>
  <div class="home">
    <header>
      <Banner></Banner>
    </header>

    <div class="about-us">
      <h1 class="about-us-text">关于我们</h1>
    </div>

    <main>
      <div class="home-intro">
        <section class="section flex row-between" style="margin-top:40px">
          <div
            v-for="item in introduction"
            :key="item.title"
            class="flex-1 blue"
            :style="{'background': 'url('+item.img+') 100% 100%'}"
          >
            <span class="colorfff block title font24">{{ item.title }}</span>
            <span class="colorfff block content font14">{{ item.content }}</span>
          </div>
        </section>

        <section class="section" style="margin-top:40px">
          <h1 class="font30 text-center">多端开发服务</h1>
          <span
            class="w-100 inline-block m-t-20 font-16 text-center"
          >我们提供Android开发，软件，小程序，网站开发等多个平台服务</span>
          <div class="flex row-between m-t-40">
            <div v-for="item in ultiEndDev" :key="item.text" class="flex column w-25 ulti-end-dev">
              <div
                class="w-100 flex row-center bg"
                :style="{'background': 'url('+item.img+') 100% 100%'}"
              >
                <img v-lazy="item.icon" />
              </div>
              <div class="bottom">
                <h3 class="font18 text-center title">{{ item.title }}</h3>
                <span
                  class="font14 block text-center content1"
                  style="mrgin-top:10px"
                >{{ item.content1 }}</span>
                <span class="font14 block text-center content2">{{ item.content2 }}</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="background m-t-40">
            <h1 class="p-t-40 text-center font30 color000">我们能为你做什么</h1>
            <span
              class="block m-0-a m-t-20 font16 color333 team-introduction"
            >智能桂联一家具有原创作经验丰富的团队，专业UI设计、网站开发、小程序开发、结合自主研发的智能灌溉、智能家居等智能核心技术。拥有多维度的万物互联应用解决方案，以7×24×4的服务理念为用户提供满意的设计、技术服务及专业解决方案。</span>
          </div>
        </section>

        <section class="section" style="margin-top:40px">
          <h1 class="text-center font30">多端开发的优势</h1>
          <div class="flex row-between m-t-40">
            <div v-for="item in advantageIntroduction" :key="item.title" class="advantage">
              <div>
                <div class="round-bg m-0-a text-center" style="margin-top:40px">
                  <img v-lazy="item.img" class="text-center" />
                </div>
                <h3 class="color333 font18 text-center title">{{ item.title }}</h3>
                <span class="inline-block color666 font14 text-center content">{{ item.content }}</span>
              </div>
            </div>
          </div>
        </section>

        <section class="section zngl-partner">
          <div class="center-text m-t-40">
            <h1 class="center_title font30 text-center wow slideInUp">合作伙伴</h1>
            <div
              class="text_indent2 font16 wow slideInUp"
            >智能桂联一直奉行“智能快捷、互惠双赢”的合作原则。一直相信“合作创造价值”，建立在双方资源互补、双赢基础上的商业合作能够为合作伙伴带来最大的利益。在合作过程中，智能桂联所表现出的专业、务实和坦诚态度，获得了合作商的极大赞誉和认可。</div>
          </div>

          <div class="partner-icon">
            <div class="bottom-box m-t-40 wow slideInUp sprites">
              <div class="sprites-img-box br-5" v-for="item in spriteList" :key="item.text">
                <div class="h-100 flex">
                  <div class="m-0-a sprites-img" :style="bg(item.start,item.end)"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { WOW } from "wowjs";

export default {
  name: "Home",

  data() {
    return {
      spriteList: [
        {
          start: 0,
          end: 0
        },
        {
          start: -122,
          end: 0
        },
        {
          start: -244,
          end: 0
        },
        {
          start: -366,
          end: 0
        },
        {
          start: -488,
          end: 0
        },
        {
          start: -610,
          end: 0
        },
        {
          start: -732,
          end: 0
        },
        {
          start: -854,
          end: 0
        },
        {
          start: -976,
          end: 0
        },
        {
          start: -1098,
          end: 0
        }
      ],
      introduction: [
        {
          img: require("../../assets/img/home-img/blue-1.png"),
          title: "全链路设计",
          content: "主导项目全流程"
        },
        {
          img: require("../../assets/img/home-img/blue-2.png"),
          title: "设计能力",
          content: "设计美观度，整体风格的把控"
        },
        {
          img: require("../../assets/img/home-img/blue-3.png"),
          title: "产品思维",
          content: "需求分析，商业全局的管控"
        },
        {
          img: require("../../assets/img/home-img/blue-4.png"),
          title: "交互思维",
          content: "用户的操作流程及体验"
        }
      ],
      ultiEndDev: [
        {
          img: require("../../assets/img/home-img/app-bg.png"),
          icon: require("../../assets/img/home-img/app-icon .png"),
          title: "APP开发",
          content1: "原生APP开发WEBAPP开发",
          content2: "APP混合开发"
        },
        {
          img: require("../../assets/img/home-img/software.png"),
          icon: require("../../assets/img/home-img/software-icon.png"),
          title: "软件开发",
          content1: "管理系统开发B2B2C开发",
          content2: "O2O定制开发"
        },
        {
          img: require("../../assets/img/home-img/applets.png"),
          icon: require("../../assets/img/home-img/applets-icon.png"),
          title: "小程序",
          content1: "小程序，微商城小程序微信",
          content2: "应用开发"
        },
        {
          img: require("../../assets/img/home-img/website.png"),
          icon: require("../../assets/img/home-img/website-icon.png"),
          title: "网站建站",
          content1: "企业/政府网站/高校网站",
          content2: "高端网站建设"
        }
      ],
      advantageIntroduction: [
        {
          img: require("../../assets/img/home-img/advantage-icon1.png"),
          title: "功能全面",
          content:
            "凭借多年APP开发经验,充分理解客户需求，不断的提供了系统平台管理及运用"
        },
        {
          img: require("../../assets/img/home-img/advantage-icon2.png"),
          title: "扩展性强",
          content:
            "可接入任意第三方服务，如地图，支付功能，在线聊天等或者为客户提供定制化制作"
        },
        {
          img: require("../../assets/img/home-img/advantage-icon3.png"),
          title: "兼容性好",
          content:
            "兼容主流浏览器，微信内置浏览器等,及主流移动设备如苹果，小米，华为等，并且可流畅运行"
        },
        {
          img: require("../../assets/img/home-img/advantage-icon4.png"),
          title: "易操作",
          content:
            "简洁清晰的界面，人性化的便捷操作，模块规划层次明了，更加注重用户体验及轻提示效果"
        }
      ]
    };
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
  methods: {
    bg(start, end) {
      return {
        background: `url(${require(`../../assets/img/home-img/home-sprites.png`)}) ${start}px ${end}px`
      };
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  .about-us {
    .about-us-text {
      display: none;
    }
  }
  .home-intro {
    .text_indent2 {
      text-indent: 2em;
    }

    .blue {
      height: 128px;
      margin-right: 13px;
      padding-left: 20px;
      .title {
        margin: 30px 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }

    .bg {
      height: 170px;
    }
    .bottom {
      height: 100px;
      color: #666666;
      .title {
        margin-top: 20px;
      }
      .content1 {
        margin-top: 10px;
      }
    }

    .ulti-end-dev {
      margin-right: 60px;
      border: 1px solid #e5e5e5;
      border-radius: 2px;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        border: 1px solid #38f;
      }
    }

    .background {
      height: 800px;
      background: url("../../assets/img/home-img/background.png") no-repeat
        center center;
      .team-introduction {
        width: 1200px;
        height: 44px;
        text-indent: 2em;
      }
    }

    .advantage {
      border: 1px solid #eeeeee;
      margin-right: 68px;
      &:last-child {
        margin-right: 0;
      }
      .round-bg {
        width: 80px;
        height: 80px;
        line-height: 80px;
        border-radius: 50%;
        background: rgba(234, 247, 255, 1);
      }
      .title {
        margin-top: 34px;
      }
      .content {
        margin: 20px 20px 40px 20px;
      }
    }

    .center-text {
      .center_title {
        margin-bottom: 20px;
      }
    }

    .zngl-partner {
      .sprites {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        .sprites-img-box {
          width: 200px;
          height: 110px;
          margin-right: 10px;
          margin-bottom: 20px;
          border: 1px solid #c0c0c0;
          .sprites-img {
            width: 122px;
            height: 65px;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>