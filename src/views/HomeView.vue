<template>
  <main>
    <p>Fun with Evan & Stephanie 🎉</p>
    <v-btn @click="$router.push({ name: AppRoute.menu })"> START </v-btn>
  </main>
</template>

<script setup lang="ts">
import { AppRoute } from '@/enums';
</script>
<style scoped>
main {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
}
</style>
