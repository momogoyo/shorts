<script setup lang="ts">
import {
  defineEmits
} from 'vue'
import Button from '@/components/Button'
import {
  Play,
  UnMuted
} from '@/assets/icons'

const emits = defineEmits(['play', 'muted'])

</script>

<template>
  <div class="player-header">
    <Button :icon="Play()" />
    <Button :icon="UnMuted()" />
  </div>
</template>

<style scoped lang="scss">
.player-header {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  z-index: 2;
}
</style>