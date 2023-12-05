<script setup lang="ts">
import {
  withDefaults,
  defineProps,
  computed,
  ref
} from 'vue'
import VideoHeader from './Header.vue'
import Player from '@/components/Player'
// import VideoSidebar from './Sidebar.vue'
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
    <Player
      :source="props.source"
      :autoplay="props.autoplay"
      :muted="props.muted"
      :loop="props.loop"
    />
    <div class="video-overlay">
      <VideoHeader />
      <VideoFooter
        :channel="props.channel"
        :description="props.description"
        :bgm="props.bgm"
      />

      <div class="progress">
        <div class="progress-track">
          <div class="progress-filled"></div>
        </div>
      </div> 
    </div>
    
  </div>
</template>

<style scoped lang="scss">
.video {
  position: relative;
  height: 800px;
  border-radius: 20px;
  overflow: scroll;
  width: 80%;
  max-width: 500px;
  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */


  .video-overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>