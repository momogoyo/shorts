<script setup lang="ts">
import {
  ref,
  onMounted
} from 'vue'
import { fetchMediaData } from '@/mocks/fetchers'
import { Shorts, ShortsItem } from '@/components/Shorts'

const mediaDataList = ref({})

const fetchData = async () => {
  try {
    const response = await fetchMediaData(3, 'next', 0)
    mediaDataList.value = response.data.media
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error)
  }
}

onMounted(async () => {
  await fetchData()
})

</script>

<template>
  <shorts>
    <shorts-item v-for="mediaData of mediaDataList" :mediaData="mediaData">
      {{ mediaData }}
    </shorts-item>
  </shorts>
</template>