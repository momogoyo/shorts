<script setup lang="ts">
import {
  ref,
  onMounted
} from 'vue'
import { fetchMediaData } from '@/mocks/fetchers'
import Shorts from '@/views/Shorts'

const videoData = ref({})

const fetchData = async () => {
  try {
    const response = await fetchMediaData(3, 'next', 0)
    videoData.value = response.data
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error)
  }
}

onMounted(async () => {
  await fetchData()
})

</script>

<template>
  <Shorts :videoData="videoData" />
  
  <!-- <shorts>
    <shorts-item v-for="video of videoData">
      <Video-component :source="url" :autoplay="true" />
      <div class="metadata">
        채널명
        타이틀
      </div>
    </shorts-item>
  </shorts> -->
</template>