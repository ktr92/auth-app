<template>
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div v-if="data" class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex p-4">
        <div >
          <img class="w-36 m-auto" 
            :src="avatar" 
            :alt="data.name" 
          />
        </div>
        <div class="p-8 text-center md:text-left">
          <div><b>ФИО: </b><span>{{ data.name }}</span></div>
          <div><b>E-mail: </b><span>{{ data.email }}</span></div>
          <div><b>Телефон: </b><span>{{ data.phone }}</span></div>
          <div><b>Профессия: </b><span>{{ data.job }}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue'
import axios from 'axios'
export default {
  setup() {
    const data = ref(null)
    // берем данные из json файла
    onMounted(async () => {
      try { 
        const res = await axios.get(`/user.json`)
        data.value = res.data
      } catch (error) {
        console.error(error)
      }      
    })
    
    const avatar = computed(() => require(`../assets/${data.value.avatar}`))
    
    return {
      data,
      avatar
    }
  }
}
</script>

<style>

</style>