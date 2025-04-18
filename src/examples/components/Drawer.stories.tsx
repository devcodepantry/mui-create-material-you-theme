import { Inbox, Mail } from '@mui/icons-material'
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

const meta: Meta = {
  title: 'Components/Drawer',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
export default meta

type Story = StoryObj

export const BasicDrawer: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    const toggleDrawer = (state: boolean) => () => setOpen(state)

    const list = (
      <Box role="presentation" sx={{ width: 250 }} onClick={toggleDrawer(false)}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    )

    return (
      <>
        <Button variant="filled" onClick={toggleDrawer(true)}>
          Open Drawer
        </Button>
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          {list}
        </Drawer>
      </>
    )
  },
}
