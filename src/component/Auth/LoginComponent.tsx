import * as React from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import "./Login.css";
import { UserLogin } from "../../adapter/usecase/UserLogIn";
import { submitLogin } from '../../infra/actions/login.action';

class LogInComponent extends React.Component<{onLogin: any, authenticatedUserCredentails: boolean }, UserLogin> {
  state = {
    email: "",
    password: ""
  };


  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.onLogin(this.state.email, this.state.password);
    e.target.reset();
  };

  componentWillReceiveProps(nextProps){
    if(nextProps.authenticatedUserCredentails){
      nextProps.history.push('userlists');
    }
  }

  render() {
    return (
      <div className="signin-container">
        <div className="signin-box">
          <h3 className="text-center"> Login </h3>
          <form onSubmit={this.handleSubmit} id="loginform">
            <div className="form-group">
              <label>Email address:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { userLoginError, authenticatingUserCredentails, authenticatedUserCredentails, userLoginCredentails } = state.userLogin;

  return {
    userLoginError,
    authenticatingUserCredentails, authenticatedUserCredentails,
    userLoginCredentails,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (user, pass) => dispatch(submitLogin(user, pass)),
  }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(LogInComponent);

export default connectedComponent;
