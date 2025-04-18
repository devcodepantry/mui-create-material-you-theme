import { ComponentsVariants, SwitchProps } from '@mui/material'

/**
 * Styles for color Switch
 */
export const getSwitchColorVariant = (
  colorName: SwitchProps['color'],
  variantColor: string,
  onVariantColor: string,
): NonNullable<ComponentsVariants['MuiSwitch']>[number] => ({
  props: { color: colorName },
  style: {
    '& .MuiSwitch-switchBase': {
      '&.Mui-checked': {
        '& + .MuiSwitch-track': {
          backgroundColor: variantColor,
        },
        '& .MuiSwitch-thumb': {
          color: onVariantColor,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: variantColor,
        border: `6px solid ${onVariantColor}`,
      },
    },
  },
})
