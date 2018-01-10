import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import ActionPrego from 'material-ui/svg-icons/action/pregnant-woman';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Navbar grid">
        <NavLink activeClassName="active" exact to="/">
          <Tab icon={<ActionPrego className="muidocs-icon-action-home" />} />
          Home
        </NavLink>{' '}
        <NavLink activeClassName="active" exact to="/films">
          Films
        </NavLink>{' '}
        <NavLink activeClassName="active" to="/people">
          People
        </NavLink>
        <NavLink activeClassName="active" exact to="/planets">
          Planets
        </NavLink>{' '}
        <NavLink activeClassName="active" exact to="/species">
          Species
        </NavLink>{' '}
        <NavLink activeClassName="active" to="/starships">
          Starships
        </NavLink>
        <NavLink activeClassName="active" to="/vehicles">
          Vehicles
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
