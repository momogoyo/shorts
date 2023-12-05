<script setup lang="ts">
import {
  computed,
  onMounted,
  onUnmounted,
  reactive,
  ref
} from 'vue'

const prefixClass = ref('trimmer')

const isDragging = ref(false)
const scrubberElement = ref(null)
const pointerId = ref(-1)
const state = reactive({
  startX: 0,
  left: 0
})

const onPointerDown = (
  event: PointerEvent
) => {
  pointerId.value = event.pointerId

  if (!scrubberElement.value) return
  const target = scrubberElement.value as HTMLElement
  target.setPointerCapture(pointerId.value)

  isDragging.value = true

  state.startX = event.clientX
}

const onPointerMove = (
  event: PointerEvent
) => {
  if (event.pointerId !== pointerId.value || !isDragging.value) return

  const dragX = event.clientX - state.startX
  state.left += dragX
  state.startX = event.clientX
}

const onPointerUp = (
  event: PointerEvent
) => {
  if (event.pointerId !== pointerId.value) return

  if (scrubberElement.value) {
    const target = scrubberElement.value as HTMLElement
    target.releasePointerCapture(pointerId.value)
  }
  
  pointerId.value = -1
  isDragging.value = false
}

const classes = computed(() => {
  return {
    [prefixClass.value]: true
  }
})

onMounted(() => {
  document.addEventListener('pointermove', onPointerMove)
  document.addEventListener('pointerup', onPointerUp)
})

onUnmounted(() => {
  document.removeEventListener('pointermove', onPointerMove)
  document.removeEventListener('pointerup', onPointerUp)
})
</script>

<template>
  <div :class="[classes, 'ruler']">
    <div class="view">
      <div class="canvas"></div>
      
      <div
        ref="scrubberElement"
        :class="[{ draggable: isDragging }, 'handles']"
        :style="{ left: `${state.left}px` }"
        @pointerdown="onPointerDown"
      >
        <div class="handle"></div>
        <div class="handle"></div>
      </div>
      
      <div class="playhead"></div>
    </div>
  </div>
</template>

<style scoped>
.ruler {
  position: relative;
  left: 0;
  top: 0;
  width: 80%;
  height: 100%;
  background-color: #333333;
}

.view {
  width: 100%;
  height: 100px;
  background-color: #aaaaaa;
  box-shadow: 0 3px 10px 1px #222222;
}

.handles {
  position: relative;
  max-width: 200px;
  height: 100px;
  border-radius: 5px;
  box-shadow: 0 3px 10px 1px #222222;
  transform: translateZ(0);
  transition: 0.3s, background 0.4s;
  cursor: grab;
}

.handles.draggable {
  background-color: #ffffff;
  transform: scale(1.3, 1.3);
}

.handle {
  position: absolute;
  width: 2px;
  background-color: red;
}

.handle:first-child {
  left: 0;
  top: 0;
  height: 100%;
}

.handle:last-child {
  right: 0;
  top: 0;
  height: 100%;
}
</style>