<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-[#F8F5EE]">
    <SiteHeader />
    <RouterView />
  </div>
</template>
