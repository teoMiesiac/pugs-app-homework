import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DataStoreProvider } from 'store/store'
import { theme } from 'styles/theme'
import { Landing } from 'pages/Landing'
import { Saved } from 'pages/Saved'

// Chakra automatically includes <CSSReset />, by default set to true

const RootLayout = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <DataStoreProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/saved">
              <Saved />
            </Route>
          </Switch>
        </Router>
      </DataStoreProvider>
    </ChakraProvider>
  )
}

export default RootLayout
