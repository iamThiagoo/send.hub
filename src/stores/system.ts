// stores/system.ts
import { defineStore } from 'pinia';

export const useSystemStore = defineStore('systemStore', {
  persist: true,
  state: () => ({
    sidebarOpen: false,
  }),
  actions: {
    sidebarToggle() {
      this.sidebarOpen = !this.sidebarOpen;
    },

    sidebarOpenSet(value: boolean) {
      this.sidebarOpen = value;
    },
  },
});
