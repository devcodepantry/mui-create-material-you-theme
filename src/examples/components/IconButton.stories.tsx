import { Delete } from '@mui/icons-material'
import { IconButton, IconButtonProps, Stack, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    color: { table: { disable: true } },
    variant: { table: { disable: true } },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
  },
  parameters: {
    controls: { expanded: true },
  },
  includeStories: ['AllVariants'],
}

export default meta
type Story = StoryObj<typeof IconButton>

const colors: NonNullable<IconButtonProps['color']>[] = [
  'primary',
  'secondary',
  'tertiary',
  'error',
  'info',
  'success',
  'warning',
]

const variants: NonNullable<IconButtonProps['variant']>[] = [
  'standard',
  'filled',
  'tonal',
  'outlined',
]

export const AllVariants: Story = {
  args: {
    size: 'medium',
    disabled: false,
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
              <IconButton key={`${color}-${variant}`} color={color} variant={variant} {...args}>
                <Delete fontSize={args.size} />
              </IconButton>
            ))}
          </Stack>
        </div>
      ))}
    </Stack>
  ),
}
