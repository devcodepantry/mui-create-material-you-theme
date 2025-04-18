import { Theme } from '@mui/material'

import { MaterialYouListItem } from './types'

export const getListItem = (_theme: Theme): MaterialYouListItem => {
  return {
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 1,
          paddingBottom: 1,
          '& .MuiListItemButton-root': {
            paddingTop: 8,
            paddingBottom: 8,
          },
        },
      },
    },
  }
}
