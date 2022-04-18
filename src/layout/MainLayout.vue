<template>
  <div>
    <div class="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <div class="w-96 max-w-full">
        <the-navbar></the-navbar>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue'
export default {
  components: {TheNavbar}
}
</script>

<style>

</style>