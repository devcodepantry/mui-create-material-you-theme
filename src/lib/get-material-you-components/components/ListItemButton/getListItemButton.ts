import { Theme } from '@mui/material'

import { getStateLayerColor, StateLayer } from '../../utils'
import { MaterialYouListItemButton } from './types'

export const getListItemButton = ({ palette }: Theme): MaterialYouListItemButton => {
  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          marginLeft: 8,
          marginRight: 8,
          borderRadius: 50,
          color: palette.onSurfaceVariant.main,
          '&:hover': {
            backgroundColor: getStateLayerColor(
              StateLayer.Hover,
              palette.surfaceContainerLow.main,
              palette.onSurface.main,
            ),
            color: getStateLayerColor(
              StateLayer.Hover,
              palette.onSurfaceVariant.main,
              palette.onSurface.main,
            ),
          },
          '&:active': {
            backgroundColor: getStateLayerColor(
              StateLayer.Press,
              palette.surfaceContainerLow.main,
              palette.onSecondaryContainer.main,
            ),
            color: getStateLayerColor(
              StateLayer.Press,
              palette.onSurfaceVariant.main,
              palette.onSurface.main,
            ),
          },
          '&.Mui-selected': {
            color: palette.onSecondaryContainer.main,
            background: palette.secondaryContainer.main,
            '&:hover': {
              backgroundColor: getStateLayerColor(
                StateLayer.Hover,
                palette.secondaryContainer.main,
                palette.onSecondaryContainer.main,
              ),
              color: getStateLayerColor(
                StateLayer.Hover,
                palette.onSecondaryContainer.main,
                palette.secondaryContainer.main,
              ),
            },
            '&:active': {
              backgroundColor: getStateLayerColor(
                StateLayer.Press,
                palette.secondaryContainer.main,
                palette.onSecondaryContainer.main,
              ),
              color: getStateLayerColor(
                StateLayer.Press,
                palette.onSecondaryContainer.main,
                palette.secondaryContainer.main,
              ),
            },
          },
        },
      },
    },
  }
}
