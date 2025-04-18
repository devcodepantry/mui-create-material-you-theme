import { Theme } from '@mui/material'

import { MaterialYouAlert } from './types'

export const getAlert = ({ palette }: Theme): MaterialYouAlert => {
  return {
    MuiAlert: {
      defaultProps: {
        variant: 'standard',
      },
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
        standardError: {
          background: palette.errorContainer.main,
          color: palette.onErrorContainer.main,
        },
        standardInfo: {
          background: palette.infoContainer.main,
          color: palette.infoContainer.contrastText,
        },
        standardWarning: {
          background: palette.warningContainer.main,
          color: palette.onWarningContainer.main,
        },
        standardSuccess: {
          background: palette.successContainer.main,
          color: palette.onSuccessContainer.main,
        },

        filledError: {
          background: palette.error.main,
          color: palette.onError.main,
        },
        filledInfo: {
          background: palette.info.main,
          color: palette.onInfo.main,
        },
        filledWarning: {
          background: palette.warning.main,
          color: palette.onWarning.main,
        },
        filledSuccess: {
          background: palette.success.main,
          color: palette.onSuccess.main,
        },

        outlinedError: {
          color: palette.error.main,
        },
        outlinedInfo: {
          color: palette.info.main,
        },
        outlinedWarning: {
          color: palette.warning.main,
        },
        outlinedSuccess: {
          color: palette.success.main,
        },
      },
    },
  }
}
