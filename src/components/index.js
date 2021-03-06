import publicFn from '@/public'

/**
 * 存放公共组件位置
 */
import PageHeader from '@/components/PageHeader/PageHeader'
import PageFooter from '@/components/PageFooter/PageFooter'
import Banner from '@/components/Banner/Banner'
import share from '@/components/share/share'
import suspendedCase from '@/components/suspendedCase/suspendedCase'

//使用阿里图标库 的IconFont组件
import { Icon } from 'ant-design-vue';
import { scriptUrl } from '@/utils/utils';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl
})


export default {
    install(Vue) {
        Vue.component('PageHeader', PageHeader)
        Vue.component('PageFooter', PageFooter)
        Vue.component('Banner', Banner)
        Vue.component('share', share)
        Vue.component('suspendedCase', suspendedCase)

        publicFn(Vue)
            //假的占位图地址  后面接上尺寸
        Vue.prototype.$imgUrl = 'http://placehold.it/1000x1000'
            /**
             * 变化滚动距离
             * 
             * @param {number} top 距离顶部的距离
             */
        Vue.prototype.$scrollTop = (top) => {
            document.documentElement.scrollTop = top
        }
    },
}