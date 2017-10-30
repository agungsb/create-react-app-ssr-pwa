import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from 'redux-modules/modules/user'
import Seo from 'components/Seo/Seo';
import Footer from 'components/Footer/Footer';
// import * as userActions from 'redux/modules/user';
import { Link } from 'react-router-dom'

import request from 'superagent';
const { get } = userActions;
const styles = require('./FirstPage.css');

class FirstPage extends Component {

  // called in the server render, or in cDM
  static fetchData(match) {
    // going to want `match` in here for params, etc.
    const promises = [
      get(1)
    ];
    return promises;
  }

  constructor(props) {
    super(props);
    let user = null;
    if (props.user) {
      user = props.user;
    }
    this.state = {
      // if this is rendered initially we get data from the server render
      user
    }
  }

  componentWillMount() {
    // if rendered initially, we already have data from the server
    // but when navigated to in the client, we need to fetch
    if (this.props.user === null) {
      this.props.userActions.get(1);
    }
  }

  componentDidMount() {
    console.log('FirstPage mounted. This log should only be visible in development mode', this.props.initialData);
    if (this.props.user) {
      // if rendered initially, we already have data from the server
      this.setState({ user: this.props.user });
    }
  }

  componentWillReceiveProps(nextProps) {
    let { user } = this.props;
    if (nextProps.user) {
      user = nextProps.user;
    }
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    const b64 = this.props.staticContext ? 'wait for it' : window.btoa('wait for it')
    return (
      <div>
        <Seo />
        <h2 className={styles.bold}>First Page</h2>
        <p className="bolder">{`Email: ${this.props.user.email}`}</p>
        <p>{`b64: ${b64}`}</p>
        <Link to={'/second'}>Second</Link><br />
        <p><strong>The text below is a prefetched SSR data:</strong></p>
        {user && user.loaded && 
          <h2>
            {user.id} - {user.title}
          </h2>
        }
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstPage))
