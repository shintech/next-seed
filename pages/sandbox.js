/*  /pages/index.js
*/
import fetch from 'isomorphic-fetch'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../actions'
import Layout from '../layouts/Main'

const Home = ({ message }) =>
  <Layout title='sandbox'>
    <h3>Sandbox</h3>
    <div>{message}</div>
  </Layout>

/* -------------------------------------------------------------------------------- */

Home.getInitialProps = async () => {
  let res = await fetch('https://shintech.ninja/api/home')
  let json = await res.json()
  return { ...json }
}
/* -------------------------------------------------------------------------------- */

Home.propTypes = {
  message: PropTypes.string.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => state,

  dispatch => ({
    initialize: () => {
      dispatch(action.home.initialize())
    }}
  )
)(Home)
