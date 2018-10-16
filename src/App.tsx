import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navigator from './modules/Navigator/Navigator.container'
import theme from './theme'

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Navigator />
    </ThemeProvider>
  </BrowserRouter>
)

export default App
