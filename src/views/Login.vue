<template>
  <div>
    <div class="px-8 pt-8 pb-16 m-2 md:m-0 md:mt-8 rounded-lg bg-white shadow-lg ">
      <app-form></app-form>
      <app-message></app-message>
    </div>
  </div>
</template>

<script>
import AppForm from '../components/AppForm.vue'
import AppMessage from '../components/AppMessage.vue'
export default {
  components: {AppForm, AppMessage}
}
</script>

<style>

</style>