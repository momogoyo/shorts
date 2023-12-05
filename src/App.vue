<script setup lang="ts">
import { RouterView } from 'vue-router'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  ref
} from 'vue'

import { Mousewheel, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/pagination';

const modules = ref([Mousewheel, Navigation, Pagination, Scrollbar, A11y])
</script>

<template>
  <!-- <div class="wavve">
    <h1 class="hidden">Wavve</h1>
    <RouterView /> -->
    <!-- <Layout>
      <Header>Header</Header>
      <div class="contenet">
        <RouterView />
      </div>
      <Footer>Footer</Footer>
    </Layout> -->
  <!-- </div> -->

  <main>
    <swiper
      :slidesPerView="3"
      :spaceBetween="50"
      :direction="'vertical'"
      :mousewheel="true"
      :scrollbar="{ draggable: false }"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
    >
      
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
    </swiper>
  </main>
</template>

<style scoped lang="scss">
.swiper {
  width: 600px;
  height: 300px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>