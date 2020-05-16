let md5 = require('js-md5')
import axios from '@/api'

/**
 * 全局方法
 */
export default  (Vue) => {
    /**
     * 将md5加密方法挂在window上
     * 
     * @param 
     * 
     * @example _md5("lijiacheng")
     * 
     * @return {string} 加密后的字符串
     */
    window._md5 = md5

    /**
     * 将axios api请求的方法挂在window上
     * 
     * @example  axios.get(url, params) | axios.post(url, params)
     */
    window._axios = axios

     /**
     * 将消息提示 方法挂在window上
     * 
     * @param   duration(默认自动关闭延时，单位秒){number} 
     * @param   maxCount(最大显示数, 超过限制时，最早的消息会被自动关闭){number}  
     * @param   top(消息距离顶部的位置){string}
     * 
     * @example  _message(op).success(str)  _message(op).error(str)  _message(op).warning(str)
     * 
     * @return   message(ant-vue的消息方法)
     */
    window._message = (duration, maxCount, top)=>{
      let message  = Vue.prototype.$message
      message.config({
        top,
        duration,
        maxCount,
      });
      return  message
    }

    
    /**
     *  清空表单数据
     * @param {Object} form为ant-vue的表单对象
     */
    window._deleteFormData = function (form) {
      console.log(form.getFieldsValue());
      const formDataKeysArr = Object.keys(form.getFieldsValue());

      formDataKeysArr.map(key => {
        
        form.setFieldsValue({ [key]: "" });
      });
    }
}

