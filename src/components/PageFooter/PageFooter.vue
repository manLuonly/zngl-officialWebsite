<!-- 公共底部  -->
<template>
  <div class="page-footer bg2c colorccc font12">
    <div class="section d-flex">
      <div class="page-footer-section d-flex align-items-center justify-content-between">
        <div class="pic">
          <img v-lazy="require('../../assets/img/logo.png')" draggable="false" />
        </div>

        <ul class="service clearfix">
          <div class="mr-2 mb-2">服务范围</div>
          <li
            v-for="(item, index) in serviceList"
            :key="index"
            class="mb-1 mr-1"
            @click="goProject(item)"
          >
            <span>{{ item.text }}</span>
          </li>
        </ul>

        <ul class="contact">
          <li class="d-flex mb-2">
            <div class="icon d-flex">
              <div class="icon_img">
                <img src="~@/assets/img/email-white.png" srcset draggable="false" />
              </div>
              <span class="separation-line">|</span>
            </div>
            <span>1019114350@qq.com</span>
          </li>
          <li class="d-flex mb-2">
            <div class="icon d-flex">
              <div class="icon_img">
                <img src="~@/assets/img/tel-white.png" srcset draggable="false" />
              </div>
              <span class="separation-line">|</span>
            </div>
            <span>19195682297</span>
          </li>
          <li class="d-flex">
            <div class="icon d-flex">
              <div class="icon_img">
                <img src="~@/assets/img/address-white.png" srcset draggable="false" />
              </div>
              <span class="separation-line">|</span>
            </div>
            <span>南宁市西乡塘区西乡塘街道新村</span>
          </li>
        </ul>

        <a-row class="qr-code h-100" type="flex" justify="center" align="middle">
          <a-col
            :span="12"
            class="d-flex flex-column justify-content-center align-items-center"
            style="padding-right:85px;"
          >
            <div class>
              <img
                class="gw-qrcode"
                v-lazy="require('../../assets/img/gw-qrcode (2).png')"
                draggable="false"
              />
            </div>
            <span class="mt-1">资深品牌顾问</span>
          </a-col>
          <a-col :span="12" class="d-flex flex-column justify-content-center align-items-center">
            <div class>
              <img v-lazy="require('../../assets/img/wx-qrcode.png')" adraggable="false" />
            </div>
            <span class="mt-1">智能桂联公众号</span>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  data() {
    return {
      serviceList: [
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
          text: "智能家居",
          path: "program",
          type: 0
        },
        {
          text: "智能灌溉",
          path: "program",
          type: 1
        }
      ]
    };
  },
  methods: {
    goProject(item) {
      this.$router.push({ name: item.path, query: { type: item.type } });
    }
  }
};
</script>

<style lang="less" scoped>
.page-footer {
  position: relative;
  z-index: 99;
  height: 180px;
  margin-top: 40px;
  padding: 40px 0;
  .section {
    .page-footer-section {
      width: 100%;
      height: 100%;
      .pic {
        width: 130px;
        height: 90px;
        line-height: 90px;
        text-align: center;
        background-color: #fff;
        border-radius: 4px;
        img {
          width: 95%;
        }
      }

      .service {
        width: 400px;
        margin: 0;
        > li {
          min-width: 24%;
          white-space: nowrap;
          float: left;
          &:hover {
            color: #348ccd;
            cursor: pointer;
          }
        }
      }

      .contact {
        margin: 0;
        padding-right: 30px;
        white-space: nowrap;
        .icon {
          .icon_img {
            width: 20px;
          }
          .separation-line {
            margin: 0 16px;
          }
        }
      }

      .qr-code {
        white-space: nowrap;
        .gw-qrcode {
          width: 84px;
          height: 82px;
          overflow: hidden;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }
      }
    }
  }
}
</style>