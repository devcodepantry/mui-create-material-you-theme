import { ButtonProps, ComponentsVariants } from '@mui/material'

import { getStateLayerColor, StateLayer } from '../../../utils'

/**
 * Styles for Button with color background (filled, tonal)
 */
export const getButtonBackgroundVariant = (
  variantName: ButtonProps['variant'],
  colorName: ButtonProps['color'],
  variantColor: string,
  onVariantColor: string,
): NonNullable<ComponentsVariants['MuiButton']>[number] => ({
  props: { variant: variantName, color: colorName },
  style: {
    backgroundColor: variantColor,
    color: onVariantColor,
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
})
