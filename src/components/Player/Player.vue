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
    <!-- <div class="container"> -->
      <video
        :src="props.source"
        :autoplay="props.autoplay"
        :muted="props.muted"
        :loop="props.loop"
        crossorigin="anonymous"
      />
    <!-- </div> -->

    <!-- <div class="progress">
      <div class="progress-track">
        <div class="progress-filled"></div>
      </div>
    </div> -->
  </div>
</template>

<style scoped lang="scss">

</style>