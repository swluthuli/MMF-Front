import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './forms/LoginForm';
import { userActions } from '../_actions/user.action';

class Login extends Component {

  submit = (data) => userActions.login(data.username, data.password).then(() => this.props.history.push("/"));


  render() {

    return (
      <LoginForm onSubmit={this.submit} />
    );
  }
}


Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,

};


export default Login;