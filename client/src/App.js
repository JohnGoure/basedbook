import React, { Component } from 'react';
import UserList from './components/admin/UserList'
import {AdminProfile} from './components/admin/AdminProfile';
import {Profile} from './components/loggedin/Profile';
import {LoggedOut} from './components/loggedout/LoggedOut';
import './stylesheets/style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loggedIn: false,
      admin: false,
      username: 'Bob',
    }
  }

  componentDidMount() {
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({users}));
  }

  render() {
    return (
      <div className = 'App'>
        {this.state.loggedIn ? this.state.admin ? <AdminProfile username = {this.state.username} users={this.state.users}/> : null : null}
        {this.state.loggedIn ? <Profile username={this.state.username} /> : <LoggedOut />}
      </div>
    );
  }
}

export default App;
