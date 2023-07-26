export const useCounter = defineStore("counter", {
  state: () => ({
    counter: 0,
  }),
  getters: {
    value: (state) => state.counter,
  },
  actions: {
    increment(amout = 1) {
      this.counter += amout;
    },
    decrement(amout = 1) {
      this.counter -= amout;
    },
  },
});
