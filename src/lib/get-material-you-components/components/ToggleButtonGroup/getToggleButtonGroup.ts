import { Theme } from '@mui/material'

import { MaterialYouToggleButtonGroup } from './types'

export const getToggleButtonGroup = ({ palette }: Theme): MaterialYouToggleButtonGroup => {
  return {
    MuiToggleButtonGroup: {
      styleOverrides: {
        grouped: {
          borderColor: palette.outline.main,
        },
      },
    },
  }
}
