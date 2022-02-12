import { createStore } from 'vuex'
import router from './router.js'

const mutations = {
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
}

// getters are functions.
const getters = {
}

// state below the rest // https://stackoverflow.com/questions/43843180/eslint-state-already-declared-vuex
const state = {
   verified: null 
}

const store = createStore({
  state,
  getters,
  actions,
  mutations
})

export default store