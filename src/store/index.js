import Vue from 'vue'
import Vuex from 'vuex'
import vuexForever from './vuexForever'

Vue.use(Vuex)

const state = {
    ddda: 2222,
    count: 1,
    hideNav: true
}
const getters = {

}

const mutations = {
    increment(state) {
        // 变更状态
        state.count++
    },
    changeHideNav(state, hideNav) {
        state.hideNav = hideNav;
    }
}

const actions = {

}



const store = new Vuex.Store({
    state,
    getters,
    mutations,
    plugins: [vuexForever.persistedstate('localStorage', ['isProject'])],
    actions,
})
store.commit('increment')
export default store