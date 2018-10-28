import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { RestLink } from 'apollo-link-rest'
import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import Navigator from './modules/Navigator/Navigator.container'
import createStore from './redux/createStore'
import theme from './theme'

const restLink = new RestLink({
  uri: process.env.REACT_APP_REST_ENDPOINT,
  headers: {}
})
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
})
const { store, persistor } = createStore()

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <Navigator />
          </ThemeProvider>
        </ApolloProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)

export default App
