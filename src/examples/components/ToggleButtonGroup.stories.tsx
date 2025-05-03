import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
  Typography,
} from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

export const PreviewToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({ ...props }) => {
  const [alignment, setAlignment] = useState('web')

  const handleChange = (_event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment)
  }

  return (
    <ToggleButtonGroup exclusive value={alignment} onChange={handleChange} {...props}>
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton>
    </ToggleButtonGroup>
  )
}

const meta: Meta<typeof PreviewToggleButtonGroup> = {
  title: 'Components/ToggleButtonGroup',
  component: PreviewToggleButtonGroup,
  argTypes: {
    color: { table: { disable: true } },
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
type Story = StoryObj<typeof PreviewToggleButtonGroup>

const colors: NonNullable<ToggleButtonGroupProps['color']>[] = [
  'standard',
  'primary',
  'secondary',
  'tertiary',
  'error',
  'info',
  'success',
  'warning',
]

export const AllVariants: Story = {
  args: {
    size: 'medium',
    disabled: false,
  },
  render: (args) => (
    <Stack spacing={4}>
      {colors.map((color) => (
        <div key={color}>
          <Typography variant="h6" gutterBottom>
            {color}
          </Typography>
          <PreviewToggleButtonGroup color={color} {...args} />
        </div>
      ))}
    </Stack>
  ),
}
