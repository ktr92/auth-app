<template>
  <div>
    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">
      <the-navbar></the-navbar>
      <div class="container mx-auto h-screen">
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