import { defineStore } from 'pinia'

export const useMediaStore = defineStore('player', {
  state: () => ({ play: false, muted: true, autoplay: false, loop: true }),
  getters: {
    
  },
  actions: {
    onPlay () {
      this.play = true
    },
    onPause () {
      this.play = false
    }
  }
})