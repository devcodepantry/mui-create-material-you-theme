import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import { createMaterialYouTheme } from '../src/lib'

const materialYouLight = createMaterialYouTheme('light')
const materialYouDark = createMaterialYouTheme('dark')

export const exampleThemes = {
  'Material You - Light': materialYouLight,
  'Material You - Dark': materialYouDark,
}

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
      themes: exampleThemes,
      defaultTheme: Object.keys(exampleThemes)[0],
    }),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
