'use strict'

import { getNoteList } from '../api'

export default {
  getNoteList: ({ commit }) => {
    getNoteList (( noteList ) => {
      commit ( 'setNoteList', noteList )
    })
  }
}
