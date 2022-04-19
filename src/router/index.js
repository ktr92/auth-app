import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      auth: false,
      layout: 'auth'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      auth: true,
      layout: 'main'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// защита роутов
router.beforeEach((to, from, next) => {
  const isAuth = to.meta.auth

  if (isAuth && store.getters['auth/isAuthenticated']) {
    // если роут защищен и юзер авторизован
    next()
  } else if  (isAuth && !store.getters['auth/isAuthenticated']) {
     // если роут защищен, но юзер не авторизован - выводим сообщение
    next('/?message=auth')
    store.dispatch('messages/setMessage', {
      value: "Авторизуйтесь в системе",
      type: "error"
    })
  } else {
    next()
  }
})

export default router
