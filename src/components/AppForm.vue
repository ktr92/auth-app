<template>
    <div>
      <div class="mb-8 text-center text-2xl">
        <h1>Authorization</h1>
      </div>
       <form @submit.prevent="onSubmit">
          <div class="form-group mb-2">
            <input type="text" placeholder="login" class="rounded border-2 border-rose-600 px-4 py-2 w-full" name="login" v-model="login"
              :class="{'border-red-600': loginError}"
              @blur="loginBlur"
            >
            <small v-if="loginError" class="text-red-600">{{ loginError }}</small>
          </div>
          <div class="form-group mb-2">
            <input type="password" placeholder="password" class="rounded border-2 border-rose-600 px-4 py-2 w-full" name="password" v-model="password"
              :class="{'border-red-600': passwordError}"
              @blur="passwordBlur"
            > 
            <small v-if="passwordError" class="text-red-600">{{ passwordError }}</small>
          </div>
          <div class="form-group mb-2">
            <button type="submit" class="cursor-pointer rounded text-white font-bold px-4 py-2 w-full uppercase bg-gray-500 hover:bg-gray-400 transition duration-150 ease-in-out" :disabled="isSubmitting">Login</button>
          </div>
       </form>
    </div>
</template>

<script>
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const {handleSubmit, isSubmitting} = useForm()
    const store = useStore()
    const router = useRouter()
    // валидаторы
    const {value: login, errorMessage: loginError, handleBlur: loginBlur} = useField(
      'login',
      yup.string().required("enter your login")
    )

    
    const {value: password, errorMessage: passwordError, handleBlur: passwordBlur} = useField(
      'password',
      yup.string().trim().required("enter your password")
    )

    const onInvalidSubmit = () => {
      store.dispatch('messages/setMessage', {
        value: "Форма содержит ошибки",
        type: 'error'
      })
    }

    // отправка формы
    const onSubmit = handleSubmit(async values => {
      try {
        console.log('Form: ', values)
        // на время запроса выводим сообщение
        store.dispatch('messages/setMessage', {
          value: "авторизуемся...",
          type: ''
        })
        // авторизация
        await store.dispatch('auth/login', values)  
        // после авторизации очищаем сообщение и делаем редирект 
        store.commit('messages/clearMessage')
        router.push('/profile')

      } catch (error) {
        store.dispatch('messages/setMessage', {
          value: error.errorMessage,
          type: 'error'
        })
      }
      
    }, onInvalidSubmit)

    return {
      login,
      password,
      loginError,
      passwordError,
      loginBlur,
      passwordBlur,
      onSubmit,
      isSubmitting
    }
  } 
}
</script>

<style>

</style>