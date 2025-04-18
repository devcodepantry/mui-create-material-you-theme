import { Theme } from '@mui/material'

import { getStateLayerColor, StateLayer } from '../../utils'
import { MaterialYouFab } from './types'

export const getFab = ({ palette, shadows }: Theme): MaterialYouFab => {
  return {
    MuiFab: {
      defaultProps: { color: 'secondary' },
      styleOverrides: {
        root: {
          boxShadow: shadows[3],
          borderRadius: '18px',
        },
      },
      variants: [
        {
          props: { color: 'primary' },
          style: {
            backgroundColor: palette.primaryContainer.main,
            color: palette.onPrimaryContainer.main,
            '&:hover': {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.primaryContainer.main,
                palette.onPrimaryContainer.main,
              ),
              boxShadow: shadows[4],
            },
            '&:focus': {
              background: getStateLayerColor(
                StateLayer.Focus,
                palette.primaryContainer.main,
                palette.onPrimaryContainer.main,
              ),
              boxShadow: shadows[3],
            },
            '&:active': {
              background: getStateLayerColor(
                StateLayer.Press,
                palette.primaryContainer.main,
                palette.onPrimaryContainer.main,
              ),
              boxShadow: shadows[3],
            },
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            backgroundColor: palette.secondaryContainer.main,
            color: palette.onSecondaryContainer.main,
            '&:hover': {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.secondaryContainer.main,
                palette.onSecondaryContainer.main,
              ),
              boxShadow: shadows[4],
            },
            '&:focus': {
              background: getStateLayerColor(
                StateLayer.Focus,
                palette.secondaryContainer.main,
                palette.onSecondaryContainer.main,
              ),
              boxShadow: shadows[3],
            },
            '&:active': {
              background: getStateLayerColor(
                StateLayer.Press,
                palette.secondaryContainer.main,
                palette.onSecondaryContainer.main,
              ),
              boxShadow: shadows[3],
            },
          },
        },
        {
          props: { color: 'surface' },
          style: {
            backgroundColor: palette.surfaceContainer.main,
            color: palette.primary.main,
            '&:hover': {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.surfaceContainer.main,
                palette.primary.main,
              ),
              boxShadow: shadows[4],
            },
            '&:focus': {
              background: getStateLayerColor(
                StateLayer.Focus,
                palette.surfaceContainer.main,
                palette.primary.main,
              ),
              boxShadow: shadows[3],
            },
            '&:active': {
              background: getStateLayerColor(
                StateLayer.Press,
                palette.surfaceContainer.main,
                palette.primary.main,
              ),
              boxShadow: shadows[3],
            },
          },
        },
        {
          props: { color: 'tertiary' },
          style: {
            backgroundColor: palette.tertiaryContainer.main,
            color: palette.onTertiaryContainer.main,
            '&:hover': {
              background: getStateLayerColor(
                StateLayer.Hover,
                palette.tertiaryContainer.main,
                palette.onTertiaryContainer.main,
              ),
              boxShadow: shadows[4],
            },
            '&:focus': {
              background: getStateLayerColor(
                StateLayer.Focus,
                palette.tertiaryContainer.main,
                palette.onTertiaryContainer.main,
              ),
              boxShadow: shadows[3],
            },
            '&:active': {
              background: getStateLayerColor(
                StateLayer.Press,
                palette.tertiaryContainer.main,
                palette.onTertiaryContainer.main,
              ),
              boxShadow: shadows[3],
            },
          },
        },
      ],
    },
  }
}
