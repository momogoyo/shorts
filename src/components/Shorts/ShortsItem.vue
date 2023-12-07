<script setup lang="ts">
  import {
    ref,
    onMounted
  } from 'vue'
  import { SwiperSlide, useSwiper } from 'swiper/vue'
  import 'swiper/css/pagination'

  const props = withDefaults(defineProps<{
    mediaData: {
      source: string
    },
    videoOptions: {
      autoplay: boolean
      muted: boolean
      loop: boolean
    }
  }>(), {
    mediaData: {
      source: ''
    },
    videoOptions: {
      autoplay: false,
      muted: true,
      loop: false
    }
  })

  const root = ref(null)
  const swiper = useSwiper()

  onMounted(async () => {
    swiper.value.wrapperEl.appendChild(root.value.$el)
    swiper.value.wrapperEl.offsetTop

    swiper.value.update()
  })
</script>

<template>
  <swiper-slide class="swiper-slide" ref="root">
    <div class="shorts-item">
      <div class="shorts-inner">
        <div class="shorts-media">
          <video
            :src="props.mediaData.source"
            :autoplay="props.videoOptions.autoplay"
            :muted="props.videoOptions.muted"
            :loop="props.videoOptions.loop"
          />
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
