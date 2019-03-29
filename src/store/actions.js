'use strict'

import { getNoteList } from '../api'
import animation from '../animation'

export default {
  getNoteList: ({ commit }) => {
    getNoteList (( noteList ) => {
      commit ( 'setNoteList', noteList )
    })
  },
  goScreen: ({ commit }, screen) => {
    commit ( 'updateScreen', screen )

    if (screen == animation.mainScreen) {
      setTimeout(() => {
        commit ( 'updateScreenActive', screen )
        console.log('update screen active')
      }, 500)
    } else {
      commit ( 'updateScreenActive', screen )
    }
  }
}
