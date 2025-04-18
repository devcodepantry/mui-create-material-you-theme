import { Theme } from '@mui/material'

import { MaterialYouDrawer } from './types'

export const getDrawer = ({ palette }: Theme): MaterialYouDrawer => {
  return {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: '0px',
          background: palette.surfaceContainer.main,
          color: palette.onSurfaceVariant.main,
        },
      },
    },
  }
}
