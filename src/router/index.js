import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CurriculumDetail from '@/components/CurriculumDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/curriculum_detail/:curriculumId',
      name: 'CurriculumDetail',
      component: CurriculumDetail
    }
  ]
})
