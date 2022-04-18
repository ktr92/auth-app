import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export function useLogin() {
  const {handleSubmit, isSubmitting} = useForm()
  const store = useStore()
  const router = useRouter()
  // валидаторы
  const {value: login, errorMessage: loginError, handleBlur: loginBlur} = useField(
      'login',
      yup.string().required("enter your login")
    )

  const MIN_LENGTH = 8
  
  const {value: password, errorMessage: passwordError, handleBlur: passwordBlur} = useField(
    'password',
    yup.string().trim().required("enter your password").min(MIN_LENGTH)
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
      // на время запросы выводим сообщение
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