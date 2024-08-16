<script setup lang="ts">

import TopMenu from "@/modules/shop/components/TopMenu.vue";
import CustomFooter from "@/modules/shop/components/CustomFooter.vue";

</script>

<template>
  <!-- Header Navbar -->
  <top-menu></top-menu>




  <!-- Products -->
  <router-view></router-view>

  <!-- Footer -->
<custom-footer></custom-footer>


</template>

<style scoped>

</style>