<script setup lang="ts">
import {
  computed,
  ref,
  defineProps
} from 'vue'

const prefixClass = ref('layout')
const hasSiderChild = ref(false)

const props = defineProps({
  headerFixed: Boolean,
  siderFixed: Boolean,
  siderCollapsed: Boolean
})

const classes = computed(() => {
  return {
    [prefixClass.value]: true,
    [`${prefixClass.value}-has-sider`]: hasSiderChild,
    [`${prefixClass.value}-header-fixed`]: props.headerFixed,
    [`${prefixClass.value}-sider-fixed`]: props.siderFixed,
    [`${prefixClass.value}-sider-collapsed`]: props.siderCollapsed
  }
})
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>