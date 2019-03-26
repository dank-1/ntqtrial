import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import NoteList from '@/components/NoteList'
import TrainingNoteDetail from '@/components/TrainingNoteDetail'

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
      path: '/training-note-detail',
      name: 'training-note-detail',
      component: TrainingNoteDetail
    }
  ]
})
