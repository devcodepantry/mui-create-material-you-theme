# MUI Create Material You Theme

This package enables you to bring Material Design 3 (Material You) to your MUI-based application.

It helps you migrate your existing theme to a Material You look and introduces support for new props such as the `tertiary` color.

> This package does **not** provide new components or theme providers/switches — it only restyles existing MUI components.

## 📦 Demo

Explore the live Storybook to see all Material You components in action:

👉 [**Storybook Demo**](https://bobescz.github.io/mui-create-material-you-theme/storybook-static/?path=/story/components-button--all-variants)

This demo shows how MUI components look when restyled with the Material You design system using this package.

## 🌟 Motivation and Goals

Our company signed a contract (in summer 2024) to build a web app based on the **Material You** design system. Since we're fully invested in the MUI ecosystem and our designers used Material You in Figma, we needed to adapt the MUI library accordingly.

MUI currently implements **Material Design 2**, and we don't expect a Material You-compatible version to be released in 2025. Therefore, we decided to restyle MUI components ourselves.

> The goal of this package is to **efficiently restyle MUI components to resemble Material You** — without rewriting the entire component logic or breaking MUI internals.\
> We aim to follow Material You guidelines as closely as possible, but **not strictly**.

If you're interested in implementing stricter guideline compliance, we welcome contributions via pull requests!

## 📚 Concepts

- **Material You** = Material Design 3
- **MUI2** = MUI's implementation of Material Design 2

### Key Challenges

- The MUI2 palette uses a different design system than Material You.\
  We need to map **49 named colors** (Material You) to the existing **32 differently named** colors used by the MUI palette.
- Material You does not define colors for `info`, `success`, or `warning` (only `error` is included).
- Material You introduces a `tertiary` color, which needs to be supported across all components that previously only used `primary` and `secondary`.

## 🚀 Usage

For an example of how to integrate the theme in your app, check out the code in the [App.stories.tsx file](https://github.com/BobesCZ/mui-create-material-you-theme/blob/main/src/examples/apps/App.stories.tsx).

Choose the setup that best fits your use case:

### Try it quickly

Use the default theme with no customization:

```tsx
import { CssBaseline, ThemeProvider } from '@mui/material'

const materialYouLight = createMaterialYouTheme('light')

return (
  <ThemeProvider theme={materialYouLight}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
```

### Migrate your existing theme to Material You

If you already have a customized theme with palette overrides, you'll need to convert your color definitions to the Material You system.

1. Open the official [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/)
2. Export your theme as a JSON file
3. Select the desired scheme (e.g., `light`) from the `schemes` object
4. Copy the scheme object and save it in your project

> Notes:
>
> - `createMaterialYouTheme` internally uses `createTheme`, so do **not** call it manually.
> - Do **not** pass `palette` directly in `themeOptions` — the colors are handled automatically from the scheme.

```tsx
import { CssBaseline, ThemeOptions, ThemeProvider } from '@mui/material'

// Scheme from official builder
const scheme = {
  primary: '#3C6090',
  onPrimary: '#FFFFFF',
  // ...
}

// Your custom theme options
const themeOptions: ThemeOptions = {
  typography: { ... },
  components: { ... },
}

// Add missing colors not included in Material You
const missingColors = {
  info: '#0000ff',
  success: '#00ff00',
  warning: '#ff0000',
}

const customMaterialYouTheme = createMaterialYouTheme(
  'light',
  scheme,
  themeOptions,
  missingColors,
)

return (
  <ThemeProvider theme={customMaterialYouTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
```

### Advanced theme migration (manual control)

If you need full control over the theme creation process:

```tsx
import { createTheme, CssBaseline, ThemeOptions, ThemeProvider } from '@mui/material'

const scheme = {}
const themeOptions: ThemeOptions = {}
const missingColors = {}

// `scheme` contains all colors which are needed to create MUI2 palette
const scheme = getMaterialYouScheme(mode, exportedScheme, missingColors)

// `palette` contains colors mapped to MUI2 palette
const palette = getMaterialYouPalette(mode, scheme)

// `theme` merges your `themeOptions` and Material You palette
const theme = createTheme({ ...themeOptions, palette })

const components = getMaterialYouComponents(theme)

// `themeWithComponent` merges `theme` and Material You components styles
const themeWithComponents = createTheme(theme, { components })

return (
  <ThemeProvider theme={themeWithComponents}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
```

### Customize components further

If you want to make deeper changes to component styling, clone this repository and copy the `src/lib` folder into your project.

You can then adjust component styles as needed.

> If you fix bugs or improve design fidelity with the Material You spec, please consider submitting a pull request!

## 🙏 Acknowledgments

Styles based on [react-material-you-theme](https://github.com/ZakAlbert/react-material-you-theme/)
