<script setup lang="ts">
import {
  ref,
  onMounted
} from 'vue'
import { fetchData } from '@/mocks/fetchers.js'
import Video from '@/components/Video'



const videoData = ref({})


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
  <!-- <div class="shorts" id="shorts"> -->
    <!-- <Swiper
      :modules="[Mousewheel]"
      :direction="'vertical'"
      :slidesPerView="1"
      :spaceBetween="30"
    >
      <SwiperSlide class="short" v-for="video of videoData">
        <div class="viewer">
          <Video v-bind="video" />
        </div>
      </SwiperSlide>
    </Swiper> -->
  <!-- </div> -->
</template>

<style lang="scss">

</style>