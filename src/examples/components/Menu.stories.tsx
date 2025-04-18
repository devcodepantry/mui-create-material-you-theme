import { Button, Menu, MenuItem } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

const meta: Meta = {
  title: 'Components/Menu',
  parameters: {
    controls: { disabled: true },
  },
}

export default meta
type Story = StoryObj

export const BasicMenu: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEl(null)
    }

    return (
      <>
        <Button variant="filled" onClick={handleClick}>
          Open Menu
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose} selected>
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </>
    )
  },
}
