
<script setup lang="ts">
  import { ref } from 'vue'
  import { Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
  import { Swiper } from 'swiper/vue'
  import 'swiper/css/pagination'

  const defaultSwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    direction: 'vertical',
    mousewheel: true,
    pagination: { clickable: true },
    keyboard: { enabled: true },
    speed: 500,
    loop: true    
  }

const props = withDefaults(defineProps<{
  swiperOptions: any
}>(), {
  swiperOptions: {}
})

const modules = ref([
  Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, A11y
])

// console.log(props.swiperOptions)
</script>

<template>
  <div class="shorts">
    <swiper
      :modules="modules"
      v-bind="{
        ...defaultSwiperOptions,
        ...props.swiperOptions
      }"
    >
      <slot></slot>
    </swiper>
  </div>
</template>

<style lang="scss">
.swiper {
  width: 100vw;
  height: 100vh;
}
</style>

