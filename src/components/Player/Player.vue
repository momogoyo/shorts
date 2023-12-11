<script setup lang="ts">
import {
  computed,
  ref,
  onMounted
} from 'vue'
// @ts-ignore
import shaka from 'shaka-player'
import Button from '@/components/Button'
import { Play, Muted, Pause, UnMuted } from '@/assets/icons'

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

const emit = defineEmits(['play'])

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
  // 여기서 autoplay로 바꾸면 전체 비디오를 다 autoplay로 해줘야하지 않을까?
}

const onPause = () => {
  videoEl.value.pause()
}

const onToggle = () => {
  if (isPlay.value) {
    onPause()
  } else {
    onPlay()
  }

  isPlay.value = !videoEl.value.paused
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

onMounted(() => {
  initShaka()
  .then(() => initEvents())
})
</script>

<template>
  <div :class="classes">
    <div v-show="options.controls" class="controls">
      <Button :icon="!isPlay ? Play() : Pause()" @click="onToggle"></Button>
      <Button :icon="isMute ? Muted(): UnMuted()" @click="onMuted"></Button>
    </div>
    <video
      ref="videoEl"
      crossorigin="anonymous"
      :src="props.source"
      v-bind="options"
    />

    <div v-show="options.progress" class="progress">
      <div class="progress-track">
        <div class="progress-filled"></div>
      </div>
    </div>
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

  .controls {
    position: absolute;
    left: 0;
    top: 0;
    padding: 16px 16px 72px 16px;
  }

  video {
    object-fit: fill;
    width: 100%;
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
}
</style>