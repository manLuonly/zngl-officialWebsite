<!-- LGT创意-->
<template>
  <div class="brand">
    <div class="banner">
      <img src="../../assets/img/program-img/banner.jpg" />
    </div>

    <div class="nav">
      <div class="nav-box font16" v-for="(item,index) in navList" :key="index">
        <span
          @click="changeType(item,index)"
          :class="{ active: activeClass == index }"
        >{{ item.text }}</span>
      </div>
    </div>

    <div class="section introduction1">
      <a-row class="row font16" type="flex">
        <a-col :span="12" class="animated fadeInLeft">
          <img
            v-lazy="require('../../assets/img/program-img/img-1.png')"
            style="width: 569px;height: 340px;"
          />
        </a-col>
        <a-col :span="12" class="animated fadeInRight">
          <div class="text-box">
            <h1 class="right_title font30 color000">“智能家居” （Smart Home）</h1>
            <div
              class="text_indent2"
            >又称智能生活。它利用先进的计算机、嵌入式系统和网络通讯技术及现代控制技术，将家中的各种设备（如照明、环境控制、安防、网络、空调，窗户、门锁）通过家庭网络连接到一起。能根据不同的环境状态相互协作，从而给用户带来最大程度的高效、便利、舒适与安全。帮助人们有效安排时间，增强家居生活的健康性、安全性，舒适性。</div>
          </div>
        </a-col>
      </a-row>
    </div>

    <div class="introduction2">
      <img
        v-lazy="require('../../assets/img/program-img/img-2.png')"
        style="width:100%;height: 380px;"
      />
      <div class="introduction2-info">
        <div
          class="introduction2-info-list wow fadeInRight"
          v-for="(item,index) in introductionList"
          :key="index"
        >
          <div class="top-circle">
            <img v-lazy="item.icon" />
          </div>
          <div class="text-box">
            <h3 class="font22">{{ item.title }}</h3>
            <span class="font18 color000">{{ item.content }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="architecture color000">
      <h1 class="font30 wow slideInUp">智能家居系统架构</h1>
      <h3 class="font16 wow slideInUp">根据不同用户的实际情况、使用需求、允许搭建的系统架构，我们将系统分为以下版本</h3>
      <div class="version-box">
        <div class="furniture wow slideInUp" v-for="(item,index) in architectureList" :key="index">
          <img v-lazy="item.url" />
          <div class="text-box">
            <h3 class="font20 colorfff">{{ item.title }}</h3>
            <span class="font16 colorfff">{{ item.content }}</span>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";

export default {
  name: "Brand",
  data() {
    return {
      navList: [
        {
          text: "智能家居",
          path: ""
        },
        {
          text: "智能灌溉",
          path: ""
        }
      ],
      introductionList: [
        {
          icon: require("../../assets/img/program-img/life.png"),
          title: "舒适生活",
          content: "打造顶级的智能家居系统,给业主一个可以自己改变的居家环境"
        },
        {
          icon: require("../../assets/img/program-img/technology.png"),
          title: "超前科技",
          content:
            "应用适度超前的先进、优化集成的成套技术体系和设备体系，为住户提供一个安全、舒适、信息化、环保节能的居家环境"
        },
        {
          icon: require("../../assets/img/program-img/application.png"),
          title: "科技应用",
          content:
            "真正把IT的技术应用到安全及居家生活的每个细节，让用户享受到高科技带来的安全性与方便性"
        },
        {
          icon: require("../../assets/img/program-img/lead.png"),
          title: "引领风尚",
          content: "引领人们进入智能小区生活模式"
        }
      ],
      architectureList: [
        {
          url: require("../../assets/img/program-img/primary.png"),
          title: "初级智能家居",
          content: "对家中水阀，煤气阀等进行管理具备几种简单功能"
        },
        {
          url: require("../../assets/img/program-img/intermediate.png"),
          title: "中级智能家居",
          content: "在初级智能家居基础上完善功能，适用于更多场景"
        },
        {
          url: require("../../assets/img/program-img/luxury.png"),
          title: "豪华智能家居",
          content: "增加多媒体控制,防护功能，更加个性化。也可按需求编程"
        }
      ],
      activeClass: 0
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
    changeType(item,index) {
      
      this.activeClass = index
      console.log(this.activeClass,index,'index');
    }
  }
};
</script>
<style lang="less" scoped>
.flex() {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.brand {
  .banner {
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .nav {
    .flex();
    height: 56px;
    border-bottom: 1px solid #dcdcdc;
    margin-bottom: 40px;
    .nav-box {
      margin-right: 40px;
      color: #000000;
      line-height: 56px;
      cursor: pointer;
      &:hover {
        color: #0556a8;
      }
      &:active {
        color: red;
      }
      // &:nth-child(1) {
      //   color: #0556a8;
      // }
    }
  }

  .introduction1 {
    margin-bottom: 40px;
    .text-box {
      width: 436px;
      float: right;
      .right_title {
        letter-spacing: 1px;
        margin-bottom: 20px;
      }
      .text_indent2 {
        text-indent: 2em;
      }
    }
  }

  .introduction2 {
    .introduction2-info {
      .flex();
      height: 242px;
      .introduction2-info-list {
        position: relative;
        top: -76px;
        width: 270px;
        height: 280px;
        background-color: #ffffff;
        border: solid 2px #023c7c;
        margin-right: 14px;
        margin-bottom: 40px;
        .top-circle {
          position: relative;
          top: -35px;
          width: 70px;
          height: 70px;
          background-color: #ffffff;
          border: 2px solid #023c7c;
          border-radius: 50px;
          margin: 0 auto;
          line-height: 70px;
          text-align: center;
          img {
            width: 40px;
            height: 39px;
          }
        }
        .text-box {
          h3 {
            color: #0556a8;
            margin-bottom: 40px;
            text-align: center;
          }
          span {
            width: 217px;
            height: 74px;
            display: block;
            margin: 0 auto;
          }
        }
      }
    }
  }

  .architecture {
    height: 403px;
    background-color: #f5f5f5;
    text-align: center;
    h1 {
      margin-bottom: 20px;
      padding-top: 20px;
    }
    .version-box {
      .flex();
      margin-top: 20px;
      .furniture {
        .flex();
        .text-box {
          position: relative;
          top: 50px;
          left: -160px;
          text-align: left;
          margin-left: 10px;
          h3 {
            margin-bottom: 20px;
          }
          span {
            display: block;
            width: 124px;
            height: 112px;
            margin: 0 auto;
            line-height: 28px;
          }
        }
      }
    }
  }
}
</style>
