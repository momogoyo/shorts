<script setup lang="ts">
import {
  ref,
  onMounted
} from 'vue'
import { fetchMediaData } from '@/mocks/fetchers'

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
    <div class="short" v-for="video of videoData">
      {{ video }}
    </div>
</template>