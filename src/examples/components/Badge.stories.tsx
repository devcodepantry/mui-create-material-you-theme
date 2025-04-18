import MailIcon from '@mui/icons-material/Mail'
import { Badge, Box, Stack, Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    color: { table: { disable: true } },
    variant: { table: { disable: true } },
    badgeContent: { table: { disable: true } },
    children: { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj

const colors: Array<
  'default' | 'primary' | 'secondary' | 'tertiary' | 'error' | 'info' | 'success' | 'warning'
> = ['default', 'primary', 'secondary', 'tertiary', 'error', 'info', 'success', 'warning']

export const AllBadges: Story = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Standard
        </Typography>
        <Stack direction="row" spacing={3}>
          {colors.map((color) => (
            <Badge key={color} color={color} badgeContent={4}>
              <MailIcon />
            </Badge>
          ))}
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Dot
        </Typography>
        <Stack direction="row" spacing={3}>
          {colors.map((color) => (
            <Badge key={color + '-dot'} color={color} variant="dot">
              <MailIcon />
            </Badge>
          ))}
        </Stack>
      </Box>
    </Stack>
  ),
}
