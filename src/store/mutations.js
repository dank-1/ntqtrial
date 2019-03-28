'use strict'

export default {
  setNoteList: ( state, noteList ) => {
    state.noteList = [].concat( noteList );
  }
}
