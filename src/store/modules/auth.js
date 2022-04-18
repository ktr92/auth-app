
const TOKEN_KEY = 'jwt-token'

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY)
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem(TOKEN_KEY, token)
    },
    logout(state) {
      state.token = null
      localStorage.removeItem(TOKEN_KEY)
    }
  },
  actions: {
     async login({ commit }, payload) {
      // имитация загрузки с сервера. здесь должен быть запрос на авторизацию
      await new Promise(resolve => setTimeout(() => {
        commit('setToken', 'test token')
        resolve()
      }, 1500))
     
     
    }
  },
  getters: {
    token(state) {
      return state.token
    },
    isAuthenticated(state) {
      return !!state.token
    }
  }
}