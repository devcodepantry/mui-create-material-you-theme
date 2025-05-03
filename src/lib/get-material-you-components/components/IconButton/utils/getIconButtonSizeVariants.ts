import { ComponentsVariants, IconButtonProps } from '@mui/material'

/**
 * Adding new variant of IconButton also requires defining styles for `size` prop
 */
export const getIconButtonSizeVariants = (
  variantName: IconButtonProps['variant'],
): NonNullable<ComponentsVariants['MuiIconButton']>[number][] => [
  {
    props: { variant: variantName, size: 'small' },
    style: {
      padding: '4px 10px',
      fontSize: '0.8125rem',
      minHeight: '32px',
    },
  },
  {
    props: { variant: variantName, size: 'medium' },
    style: {
      padding: '6px 16px',
      fontSize: '0.875rem',
      minHeight: '36px',
    },
  },
  {
    props: { variant: variantName, size: 'large' },
    style: {
      padding: '8px 22px',
      fontSize: '0.9375rem',
      minHeight: '40px',
    },
  },
]
