<script setup lang="ts">
import {
  computed,
  ref
} from 'vue'
import {
  ThumbsUp,
  ThumbsDown,
  Comment,
  Share,
  More
} from '@/assets/icons'
import Button from '@/components/Button'

const prefixClass = ref('actions')

const classes = computed(() => {
  return {
    [prefixClass.value]: true
  }
})
</script>

<template>
  <div :class="classes">
    <ul class="actions-items">
      <li class="actiosn-item">
        <Button :circle="true" :icon="ThumbsUp()"></Button>
        <div class="tooltip">좋아요</div>
      </li>
      <li class="actiosn-item">
        <Button :circle="true" :icon="ThumbsDown()"></Button>
        <div class="tooltip">싫어요</div>
      </li>
      <li class="actiosn-item">
        <Button :circle="true" :icon="Comment()"></Button>
        <div class="tooltip">댓글</div>
      </li>
      <li class="actiosn-item">
        <Button :circle="true" :icon="Share()"></Button>
        <div class="tooltip">공유</div>
      </li>
      <li class="actiosn-item">
        <Button :circle="true" :icon="More()"></Button>
        <div class="tooltip">더보기</div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.tooltip {
  color: var(--secondary-text-color);
  background-color: #FFF;
  visibility: hidden;
}
</style>