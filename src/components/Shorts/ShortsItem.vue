<script setup lang="ts">
  import {
    ref,
    onMounted,
    defineProps,
    defineEmits
  } from 'vue'
  import { SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/vue'
  import 'swiper/css/pagination'

  const props = defineProps({
    mediaData: Object,
    videoOptions: Object
  })

  const emit = defineEmits(['videoLoaded', 'slideChange'])

  const root = ref(null)
  const swiper = useSwiper()

  onMounted(async () => {
    swiper.value.wrapperEl.appendChild(root.value.$el)
    swiper.value.wrapperEl.offsetTop
    
    swiper.value.update()
  })

  const slideChange = () => {
    emit('slideChange', swiper.value)
  }
</script>

<template>
  <swiper-slide class="swiper-slide" :data-id="props.mediaData.id" ref="root">
    <div class="shorts-item">
      <div class="shorts-inner">
        <div class="shorts-media">
          <div class="player">
            <video
              :src="props.mediaData.source"
              :autoplay="props.videoOptions.autoplay"
              :muted="props.videoOptions.muted"
              :loop="props.videoOptions.loop"
            />
            <div v-if="props.videoOptions.controls" class="progress-bar">
              
            </div>
          </div>
          
          <!-- 로딩 중 -->
          <!-- <div v-else class="skeleton"></div> -->
        </div>
        <slot></slot>
      </div>
    </div>
  </swiper-slide>
</template>

<style lang="scss">
  .shorts-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .shorts-inner {
    position: relative;
    max-width: 520px;
    width: 100%;
    height: 90vh;
    border-radius: 12px;
    overflow: hidden;
  }

  .shorts-media {
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    video {
      max-width: 100%;
      object-fit: cover;
    }
  }
</style>
