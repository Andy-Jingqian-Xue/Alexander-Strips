// store/index.js
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      score: 0,
    };
  },
  mutations: {
    setScore(state, score) {
      state.score = score;
    },
    incrementScore(state, increment = 1) {
      state.score += increment;
    },
    decrementScore(state, decrement = 0) {
      state.score -= decrement;
    },
    resetScore(state) {
      state.score = 0;
    },
  },
});
