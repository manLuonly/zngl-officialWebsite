<template>
  <div class="details">
    <header class="header">
      <div class="title section">
        <div class="back" @click="goBack">
          <a-icon type="left" />
          <span>返回</span>
        </div>
        <h1>{{ current.type_name }}</h1>
        <div></div>
      </div>
      <div class="select-num">
        <span class="font14">当前页</span>
        <a-input-number
          id="inputNumber"
          v-model="pageNum"
          :min="1"
          :max="imgList.length"
          @change="changePagenum"
          style="width:50px"
        />
        /
        {{ imgList.length }}
      </div>
    </header>

    <main class="main">
      <div
        v-if="current.details_total === 0"
        class="t-c font30"
        style="min-height:300px;line-height: 300px;"
      >暂无数据</div>
      <div v-else>
        <section class="img-box section" v-for="(item,index) in imgList" :key="index">
          <img v-lazy="item.url" class="img" ref="img" :id="`img${index}`" />
          <span>{{ index + 1 }}</span>
        </section>
      </div>
    </main>

    <footer class="footer section">
      <div class="text-box">
        <span class="up text-truncate t-c" @click="getUpArticle">上一页:{{ previous.type_name }}</span>
        <span class="down text-truncate t-c" @click="getDownArticle">下一页:{{ next.type_name }}</span>
      </div>
    </footer>
  </div>
</template>

<script>
import { detail } from "@/api/project";

export default {
  name: "details1",

  data() {
    return {
      imgList: [],
      next: [], // 下一页
      current: [], // 当前页
      previous: [], // 上一页
      ip: "",
      i: 0,
      pageNum: 1
    };
  },
  mounted() {
    this.getDataList();
    this.ip = window.localStorage.getItem("ip");
    /** 
     *  监听浏览器返回键触发自定义返回函数
    */
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);
      window.addEventListener("popstate", this.goBack, false);
    }
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, false);
  },
  methods: {
    getDataList(Id) {
      let id = Id ? Id : this.$route.query.id;

      detail(id).then(res => {
        this.next = res.data.next; // 下一页
        this.current = res.data.current; // 当前
        this.previous = res.data.previous; // 上一页
        this.spliceImgsUrl();
      });
    },
    // 返回上一页
    goBack() {
      let type = localStorage.getItem("type");
      this.$router.push({ name: "project", query: { type: type } });
    },
    // 获取上页文章
    getUpArticle() {
      let id = this.previous.id;
      this.getDataList(id);
      this.spliceImgsUrl();
      window.scrollTo(0, 0);
    },
    // 获取下页文章
    getDownArticle() {
      let id = this.next.id;
      this.getDataList(id);
      this.spliceImgsUrl();
      window.scrollTo(0, 0);
    },
    // 拼接图片路径
    spliceImgsUrl() {
      let current = this.current;
      this.imgList = [];

      for (this.i = 0; this.i < current.details_total; this.i++) {
        this.imgList.push({
          name: current.type_name,
          url: `${this.ip}?name=${this.i + 1}&suffix=${
            current.details_suffix
          }&directory=${current.directory}/${current.type_name}`
        });
      }
    },
    // 锚点跳转
    changePagenum() {
      document.querySelector(`#img${this.pageNum - 1}`).scrollIntoView(true);
    }
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
    .select-num {
      display: inline-block;
      position: fixed;
      top: 100px;
      right: 5px;
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