import { createTheme, PaletteMode, ThemeOptions } from '@mui/material'

import { DEFAULT_MATERIAL_YOU_EXPORTED_THEME } from './config'
import { getMaterialYouComponents } from './get-material-you-components'
import { getMaterialYouPalette } from './get-material-you-palette'
import { getMaterialYouScheme } from './get-material-you-scheme'
import { MaterialYouMissingColors, MaterialYouSchemeExported } from './types'

/**
 * Replace `createTheme` with this function in your code
 */
export const createMaterialYouTheme = (
  mode: PaletteMode,
  exportedScheme: MaterialYouSchemeExported = DEFAULT_MATERIAL_YOU_EXPORTED_THEME.schemes[mode],
  themeOptions?: ThemeOptions,
  missingColors?: MaterialYouMissingColors,
) => {
  // `scheme` contains all colors which are needed to create MUI2 palette
  const scheme = getMaterialYouScheme(mode, exportedScheme, missingColors)

  // `palette` contains colors mapped to MUI2 palette
  const palette = getMaterialYouPalette(mode, scheme)

  // `theme` merges your `themeOptions` and Material You palette
  const theme = createTheme({ ...themeOptions, palette })

  const components = getMaterialYouComponents(theme)

  // `themeWithComponent` merges `theme` and Material You components styles
  const themeWithComponents = createTheme(theme, { components })

  return themeWithComponents
}
