import { defineConfig } from "@pandacss/dev"

export default defineConfig({
    preflight: true,
    presets: ['@pandacss/dev/presets', '@park-ui/presets'],
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
    exclude: [],
    jsxFramework: 'react',
    theme: {
      extend: {
        tokens: {
          colors: {
            grayPalette: {
              25: { value: '{colors.zinc.25}' }, 
              50: { value: '{colors.zinc.50}' }, 
              100: { value: '{colors.zinc.100}' }, 
              200: { value: '{colors.zinc.200}' }, 
              300: { value: '{colors.zinc.300}' }, 
              400: { value: '{colors.zinc.400}' }, 
              500: { value: '{colors.zinc.500}' }, 
              600: { value: '{colors.zinc.600}' }, 
              700: { value: '{colors.zinc.700}' }, 
              800: { value: '{colors.zinc.800}' }, 
              900: { value: '{colors.zinc.900}' }, 
              950: { value: '{colors.zinc.950}' }, 
            },
          },
        },
        semanticTokens: {
          radii: {
            l1: { value: '{radii.sm}' },
            l2: { value: '{radii.md}' },
            l3: { value: '{radii.lg}' },
          },
        },
      },
    },
    outdir: "styled-system",
})