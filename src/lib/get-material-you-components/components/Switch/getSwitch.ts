import { alpha, SwitchProps, Theme } from '@mui/material'

import { MaterialYouSwitch } from './types'
import { getSwitchColorVariant } from './utils'

export const getSwitch = ({ palette }: Theme): MaterialYouSwitch => {
  const COLOR_VARIANTS_CONFIG: [SwitchProps['color'], string, string][] = [
    ['primary', palette.primary.main, palette.onPrimary.main],
    ['secondary', palette.secondary.main, palette.onSecondary.main],
    ['error', palette.error.main, palette.onError.main],
    ['info', palette.info.main, palette.onInfo.main],
    ['success', palette.success.main, palette.onSuccess.main],
    ['warning', palette.warning.main, palette.onWarning.main],
    ['default', palette.primary.main, palette.onPrimary.main],
  ]
  const colorVariants = COLOR_VARIANTS_CONFIG.map((variantConfig) =>
    getSwitchColorVariant(...variantConfig),
  )

  return {
    MuiSwitch: {
      variants: [...colorVariants],
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          marginLeft: 12,
          marginRight: 8,
          borderColor: palette.outline.main,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 7,
            transitionDuration: '100ms',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              margin: 4,
              '& + .MuiSwitch-track': {
                opacity: 1,
                border: 0,
              },
              '& .MuiSwitch-thumb': {
                width: 18,
                height: 18,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                backgroundColor: alpha(palette.onSurface.main, 0.1),
              },
              '&.Mui-disabled .MuiSwitch-thumb': {
                color: alpha(palette.surface.main, 0.8),
              },
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color: alpha(palette.onSurface.main, 0.3),
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            color: palette.outline.main,
            width: 12,
            height: 12,
            '&:before': {
              content: "''",
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            },
          },
          '& .MuiSwitch-track': {
            borderRadius: 20,
            border: `2px solid ${palette.outline.main}`,
            backgroundColor: palette.surfaceContainerHighest.main,

            opacity: 1,
            transition: 'background .2s',
          },
        },
      },
    },
  }
}
