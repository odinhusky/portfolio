<template>
  <div class="w-full">
    <TheNav />

  </div>
</template>

<script>
import TheNav from './components/TheNav.vue'
import './assets/tailwind.css'

export default {
  name: 'App',
  components: {
    TheNav
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
</style>
