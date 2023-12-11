<script setup lang="ts">
import {
  ref,
  onMounted
} from 'vue'
import { fetchMediaData } from '@/mocks/fetchers'
import {
  Shorts,
  ShortsItem
} from '@/components/Shorts'

const swiper = ref(null)
const mediaDataList = ref([])

const videoOptions = ref({
  autoplay: true,
  muted: true,
  loop: true
})

onMounted(async () => {
  await fetchData({
    currentIndex: 0,
    limit: 3,
    direction: ''
  })
})

const fetchData = async ({ 
  currentIndex = 0,
  limit = 3,
  direction = 'next'
}) => {
  try {
    const response = await fetchMediaData({ currentIndex, limit, direction })
    const mediaData = response.data.media.map((item) => ({ ...item }))

    // slide의 개수는 최대 6개
    mediaDataList.value = [
      ...mediaDataList.value.splice(-3),
      ...mediaData
    ]
    
    // mediaDataList.value.forEach(item=> console.log(item.id))
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error)
  }
}
</script>

<template>
  <shorts
    :swiperOptions="{
      onSwiper: (_swiper) => {
        swiper = _swiper 
      },
      onSlideNextTransitionEnd: async (_swiper) => {
        const isNextFetching = (_swiper.activeIndex + 1) % 3 === 0

        if (isNextFetching) {
          await fetchData({
            currentIndex: _swiper.activeIndex,
            direction: 'next'
          })

          _swiper.slideTo(2, 0)
        }
      }
    }"
  >
    <shorts-item v-for="(mediaData) of mediaDataList"
      :key="mediaData.id"
      :mediaData="mediaData"
      :videoOptions="videoOptions"
    >
      <div class="overlay">
        <p class="title">{{ mediaData.shorts.description }}</p>

        <div class="channel">
          <div class="channel-avatar">
            <img :src="mediaData.channel.avatar" />
          </div>
          <span class="channel-name">{{ mediaData.channel.name }}</span>
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