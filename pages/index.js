/*  /pages/index.js
*/
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../actions'
import Layout from '../layouts/Main'

class Home extends React.Component {
  async componentDidMount () {
    await this.props.initialize()
  }

  render () {
    const { loading, message } = this.props.home

    return (
      <Layout pathname={this.props.pathname}>
        { (loading) ? <div>Loading...</div>
          : <div>
            <div>{message}</div>
          </div>
        }
      </Layout>
    )
  }
}
/* -------------------------------------------------------------------------------- */

Home.getInitialProps = async ({ pathname }) => ({ pathname })

/* -------------------------------------------------------------------------------- */

Home.propTypes = {
  pathname: PropTypes.string
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
