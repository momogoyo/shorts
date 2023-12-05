<script setup lang="ts">
import {
  defineProps,
  withDefaults,
  computed,
  ref
} from 'vue'
import Button from '@/components/Button'
import {
  Heart,
  HeartSolid,
  Message,
  Share
} from '@/assets/icons'

const prefixClass = ref('video-sidebar')
const liked = ref(false)

const props = withDefaults(defineProps<{
  likes: string,
  messages: string,
  shares: string
}>(), {
  likes: '',
  messages: '',
  shares: ''
})

const classes = computed(() => {
  return {
    [prefixClass.value]: true
  }
})
</script>

<template>
  <div :class="classes">
    <div class="video-sidebar--button">
      <Button class="like-button" :icon="liked ? Heart() : HeartSolid()">
        <p v-if="liked">{{ liked ? props.likes + 1 : props.likes }}</p>
      </Button>
    </div>
    <div class="video-sidebar--button">
      <Button class="message-button" :icon="Message()">
        <p>{{ props.messages }}</p>
      </Button>
    </div>
    <div class="video-sidebar--button">
      <Button class="share-button" :icon="Share()">
        <p>{{ props.shares }}</p>
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>