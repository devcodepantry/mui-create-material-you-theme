import { Mail, NotificationsOutlined } from '@mui/icons-material'
import { AppBar, Badge, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/AppBar',
  component: AppBar,
  argTypes: {
    color: {
      control: 'radio',
      options: ['standard', 'primary'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  args: {
    color: 'standard',
  },
  render: (args) => (
    <AppBar position="relative" {...args}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Stack direction="row">
          <IconButton color="inherit">
            <Badge color="primary" badgeContent={3}>
              <Mail />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={2}>
              <NotificationsOutlined />
            </Badge>
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  ),
}
