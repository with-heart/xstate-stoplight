import {createVar, fallbackVar, style} from '@vanilla-extract/css'
import {recipe} from '@vanilla-extract/recipes'

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
  },
})

export const aspect = recipe({
  base: [base, glowing],

  variants: {
    color: {
      red: {
        vars: {
          [color]: 'hsl(0, 20%, 20%)',
          [colorActive]: 'hsl(0, 61%, 50%)',
        },
      },
      amber: {
        vars: {
          [color]: 'hsl(45, 20%, 20%)',
          [colorActive]: 'hsl(45, 83%, 50%)',
        },
      },
      green: {
        vars: {
          [color]: 'hsl(124, 20%, 20%)',
          [colorActive]: 'hsl(124, 63%, 50%)',
        },
      },
      neutral: {
        vars: {
          [color]: '#666',
          [colorActive]: '#ccc',
        },
      },
    },
    active: {
      false: {
        vars: {
          [background]: color,
        },
      },
      true: {
        vars: {
          [background]: colorActive,
        },
        selectors: {
          '&::before': {
            content: '',
          },
        },
      },
    },
  },

  defaultVariants: {
    color: 'neutral',
  },
})
