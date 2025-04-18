import { Box, Grid, PaletteColor, Stack, Typography, useTheme } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

type PalettePreviewProps = {
  title: string
  onTitle: string
  titleColor: PaletteColor
  onTitleColor: PaletteColor
}

const PalettePreview = ({ title, onTitle, titleColor, onTitleColor }: PalettePreviewProps) => {
  return (
    <Stack sx={{ height: 'auto' }}>
      <Box
        sx={{
          flex: 1,
          flexDirection: 'row',
          alignContent: 'start',
          px: 1,
          pt: 1,
          pb: 3,
          bgcolor: titleColor.main,
          color: onTitleColor.main,
        }}
      >
        <Typography fontSize={12} fontWeight={'bold'}>
          {title}
          <br />
          {titleColor.main.toUpperCase()}
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          p: 1,
          bgcolor: onTitleColor.main,
          color: titleColor.main,
        }}
      >
        <Typography fontSize={12} fontWeight={'bold'}>
          {onTitle} <br /> {onTitleColor.main.toUpperCase()}
        </Typography>
      </Box>
    </Stack>
  )
}

type PalettePreviewSurfaceProps = {
  title: string
  titleColor: PaletteColor
  onTitleColor: PaletteColor
}

const PalettePreviewSurface = ({ title, titleColor, onTitleColor }: PalettePreviewSurfaceProps) => {
  return (
    <Stack sx={{ height: 'auto' }}>
      <Box
        sx={{
          px: 1,
          py: 2,
          bgcolor: titleColor.main,
          color: onTitleColor.main,
        }}
      >
        <Typography fontSize={12} fontWeight={'bold'}>
          {title} <br /> {titleColor.main.toUpperCase()}
        </Typography>
      </Box>
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
      <Grid container spacing={2}>
        <Grid size={3}>
          <PalettePreview
            title="Primary"
            titleColor={palette.primary}
            onTitle="OnPrimary"
            onTitleColor={palette.onPrimary}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreview
            title="Secondary"
            titleColor={palette.secondary}
            onTitle="OnSecondary"
            onTitleColor={palette.onSecondary}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreview
            title="Tertiary"
            titleColor={palette.tertiary}
            onTitle="OnTertiary"
            onTitleColor={palette.onTertiary}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreview
            title="Error"
            titleColor={palette.error}
            onTitle="OnError"
            onTitleColor={palette.onError}
          />
        </Grid>

        <Grid size={3}>
          <PalettePreview
            title="PrimaryContainer"
            titleColor={palette.primaryContainer}
            onTitle="OnPrimaryContainer"
            onTitleColor={palette.onPrimaryContainer}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreview
            title="SecondaryContainer"
            titleColor={palette.secondaryContainer}
            onTitle="OnSecondaryContainer"
            onTitleColor={palette.onSecondaryContainer}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreview
            title="TertiaryContainer"
            titleColor={palette.tertiaryContainer}
            onTitle="OnTertiaryContainer"
            onTitleColor={palette.onTertiaryContainer}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreview
            title="ErrorContainer"
            titleColor={palette.errorContainer}
            onTitle="OnErrorContainer"
            onTitleColor={palette.onErrorContainer}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={3}>
          <PalettePreviewSurface
            title="PrimaryFixed"
            titleColor={palette.primaryFixed}
            onTitleColor={palette.onPrimaryFixed}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="PrimaryFixedDim"
            titleColor={palette.primaryFixedDim}
            onTitleColor={palette.onPrimaryFixedVariant}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="OnPrimaryFixed"
            titleColor={palette.onPrimaryFixed}
            onTitleColor={palette.primaryFixed}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="OnPrimaryFixedVariant"
            titleColor={palette.onPrimaryFixedVariant}
            onTitleColor={palette.primaryFixedDim}
          />
        </Grid>

        <Grid size={3}>
          <PalettePreviewSurface
            title="SecondaryFixed"
            titleColor={palette.secondaryFixed}
            onTitleColor={palette.onSecondaryFixed}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="SecondaryFixedDim"
            titleColor={palette.secondaryFixedDim}
            onTitleColor={palette.onSecondaryFixedVariant}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="OnSecondaryFixed"
            titleColor={palette.onSecondaryFixed}
            onTitleColor={palette.secondaryFixed}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="OnSecondaryFixedVariant"
            titleColor={palette.onSecondaryFixedVariant}
            onTitleColor={palette.secondaryFixedDim}
          />
        </Grid>

        <Grid size={3}>
          <PalettePreviewSurface
            title="TertiaryFixed"
            titleColor={palette.tertiaryFixed}
            onTitleColor={palette.onTertiaryFixed}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="TertiaryFixedDim"
            titleColor={palette.tertiaryFixedDim}
            onTitleColor={palette.onTertiaryFixedVariant}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="OnTertiaryFixed"
            titleColor={palette.onTertiaryFixed}
            onTitleColor={palette.tertiaryFixed}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="OnTertiaryFixedVariant"
            titleColor={palette.onTertiaryFixedVariant}
            onTitleColor={palette.tertiaryFixedDim}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={4}>
          <PalettePreviewSurface
            title="SurfaceDim"
            titleColor={palette.surfaceDim}
            onTitleColor={palette.onSurface}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreviewSurface
            title="Surface"
            titleColor={palette.surface}
            onTitleColor={palette.onSurface}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreviewSurface
            title="SurfaceBright"
            titleColor={palette.surfaceBright}
            onTitleColor={palette.onSurface}
          />
        </Grid>

        <Grid size={3}>
          <PalettePreviewSurface
            title="Surf. ContainerLowest"
            titleColor={palette.surfaceContainerLowest}
            onTitleColor={palette.onSurface}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="Surf. ContainerLow"
            titleColor={palette.surfaceContainerLow}
            onTitleColor={palette.onSurface}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="Surf. Container"
            titleColor={palette.surfaceContainer}
            onTitleColor={palette.onSurface}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="Surf. ContainerHigh"
            titleColor={palette.surfaceContainerHigh}
            onTitleColor={palette.onSurface}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="Surf. ContainerHighest"
            titleColor={palette.surfaceContainerHighest}
            onTitleColor={palette.onSurface}
          />
        </Grid>

        <Grid size={3}>
          <PalettePreviewSurface
            title="OnSurface"
            titleColor={palette.onSurface}
            onTitleColor={palette.surface}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="OnSurfaceVariant"
            titleColor={palette.onSurfaceVariant}
            onTitleColor={palette.surface}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="Outline"
            titleColor={palette.outline}
            onTitleColor={palette.surface}
          />
        </Grid>
        <Grid size={3}>
          <PalettePreviewSurface
            title="OutlineVariant"
            titleColor={palette.outlineVariant}
            onTitleColor={palette.inverseSurface}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={4}>
          <PalettePreview
            title="InverseSurface"
            titleColor={palette.inverseSurface}
            onTitle="InverseOnSurface"
            onTitleColor={palette.inverseOnSurface}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreviewSurface
            title="InversePrimary"
            titleColor={palette.inversePrimary}
            onTitleColor={palette.onPrimaryContainer}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreviewSurface
            title="Scrim"
            titleColor={palette.scrim}
            onTitleColor={palette.inversePrimary}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreviewSurface
            title="Shadow"
            titleColor={palette.shadow}
            onTitleColor={palette.inversePrimary}
          />
        </Grid>
      </Grid>
      <Typography variant="h6" fontWeight="bold" sx={{ m: 1, mt: 2 }}>
        Custom Colors
      </Typography>
      <Grid container spacing={2}>
        <Grid size={4}>
          <PalettePreview
            title="Info"
            titleColor={palette.info}
            onTitle="OnInfo"
            onTitleColor={palette.onInfo}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreview
            title="Warning"
            titleColor={palette.warning}
            onTitle="OnWarning"
            onTitleColor={palette.onWarning}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreview
            title="Success"
            titleColor={palette.success}
            onTitle="OnSuccess"
            onTitleColor={palette.onSuccess}
          />
        </Grid>

        <Grid size={4}>
          <PalettePreview
            title="InfoContainer"
            titleColor={palette.infoContainer}
            onTitle="OnInfoContainer"
            onTitleColor={palette.onInfoContainer}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreview
            title="WarningContainer"
            titleColor={palette.warningContainer}
            onTitle="OnWarningContainer"
            onTitleColor={palette.onWarningContainer}
          />
        </Grid>
        <Grid size={4}>
          <PalettePreview
            title="SuccessContainer"
            titleColor={palette.successContainer}
            onTitle="OnSuccesContainer"
            onTitleColor={palette.onSuccessContainer}
          />
        </Grid>
      </Grid>
    </Stack>
  )
}

const meta: Meta<typeof PreviewColors> = {
  title: 'Theme/Colors',
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
