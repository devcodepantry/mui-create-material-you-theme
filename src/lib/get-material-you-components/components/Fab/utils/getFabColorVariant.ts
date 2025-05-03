import { ComponentsVariants, FabProps } from '@mui/material'

import { getStateLayerColor, StateLayer } from '../../../utils'

/**
 * Styles for color FAB
 */
export const getFabColorVariant = (
  colorName: FabProps['color'],
  variantColor: string,
  onVariantColor: string,
): NonNullable<ComponentsVariants['MuiFab']>[number] => ({
  props: { color: colorName },
  style: {
    backgroundColor: variantColor,
    color: onVariantColor,
    '&:hover': {
      background: getStateLayerColor(StateLayer.Hover, variantColor, onVariantColor),
    },
    '&:focus': {
      background: getStateLayerColor(StateLayer.Focus, variantColor, onVariantColor),
    },
    '&:active': {
      background: getStateLayerColor(StateLayer.Press, variantColor, onVariantColor),
    },
  },
})
