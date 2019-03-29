'use strict'

export default {
  mainScreen: 'home-feed',
  screens: [
    {
      name: 'note-list',
      position: 'right'
    }
  ],
  floatScreens: [
    {
      name: 'note-create',
      position: 'right',
      open: 'left',
      close: 'right'
    },
    {
      name: 'live',
      position: 'bottom',
      open: 'top',
      close: 'bottom'
    }
  ]
}
