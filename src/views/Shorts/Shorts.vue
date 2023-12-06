<script setup lang="ts">
import {
  ref,
  onMounted
} from 'vue'
import { Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/pagination'
import { fetchMediaData } from '@/mocks/fetchers'
import Video from '@/components/Video'

const videoData = ref({})
const modules = ref([Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, A11y])

const getData = async () => {
  try {
    const { data } = await fetchMediaData(3, 'next', '0')
    
    for (const key in data) {
      videoData.value[key] = ref(data[key])
    }
  } catch (error) {
    console.error('', error)
  }
}

onMounted(async () => {
  await getData()
})
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
      :pagination="{
        clickable: true,
      }"
      :keyboard="{
        enabled: true,
      }"
      :speed="500"
      :loop="true"
    >
      <swiper-slide class="short" v-for="video of videoData">
        <Video v-bind="video" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
.shorts {
  height: 100vh;
  background-color: #ffffff;
  display: grid;
  place-items: center;

  .swiper {
    width: 100vw;
    height: 100vh;
  }
  
  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>