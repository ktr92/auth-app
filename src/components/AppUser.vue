<template>
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'
export default {
  setup() {
    const data = ref(null)

    onMounted(async () => {
      const res  = await axios.get(`/user.json`)
      data.value = res.data
      console.log(data)
    })    

    return {
      data
    }
  }
}
</script>

<style>

</style>