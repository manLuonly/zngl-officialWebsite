<!-- 联系我们-->
<template>
  <div class="link-us">
      <div class="banner">
        <img src="../../assets/img/linkUs-img/banner.jpg" />
      </div>
   
    <div class="select section">
      <p class="title font24 color333">欢迎来到智能桂联！请选择您需要的服务项目</p>
      <div class="radio-group section">
        <a-checkbox-group :options="plainOptions" @change="onChange1" class="checkbox color333" />

        <a-checkbox-group :options="options" @change="onChange2" class="checkbox color333" />

        <a-checkbox-group
          :options="optionsWithDisabled"
          @change="onChange3"
          class="checkbox color333"
        />
      </div>
    </div>
    <div class="bottom-box ">

      <div class="left-box">
        <!-- <div class="text-box">
          <div class="text-box text color333 font28">
            <div class="text-box sign"></div>一群狂热的年轻人，用自己的视野重新塑造产品、爱生活，爱艺术，希望通过一己之力改变周围的世界.
          </div>
        </div> -->
        <!-- <img src="../../assets/img/linkUs-img/20.png" style="width:100%;line-height:572px;" /> -->
      </div>
      <div class="right-box">
        <span class="title font14 color333">欢迎来到智能桂联</span>
        <div class="form-box">
          <a-form :form="form" class="form">
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="您的姓名"
            >
              <a-input
                class="item-input"
                v-decorator="[
                'username',
                  {rules: [{ required: true, message: '请输入您的姓名！' }]}
                ]"
                placeholder="Please input your name"
              />
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="电话号码"
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
                placeholder="Please input your telephone number"
              />
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="电子邮箱"
            >
              <a-input
                class="item-input"
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
                placeholder="Please input your email"
              />
            </a-form-item>
            <a-form-item
              label="公司名称"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input
                v-decorator="[
                'company'
                ]"
                placeholder="Please input your corporate name"
                class="item-input"
              />
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="留言内容"
            >
              <a-textarea
                class="item-input-last"
                v-decorator="[
                  'leavingMsg',
                  {rules: [{ required: true, message: '请输入您的留言内容！' }]}
                ]"
                placeholder="Please input your Leaving a message"
              ></a-textarea>
            </a-form-item>
            <a-form-item
              :label-col="formTailLayout.labelCol"
              :wrapper-col="formTailLayout.wrapperCol"
            >
              <a-button type="primary" @click="submit">提交</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
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
  { label: "品牌VI手册设计", value: "品牌VI手册设计" },
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
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
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
          const companyVal = this.form.getFieldValue("company");
          const company = companyVal ? companyVal : ""; // 公司
          const name = this.form.getFieldValue("username"); // 姓名
          const phone = this.form.getFieldValue("tel"); // 手机号码
          const email = this.form.getFieldValue("email"); // 邮箱
          const content = this.form.getFieldValue("leavingMsg"); // 补充说明

          let form = {
            service,
            company,
            name,
            phone,
            email,
            content
          };

          submitInfoForm(form).then(res => {
            if (res.code === 0) {
              this.$message.success("保存成功");
              this.form.resetFields();
            }
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
.link-us {
  .select {
    margin-top: 40px;
    .title {
      margin-bottom: 40px;
      text-align: center;
    }
    .radio-group {
      display: flex;
      justify-content: center;
      .checkbox {
        margin: 0 108px;
        /deep/ span {
          font-size: 16px;
        }
      }
    }
  }
  .bottom-box {
    display: flex;
    padding-top: 40px;
    background-image: url('../../assets/img/linkUs-img/leavemsg.jpg');
    justify-content: space-around;
    .left-box {
      // width: 310px;
      width: 50%;
      .text-box {
        .sign {
          display: inline-block;
          width: 13px;
          height: 26px;
          margin-right: 25px;
          background-color: #348ccd;
        }
        .text {
          display: inline-block;
        }
      }
    }
    .right-box {
      width: 50%;
      position: relative;
      width: 558px;
      height: 572px;
      // margin-left: 276px;
      border-style: solid;
      border-width: 12px 6px 12px 6px;
      border-radius: 10px;
      color: #348ccd;
      .title {
        position: absolute;
        top: 42px;
        left: 43px;
      }
      .form-box {
        width: 454px;
        margin-top: 100px;
        margin-left: 58px;
      }
    }
  }
}
</style>