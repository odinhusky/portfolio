<template>
  <div class="text-sm p-5 flex justify-end">
    <SwitchBtn class="mr-5" iconName="bars" />
    <SwitchBtn class="mr-5" iconName="border-all" />

  </div>

</template>

<script>
import SwitchBtn from './SwitchBtn.vue'

export default {
  name: 'TheNav',
  components: {
    SwitchBtn
  }
}
</script>

<style lang="postcss" scoped>

</style>