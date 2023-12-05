<script setup lang="ts">
import {
  computed,
  ref
} from 'vue'

const prefixClass = ref('layout-footer')

const classes = computed(() => {
  return {
    [prefixClass.value]: true
  }
})
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>