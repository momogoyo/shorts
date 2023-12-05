<script setup lang="ts">
import { RouterView } from 'vue-router'
import Layout from '@/components/Layout'
</script>

<template>
  <div class="wavve">
    <h1 class="hidden">Wavve</h1>
    <Layout>
      <RouterView></RouterView>
    </Layout>
  </div>
</template>