import {
  argbFromHex,
  CustomColor,
  customColor,
  hexFromArgb,
} from '@material/material-color-utilities'
import { PaletteMode } from '@mui/material'

type ColorGroupHex = {
  color: string
  onColor: string
  colorContainer: string
  onColorContainer: string
}

export const getTokens = (mode: PaletteMode, name: string, colorHex: string): ColorGroupHex => {
  const customColorObject: CustomColor = {
    name,
    value: argbFromHex(colorHex),
    blend: false,
  }
  const tokens = customColor(argbFromHex('#000000'), customColorObject)[mode]

  const tokensHex = Object.entries(tokens).reduce(
    (res, [key, value]) => ({ ...res, [key]: hexFromArgb(value) }),
    {} as ColorGroupHex,
  )

  return tokensHex
}
