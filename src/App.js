import React from "react";
import Main from "./components/main";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home";
import Login from "./pages/Login";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  loginHandler = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <div>
        <Main loginHandler={this.loginHandler} user={this.state.user} />
        {this.state.user ? (
          <h1>Welcome, {this.state.user.username}</h1>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

export default App;
