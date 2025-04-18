import { ButtonProps, ComponentsVariants } from '@mui/material'

import { getStateLayerColor, StateLayer } from '../../../utils'

/**
 * Styles for outlined Button
 */
export const getButtonOutlinedVariant = (
  colorName: ButtonProps['color'],
  variantColor: string,
  surfaceColor: string,
  outlineClor: string,
): NonNullable<ComponentsVariants['MuiButton']>[number] => ({
  props: { variant: 'outlined', color: colorName },
  style: {
    color: variantColor,
    '&:hover': {
      backgroundColor: getStateLayerColor(StateLayer.Hover, surfaceColor, variantColor),
      borderColor: getStateLayerColor(StateLayer.Hover, outlineClor, variantColor),
    },
    '&:focus': {
      backgroundColor: getStateLayerColor(StateLayer.Focus, surfaceColor, variantColor),
      borderColor: getStateLayerColor(StateLayer.Focus, variantColor, variantColor),
    },
    '&:active': {
      backgroundColor: getStateLayerColor(StateLayer.Press, surfaceColor, variantColor),
      borderColor: getStateLayerColor(StateLayer.Press, outlineClor, variantColor),
    },
  },
})
