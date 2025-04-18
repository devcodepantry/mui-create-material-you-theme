import { Theme } from '@mui/material'

import { MaterialYouTooltip } from './types'

export const getTooltip = ({ palette }: Theme): MaterialYouTooltip => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: palette.inverseSurface.main,
          color: palette.inverseOnSurface.main,
        },
      },
    },
  }
}
