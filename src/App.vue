<script setup>
import { ref, computed } from 'vue'
import TopBar from './components/TopBar.vue'
import routes from './routes'

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})
</script>

<template>
  <div class="container">
    <TopBar />
    <component :is="currentView" />
  </div>
</template>

<style scoped>
.container {
  margin: 25px auto;
  width: 800px;
}
</style>
