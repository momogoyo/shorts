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
  loop: true
})

const props = withDefaults(defineProps<{
  swiperOptions?: {
    slidesPerView: number
    spaceBetween: number
    direction: 'vertical' | 'horizontal'
    mousewheel: boolean
    pagination: {}
    keyboard: {},
    speed: number,
    loop: boolean
  }
}>(), {
  swiperOptions: {
    slidesPerView: 1,
    spaceBetween: 30,
    direction: 'vertical',
    mousewheel: true,
    pagination: { clickable: true },
    keyboard: { enabled: true },
    speed: 500,
    loop: true
  }
})

// 다른 props랑 합치기

onMounted(async () => {
  await fetchData(3, '', 0)
})

const fetchData = async (limit, direction, currentIndex) => {
  try {
    const response = await fetchMediaData({ limit, direction, currentIndex })
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
  <shorts :swiperOptions="props.swiperOptions" @slideTransition="slideTransition">
    <shorts-item v-for="mediaData of mediaDataList" :mediaData="mediaData" :videoOptions="videoOptions">
      <div class="overlay">
        <p class="title">{{ mediaData.description }}</p>

        <div class="channel">
          <div class="channel-avatar">
            <img :src="mediaData.avatar" />
          </div>
          <span class="channel-name">{{ mediaData.channel }}</span>
        </div>
      </div>
    </shorts-item>
  </shorts>
</template>

<style scoped lang="scss">
.overlay {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-image: var(--shorts-gradient);
  padding: 72px 16px 16px 16px;
  pointer-events: none;

  .title {
    margin: 0;
    padding-top: 12px;
    color: var(--primary-text-color);
    order: 2;
  }

  .channel {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    order: 1;

    &-avatar {
      flex-shrink: 0;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 6px;

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-name {
      color: var(--primary-text-color);
      font-weight: 500;
    }
  }
}
</style>