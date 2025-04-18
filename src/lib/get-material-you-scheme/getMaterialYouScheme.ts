import { PaletteMode } from '@mui/material'

import { DEFAULT_MISSING_COLORS } from '../config'
import { MaterialYouMissingColors, MaterialYouScheme, MaterialYouSchemeExported } from '../types'
import { getTokens } from './utils'

/**
 * Create design tokens for backward compatibility with MUI2
 * and merge it to exported scheme
 */
export const getMaterialYouScheme = (
  mode: PaletteMode,
  exportedScheme: MaterialYouSchemeExported,
  { info, success, warning }: MaterialYouMissingColors = DEFAULT_MISSING_COLORS,
): MaterialYouScheme => {
  const infoTokens = getTokens(mode, 'info', info)
  const successTokens = getTokens(mode, 'success', success)
  const warningTokens = getTokens(mode, 'warning', warning)

  return {
    ...exportedScheme,
    info: infoTokens.color,
    onInfo: infoTokens.onColor,
    infoContainer: infoTokens.colorContainer,
    onInfoContainer: infoTokens.onColorContainer,
    success: successTokens.color,
    onSuccess: successTokens.onColor,
    successContainer: successTokens.colorContainer,
    onSuccessContainer: successTokens.onColorContainer,
    warning: warningTokens.color,
    onWarning: warningTokens.onColor,
    warningContainer: warningTokens.colorContainer,
    onWarningContainer: warningTokens.onColorContainer,
  }
}
