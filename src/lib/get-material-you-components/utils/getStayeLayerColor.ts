import { argbFromHex, Blend, hexFromArgb } from '@material/material-color-utilities'

export enum StateLayer {
  Hover = 0.08,
  Focus = 0.12,
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  Press = 0.12,
  Drag = 0.16,
}

export const getStateLayerColor = (
  state: StateLayer,
  containerColor: string,
  contentColor: string,
) => {
  return hexFromArgb(Blend.cam16Ucs(argbFromHex(containerColor), argbFromHex(contentColor), state))
}
