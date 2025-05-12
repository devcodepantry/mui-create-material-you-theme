import { Box, Grid, Stack, Typography, useTheme } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

type PalettePreviewProps = {
  colorName: string
  colorHex: string
}

const PalettePreview = ({ colorName, colorHex }: PalettePreviewProps) => {
  return (
    <Stack sx={{ gap: 1 }}>
      <Box
        sx={{
          flex: 1,
          minHeight: 64,
          bgcolor: colorHex,
          border: '1px solid grey',
        }}
      />
      <Typography>{colorName}</Typography>
    </Stack>
  )
}

export const PreviewColors: React.FC = () => {
  const { palette } = useTheme()

  return (
    <Stack sx={{ gap: 2 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ m: 1 }}>
        {palette.mode === 'light' ? 'Light Theme' : 'Dark Theme'}
      </Typography>

      {Object.entries(palette)
        .filter(([key]) =>
          [
            'common',
            'primary',
            'secondary',
            'error',
            'warning',
            'info',
            'success',
            'text',
            'background',
          ].includes(key),
        )
        .map(([key, color]) => (
          <Stack key={Object.keys(color).join()} gap={2}>
            <Typography variant="h6" fontWeight="bold">
              {key}
            </Typography>

            <Grid container spacing={2}>
              {Object.entries(color).map(([colorName, colorHex]) => (
                <Grid key={colorName} size="grow">
                  <PalettePreview colorName={colorName} colorHex={colorHex as any} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        ))}
    </Stack>
  )
}

const meta: Meta<typeof PreviewColors> = {
  title: 'Theme/Material2Colors',
  component: PreviewColors,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {},
  includeStories: ['AllColors'],
}

export default meta
type Story = StoryObj<typeof PreviewColors>

export const AllColors: Story = {
  render: () => <PreviewColors />,
}
