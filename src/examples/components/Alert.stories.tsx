import { Alert, AlertTitle, Stack } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    severity: { table: { disable: true } },
    onClose: { table: { disable: true } },
    variant: {
      control: 'radio',
      options: ['standard', 'outlined', 'filled'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta
type Story = StoryObj

const severities: Array<'error' | 'warning' | 'info' | 'success'> = [
  'error',
  'warning',
  'info',
  'success',
]

export const AllSeverities: Story = {
  args: {
    variant: 'standard',
  },
  render: (args) => (
    <Stack spacing={2}>
      {severities.map((severity) => (
        <Alert key={severity} severity={severity} onClose={() => undefined} {...args}>
          <AlertTitle>{severity.toUpperCase()}</AlertTitle>
          This is a {severity} alert.
        </Alert>
      ))}
    </Stack>
  ),
}
