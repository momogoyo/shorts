
<script setup lang="ts">
  import {
    ref,
    onMounted
  } from 'vue'
  import { Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
  import { Swiper } from 'swiper/vue'
  import 'swiper/css/pagination'
  
  const modules = ref([
    Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, A11y
  ])
</script>

<template>
  <div class="shorts">
    <swiper
      :modules="modules"
      :slidesPerView="1"
      :spaceBetween="30"
      :direction="'vertical'"
      :mousewheel="true"
      :scrollbar="{ draggable: false }"
      :pagination="{ clickable: true }"
      :keyboard="{ enabled: true }"
      :speed="500"
      :loop="true"
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

