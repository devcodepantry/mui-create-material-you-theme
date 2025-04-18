import { PaletteMode, PaletteOptions } from '@mui/material'

import { MaterialYouScheme } from '../types'

/**
 * Map Material You colors to MUI2 palette (and extend it)
 */
export const getMaterialYouPalette = (
  mode: PaletteMode,
  scheme: MaterialYouScheme,
): PaletteOptions => {
  const {
    primary,
    onPrimary,
    primaryContainer,
    onPrimaryContainer,

    secondary,
    onSecondary,
    secondaryContainer,
    onSecondaryContainer,

    tertiary,
    onTertiary,
    tertiaryContainer,
    onTertiaryContainer,

    error,
    onError,
    errorContainer,
    onErrorContainer,

    background,
    onBackground,

    surface,
    onSurface,

    surfaceVariant,
    onSurfaceVariant,

    outline,
    outlineVariant,

    shadow,
    scrim,

    inverseSurface,
    inverseOnSurface,
    inversePrimary,

    primaryFixed,
    onPrimaryFixed,
    primaryFixedDim,
    onPrimaryFixedVariant,
    secondaryFixed,
    onSecondaryFixed,
    secondaryFixedDim,
    onSecondaryFixedVariant,
    tertiaryFixed,
    onTertiaryFixed,
    tertiaryFixedDim,
    onTertiaryFixedVariant,

    surfaceTint,
    surfaceDim,
    surfaceBright,
    surfaceContainerLowest,
    surfaceContainerLow,
    surfaceContainer,
    surfaceContainerHigh,
    surfaceContainerHighest,

    info,
    onInfo,
    infoContainer,
    onInfoContainer,

    success,
    onSuccess,
    successContainer,
    onSuccessContainer,

    warning,
    onWarning,
    warningContainer,
    onWarningContainer,
  } = scheme

  return {
    mode,
    primary: {
      main: primary,
      contrastText: onPrimary,
    },
    onPrimary: {
      main: onPrimary,
      contrastText: primary,
    },
    primaryContainer: {
      main: primaryContainer,
      contrastText: onPrimaryContainer,
    },
    onPrimaryContainer: {
      main: onPrimaryContainer,
      contrastText: primaryContainer,
    },

    secondary: {
      main: secondary,
      contrastText: onSecondary,
    },
    onSecondary: {
      main: onSecondary,
      contrastText: secondary,
    },
    secondaryContainer: {
      main: secondaryContainer,
      contrastText: onSecondaryContainer,
    },
    onSecondaryContainer: {
      main: onSecondaryContainer,
      contrastText: secondaryContainer,
    },

    tertiary: {
      main: tertiary,
      contrastText: onTertiary,
    },
    onTertiary: {
      main: onTertiary,
      contrastText: tertiary,
    },
    tertiaryContainer: {
      main: tertiaryContainer,
      contrastText: onTertiaryContainer,
    },
    onTertiaryContainer: {
      main: onTertiaryContainer,
      contrastText: tertiaryContainer,
    },

    error: {
      main: error,
      contrastText: onError,
    },
    onError: {
      main: onError,
      contrastText: error,
    },
    errorContainer: {
      main: errorContainer,
      contrastText: onErrorContainer,
    },
    onErrorContainer: {
      main: onErrorContainer,
      contrastText: errorContainer,
    },

    primaryFixed: {
      main: primaryFixed,
    },
    primaryFixedDim: {
      main: primaryFixedDim,
    },
    onPrimaryFixed: {
      main: onPrimaryFixed,
    },
    onPrimaryFixedVariant: {
      main: onPrimaryFixedVariant,
    },

    secondaryFixed: {
      main: secondaryFixed,
    },
    secondaryFixedDim: {
      main: secondaryFixedDim,
    },
    onSecondaryFixed: {
      main: onSecondaryFixed,
    },
    onSecondaryFixedVariant: {
      main: onSecondaryFixedVariant,
    },

    tertiaryFixed: {
      main: tertiaryFixed,
    },
    tertiaryFixedDim: {
      main: tertiaryFixedDim,
    },
    onTertiaryFixed: {
      main: onTertiaryFixed,
    },
    onTertiaryFixedVariant: {
      main: onTertiaryFixedVariant,
    },

    surface: {
      main: surface,
      contrastText: onSurface,
    },
    onSurface: {
      main: onSurface,
      contrastText: surface,
    },

    surfaceDim: {
      main: surfaceDim,
    },
    surfaceBright: {
      main: surfaceBright,
    },

    surfaceContainerLowest: {
      main: surfaceContainerLowest,
    },
    surfaceContainerLow: {
      main: surfaceContainerLow,
    },
    surfaceContainer: {
      main: surfaceContainer,
    },
    surfaceContainerHigh: {
      main: surfaceContainerHigh,
    },
    surfaceContainerHighest: {
      main: surfaceContainerHighest,
    },

    surfaceVariant: {
      main: surfaceVariant,
      contrastText: onSurfaceVariant,
    },
    onSurfaceVariant: {
      main: onSurfaceVariant,
      contrastText: surfaceVariant,
    },

    outline: {
      main: outline,
    },
    outlineVariant: {
      main: outlineVariant,
    },

    inversePrimary: {
      main: inversePrimary,
    },
    inverseSurface: {
      main: inverseSurface,
      contrastText: inverseSurface,
    },
    inverseOnSurface: {
      main: inverseOnSurface,
      contrastText: inverseSurface,
    },

    shadow: {
      main: shadow,
    },
    scrim: {
      main: scrim,
    },

    surfaceTint: {
      main: surfaceTint,
    },

    background: {
      default: surfaceContainer,
      paper: surface,
    },
    onBackground: {
      main: onSurface,
    },
    common: {
      white: background,
      black: onBackground,
    },
    text: {
      primary: onSurface,
      secondary: onSecondaryContainer,
    },

    info: {
      main: info,
      contrastText: onInfo,
    },
    onInfo: {
      main: onInfo,
      contrastText: info,
    },
    infoContainer: {
      main: infoContainer,
      contrastText: onInfoContainer,
    },
    onInfoContainer: {
      main: onInfoContainer,
      contrastText: infoContainer,
    },

    success: {
      main: success,
      contrastText: onSuccess,
    },
    onSuccess: {
      main: onSuccess,
      contrastText: success,
    },
    successContainer: {
      main: successContainer,
      contrastText: onSuccessContainer,
    },
    onSuccessContainer: {
      main: onSuccessContainer,
      contrastText: successContainer,
    },

    warning: {
      main: warning,
      contrastText: onWarning,
    },
    onWarning: {
      main: onWarning,
      contrastText: warning,
    },
    warningContainer: {
      main: warningContainer,
      contrastText: onWarningContainer,
    },
    onWarningContainer: {
      main: onWarningContainer,
      contrastText: warningContainer,
    },

    divider: outline,
  }
}
