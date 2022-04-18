
export default {
  namespaced: true,
  state() {
    return {
      message: null,
    }
  },
  mutations: {
    setMessage(state, message) {
      state.message = message
    },
    clearMessage(state) {
      state.message = null
    }
  },
  actions: {
    setMessage({commit}, message) {
      commit('setMessage', message)
    }
  },
  getters: {
    message(state) {
      return state.message
    },
  }
 
}
