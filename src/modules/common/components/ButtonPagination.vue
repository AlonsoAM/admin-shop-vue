<script setup lang="ts">

import ArrowRightIcon from "@/assets/icons/ArrowRightIcon.vue";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon.vue";

interface Props {
  page: number
  hasMoreData: boolean
}

defineProps<Props>()


</script>

<template>
  <div class="flex justify-center space-x-4 py-10 bg-gray-100">
    <button :disabled="page === 1" @click="$router.push({query: {page: page - 1}})"
            class="flex items-center space-x-1.5 rounded-lg px-4 py-1.5 bg-blue-500 text-white disabled:bg-gray-300 hover:bg-blue-600 transition-all">
      <ArrowLeftIcon/>
      <span>Anteriores</span>
    </button>
    <button :disabled="hasMoreData" @click="$router.push({query: {page: page + 1}})"
            class="flex items-center space-x-1.5 rounded-lg px-4 py-1.5 bg-blue-500 text-white disabled:bg-gray-300 hover:bg-blue-600 transition-all">
      <span>Siguientes</span>
      <ArrowRightIcon/>
    </button>
  </div>
</template>

<style scoped>

</style>