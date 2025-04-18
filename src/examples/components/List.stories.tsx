import { Inbox, Mail } from '@mui/icons-material'
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/List',
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj

export const BasicList: Story = {
  render: () => (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List>
        <ListItemButton selected>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Starred" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Send email" />
        </ListItemButton>
      </List>
    </Box>
  ),
}

export const ListWithIcons: Story = {
  render: () => (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List>
        <ListItemButton selected>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="Sent Mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
    </Box>
  ),
}

export const ListWithDifferentText: Story = {
  render: () => (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List>
        <ListItemButton selected>
          <ListItemText primary="Primary Text" secondary="Secondary Text" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Another Item" secondary="Secondary description" />
        </ListItemButton>
      </List>
    </Box>
  ),
}
