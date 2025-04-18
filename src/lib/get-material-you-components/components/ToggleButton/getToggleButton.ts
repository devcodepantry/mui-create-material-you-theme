import { Theme } from '@mui/material'

import { MaterialYouToggleButton } from './types'

export const getToggleButton = ({ palette }: Theme): MaterialYouToggleButton => {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          color: palette.onSurface.main,
          '&.Mui-selected': {
            color: palette.onSecondaryContainer.main,
            backgroundColor: palette.secondaryContainer.main,
          },
          '&.MuiToggleButton-primary': {
            borderColor: 'transparent',
          },
          '&.MuiToggleButton-primary.Mui-selected': {
            color: palette.onPrimary.main,
            backgroundColor: palette.primary.main,
          },
          /*'&.MuiToggleButton-primary.Mui-selected:hover': {
                        background: getStateLayerColor(StateLayer.Hover, palette.primary.main, palette.onPrimary.main),
                    },
                    '&.Mui-selected:not(.MuiToggleButtonGroup-grouped):has(>svg)': {
                        color: palette.onPrimary.main,
                        backgroundColor: palette.primary.main
                    },*/

          /*'&:hover': {
                        background: getStateLayerColor(StateLayer.Hover, palette.surface.main, palette.primary.main),
                    },
                    '&.Mui-selected:hover': {
                        background: getStateLayerColor(StateLayer.Hover, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
                    },
                    '&:focus': {
                        background: getStateLayerColor(StateLayer.Focus, palette.surface.main, palette.onSurface.main),
                    },
                    '&.Mui-selected:focus': {
                        background: getStateLayerColor(StateLayer.Focus, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
                    },
                    '&:active': {
                        background: getStateLayerColor(StateLayer.Press, palette.surface.main, palette.onSurface.main),
                    },
                    '&.Mui-selected:active': {
                        background: getStateLayerColor(StateLayer.Press, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
                    }*/
        },
      },
    },
  }
}
