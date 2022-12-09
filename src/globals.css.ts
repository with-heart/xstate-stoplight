import {globalStyle} from '@vanilla-extract/css'

globalStyle('html, body', {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
})

globalStyle('html', {
  colorScheme: 'dark',
})

globalStyle('body', {
  color: 'white',
  background: 'black',
})

globalStyle('main', {
  width: '100vw',
  height: '100vh',
  display: 'grid',
  placeContent: 'center',
  placeItems: 'center',
})
