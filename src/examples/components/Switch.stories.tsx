import { Stack, Switch, Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/Switch',
  parameters: {
    controls: { disabled: true },
  },
}

export default meta
type Story = StoryObj

const colors: Array<
  'primary' | 'secondary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
> = ['primary', 'secondary', 'error', 'info', 'success', 'warning']

export const ColorVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      {colors.map((color) => (
        <Stack key={color} spacing={1} alignItems="center">
          <Typography variant="body2">{color}</Typography>
          <Switch defaultChecked color={color} />
        </Stack>
      ))}
    </Stack>
  ),
}
