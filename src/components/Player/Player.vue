<script setup lang="ts">
import {
  computed,
  ref,
  onMounted,
  watch
} from 'vue'
import { usePlayerStore } from '@/stores'
// @ts-ignore
import shaka from 'shaka-player'

const store = usePlayerStore()
const shakaPlayer = ref(null)
const videoEl = ref(null)
const prefixClass = ref('player')
const isLoad = ref(false)

const defaultOptions = {
  autoplay: true,
  muted: true,
  loop: true,
  controls: true,
  progress: true 
}

const props = defineProps({
  source: String,
  videoOptions: Object
})

const emit = defineEmits(['play', 'pause'])

const options = ref({
  ...defaultOptions,
  ...props.videoOptions
})

const isPlay = ref(props.videoOptions.autoplay)
const isMute = ref(props.videoOptions.muted)

const classes = computed(() => {
  return {
    [prefixClass.value]: true,
    [`${prefixClass.value}-loaded`]: isLoad.value
  }
})

const initEvents = () => {
  shakaPlayer.value.addEventListener('play', onPlay)
  shakaPlayer.value.addEventListener('error', onError)
}

const initShaka = async () => {
  shaka.polyfill.installAll()

  if (shaka.Player.isBrowserSupported()) {
    shakaPlayer.value = new shaka.Player()
    shakaPlayer.value.attach(videoEl.value)

    loadSource(props.source) 
  }
}

const loadSource = async (source) => {
  if (shakaPlayer.value) {
    try {
      await shakaPlayer.value.load(source)

      isLoad.value = true
    } catch (e) {
      onError(e)
    }
  }
}

const onPlay = () => {
  if (!isLoad.value) {
    loadSource(props.source)
  }

  videoEl.value.play()
}

const onPause = () => {
  videoEl.value.pause()
}

const onMuted = () => {
  const isMuted = videoEl.value.muted

  if (isMuted) {
    videoEl.value.muted = false
  } else {
    videoEl.value.muted = true
  }

  isMute.value = videoEl.value.muted
}

const onError = (event) => {
  const { detail } = event
  console.log(`Error ${detail.code}, ${detail}`)
}

// 비디오 재생 상태 감시
watch(() => store.isPlaying, (newVal) => {
  if (newVal) {
    videoEl.value.play()
  } else {
    videoEl.value.pause()
  }
})

onMounted(() => {
  initShaka()
  .then(() => initEvents())
})
</script>

<template>
  <div :class="classes">
    <video
      ref="videoEl"
      crossorigin="anonymous"
      :src="props.source"
      v-bind="options"
    />
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.player {
  position: relative;
  background-color: white;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  opacity: 0;
  transition: opacity 0.25s;

  &-loaded {
    opacity: 1;
  }

  video {
    object-fit: fill;
    width: 100%;
  }
}
</style>