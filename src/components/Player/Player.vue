<script setup lang="ts">
import {
  computed,
  ref,
  defineProps,
  withDefaults
} from 'vue'

const prefixClass = ref('player')

const props = withDefaults(defineProps<{
  source: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
}>(), {
  source: '',
  autoplay: false,
  muted: true,
  loop: true
})

const classes = computed(() => {
  return {
    [prefixClass.value]: true
  }
})
</script>

<template>
  <div :class="classes">
    <video
      :src="props.source"
      :autoplay="props.autoplay"
      :muted="props.muted"
      :loop="props.loop"
      crossorigin="anonymous"
    />
  </div>
</template>

<style scoped lang="scss">
.player {
  position: relative;
  background-color: white;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;

  video {
    object-fit: fill;
  width: 100%;
  
  }
}
</style>