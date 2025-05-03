import { ComponentsVariants, IconButtonProps } from '@mui/material'

import { getStateLayerColor, StateLayer } from '../../../utils'

/**
 * Styles for IconButton with color background (filled, tonal)
 */
export const getIconButtonBackgroundVariant = (
  variantName: IconButtonProps['variant'],
  colorName: IconButtonProps['color'],
  variantColor: string,
  onVariantColor: string,
): NonNullable<ComponentsVariants['MuiIconButton']>[number] => ({
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
