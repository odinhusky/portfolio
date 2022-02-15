<template>
  <div class="text-sm p-5 flex justify-end">
    <SwitchBtn class="mr-5" iconName="bars" type="lines" />
    <SwitchBtn class="mr-5" iconName="border-all" type="cards" />
  </div>

</template>

<script>
// import { ref } from 'vue'

import SwitchBtn from '../components/SwitchBtn.vue'

export default {
  name: 'TheNav',
  props: {
  },
  components: {
    SwitchBtn
  },
  setup() {

    return {
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>