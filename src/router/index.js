'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import NoteList from '@/components/NoteList'
import CurriculumList from '@/components/CurriculumList'
import Curriculum from '@/components/Curriculum'
import Live from '@/components/Live'
import Feed from '@/components/Feed'
import NoteCreate from '@/components/NoteCreate'

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
      path: '/curriculum/:curriculumId',
      name: 'curriculum',
      component: Curriculum
    },
    {
      path: '/live',
      name: 'live',
      component: Live
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed
    },
    {
      path: '/note-create',
      name: 'note-create',
      component: NoteCreate
    }
  ]
})
