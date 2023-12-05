<script setup lang="ts">
import {
  defineProps,
  withDefaults,
  computed,
  ref
} from 'vue'
import { Music, Record } from '@/assets/icons'

const prefixClass = ref('video-footer')

const classes = computed(() => {
  return {
    [prefixClass.value]: true
  }
})

const props = withDefaults(defineProps<{
  channel: string,
  description?: string,
  bgm?: string
}>(), {
  channel: '',
  description: '',
  bgm: ''
})
</script>

<template>
  <div :class="classes">
    <div class="video-footer--metadata">
      <h3 class="channel">@{{ props.channel }}</h3>
      <p class="description">{{ props.description }}</p>
      <div class="ticker">
        <div class="ticker-icon" v-html="Music()"></div>
        <div class="ticker-bgm">
          <p>{{ props.bgm }}</p>
        </div>
      </div>
    </div>
    <div class="video-footer--record">
      <i v-html="Record()"></i>
    </div>
  </div>
</template>

<style scoped lang="scss">
.video-footer {
  position: relative;
  color: white;
  bottom: 150px;
  margin-left: 40px;
  display: flex;

  
  &--metadata {
    flex: 1;
    
    .channel {
      padding-bottom: 20px;
    }

    .description {
      padding-bottom: 20px;
    }

    .ticker {
      overflow: hidden;
      height: fit-content;
      margin-left: 30px;
      width: 60%;

      &-icon {
        position: absolute;
      }

      &-bgm {
        white-space: nowrap;
        animation: ticker 10s linear infinite;
      }
    }
  }

  &--record {
    height: 50px;
    position: absolute;
    bottom: 0;
    right: 20px;
    filter: invert(1);
    animation: spinTheRecord infinite 5s linear;
  }
}

@keyframes spinTheRecord {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes ticker {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>