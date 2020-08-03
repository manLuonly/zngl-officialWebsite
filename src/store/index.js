import Vue from 'vue'
import Vuex from 'vuex'
import vuexForever from './vuexForever'

Vue.use(Vuex)

const state = {
    ddda: 2222,
    hideNav: true,
    position: 'relative',
    currentData: []
}
const getters = {

}

const mutations = {
    changeHideNav(state, hideNav) {
        state.hideNav = hideNav;
    },
    changePosition(state, position) {
        state.position = position;
    },
    setCurrentData(state, currentData) {
        state.currentData = currentData
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