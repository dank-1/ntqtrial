'use strict'

import axios from 'axios'

export let getNoteList = ( callBack ) => {
  let url = `${process.env.ROOT_API}/notes`;

  axios.get( url ).then(( response ) => {
    callBack ( response.data.data.noteList )
  });
}
