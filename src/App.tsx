import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

import Navigator from './modules/Navigator/Navigator.container'

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={{}}>
      <Navigator />
    </ThemeProvider>
  </BrowserRouter>
)

export default App
