import { Edit } from '@mui/icons-material'
import { Fab, FabProps, Stack, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

export interface PreviewFabProps extends FabProps {
  label: string
}

export const PreviewFab: React.FC<PreviewFabProps> = ({ label, ...props }) => {
  return (
    <Fab {...props}>
      <Edit />
    </Fab>
  )
}
export const PreviewFabExtended: React.FC<PreviewFabProps> = ({ label, ...props }) => {
  return (
    <Fab variant="extended" {...props}>
      <Edit sx={{ mr: 1 }} /> {label}
    </Fab>
  )
}

const meta: Meta<typeof PreviewFab> = {
  title: 'Components/Fab',
  component: PreviewFab,
  argTypes: {
    color: { table: { disable: true } },
    variant: { table: { disable: true } },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    label: { table: { disable: true } },
  },
  parameters: {
    controls: { expanded: true },
  },
  includeStories: ['AllVariants'],
}

export default meta
type Story = StoryObj<typeof PreviewFab>

const colors: NonNullable<FabProps['color']>[] = ['primary', 'secondary', 'tertiary', 'surface']

export const AllVariants: Story = {
  args: {
    size: 'medium',
    disabled: false,
  },
  render: (args) => (
    <Stack spacing={4}>
      <div>
        <Typography variant="h6" gutterBottom>
          circular
        </Typography>
        <Stack direction="row" spacing={2}>
          {colors.map((color) => (
            <PreviewFab key={color} color={color} {...args} label={color} />
          ))}
        </Stack>
      </div>
      <div>
        <Typography variant="h6" gutterBottom>
          extended
        </Typography>
        <Stack direction="row" spacing={2}>
          {colors.map((color) => (
            <PreviewFabExtended key={color} color={color} {...args} label={color} />
          ))}
        </Stack>
      </div>
    </Stack>
  ),
}
