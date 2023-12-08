
<script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue'
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

  const emit = defineEmits(['slideTransition'])

  const modules = ref([
    Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, A11y
  ])

  const slideChangeTransitionStart = (event) => {
    const { previousIndex, activeIndex } = event

    if (previousIndex < activeIndex) {
      emit('slideTransition', {
        direction: 'next',
        currentIndex: activeIndex
      })
    } else {
      emit('slideTransition', {
        direction: 'prev',
        currentIndex: activeIndex
      })
    }
  }

console.log(props.swiperOptions)
</script>

<template>
  <div class="shorts">
    <swiper
      :modules="modules"
      v-bind="{
        ...defaultSwiperOptions,
        ...props.swiperOptions
      }"
      @slideChangeTransitionStart="slideChangeTransitionStart"
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

