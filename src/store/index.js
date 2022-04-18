import { createStore, createLogger } from 'vuex'
import messages from './modules/messages'
import auth from './modules/auth'

const plugins = []

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    messages,
    auth
  }
})
