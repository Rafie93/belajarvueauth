import $axios from '../api.js'

const state = () => ({
    users: [],
    authenticated: []
})

const mutations = {

    ASSIGN_USER_AUTH(state, payload) {
        state.authenticated = payload
    }
}

const actions = {
    getUserLogin({ commit }) {
        return new Promise((resolve, reject) => {
            $axios.get('api/user')
            .then((response) => {
               console.log(response.data)
               commit('ASSIGN_USER_AUTH', response.data)
               resolve(response.data)
            })
        })
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}