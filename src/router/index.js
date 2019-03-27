import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import NoteList from '@/components/NoteList'
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
      path: '/note-list',
      name: 'note-list',
      component: NoteList
    },
    {
      path: '/curriculum_detail/:curriculumId',
      name: 'CurriculumDetail',
      component: CurriculumDetail
    }
  ]
})
