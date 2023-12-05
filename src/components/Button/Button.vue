<script setup lang="ts">
import {
  computed,
  defineProps,
  withDefaults
} from 'vue'

const prefixClass = 'button'

const props = withDefaults(defineProps<{
   color?: string
   textColor?: string
   text?: boolean
   icon?: string
   circle?: boolean
   block?: boolean
   disabled?: boolean
   size?: 'large' | 'medium' | 'small'
   preventDefault?: boolean
 }>(), {
  color: 'primary',
  textColor: 'primary',
  text: false,
  icon: '',
  circle: false,
  block: false,
  disabled: false,
  size: 'medium',
  preventDefault: false
 })

const buttonClasses = computed(() => {
  return {
    [`${prefixClass}`]: true,
    [`${prefixClass}-circle`]: !!props.circle,
    [`${prefixClass}-text`]: !!props.text,
    [`${prefixClass}-block`]: !!props.block,
    [`${prefixClass}-text-${props.textColor}`]: !!props.textColor,
    [`${prefixClass}-${props.color}`]: !!props.color,
    [`${prefixClass}-${props.size}`]: !!props.size,
  }
})

const iconClass = computed(() => {
  return props.icon
})
</script>

<template>
  <button type="button" :class="buttonClasses" :disabled="!!props.disabled">
    <i v-if="!!iconClass" v-html="props.icon"></i>
    <span v-if="!!$slots.default"><slot></slot></span>
  </button>
</template>

<style scoped lang="scss">
.button {
  border: none;
  outline: none;
  color: inherit;
  font-size: var(--font-size-14);
  line-height: 1;
  box-sizing: border-box;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid var(--secondary-text-color);
  background-color: transparent;

  > i {
    + span {
      margin-left: 5px;
    }
  }

  > span {
    + i {
      margin-left: 5px;
    }
  }

  &-circle {
    border-radius: 20px;
  }

  &-primary {
    background-color: var(--primary-background-color);
  }

  &-secondary {
    background-color: var(--secondary-background-color);
  }

  &-text-primary {
    color: var(--primary-text-color);
  }

  &-text-secondary {
    color: var(--secondary-text-color);
  }
}
</style>