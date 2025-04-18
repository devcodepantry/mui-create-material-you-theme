import { Theme } from '@mui/material'

import { MaterialYouAccordion } from './types'

export const getAccordion = ({ palette, shadows }: Theme): MaterialYouAccordion => {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: shadows[1],
          border: `0px solid ${palette.outlineVariant.main}`,
          color: palette.onBackground.main,
          backgroundColor: palette.surfaceBright.main,
          '&:before': {
            backgroundColor: palette.surfaceBright.main,
            display: 'none',
          },
          '&.Mui-disabled': {
            backgroundColor: palette.inverseOnSurface.main,
            color: palette.inverseSurface.main,
            border: `0px solid ${palette.outlineVariant.main}`,
          },
          '& .MuiAccordionSummary-root > .MuiAccordionSummary-expandIconWrapper ': {
            color: palette.onBackground.main,
          },
        },
      },
    },
  }
}
