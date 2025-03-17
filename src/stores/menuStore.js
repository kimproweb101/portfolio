// src/stores/menuStore.js
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menus: [
      { id: 'section1', label: 'Menu1' },
      { id: 'section2', label: 'Menu2' },
      { id: 'section3', label: 'Menu3' },
    ],
    activeSection: '',
  }),
  actions: {
    setActiveSection(sectionId) {
      this.activeSection = sectionId
    },
  },
})
