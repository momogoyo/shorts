
<script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue'
  import { Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
  import { Swiper } from 'swiper/vue'
  import 'swiper/css/pagination'

  const props = defineProps({
    swiperOptions: null
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
</script>

<template>
  <div class="shorts">
    <swiper
      :modules="modules"
      v-bind="props.swiperOptions"
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

