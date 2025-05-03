import { Theme } from '@mui/material'

import { MaterialYouCssBaseline } from './types'

export const getCssBaseline = (_theme: Theme): MaterialYouCssBaseline => {
  return {
    MuiCssBaseline: {
      defaultProps: {
        enableColorScheme: true,
      },
    },
  }
}
