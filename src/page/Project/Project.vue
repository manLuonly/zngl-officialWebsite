<!-- 经典项目-->
<template>
  <div>
    <div class="project">
      <header>
        <div class="banner">
          <img src="../../assets/img/project-img/banner.jpg" />
        </div>
      </header>

      <main>
        <section class="section">
          <nav>
            <div class="select-project font24">
              <a-row
                type="flex"
                justify="start"
                v-for="(row, index) in projectNameList"
                :key="index"
              >
                <a-col
                  :span="3"
                  v-for="(col, index) in row"
                  :key="index"
                  @click="changeSelectProjectAction(col.type)"
                  class="col text-center"
                  :class="{ active: currentSelect == col.type }"
                >
                  <span>{{col.type_name}}</span>
                </a-col>
              </a-row>
            </div>
          </nav>

          <div class="logo-list">
            <ul class="clearfix font18">
              <li
                v-for="(item, index) in projectList[currentSelect]"
                :key="index"
                :class="{isShowDetailsBtn: isShowDetailsBtn}"
              >
                <a-button
                  type="primary"
                  class="look-details details-btn"
                  @click="goDetails(item)"
                  v-show="isShowDetailsBtn"
                >查看详情</a-button>
                <!-- encodeURI解决IE图片加载失败问题  -->
                <img
                  v-lazy="encodeURI(`${ip}?name=${item.type_name}&suffix=${item.suffix}&directory=${item.directory}`) "
                  style="object-fit: cover;width:100%;height:100%;"
                />
                <span class="logo-list text">{{ item.name }}</span>
              </li>
            </ul>

            <div class="look-more d-flex justify-content-end align-items-center">
              <a-button
                class="look-more-btn"
                :disabled="!isShowMore"
                @click="lookMore"
              >{{ isShowMore ? '查看更多': '没有更多' }}</a-button>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import { caseType, caseList } from "@/api/project";
export default {
  name: "Project",
  data() {
    return {
      projectNameList: [],
      projectList: {},
      currentSelect: "logo",
      pageForm: {
        pageNum: 1, // 当前页码
        pageSize: 10 // 每页条数
      },
      isShowDetailsBtn: false, // 是否展示详情按钮
      type: "", //
      classificationArr: [], // 分类列表数据
      ip: "", // 公网IP
      isShowMore: true
    };
  },
  watch: {
    $route: "watchRouter"
  },
  mounted() {
    this.getAllProject();
    this.ip = window.localStorage.getItem("ip");
  },
  methods: {
    // 重置数据
    watchRouter(to, from) {
      const type = this.$route.query.type;
      if (to.path == "/project") {
        if (to.path == "/project" && type) {
          this.getDesignatedData(type);
        } else {
          this.pageForm = {
            pageNum: 1, // 当前页码
            pageSize: 10 // 每页条数
          };
          this.currentSelect = "logo"; // 类型
          this.getAllProject();
        }
      }
    },
    // 获取数据
    async getAllProject(typeVal) {
      this.pageForm.pageNum = 1; // 重置页数
      const { pageNum, pageSize } = this.pageForm;
      // 函数选择类型(typeVal)或者左侧悬浮导航栏跳转类型(this.$route.query.type)或上方路由正常跳转
      const type = typeVal
        ? typeVal
        : this.$route.query.type
        ? this.$route.query.type
        : "logo";

      try {
        await caseType().then(res => {
          const result = res.data || [];
          this.classificationArr = result.map(i => i.type);
          var arr = [];
          // 一维数组分割为多维数组
          for (var i = 0; i < result.length; i += 4) {
            arr.push(result.slice(i, i + 4));
          }
          this.projectNameList = arr;
        });

        await caseList(type, pageNum, pageSize).then(res => {
          this.projectList = res.data || [];
          this.sortAllProject(typeVal);

          const projectList = this.projectList[type]; // 当前项目类型

          if (projectList.length === res.count) {
            // 当前条数等于总条数
            this.isShowMore = false;
          }
        });
      } catch (error) {
        error && this.$message.error("加载失败,请重新尝试");
      }
    },
    //分类
    sortAllProject(typeVal) {
      let projectList = {};

      this.classificationArr.map(type => {
        projectList[type] = this.projectList.filter(item => {
          if (item.type == "logo" || item.type == "sm") {
            this.isShowDetailsBtn = false;
          } else {
            this.isShowDetailsBtn = true;
          }

          return item.type == type;
        });
      });
      // 函数选择类型(typeVal)或者左侧悬浮导航栏跳转类型(this.$route.query.type)或上方路由正常跳转('logo')
      this.currentSelect = typeVal
        ? typeVal
        : this.$route.query.type
        ? this.$route.query.type
        : "logo";

      projectList.all = this.projectList;

      this.projectList = projectList;
    },
    // 改变项目类型
    changeSelectProjectAction(type) {
      this.isShowMore = true;
      this.currentSelect = type;
      this.getAllProject(type);
    },
    // 查看更多
    lookMore() {
      this.pageForm.pageNum++;
      const { pageNum, pageSize } = this.pageForm;
      const type = this.currentSelect;
      const projectList = this.projectList[type]; // 当前项目类型

      caseList(type, pageNum, pageSize).then(res => {
        if (res.code === 0 && res.data.length !== 0) {
          projectList = projectList.concat(res.data);
        }
      });
    },
    // 查看详情
    goDetails(item) {
      localStorage.setItem("type", this.currentSelect);
      this.$router.push({ name: "details", query: { id: item.id } });
    },
    // 获取特定数据
    getDesignatedData(type) {
      const pageNum = 1;
      const pageSize = 10;

      caseList(type, pageNum, pageSize).then(res => {
        this.projectList = res.data || [];
        this.sortAllProject();
      });
    }
  }
};
</script>

<style lang="less" scoped>
.project {
  .text {
    font-size: 28px;
    cursor: pointer;
  }
  .logo-list {
    margin-top: 40px;
    .look-more {
      .look-more-btn {
        width: 200px;
        height: 50px;
      }
    }
    > ul {
      li {
        position: relative;
        top: -74px;
        float: left;
        width: 24%;
        height: 208px;
        margin: 74px 1% 20px 0;
        box-shadow: 0px 0px 7px -5px rgba(0, 0, 0);
        background-color: #eee;
        color: blue;
        text-align: center;
        cursor: pointer;
        .look-details {
          position: absolute;
          z-index: 1;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 109px;
          margin: auto;
          opacity: 0;
        }
        &:hover .look-details {
          opacity: 1;
          transition: 0.8s;
        }
        span {
          display: inline-block;
          margin-top: 18px;
          font-size: 18px;
          color: #333333;
        }
      }
      .isShowDetailsBtn {
        img {
          &:hover {
            opacity: 0.3;
            transition: 0.8s;
          }
        }
      }
    }
  }

  .select-project {
    margin-top: 40px;
    .ant-row-flex {
      margin: 30px 80px 0;
    }
    .col {
      width: 160px;
      height: 36px;
      margin: 0 50px;
      font-size: 20px;
      color: #333333;
      line-height: 36px;
      border-radius: 5px;
      background: #ffffff;
      box-shadow: 0px 0px 10px -5px rgba(0, 0, 0);
      cursor: pointer;
      &.active {
        color: #ffffff;
        background-color: #348ccd;
        border-radius: 5px;
        transition: background 0.5s;
        cursor: not-allowed;
      }
    }
  }
}
</style>