<template>
  <div class="flex items-center justify-center bg-gray-500 text-white w-full">
    <ul class="list-none flex items-center justify-center">
      <li class="p-5 uppercase font-bold"><a @click.prevent="logout" class="cursor-pointer">Выход</a></li>
    </ul>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
  setup() {

    const store = useStore()
    const router = useRouter()
    // при выходе из профиля
    const logout = () => {
      store.commit('auth/logout')
      store.dispatch('messages/setMessage', {
        value: "Вы вышли из системы",
        type: ""
      })
      router.push('/?message=logout')
    }

    return {
      logout
    }
  }
}
</script>

<style>

</style>