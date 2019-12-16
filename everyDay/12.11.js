/**
 * vuex中modules中的方法使用this.$store.commit("模块名/方法名")直接写方法名获取不到 要加上模块名/方法名才能获取到
 * 会报unknown mutation type
*/
//使用vue中的方法
this.$store.commit("settings/changeCheckCrmName", val)
//vuex中的
const store = new Vuex.Store({
    modules: {
        app,
        settings,
        user
    },
    getters
})
//vuex模块settings
import defaultSettings from '@/settings'

const { showSettings, fixedHeader, sidebarLogo } = defaultSettings

const state = {
    showSettings: showSettings,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo,
    checkCrmName:""
}

const mutations = {
    CHANGE_SETTING: (state, { key, value }) => {
        if (state.hasOwnProperty(key)) {
            state[key] = value
        }
    },
    changeCheckCrmName(state,data){
        state.checkCrmName=data
    }
}

const actions = {
    changeSetting({ commit }, data) {
        commit('CHANGE_SETTING', data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

//return 语句的作用是从当前函数退出，并从那个函数返回一个值
