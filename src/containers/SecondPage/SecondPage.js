import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import * as userActions from 'redux-modules/user'
import * as userActions from './../../redux/modules/user';
import { Link } from 'react-router-dom'
import './SecondPage.css'

class SecondPage extends Component {
  componentWillMount() {
    // const payload = {
    //   userId: 1,
    //   id: 1,
    //   title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //   body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    // }
    // this.props.userActions.set(payload);
    this.props.userActions.tes();
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
