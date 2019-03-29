'use strict'

export default {
  mainScreen: 'home-feed',
  screens: [
    {
      name: 'note-list',
      position: 'right'
    },
    {
      name: 'curriculum-list',
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
      position: 'bottom'
    }
  ]
}
