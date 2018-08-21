/*  /pages/_app.js
*/
import App, {Container} from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import storeFactory from '../store'

const makeStore = (initialState, c) => {
  const { isServer } = c
  return storeFactory(isServer)
}

class MyApp extends App {
  render () {
    const {Component, pageProps, store} = this.props

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(MyApp)
