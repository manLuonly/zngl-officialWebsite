<!-- 联系我们-->
<template>
  <div class="link-us">
    <header>
      <div class="banner">
        <img src="../../assets/img/linkUs-img/banner.jpg" />
      </div>
    </header>

    <main>
      <section>
        <div class="select section">
          <p class="title font24 color333">欢迎来到智能桂联！请选择您需要的服务项目</p>
          <div class="radio-group section">
            <a-checkbox-group
              :options="plainOptions"
              @change="onChange1"
              class="checkbox color333"
            />

            <a-checkbox-group :options="options" @change="onChange2" class="checkbox color333" />

            <a-checkbox-group
              :options="optionsWithDisabled"
              @change="onChange3"
              class="checkbox color333"
            />
          </div>
        </div>
      </section>

      <section>
        <div class="bottom-box">
          <div class="section">
            <div class="text-box">
              <h1 class="title">关于我们</h1>
              <h2 class="title-eg">
                <span>Contact</span>
              </h2>
              <div class="text-content">
                <span
                  class="text_indent2 paragraph1"
                >科技改变未来,发展移动互联网是大势所趋，智能桂联就已切入移动互联网领域，为客户制作网站建设，APP开发，小程序开发等，拥有大量长期客户的智能桂联，为满足客户需求，成立了移动媒体事业部，由一帮更年轻，更具活力的设计与技术团队组成。</span>
                <span
                  class="text_indent2"
                >智能桂联涉及的的领域有：平面设计、UI设计、广告设计、网站建设、小程序开发、APP开发、公众号开发、智能家居、智能灌溉等。</span>
                <span class="text_indent2">我们时刻准备着为您服务，如有需求，欢迎咨询了解详情。</span>
              </div>
            </div>
            <div class="form-box">
              <div class="left">
                <a-form :form="form" class="form">
                  <a-form-item
                    :label-col="formItemLayout.labelCol"
                    :wrapper-col="formItemLayout.wrapperCol"
                  >
                    <a-input
                      class="item-input"
                      v-decorator="[
                'username',
                  {rules: [{ required: true, message: '请输入您的姓名！' }]}
                ]"
                      placeholder="您的姓名"
                    />
                  </a-form-item>
                  <a-form-item
                    :label-col="formItemLayout.labelCol"
                    :wrapper-col="formItemLayout.wrapperCol"
                  >
                    <a-input
                      class="item-input"
                      maxlength="11"
                      v-decorator="[
                'tel',
                  {rules: [
                  {
                    min:11,
                    message: '请输入正确的电话号码！'
                  },
                  {
                  pattern: /^1[3456789]\d{9}$/,
                  message: '手机格式不正确！',
                  },
                  { required: true,
                  whitespace: true,
                   type:'number',
                   transform(value) {
                      if(value){
                        return Number(value);
                      }
                    },
                   message: '请输入正确的电话号码！' },
                   ]}
                ]"
                      placeholder="您的联系方法"
                    />
                  </a-form-item>
                  <a-form-item
                    :label-col="formItemLayout.labelCol"
                    :wrapper-col="formItemLayout.wrapperCol"
                  >
                    <a-input
                      class="item-input"
                      placeholder="电子邮箱"
                      v-decorator="[
                'email',
                  {rules: [
                  { required: true, message: '请输入您的邮箱！' },
                  {
                  pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
                  message: '邮箱格式不正确',
                  },
                  {
                  max: 50,
                  message: '邮箱不得超过50字符',
                  },
                  ]}
                ]"
                    />
                  </a-form-item>
                </a-form>
              </div>
              <div class="right">
                <a-form :form="form" class="form">
                  <a-form-item
                    :label-col="formItemLayout.labelCol"
                    :wrapper-col="formItemLayout.wrapperCol"
                  >
                    <!--  v-decorator="[
                  'leavingMsg',
                  {rules: [{ required: true, message: '请输入您的留言内容！' }]}
                    ]"-->
                    <a-textarea class="item-input-last" placeholder="请写下您的想法或想了解咨询的项目,我们将很快联系您"></a-textarea>
                  </a-form-item>
                </a-form>
              </div>
            </div>
            <div style="text-align: center;">
              <a-button type="primary" @click="submit" class="submit-btn">提交</a-button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { submitInfoForm } from "@/api/project";

const plainOptions = [
  { label: "LOGO设计", value: "LOGO设计" },
  { label: "产品包装", value: "产品包装" },
  { label: "微店装修", value: "微店装修" },
  { label: "公众号开发", value: "公众号开发" }
];
const options = [
  { label: "画册设计", value: "画册设计" },
  { label: "VIS设计", value: "VIS设计" },
  { label: "小程序开发", value: "小程序开发" },
  { label: "智能灌溉", value: "智能灌溉" }
];
const optionsWithDisabled = [
  { label: "海报设计", value: "海报设计" },
  { label: "易拉宝设计", value: "易拉宝设计" },
  { label: "网站开发", value: "网站开发" },
  { label: "智能家居", value: "智能家居" }
];
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};
export default {
  name: "LinkUs",
  data() {
    return {
      plainOptions,
      options,
      optionsWithDisabled,
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this),
      checkedValues1: [],
      checkedValues2: [],
      checkedValues3: []
    };
  },
  methods: {
    // 多选框
    onChange1(checkedValues) {
      this.checkedValues1 = checkedValues;
    },
    onChange2(checkedValues) {
      this.checkedValues2 = checkedValues;
    },
    onChange3(checkedValues) {
      this.checkedValues3 = checkedValues;
    },
    submit() {
      this.form.validateFields(err => {
        if (!err) {
          let res = this.checkedValues1.concat(
            this.checkedValues2,
            this.checkedValues3
          );

          const service = res.join(","); // 服务项目

          const typeArr = [];
          res.map(item => {
            switch (item) {
              case "LOGO设计":
                typeArr.push("logo");
                break;
              case "产品包装":
                typeArr.push("pg");
                break;
              case "公众号开发":
                typeArr.push("pg");
                break;
              case "画册设计":
                typeArr.push("pa");
                break;
              case "VIS设计":
                typeArr.push("vi");
                break;
              case "小程序开发":
                typeArr.push("sm");
                break;
              case "海报设计" || "易拉宝设计":
                typeArr.push("pt");
                break;
              case "网站开发":
                typeArr.push("web");
                break;
              default:        
                break;
            }
          });
 

          const name = this.form.getFieldValue("username"); // 姓名
          const phone = this.form.getFieldValue("tel"); // 手机号码
          const email = this.form.getFieldValue("email"); // 邮箱
          const content = this.form.getFieldValue("leavingMsg"); // 补充说明
          const type = typeArr.join(','); // 服务项目(type)

          let form = {
            service,
            name,
            phone,
            email,
            content,
            type
          };

          submitInfoForm(form)
            .then(res => {
              if (res.code === 0) {
                this.$message.success("保存成功");
                this.form.resetFields();
              }
            })
            .catch(err => {
              this.$message.error("提交失败,请重新尝试!");
            });
        }
      });
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(["nickname"], { force: true });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.pseudo-class() {
  content: "";
  position: absolute;
  top: 50%;
  background: #ffffff;
  width: 35%;
  height: 1px;
}
.text_indent2 {
  display: block;
  text-indent: 2em;
  line-height: 28px;
}

.link-us {
  .select {
    margin-top: 40px;
    .title {
      margin-bottom: 40px;
      text-align: center;
    }
    .radio-group {
      display: flex;

      .checkbox {
        margin: 0 108px;
        /deep/ span {
          font-size: 16px;
        }
      }
    }
  }
  .bottom-box {
    height: 612px;
    margin-top: 40px;
    background: url("../../assets/img/linkUs-img/leavemsg.png") #fff 100% 100% /
      cover no-repeat;
    background-position: center;
    // background-size: cover 100% 100%;
    .section {
      .text-box {
        padding-top: 40px;
        .title {
          color: #ffffff;
          font-size: 30px;
          text-align: center;
        }
        .title-eg {
          width: 20%;
          margin: 20px auto;
          span {
            display: block;
            position: relative;
            text-align: center;
            color: #ffffff;
            &:before {
              .pseudo-class();
              left: -3%;
            }
            &:after {
              .pseudo-class();
              right: -3%;
            }
          }
        }
        .text-content {
          color: #ffffff;
          font-size: 16px;
          padding-bottom: 84px;
        }
      }
    }
    .form-box {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      height: 172px;
      .left,
      .right {
        width: 40%;
        /deep/ .form {
          height: 100%;
          .ant-form-item {
            padding-bottom: 2px;
            .ant-col-20 {
              width: 100% !important;
              .item-input {
                height: 40px;
                background-color: rgba(0, 0, 0, 0) !important;
                color: #fff;
                border: 2px solid #fff;
              }
            }
          }
        }
      }
      .right {
        /deep/ .ant-form-item {
          height: 100%;
          padding-bottom: 0 !important;
          .ant-col-20 {
            height: 100%;
            .ant-form-item-control {
              height: 100%;
              .ant-input {
                height: 100%;
                background-color: rgba(0, 0, 0, 0) !important;
                color: #fff;
                border: 2px solid #fff;
              }
            }
          }
        }
      }
    }
    .submit-btn {
      width: 380px;
      margin-top: 36px;
      background-color: #eeeeee;
      border-radius: 5px;
      border: solid 1px #ffffff;
      color: #000000;
      font-size: 14px;
      &:hover {
        border: 1px solid #005aab;
        background-color: #005aab;
        color: #fff;
      }
    }
  }
}
</style>