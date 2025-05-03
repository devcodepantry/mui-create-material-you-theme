import { Edit } from '@mui/icons-material'
import { Button, ButtonProps, Stack, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

export interface PreviewButtonProps extends ButtonProps {
  label: string
  withIcon?: boolean
}

export const PreviewButton: React.FC<PreviewButtonProps> = ({ label, withIcon, ...props }) => {
  return (
    <Button startIcon={withIcon ? <Edit /> : undefined} {...props}>
      {label}
    </Button>
  )
}

const meta: Meta<typeof PreviewButton> = {
  title: 'Components/Button',
  component: PreviewButton,
  argTypes: {
    color: { table: { disable: true } },
    variant: { table: { disable: true } },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    withIcon: { control: 'boolean' },
    label: { table: { disable: true } },
  },
  parameters: {
    controls: { expanded: true },
  },
  includeStories: ['AllVariants'],
}

export default meta
type Story = StoryObj<typeof PreviewButton>

const colors: NonNullable<ButtonProps['color']>[] = [
  'primary',
  'secondary',
  'tertiary',
  'error',
  'info',
  'success',
  'warning',
]

const variants: NonNullable<ButtonProps['variant']>[] = [
  'filled',
  'tonal',
  'outlined',
  'elevated',
  'text',
]

export const AllVariants: Story = {
  args: {
    size: 'medium',
    disabled: false,
    withIcon: false,
  },
  render: (args) => (
    <Stack spacing={4}>
      {variants.map((variant) => (
        <div key={variant}>
          <Typography variant="h6" gutterBottom>
            {variant}
          </Typography>
          <Stack direction="row" spacing={2}>
            {colors.map((color) => (
              <PreviewButton
                key={`${color}-${variant}`}
                color={color}
                variant={variant}
                {...args}
                label={`${color}`}
              />
            ))}
          </Stack>
        </div>
      ))}
    </Stack>
  ),
}
