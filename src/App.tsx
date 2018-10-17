import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import Navigator from './modules/Navigator/Navigator.container'
import createStore from './redux/createStore'
import theme from './theme'

const { store, persistor } = createStore()

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navigator />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)

export default App
