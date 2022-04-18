<template>
  <div 
    v-if="message" 
    :class="{'text-red-400': typeError, 'text-green-600': typeInfo}"
  >
    <p class="p-2 border rounded font-bold">{{message.value}}</p>
  </div>
</template>

<script>
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {
    const store = useStore()

    const message = computed(() => store.state.messages.message)
    const typeError = computed(() => message.value.type === 'error')
    const typeInfo = computed(() => message.value.type === '' ||  message.type === 'info')

    return {
      message,
      typeError,
      typeInfo
    }
  }
}
</script>

<style scoped>

</style>