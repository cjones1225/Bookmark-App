import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <h1>Welcome to Bookmarks</h1>
        <div className="login_form">
          <form>
            <h2>Login</h2>
            <div className="login_from_credentials">
              <input
                type="text"
                placeholder="Username"
                name="username"
                id="username"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
              />
            </div>
            <div className="login_form_controls">
              <div className="login_form_remember">
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <input type="submit" value="Sign In" className="login_form_btn" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
