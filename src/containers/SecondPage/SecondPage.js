import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from 'redux-modules/modules/user'
// import * as userActions from './../../redux/modules/user';
import { Link } from 'react-router-dom'
import './SecondPage.css'

class SecondPage extends Component {
  componentWillMount() {
    this.props.userActions.get(1);
  }
  render() {
    return (
      <div className='bold'>
        <h2>Second Page</h2>
        <Link to={'/'}>First</Link>
        {this.props.user &&
          <h2>
            {this.props.user.id} - {this.props.user.title}
          </h2>
        }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondPage)
