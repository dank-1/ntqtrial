'use strict'

export default {
  setNoteList: ( state, noteList ) => {
    state.noteList = [].concat( noteList )
  },
  updateScreen: ( state, screen ) => {
    state.currentScreen = screen
  },
  updateScreenActive: ( state, screen ) => {
    state.currentScreenActive = screen
  }
}
