import { ButtonProps, ComponentsVariants } from '@mui/material'

/**
 * Adding new variant of Button also requires defining styles for `size` prop
 */
export const getButtonSizeVariants = (
  variantName: ButtonProps['variant'],
): NonNullable<ComponentsVariants['MuiButton']>[number][] => [
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
