<script setup lang="ts">
import {
  defineProps,
  PropType,
  ref,
  onMounted,
  watch
} from 'vue'
import { fetchMediaData } from '@/mocks/fetchers'
import { Shorts, ShortsItem } from '@/components/Shorts'

const mediaDataList = ref([])
const currentSlideIndex = ref(0)
const swiper = ref(null)

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
  // 0번째부터 시작
  // 그 다음 데이터 2개 가져옴
  try {
    const response = await fetchMediaData({ currentIndex, limit, direction })
    const mediaData = response.data.media.map(item => ({ ...item, loaded: false }))

    mediaDataList.value = [
      ...mediaDataList.value.splice(-3),
      ...mediaData
    ]
    
    mediaDataList.value.forEach(item=> console.log(item.id))
  } catch (error) {
    console.error('API 요청 중 오류 발생:', error)
  }
}

const slideTransition = async (value) => {
  currentSlideIndex.value = value.currentIndex
  
  if ((value.currentIndex + 1) % 3 === 0) {
    await fetchData({
      currentIndex: value.currentIndex,
      direction: value.direction,
    })
  }
}

const onLoadedVideo = (index) => {
  const isLoadedTarget = 
    index === currentSlideIndex.value || 
    index === currentSlideIndex.value - 1 ||
    index === currentSlideIndex.value + 1

  return isLoadedTarget
}

// 비디오 로드
const updateVideoLoadState = () => {
  mediaDataList.value.forEach((item, index) => {
    item.loaded = onLoadedVideo(index)
  })
}

// 비디오 로드 완료 처리
const handleVideoLoaded = (index) => {
  if (mediaDataList.value[index]) {
    mediaDataList.value[index].loaded = true
  }
}

const slideChange = (value) => {
  const { activeIndex } = value

  // fetchData(3, 'prev', activeIndex - 3)
  // fetchData(3, 'next', activeIndex + 1)

  // 이전, 다음 슬라이드의 비디오 로드
  mediaDataList.value.forEach((item, index) => {
    item.loaded = index === activeIndex - 1 || index === activeIndex + 1
  })
}

// watch(currentSlideIndex, updateVideoLoadState)

const onSlidePrevTransitionEnd = () => {
  
}

const onSlideNextTransitionEnd = async (_swiper) => {

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
      @slideChange="slideChange"
    >
      <div v-if="!mediaData.loaded" class="skeleton"></div>
      <div v-else class="overlay">
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