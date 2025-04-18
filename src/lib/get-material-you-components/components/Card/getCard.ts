import { Theme } from '@mui/material'
import { alpha } from '@mui/material'

import { getStateLayerColor, StateLayer } from '../../utils'
import { MaterialYouCard } from './types'

export const getCard = ({ palette, shadows, transitions }: Theme): MaterialYouCard => {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
      },
      variants: [
        {
          props: { variant: 'elevation' },
          style: {
            boxShadow: shadows[1],
            backgroundColor: palette.surfaceContainerLow.main,
            transition: transitions.create(
              ['background-color', 'box-shadow', 'border-color', 'color'],
              {
                duration: transitions.duration.short,
              },
            ),
            '&:hover': {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.surfaceContainerLow.main,
                palette.primary.main,
              ),
              boxShadow: shadows[2],
            },
            '&:focus': {
              boxShadow: shadows[1],
              background: getStateLayerColor(
                StateLayer.Focus,
                palette.surfaceContainerLow.main,
                palette.primary.main,
              ),
            },
            '&:active': {
              boxShadow: shadows[1],
              background: getStateLayerColor(
                StateLayer.Press,
                palette.surfaceContainerLow.main,
                palette.primary.main,
              ),
            },
            '&.Mui-disabled': {
              backgroundColor: alpha(palette.surfaceContainerLow.main, 0.38),
              color: palette.surfaceVariant.main,
              boxShadow: shadows[0],
            },
          },
        },
        {
          props: { variant: 'filled' },
          style: {
            boxShadow: shadows[0],
            backgroundColor: palette.surfaceContainerHighest.main,
            transition: transitions.create(
              ['background-color', 'box-shadow', 'border-color', 'color'],
              {
                duration: transitions.duration.short,
              },
            ),
            '&:hover': {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.surfaceContainerHighest.main,
                palette.primary.main,
              ),
              boxShadow: shadows[1],
            },
            '&:focus': {
              boxShadow: shadows[0],
              background: getStateLayerColor(
                StateLayer.Focus,
                palette.surfaceContainerHighest.main,
                palette.primary.main,
              ),
            },
            '&:active': {
              boxShadow: shadows[1],
              background: getStateLayerColor(
                StateLayer.Press,
                palette.surfaceContainerHighest.main,
                palette.primary.main,
              ),
            },
            '&.Mui-disabled': {
              backgroundColor: alpha(palette.surfaceContainerHighest.main, 0.38),
              color: palette.surfaceVariant.main,
              boxShadow: shadows[1],
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            boxShadow: shadows[0],
            backgroundColor: palette.surface.main,
            borderColor: palette.outline.main,
            transition: transitions.create(
              ['background-color', 'box-shadow', 'border-color', 'color'],
              {
                duration: transitions.duration.short,
              },
            ),
            '&:hover': {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.surface.main,
                palette.primary.main,
              ),
              boxShadow: shadows[1],
            },
            '&:focus': {
              boxShadow: shadows[0],
              background: getStateLayerColor(
                StateLayer.Focus,
                palette.surface.main,
                palette.primary.main,
              ),
            },
            '&:active': {
              boxShadow: shadows[2],
              background: getStateLayerColor(
                StateLayer.Press,
                palette.surfaceContainerHighest.main,
                palette.primary.main,
              ),
            },
            '&.Mui-disabled': {
              borderColor: alpha(palette.surfaceContainerHighest.main, 0.12),
              boxShadow: shadows[0],
            },
          },
        },
      ],
    },
  }
}
