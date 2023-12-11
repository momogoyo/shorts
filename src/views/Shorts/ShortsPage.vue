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
import Player from '@/components/Player'
import Button from '@/components/Button'
import { Play, Muted } from '@/assets/icons'
import { usePlayerStore } from '@/stores'

const store = usePlayerStore()

const swiper = ref(null)
const mediaDataList = ref([])
const videoOptions = ref({
  autoplay: false
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

onMounted(async () => {
  await fetchData({
    currentIndex: 0,
    limit: 3,
    direction: ''
  })
})
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
    <shorts-item 
      v-for="mediaData of mediaDataList"
      :key="mediaData.id"
      :id="mediaData.id"
    >
      <div class="shorts-media">
        <Player
          :source="mediaData.source"
          :videoOptions="videoOptions"
        >
          <div class="controls">
            <Button :icon="Play()" @click="() => store.togglePlay()"></Button>
          </div>

          <div class="progress">
            <div class="progress-track">
              <div class="progress-filled"></div>
            </div>
          </div>
        </Player>
      </div>
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
  padding: 72px 16px 32px 16px;
  pointer-events: none;

  .controls {
    display: flex;
    pointer-events: auto;
  }

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
.controls {
  position: absolute;
  left: 0;
  top: 0;
  padding: 16px 16px 72px 16px;
}


.progress {
  position: absolute;
  bottom: 0;
  width: 100%;
  cursor: pointer;
  z-index: 30;

  &-track {
    position: relative;
    width: 100%;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.8);
  }

  &-filled {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
    transform: scaleX(50%);
    transform-origin: 0 0 0;
  }
}
</style>