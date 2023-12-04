import React, { Component } from 'react';

class LoginSignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      username: '',
      password: '',
      email: '',  
    };
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
    }));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle login or signup logic here
    const { isLogin, username, password, email } = this.state;

    if (isLogin) {
      // Perform login
      console.log(`Logging in with username: ${username} and password: ${password}`);
    } else {
      // Perform signup
      console.log(`Signing up with username: ${username}, password: ${password}, and email: ${email}`);
    }
  }

  render() {
    return (
      <div className="login-signup-page">
        <h1>{this.state.isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          {!this.state.isLogin && (
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          )}
          <button type="submit">{this.state.isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p onClick={this.toggleForm}>
          {this.state.isLogin
            ? 'Don\'t have an account? Sign up!'
            : 'Already have an account? Log in!'}
        </p>
      </div>
    );
  }
}

export default LoginSignupPage;