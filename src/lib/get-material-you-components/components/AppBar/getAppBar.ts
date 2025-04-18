import { Theme } from '@mui/material'

import { MaterialYouAppBar } from './types'

export const getAppBar = ({ palette }: Theme): MaterialYouAppBar => {
  return {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: 'default',
      },
      styleOverrides: {
        colorDefault: {
          background: palette.surfaceContainer.main,
          color: palette.onSurface.main,
        },
        colorPrimary: {
          background: palette.surface.main,
          color: palette.onSurface.main,
        },
      },
    },
  }
}
