<!-- 经典项目-->
<template>
  <div>
    <div class="project">
      <header>
        <div class="banner" @click="test">
          <img src="../../assets/img/project-img/banner.jpg" />
        </div>
      </header>

      <main>
        <section class="section">
          <nav>
            <div class="select-project font24">
              <a-row
                type="flex"
                justify="center"
                v-for="(row, index) in projectNameList"
                :key="index"
              >
                <a-col
                  :span="3"
                  v-for="(col, index) in row"
                  :key="index"
                  @click="changeSelectProjectAction(col.type)"
                  class="col mr-5 text-center"
                  :class="{ active: currentSelect == col.type }"
                >
                  <span>{{col.type_name}}</span>
                </a-col>
              </a-row>
            </div>
          </nav>

          <div class="logo-list">
            <ul class="clearfix font18">
              <li v-for="(item, index) in projectList[currentSelect]" :key="index">
                <a-button
                  type="primary"
                  class="look-details"
                  @click="gotodetails(item)"
                  v-show="isShowDetailsBtn"
                >查看详情</a-button>
                <img
                  v-lazy="item.name + item.directory + item.suffix"
                  style="object-fit: cover;width:100%;height:100%;"
                />
                <span class="logo-list text">{{ item.name }}</span>
              </li>
            </ul>

            <div class="look-more d-flex justify-content-end align-items-center">
              <a-button class="look-more-btn" @click="lookMore">查看更多</a-button>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import { caseTypes, caseLists } from "@/api/project";
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
      isShowDetailsBtn: false,
      type: "",
      classificationArr: [],
      model: "project",
      pid: "pc"
    };
  },
  watch: {
    $route: "watchRouter"
  },
  mounted() {
    this.getAllProject();
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
      const pageNum = this.pageForm.pageNum; // 开始页数
      const pageSize = this.pageForm.pageSize; // 结束页数
      // changeSelectProjectAction函数选择类型(typeVal)或者左侧悬浮导航栏跳转类型(this.$route.query.type)或上方路由正常跳转('logo')
      const type = typeVal
        ? typeVal
        : this.$route.query.type
        ? this.$route.query.type
        : "logo";
      const model = this.model;
      const pid = this.pid;

      let form = {
        pageNum,
        pageSize,
        type,
        model,
        pid
      };

      try {
        await caseTypes().then(res => {
          console.log(res, "res");
          if (res.code === 0) {
            const result = res.data;
            this.classificationArr = result.map(i => i.type);
            var arr = [];
            // 一维数组分割为多维数组
            for (var i = 0; i < result.length; i += 4) {
              arr.push(result.slice(i, i + 4));
            }
            this.projectNameList = arr;
          }
        });

        await caseLists(form).then(res => {
          if (res.code === 0) {
            this.projectList = res.data;

            this.sortAllProject(typeVal);
          }
        });
      } catch (error) {
        if (error) {
          this.$message.error("加载失败,请重新尝试");
        }
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
      // changeSelectProjectAction函数选择类型(typeVal)或者左侧悬浮导航栏跳转类型(this.$route.query.type)或上方路由正常跳转('logo')
      const jumpType = typeVal
        ? typeVal
        : this.$route.query.type
        ? this.$route.query.type
        : "logo";
      this.currentSelect = jumpType;

      projectList.all = this.projectList;

      this.projectList = projectList;
    },

    changeSelectProjectAction(type) {
      this.currentSelect = type;
      this.getAllProject(type);
    },
    // 查看更多
    lookMore() {
      this.pageForm.pageNum++;
      const pageNum = this.pageForm.pageNum;
      const pageSize = this.pageForm.pageSize;
      const type = this.currentSelect;
      const model = this.model;
      const pid = this.pid;

      let form = {
        pageNum,
        pageSize,
        type,
        model,
        pid
      };

      caseLists(form).then(res => {
        // 追加数据
        if (res.code === 0 && res.data.length !== 0) {
          this.projectList[this.currentSelect] = this.projectList[
            this.currentSelect
          ].concat(res.data);
        } else {
          this.$message.warning("没有更多数据了！");
        }
      });
    },
    // 查看详情
    gotodetails(item) {
      // this.$router.push({ name: "details", query: { name: item.name } });
      const url = item.url;
      const name = item.name;
      const type = item.type;
      const model = this.model;
      const pid = this.pid;

      if (!url) {
        window.open(
          `/zngl/static?id=${name}&type=pdf/${type}&suffix=pdf&model=${model}&pid=${pid}`
        );
      } else {
        window.open(url);
      }
    },
    // 获取特定数据
    getDesignatedData(type) {
      let form = {
        pageNum: 1, // 当前页码
        pageSize: 10, // 每页条数
        type,
        model: "project",
        pid: "pc"
      };

      caseLists(form).then(res => {
        if (res.code === 0) {
          this.projectList = res.data;
          this.sortAllProject();
        }
      });
    },
    test() {
      this.$router.push({ name: "details" });
    }
  }
};
</script>

<style lang="less" scoped>
.opacity(@val) {
  opacity: @val;
}

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
        // height: 281px;
        height: 208px;
        margin: 74px 1% 20px 0;
        box-shadow: 0px 0px 7px -5px rgba(0, 0, 0);
        background-color: #eee;
        color: blue;
        text-align: center;
        cursor: pointer;
        img {
          &:hover {
            .opacity(0.3);
            transition: 0.8s;
          }
        }
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
    }
  }

  .select-project {
    // height: 150px;
    margin-top: 40px;
    .ant-row-flex {
      margin-top: 30px;
    }
    .col {
      width: 160px;
      height: 30px;
      margin: 0 50px;
      font-size: 20px;
      color: #333333;
      border-radius: 5px;
      background: #ffffff;
      box-shadow: 0px 0px 10px -5px rgba(0, 0, 0);
      cursor: pointer;
      &.active {
        color: #ffffff;
        background-color: #348ccd;
        border-radius: 5px;
        transition: background 0.5s;
        font-weight: bold;
      }
    }
  }
}
</style>