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

import {useLogin} from '../use/login'
export default {
  setup() {
    return {...useLogin()}
  } 
}
</script>

<style>

</style>