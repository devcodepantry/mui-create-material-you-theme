import { Theme } from '@mui/material'

import { MaterialYouBadge } from './types'

export const getBadge = ({ palette }: Theme): MaterialYouBadge => {
  return {
    MuiBadge: {
      defaultProps: { color: 'default' },
      variants: [
        {
          props: { color: 'default' },
          style: {
            '.MuiBadge-badge': {
              backgroundColor: palette.error.main,
              color: palette.onError.main,
            },
          },
        },
      ],
    },
  }
}
