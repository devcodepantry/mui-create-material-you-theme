import { ComponentsVariants, ToggleButtonProps } from '@mui/material'

import { getStateLayerColor, StateLayer } from '../../../utils'

/**
 * Styles for color ToggleButton
 */
export const getToggleButtonColorVariant = (
  colorName: ToggleButtonProps['color'],
  variantColor: string,
  onVariantColor: string,
): NonNullable<ComponentsVariants['MuiToggleButton']>[number] => ({
  props: { color: colorName },
  style: {
    '&.Mui-selected': {
      color: onVariantColor,
      backgroundColor: variantColor,

      '&:hover': {
        backgroundColor: getStateLayerColor(StateLayer.Hover, variantColor, onVariantColor),
      },
      '&:focus': {
        backgroundColor: getStateLayerColor(StateLayer.Focus, variantColor, onVariantColor),
      },
      '&:active': {
        backgroundColor: getStateLayerColor(StateLayer.Press, variantColor, onVariantColor),
      },
    },
  },
})
