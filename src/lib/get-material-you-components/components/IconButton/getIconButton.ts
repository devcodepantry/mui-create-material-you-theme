import { alpha, IconButtonProps, Theme } from '@mui/material'

import { MaterialYouIconButton } from './types'
import {
  getIconButtonBackgroundVariant,
  getIconButtonOutlinedVariant,
  getIconButtonSizeVariants,
} from './utils'

export const getIconButton = ({ palette, shadows }: Theme): MaterialYouIconButton => {
  const FILLED_VARIANTS_CONFIG: [IconButtonProps['color'], string, string][] = [
    ['primary', palette.primary.main, palette.onPrimary.main],
    ['secondary', palette.secondary.main, palette.onSecondary.main],
    ['tertiary', palette.tertiary.main, palette.onTertiary.main],
    ['error', palette.error.main, palette.onError.main],
    ['info', palette.info.main, palette.onInfo.main],
    ['success', palette.success.main, palette.onSuccess.main],
    ['warning', palette.warning.main, palette.onWarning.main],
  ]
  const filledVariants = FILLED_VARIANTS_CONFIG.map((variantConfig) =>
    getIconButtonBackgroundVariant('filled', ...variantConfig),
  )
  const filledSizeVariants = getIconButtonSizeVariants('filled')

  const TONAL_VARIANTS_CONFIG: [IconButtonProps['color'], string, string][] = [
    ['primary', palette.primaryContainer.main, palette.onPrimaryContainer.main],
    ['secondary', palette.secondaryContainer.main, palette.onSecondaryContainer.main],
    ['tertiary', palette.tertiaryContainer.main, palette.onTertiaryContainer.main],
    ['error', palette.errorContainer.main, palette.onErrorContainer.main],
    ['info', palette.infoContainer.main, palette.onInfoContainer.main],
    ['success', palette.successContainer.main, palette.onSuccessContainer.main],
    ['warning', palette.warningContainer.main, palette.onWarningContainer.main],
  ]
  const tonalVariants = TONAL_VARIANTS_CONFIG.map((variantConfig) =>
    getIconButtonBackgroundVariant('tonal', ...variantConfig),
  )
  const tonalSizeVariants = getIconButtonSizeVariants('tonal')

  const OUTLINED_VARIANTS_CONFIG: [IconButtonProps['color'], string, string, string][] = [
    ['primary', palette.primary.main, palette.surface.main, palette.outline.main],
    ['secondary', palette.secondary.main, palette.surface.main, palette.outline.main],
    ['tertiary', palette.tertiary.main, palette.surface.main, palette.outline.main],
    ['error', palette.error.main, palette.surface.main, palette.outline.main],
    ['info', palette.info.main, palette.surface.main, palette.outline.main],
    ['success', palette.success.main, palette.surface.main, palette.outline.main],
    ['warning', palette.warning.main, palette.surface.main, palette.outline.main],
  ]
  const outlinedVariants = OUTLINED_VARIANTS_CONFIG.map((variantConfig) =>
    getIconButtonOutlinedVariant(...variantConfig),
  )

  const outlinedSizeVariants = getIconButtonSizeVariants('outlined')

  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:has(>svg)': {
            padding: '8px',
            borderRadius: '50%',
            minWidth: '1em',
            minHeight: '1em',
          },
        },
      },
      variants: [
        {
          props: { variant: 'filled' },
          style: {
            boxShadow: shadows[0],
            '&.Mui-disabled': {
              backgroundColor: alpha(palette.onSurface.main, 0.12),
              color: alpha(palette.onSurface.main, 0.38),
              boxShadow: shadows[0],
            },
            '&:hover': {
              boxShadow: shadows[1],
            },
            '&:focus': {
              boxShadow: shadows[0],
            },
            '&:active': {
              boxShadow: shadows[0],
            },
          },
        },
        ...filledVariants,
        ...filledSizeVariants,

        {
          props: { variant: 'tonal' },
          style: {
            boxShadow: shadows[0],
            '&.Mui-disabled': {
              backgroundColor: alpha(palette.onSurface.main, 0.12),
              color: alpha(palette.onSurface.main, 0.38),
              boxShadow: shadows[0],
            },
            '&:hover': {
              boxShadow: shadows[1],
            },
            '&:focus': {
              boxShadow: shadows[0],
            },
            '&:active': {
              boxShadow: shadows[0],
            },
          },
        },
        ...tonalVariants,
        ...tonalSizeVariants,

        {
          props: { variant: 'outlined' },
          style: {
            //backgroundColor: palette.surface.main,
            borderColor: palette.outline.main,
            borderStyle: 'solid',
            borderWidth: '1px',
            boxShadow: shadows[0],
            '&.Mui-disabled': {
              borderColor: alpha(palette.onSurface.main, 0.12),
              color: alpha(palette.onSurface.main, 0.38),
            },
          },
        },
        ...outlinedVariants,
        ...outlinedSizeVariants,
      ],
    },
  }
}
