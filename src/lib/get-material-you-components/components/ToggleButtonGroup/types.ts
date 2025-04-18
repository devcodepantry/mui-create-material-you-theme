import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

export interface MaterialYouToggleButtonGroup {
  MuiToggleButtonGroup: {
    defaultProps?: ComponentsProps['MuiToggleButtonGroup']
    styleOverrides?: ComponentsOverrides<Theme>['MuiToggleButtonGroup']
    variants?: ComponentsVariants['MuiToggleButtonGroup']
  }
}
