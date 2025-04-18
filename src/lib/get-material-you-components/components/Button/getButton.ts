import { alpha, ButtonProps, Theme } from '@mui/material'

import { MaterialYouButton } from './types'
import {
  getButtonBackgroundVariant,
  getButtonOutlinedVariant,
  getButtonSizeVariants,
  getButtonTextVariant,
} from './utils'

export const getButton = ({ palette, shadows }: Theme): MaterialYouButton => {
  const FILLED_VARIANTS_CONFIG: [ButtonProps['color'], string, string][] = [
    ['primary', palette.primary.main, palette.onPrimary.main],
    ['secondary', palette.secondary.main, palette.onSecondary.main],
    ['tertiary', palette.tertiary.main, palette.onTertiary.main],
    ['error', palette.error.main, palette.onError.main],
    ['info', palette.info.main, palette.onInfo.main],
    ['success', palette.success.main, palette.onSuccess.main],
    ['warning', palette.warning.main, palette.onWarning.main],
  ]
  const filledVariants = FILLED_VARIANTS_CONFIG.map((variantConfig) =>
    getButtonBackgroundVariant('filled', ...variantConfig),
  )
  const filledSizeVariants = getButtonSizeVariants('filled')

  const TONAL_VARIANTS_CONFIG: [ButtonProps['color'], string, string][] = [
    ['primary', palette.primaryContainer.main, palette.onPrimaryContainer.main],
    ['secondary', palette.secondaryContainer.main, palette.onSecondaryContainer.main],
    ['tertiary', palette.tertiaryContainer.main, palette.onTertiaryContainer.main],
    ['error', palette.errorContainer.main, palette.onErrorContainer.main],
    ['info', palette.infoContainer.main, palette.onInfoContainer.main],
    ['success', palette.successContainer.main, palette.onSuccessContainer.main],
    ['warning', palette.warningContainer.main, palette.onWarningContainer.main],
  ]
  const tonalVariants = TONAL_VARIANTS_CONFIG.map((variantConfig) =>
    getButtonBackgroundVariant('tonal', ...variantConfig),
  )
  const tonalSizeVariants = getButtonSizeVariants('tonal')

  const OUTLINED_VARIANTS_CONFIG: [ButtonProps['color'], string, string, string][] = [
    ['primary', palette.primary.main, palette.surface.main, palette.outline.main],
    ['secondary', palette.secondary.main, palette.surface.main, palette.outline.main],
    ['tertiary', palette.tertiary.main, palette.surface.main, palette.outline.main],
    ['error', palette.error.main, palette.surface.main, palette.outline.main],
    ['info', palette.info.main, palette.surface.main, palette.outline.main],
    ['success', palette.success.main, palette.surface.main, palette.outline.main],
    ['warning', palette.warning.main, palette.surface.main, palette.outline.main],
  ]
  const outlinedVariants = OUTLINED_VARIANTS_CONFIG.map((variantConfig) =>
    getButtonOutlinedVariant(...variantConfig),
  )

  const ELEVATED_VARIANTS_CONFIG: [ButtonProps['color'], string, string][] = [
    ['primary', palette.surfaceContainerLow.main, palette.primary.main],
    ['secondary', palette.surfaceContainerLow.main, palette.secondary.main],
    ['tertiary', palette.surfaceContainerLow.main, palette.tertiary.main],
    ['error', palette.surfaceContainerLow.main, palette.error.main],
    ['info', palette.surfaceContainerLow.main, palette.info.main],
    ['success', palette.surfaceContainerLow.main, palette.success.main],
    ['warning', palette.surfaceContainerLow.main, palette.warning.main],
  ]
  const elevatedVariants = ELEVATED_VARIANTS_CONFIG.map((variantConfig) =>
    getButtonBackgroundVariant('elevated', ...variantConfig),
  )
  const elevatedSizeVariants = getButtonSizeVariants('elevated')

  const TEXT_VARIANTS_CONFIG: [ButtonProps['color'], string, string][] = [
    ['primary', palette.primary.main, palette.surface.main],
    ['secondary', palette.secondary.main, palette.surface.main],
    ['tertiary', palette.tertiary.main, palette.surface.main],
    ['error', palette.error.main, palette.surface.main],
    ['info', palette.info.main, palette.surface.main],
    ['success', palette.success.main, palette.surface.main],
    ['warning', palette.warning.main, palette.surface.main],
  ]
  const textVariants = TEXT_VARIANTS_CONFIG.map((variantConfig) =>
    getButtonTextVariant(...variantConfig),
  )

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          textTransform: 'none',
          //   fontWeight: 'bold',
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
            borderWidth: '1px',
            boxShadow: shadows[0],
            '&.Mui-disabled': {
              borderColor: alpha(palette.onSurface.main, 0.12),
              color: alpha(palette.onSurface.main, 0.38),
            },
          },
        },
        ...outlinedVariants,

        {
          props: { variant: 'elevated' },
          style: {
            boxShadow: shadows[1],
            backgroundColor: palette.surfaceContainerLow.main,
            '&.Mui-disabled': {
              backgroundColor: alpha(palette.onSurface.main, 0.12),
              color: alpha(palette.onSurface.main, 0.38),
              boxShadow: shadows[0],
            },
          },
        },
        ...elevatedVariants,
        ...elevatedSizeVariants,

        {
          props: { variant: 'text' },
          style: {
            backgroundColor: 'transparent',
            boxShadow: shadows[0],
            padding: '5px 15px',
            '&.Mui-disabled': {
              color: alpha(palette.onSurface.main, 0.38),
            },
          },
        },
        ...textVariants,
      ],
    },
  }
}
