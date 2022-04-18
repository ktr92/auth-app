<template>
  <div>
    <div class="bg-gradient-to-r bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">
      <div class="flex items-center justify-center h-screen">
        <div class="w-96 max-w-full">
          <router-view></router-view>
        </div>        
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