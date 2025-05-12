import { BeachAccess, Image, Inbox, Mail, Work } from '@mui/icons-material'
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/List',
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj

export const BasicListItemButton: Story = {
  render: () => (
    <Box
      sx={({ palette }) => ({
        width: '100%',
        maxWidth: 360,
        bgcolor: palette.surfaceContainer.main,
      })}
    >
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

export const BasicListItemIcon: Story = {
  render: () => (
    <Box
      sx={({ palette }) => ({
        width: '100%',
        maxWidth: 360,
        bgcolor: palette.surfaceContainer.main,
      })}
    >
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

export const BasicListItemText: Story = {
  render: () => (
    <Box
      sx={({ palette }) => ({
        width: '100%',
        maxWidth: 360,
        bgcolor: palette.surfaceContainer.main,
      })}
    >
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

export const BasicListItemAvatar: Story = {
  render: () => (
    <Box
      sx={({ palette }) => ({
        width: '100%',
        maxWidth: 360,
        bgcolor: palette.surfaceContainer.main,
      })}
    >
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Work />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccess />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    </Box>
  ),
}
