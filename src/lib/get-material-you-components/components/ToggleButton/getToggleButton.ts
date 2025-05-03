import { alpha, Theme, ToggleButtonProps } from '@mui/material'

import { getStateLayerColor, StateLayer } from '../../utils'
import { MaterialYouToggleButton } from './types'
import { getToggleButtonColorVariant } from './utils'

export const getToggleButton = ({ palette }: Theme): MaterialYouToggleButton => {
  const COLOR_VARIANTS_CONFIG: [ToggleButtonProps['color'], string, string][] = [
    ['standard', palette.surfaceContainerHighest.main, palette.onSurface.main],
    ['primary', palette.primaryContainer.main, palette.onPrimaryContainer.main],
    ['secondary', palette.secondaryContainer.main, palette.onSecondaryContainer.main],
    ['error', palette.errorContainer.main, palette.onErrorContainer.main],
    ['info', palette.infoContainer.main, palette.onInfoContainer.main],
    ['success', palette.successContainer.main, palette.onSuccessContainer.main],
    ['warning', palette.warningContainer.main, palette.onWarningContainer.main],
  ]
  const colorVariants = COLOR_VARIANTS_CONFIG.map((variantConfig) =>
    getToggleButtonColorVariant(...variantConfig),
  )

  return {
    MuiToggleButton: {
      variants: [...colorVariants],
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          color: palette.onSurface.main,
          paddingLeft: 32,
          paddingRight: 32,

          '&:hover': {
            backgroundColor: getStateLayerColor(
              StateLayer.Hover,
              palette.surfaceContainerLow.main,
              palette.onSurface.main,
            ),
          },
          '&:focus': {
            backgroundColor: getStateLayerColor(
              StateLayer.Focus,
              palette.surfaceContainerLow.main,
              palette.onSurface.main,
            ),
          },
          '&:active': {
            backgroundColor: getStateLayerColor(
              StateLayer.Press,
              palette.surfaceContainerLow.main,
              palette.onSurface.main,
            ),
          },
          '&.Mui-selected.Mui-disabled': {
            backgroundColor: alpha(palette.onSurface.main, 0.12),
            color: alpha(palette.onSurface.main, 0.38),
          },
        },
      },
    },
  }
}
