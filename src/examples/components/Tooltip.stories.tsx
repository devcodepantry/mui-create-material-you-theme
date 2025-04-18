import { Delete } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/Tooltip',
  parameters: {
    controls: { disabled: true },
  },
}

export default meta
type Story = StoryObj

export const ColorVariants: Story = {
  render: () => (
    <Tooltip title="Delete">
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  ),
}
