<script setup lang="ts">
import {
  computed,
  ref
} from 'vue'

const prefixClass = ref('layout-header')
const theme = ref('')

const classes = computed(() => {
  return {
    [prefixClass.value]: true,
    [`${prefixClass.value}-theme-${theme.value}`]: theme.value
  }
})
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>