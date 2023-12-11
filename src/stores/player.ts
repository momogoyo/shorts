import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', {
  state: () => ({
    isPlaying: false,
    isMuted: true
  }),
  actions: {
    togglePlay () {
      this.isPlaying = !this.isPlaying
    },
    toggleMute () {
      this.isMuted = !this.isMuted
    }
  }
})