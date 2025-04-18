import { Theme } from '@mui/material'

import { MaterialYouMenu } from './types'

export const getMenu = ({ palette, shadows }: Theme): MaterialYouMenu => {
  return {
    MuiMenu: {
      defaultProps: { color: 'default' },
      styleOverrides: {
        root: {},
        paper: {
          backgroundColor: palette.surfaceContainerLow.main,
          boxShadow: shadows[3],
          color: palette.onSurface.main,
        },
      },
    },
  }
}
