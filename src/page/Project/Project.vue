<!-- 经典项目-->
<template>
  <div>
    <div class="project">
      <header>
        <div class="banner">
          <img src="../../assets/img/project-img/banner.jpg" draggable="false" />
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
                v-for="(item, index) in projectList"
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
                  v-lazy="`${ip}${item.img}`"
                  style="object-fit: cover;width:100%;height:100%;"
                  draggable="false"
                />
                <span class="logo-list text">{{ item.name }}</span>
              </li>
            </ul>

            <div class="look-more d-flex justify-content-end align-items-center" v-if="isHaveData">
              <a-button
                class="look-more-btn"
                :disabled="!isShowMore"
                @click="lookMore"
              >{{ isShowMore ? '查看更多': '没有更多' }}</a-button>
            </div>
          </div>
        </section>
      </main>

      <main v-if="!isHaveData">
        <div class="text-center font30">暂无数据</div>
      </main>
      {{ isNotdetails }}
    </div>
  </div>
</template>

<script>
import { listAll, caseList } from "@/api/project";
export default {
  name: "Project",
  data() {
    return {
      projectNameList: [], // 案例分类
      projectList: [],
      currentSelect: "logo", // 案例默认展示
      pageForm: {
        pageNum: 1, // 当前页码
        pageSize: 10, // 每页条数
        system_type: "pc", // 系统的类型(pc/mini)
        type: "logo", // 案例类型(-1为查所有)
        search_name: "", // 搜索名字
        delete_status: 0, // 状态(0可恢复/1可永久删除)
      },
      isShowDetailsBtn: false, // 是否展示详情按钮
      type: "",
      classificationArr: [], // 分类列表数据
      ip: "", // 公网IP
      isHaveData: true, // 是否展示button
      isShowMore: true, // 是否展示更多
    };
  },
  computed: {
    // logo 和 小程序 没有详情
    isNotdetails() {
      if (this.currentSelect == "logo" || this.currentSelect == "sm") {
        this.isShowDetailsBtn = false;
      } else {
        this.isShowDetailsBtn = true;
      }
    },
  },
  watch: {
    $route: "watchRouter",
  },
  mounted() {
    this.getAllProject();
    this.ip = localStorage.getItem("ip");
  },
  methods: {
    // 重置数据
    watchRouter(to, from) {
      if (to.path == "/project") {
        this.getCaseList();
      }
    },
    // 获取案例导航列表和案例列表
    async getAllProject() {
      try {
        const form = {
          system_type: "pc",
          delete_status: 0,
        };
        await listAll(form).then((res) => {
          const result = res.data || [];
          this.classificationArr = result.map((i) => i.type);
          var arr = [];
          // 一维数组分割为多维数组
          for (var i = 0; i < result.length; i += 4) {
            arr.push(result.slice(i, i + 4));
          }
          this.projectNameList = arr;
        });

        await this.getCaseList();
      } catch (error) {
        error && this.$message.error("加载失败,请重新尝试");
        this.isHaveData = false;
      }
    },
    /**
     * 获取案例数据
     * @param {*}  selectType 当前选中类型
     */
    getCaseList(selectType) {
      this.pageForm.type = this.getType(selectType); // 获取type
      this.currentSelect = this.pageForm.type; // 给选择的li添加class
      this.pageForm.pageNum = 1; // 重置页数
      let form = this.pageForm;

      caseList(form).then((res) => {
        this.projectList = res.data || [];

        // 当前条数等于总条数
        if (this.projectList.length === res.count) {
          this.isShowMore = false;
        }
      });
    },
    // 改变项目类型
    changeSelectProjectAction(selectType) {
      this.isShowMore = true;
      this.currentSelect = selectType;
      this.getCaseList(selectType);
    },
    // 查看更多
    lookMore() {
      this.pageForm.pageNum++;
      let form = this.pageForm;

      caseList(form).then((res) => {
        if (res.code === 0 && res.data.length !== 0) {
          this.projectList = this.projectList.concat(res.data);
        }
      });
    },
    // 查看详情
    goDetails(item) {
      localStorage.setItem("type", this.currentSelect);
      this.$router.push({ name: "details", query: { id: item.id } });
    },
    // 获取类型
    getType(typeVal) {
      /**
       * @param {*}  typeVal 选中类型
       * @param {*} this.$route.query.type 导航跳转类型
       * @param {*} logo 上方路由正常跳转
       */
      return typeVal
        ? typeVal
        : this.$route.query.type
        ? this.$route.query.type
        : "logo";
    },
  },
};
</script>

<style lang="less" scoped>
.project {
  .text {
    font-size: 28px;
    cursor: pointer;
  }
  .logo-list {
    position: relative;
    // min-height: 17.647rem;
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
            cursor: pointer;
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
        // cursor: not-allowed;
      }
    }
  }
}
</style>