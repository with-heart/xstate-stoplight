import {createVar, fallbackVar, style} from '@vanilla-extract/css'

export const background = createVar()
export const color = createVar()
export const colorActive = createVar()

export const glowColor = createVar()
export const glowWhite = createVar()
export const glowShadowInnerWhite = createVar()
export const glowShadowOuterWhite = createVar()
export const glowShadowSmall = createVar()
export const glowShadowLarge = createVar()
export const glow = createVar()

const glowing = style({
  vars: {
    [glowColor]: colorActive,
    [glowWhite]: '#ffffffcc',
    [glowShadowInnerWhite]: `0 0 10vmin 10vmin ${glowWhite}`,
    [glowShadowOuterWhite]: `0 0 10vmin ${glowColor}`,
    [glowShadowSmall]: `0 0 8vmin 1vmin ${glowColor}`,
    [glowShadowLarge]: `0 0 16vmin 6vmin ${glowColor}`,
    [glow]: `
      inset ${glowShadowInnerWhite},
      inset ${glowShadowSmall},
      inset ${glowShadowLarge},
      ${glowShadowOuterWhite},
      ${glowShadowSmall},
      ${glowShadowLarge}
    `,
  },
  selectors: {
    '&::before': {
      boxShadow: glow,
      filter: 'blur(1px)',
    },
  },
})

const base = style({
  vars: {
    [background]: fallbackVar(color, '#666'),
  },
  width: '30vmin',
  height: '30vmin',
  background: `radial-gradient(transparent, #000000cc), ${background}`,
  borderRadius: '50%',
  position: 'relative',
  selectors: {
    '&::before': {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      boxShadow: glow,
      filter: 'blur(1px)',
      zIndex: 1,
    },
    '&[data-active="true"]': {
      vars: {
        [background]: fallbackVar(colorActive, '#ccc'),
      },
    },
    '&[data-active="true"]::before': {
      content: '',
    },
    '&[data-aspect="red"]': {
      vars: {
        [color]: 'hsl(0, 20%, 20%)',
        [colorActive]: 'hsl(0, 61%, 50%)',
      },
    },
    '&[data-aspect="amber"]': {
      vars: {
        [color]: 'hsl(45, 20%, 20%)',
        [colorActive]: 'hsl(45, 83%, 50%)',
      },
    },
    '&[data-aspect="green"]': {
      vars: {
        [color]: 'hsl(124, 20%, 20%)',
        [colorActive]: 'hsl(124, 63%, 50%)',
      },
    },
  },
})

export const aspect = style([base, glowing])
