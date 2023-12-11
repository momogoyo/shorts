<script setup lang="ts">
import {
  ref,
  onMounted
} from 'vue'
import { 
  SwiperSlide,
  useSwiper
} from 'swiper/vue'
import 'swiper/css/pagination'

const root = ref(null)
const swiper = useSwiper()

const appendSlide = () => {
  const rootEl = root.value.$el

  swiper.value.wrapperEl.appendChild(rootEl)
  swiper.value.wrapperEl.offsetTop
  
  swiper.value.update()
}

onMounted(() => {
  appendSlide()
})
</script>

<template>
  <swiper-slide
    class="swiper-slide"
    ref="root"
  >
    <div class="shorts-item">
      <div class="shorts-inner">
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
    // z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    // pointer-events: none;

    video {
      max-width: 100%;
      object-fit: cover;
      z-index: -1;
      pointer-events: none;
    }
  }
</style>
