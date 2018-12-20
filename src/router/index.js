import Vue from 'vue'
import Router from 'vue-router'
import AppView from '@/components/app-view'
const page = name => () => import('@/pages/' + name)
Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'app_view',
      redirect: '/view',
      component: AppView,
      children: [
        {
          path: '/view',
          name: 'view',
          component: page('view'),
          meta: {title: ''}
        },
        {
          path: '/gantt',
          name: 'gantt',
          component: page('gantt'),
          meta: {title: '甘特图'}
        },
        {
          path: '/questionForm',
          name: 'questionForm',
          component: page('questionForm'),
          meta: {title: '问题表单'}
        }
      ]
    },
  ]
})
