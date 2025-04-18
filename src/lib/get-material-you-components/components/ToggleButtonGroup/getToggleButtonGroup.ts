import { Theme } from '@mui/material'

import { getStateLayerColor, StateLayer } from '../../utils'
import { MaterialYouToggleButtonGroup } from './types'

export const getToggleButtonGroup = ({ palette }: Theme): MaterialYouToggleButtonGroup => {
  return {
    MuiToggleButtonGroup: {
      styleOverrides: {
        grouped: {
          borderRadius: '50px',
          borderColor: palette.outline.main,
          '&:not(:first-of-type)': {
            marginLeft: 0,
            borderLeft: 0,
          },
          '&:hover': {
            background: getStateLayerColor(
              StateLayer.Hover,
              palette.surface.main,
              palette.primary.main,
            ),
          },
          '&.Mui-selected:hover': {
            background: getStateLayerColor(
              StateLayer.Hover,
              palette.secondaryContainer.main,
              palette.onSecondaryContainer.main,
            ),
          },
        },
      },
    },
  }
}
