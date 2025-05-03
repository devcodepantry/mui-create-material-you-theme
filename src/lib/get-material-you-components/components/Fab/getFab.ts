import { FabProps, Theme } from '@mui/material'

import { MaterialYouFab } from './types'
import { getFabColorVariant } from './utils'

export const getFab = ({ palette, shadows }: Theme): MaterialYouFab => {
  const COLOR_VARIANTS_CONFIG: [FabProps['color'], string, string][] = [
    ['primary', palette.primaryContainer.main, palette.onPrimaryContainer.main],
    ['secondary', palette.secondaryContainer.main, palette.onSecondaryContainer.main],
    ['tertiary', palette.tertiaryContainer.main, palette.onTertiaryContainer.main],
    ['surface', palette.surfaceContainer.main, palette.primary.main],
  ]
  const colorVariants = COLOR_VARIANTS_CONFIG.map((variantConfig) =>
    getFabColorVariant(...variantConfig),
  )
  return {
    MuiFab: {
      defaultProps: { color: 'secondary' },
      styleOverrides: {
        root: {
          boxShadow: shadows[3],
          borderRadius: '18px',

          '&:hover': {
            boxShadow: shadows[4],
          },
          '&:focus': {
            boxShadow: shadows[3],
          },
          '&:active': {
            boxShadow: shadows[3],
          },
        },
      },
      variants: [...colorVariants],
    },
  }
}
