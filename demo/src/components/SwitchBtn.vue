<template >
  <div class="w-10 h-10 default-border flex-center cursor-pointer hover-container">
    <fa class="block text-xl hover-icon" :icon="iconName" />
  </div>
</template>

<script>
export default {
  name: 'SwitchBtn',
  props: {
    iconName: String
  },
}
</script>

<style lang="postcss" scoped>
  .hover-container:hover {
    @apply bg-blue-400;
  }

  .hover-container:hover .hover-icon {
    @apply text-blue-300;
  }
</style>