<script setup lang="ts">
import {
  withDefaults,
  defineProps,
  computed,
  ref
} from 'vue'
import VideoHeader from './Header.vue'
import Player from '@/components/Player'
import VideoSidebar from './Sidebar.vue'
import VideoFooter from './Footer.vue'

const prefixClass = ref('video')

const classes = computed(() => {
  return {
    [prefixClass.value]: true
  }
})

const props = withDefaults(defineProps<{
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  
  source: string
  channel: string
  description?: string
  bgm?: string
  likes?: string
  messages?: string
  shares?: string
}>(), {
  autoplay: false,
  muted: false,
  loop: false,
  
  source: '',
  channel: '',
  description: '',
  bgm: '',
  likes: '',
  messages: '',
  shares: ''
})
</script>
<!-- 
  회원 정보와 다른것만
  플레이어 제어는 상태관리 이용해볼까나... 우선은 emit으로
-->
<template>
  <div :class="classes">
    <VideoHeader />
    <Player
      :source="props.source"
      :autoplay="props.autoplay"
      :muted="props.muted"
      :loop="props.loop"
    />
    <VideoFooter
      :channel="props.channel"
      :description="props.description"
      :bgm="props.bgm"
    />
    <VideoSidebar
      :likes="props.likes"
      :messages="props.messages"
      :shares="props.shares"
    />
  </div>
</template>

<style scoped lang="scss">

</style>