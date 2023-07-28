export const useMenu = defineStore("menu", {
  state: () => ({
    isOpen: false,
  }),
  getters: {
    value: (state) => state.isOpen,
  },
  actions: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
});
