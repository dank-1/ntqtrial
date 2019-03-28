'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import NoteList from '@/components/NoteList'
import CurriculumList from '@/components/CurriculumList'
import Live from '@/components/Live'

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
      path: '/curriculum-list',
      name: 'curriculum-list',
      component: CurriculumList
    },
    {
      path: '/live',
      name: 'live',
      component: Live
    }
  ]
})
