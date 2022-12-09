import {style} from '@vanilla-extract/css'

export const stoplight = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  gap: '2vmin',
  padding: '3vmin',
  border: '1px solid hsl(40, 100%, 50%)',
  aspectRatio: '1 / 3',
})
