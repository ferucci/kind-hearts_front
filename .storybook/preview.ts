import type { Preview } from '@storybook/react'
import '../src/styles/index.scss'
import 'storybook-addon-remix-react-router'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
