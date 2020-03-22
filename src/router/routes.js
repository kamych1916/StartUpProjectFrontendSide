
const routes = [
  {
    path: '/',
    component: () => import('pages/MainPage/Main.vue'),
  },
  {
    path: '/SearchFood',
    component: () => import('pages/SearchFoodPage/SearchFood.vue'),
  },
  {
    path: '/Authorization',
    component: () => import('pages/AuthorizationPage/Authorization.vue'),
  },
  {
    path: '/Registration',
    component: () => import('pages/RegistrationPage/Registration.vue'),
  }
  
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
