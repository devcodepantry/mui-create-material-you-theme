/* eslint-disable @typescript-eslint/no-empty-object-type */
import { PaletteColor, PaletteColorOptions } from '@mui/material'

declare module '@mui/material/styles/createPalette' {
  interface MaterialYouPalette {
    // primary: PaletteColor
    onPrimary: PaletteColor
    primaryContainer: PaletteColor
    onPrimaryContainer: PaletteColor

    // secondary: PaletteColor
    onSecondary: PaletteColor
    secondaryContainer: PaletteColor
    onSecondaryContainer: PaletteColor

    tertiary: PaletteColor
    onTertiary: PaletteColor
    tertiaryContainer: PaletteColor
    onTertiaryContainer: PaletteColor

    // error: PaletteColor
    onError: PaletteColor
    errorContainer: PaletteColor
    onErrorContainer: PaletteColor

    // background: PaletteColor
    onBackground: PaletteColor

    surface: PaletteColor
    onSurface: PaletteColor

    surfaceVariant: PaletteColor
    onSurfaceVariant: PaletteColor

    outline: PaletteColor
    outlineVariant: PaletteColor

    shadow: PaletteColor
    scrim: PaletteColor

    inverseSurface: PaletteColor
    inverseOnSurface: PaletteColor
    inversePrimary: PaletteColor

    primaryFixed: PaletteColor
    onPrimaryFixed: PaletteColor
    primaryFixedDim: PaletteColor
    onPrimaryFixedVariant: PaletteColor

    secondaryFixed: PaletteColor
    onSecondaryFixed: PaletteColor
    secondaryFixedDim: PaletteColor
    onSecondaryFixedVariant: PaletteColor

    tertiaryFixed: PaletteColor
    onTertiaryFixed: PaletteColor
    tertiaryFixedDim: PaletteColor
    onTertiaryFixedVariant: PaletteColor

    surfaceTint: PaletteColor
    surfaceDim: PaletteColor
    surfaceBright: PaletteColor
    surfaceContainerLowest: PaletteColor
    surfaceContainerLow: PaletteColor
    surfaceContainer: PaletteColor
    surfaceContainerHigh: PaletteColor
    surfaceContainerHighest: PaletteColor

    //info: PaletteColor;
    onInfo: PaletteColor
    infoContainer: PaletteColor
    onInfoContainer: PaletteColor

    //success: PaletteColor;
    onSuccess: PaletteColor
    successContainer: PaletteColor
    onSuccessContainer: PaletteColor

    //warning: PaletteColor;
    onWarning: PaletteColor
    warningContainer: PaletteColor
    onWarningContainer: PaletteColor
  }

  interface MaterialYouPaletteOptions
    extends Record<keyof MaterialYouPalette, PaletteColorOptions> {}

  interface Palette extends MaterialYouPalette {}

  interface PaletteOptions extends MaterialYouPaletteOptions {}
}
