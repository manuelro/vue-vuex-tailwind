import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      age: 0
    }
  },
  mutations: {
    increment: state => state.age++
  },
  getters: {
    age: state => state.age
  },
})
