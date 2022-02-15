<template>
  <div class="w-full">
    <TheNav :hasPrev="hasPrev" />
    <DataList :data="currentData" :showType="showType" />
  </div>
</template>

<script>
import { ref, provide, getCurrentInstance } from 'vue'

import TheNav from './container/TheNav.vue'
import DataList from './container/DataList.vue'

import './assets/tailwind.css'

export default {
  name: 'App',
  components: {
    TheNav,
    DataList
  },
  setup() {
    const showType = ref('cards');
    const switchShowType = (type) => {
      console.log('App switchShowType => type', type)
      showType.value = type
    }
    provide('type', {
      showType,
      switchShowType
    })

    // ==============================================

    const itemsPerPage = 30;
    const totalItems = 3010;
    const totalPage = parseInt(totalItems / itemsPerPage) + 1 ;
    const currentPage = ref(1);
    const hasPrev = ref(currentPage.value !== 1);
    const hasNext = ref(currentPage.value === totalPage);

    console.log('hasPrev', hasPrev)
    console.log('hasNext', hasNext)

    const { proxy } = getCurrentInstance()
    const seed = `frontier-demo-p${currentPage.value}`;
    const api = `https://randomuser.me/api/?results=${itemsPerPage}&seed=${seed}`
    const currentData = ref([]);
    const getCurrentData = () => {
      proxy.$axios({
        url: api,
        method: 'GET'
      }).then(res => {
        console.log('res', res)
        if(res.status === 200) {
          console.log('success')
          const results = res?.data?.results;
          currentData.value = results === undefined ? [] : results;
          // console.log('currentData', currentData)
        }
      })
    }

    getCurrentData()

    return {
      showType,
      hasPrev,
      currentData
    }
  }
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
