import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { theme } from 'styles/theme'

// Chakra automatically includes <CSSReset />, by default set to true

const RootLayout = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            feed
          </Route>
          <Route path="/saved">galery</Route>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default RootLayout
