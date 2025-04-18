import { ButtonProps, ComponentsVariants } from '@mui/material'

import { getStateLayerColor, StateLayer } from '../../../utils'

/**
 * Styles for text Button
 */
export const getButtonTextVariant = (
  colorName: ButtonProps['color'],
  variantColor: string,
  surfaceColor: string,
): NonNullable<ComponentsVariants['MuiButton']>[number] => ({
  props: { variant: 'text', color: colorName },
  style: {
    color: variantColor,
    '&:hover': {
      backgroundColor: getStateLayerColor(StateLayer.Hover, surfaceColor, variantColor),
    },
    '&:focus': {
      backgroundColor: getStateLayerColor(StateLayer.Focus, surfaceColor, variantColor),
    },
    '&:active': {
      backgroundColor: getStateLayerColor(StateLayer.Press, surfaceColor, variantColor),
    },
  },
})
