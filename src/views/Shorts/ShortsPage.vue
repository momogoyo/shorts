<script setup lang="ts">
import {
  ref,
  onMounted
} from 'vue'
import { fetchMediaData } from '@/mocks/fetchers'
import { Shorts, ShortsItem } from '@/components/Shorts'

const mediaDataList = ref([])
const videoOptions = ref({
  autoplay: true,
  muted: true,
  loop: false
})
const swiperOptions = ref({
  slidesPerView: 1,
  spaceBetween: 30,
  direction: 'vertical',
  mousewheel: true,
  scrollbar: { draggable: false },
  pagination: { clickable: true },
  keyboard: { enabled: true },
  speed: 500,
  loop: true
})

onMounted(async () => {
  await fetchData(3, '', 0)
})

const fetchData = async (limit, direction, currentIndex) => {
  try {
    const response = await fetchMediaData(limit, direction, currentIndex)
    mediaDataList.value.push(...response.data.media)
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error)
  }
}

const slideTransition = async (value) => {
  if (value.currentIndex === 0) return
  
  await fetchData(3, value.direction, value.currentIndex)
}
</script>

<template>
  <shorts :swiperOptions="swiperOptions" @slideTransition="slideTransition">
    <shorts-item v-for="mediaData of mediaDataList" :mediaData="mediaData" :videoOptions="videoOptions">
      <div class="overlay">
        <div class="title">
          <p class="">{{ mediaData.description }}</p>
        </div>

        <div class="channel-info">
          <img src="" class="channel-img" />
          <span class="">{{ mediaData.channel }}</span>
        </div>
      </div>
    </shorts-item>
  </shorts>
</template>