<script setup lang="ts">
import {
  ref,
  onMounted
} from 'vue'
import { Mousewheel, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/pagination'
import { fetchData } from '@/mocks/fetchers'
import Video from '@/components/Video'

const videoData = ref({})
const modules = ref([Mousewheel, Navigation, Pagination, Scrollbar, A11y])

const getData = async () => {
  try {
    const { data } = await fetchData()
    
    for (const key in data) {
      videoData.value[key] = ref(data[key])
      console.log(videoData.value[key])
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
    >
      <swiper-slide class="short" v-for="video of videoData">
        <Video v-bind="video" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
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