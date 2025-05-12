import { Theme } from '@mui/material'

import { MaterialYouListItemIcon } from './types'

export const getListItemIcon = (_theme: Theme): MaterialYouListItemIcon => {
  return {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 32,
        },
      },
    },
  }
}
