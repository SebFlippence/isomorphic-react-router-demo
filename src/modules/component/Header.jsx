'use strict';

import React from 'react';
import NavLink from './NavLink';

export default React.createClass({
  render () {
    return <header>
      <div className="navbar navbar-inverse">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-inverse-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <NavLink className="navbar-brand" to="/">Brand</NavLink>
        </div>
        <div className="navbar-collapse collapse navbar-inverse-collapse">
          <ul className="nav navbar-nav">
            <li>
              <NavLink to="/forms">Forms</NavLink>
            </li>
            <li>
              <NavLink to="/tables">Tables</NavLink>
            </li>
            <li className="dropdown">
              <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a href="javascript:void(0)">Action</a></li>
                <li><a href="javascript:void(0)">Another action</a></li>
                <li><a href="javascript:void(0)">Something else here</a></li>
                <li className="divider"></li>
                <li className="dropdown-header">Dropdown header</li>
                <li><a href="javascript:void(0)">Separated link</a></li>
                <li><a href="javascript:void(0)">One more separated link</a></li>
              </ul>
            </li>
          </ul>
          <form className="navbar-form navbar-left">
            <input type="text" className="form-control col-lg-8" placeholder="Search" />
          </form>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="javascript:void(0)">Link</a></li>
            <li className="dropdown">
              <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a href="javascript:void(0)">Action</a></li>
                <li><a href="javascript:void(0)">Another action</a></li>
                <li><a href="javascript:void(0)">Something else here</a></li>
                <li className="divider"></li>
                <li><a href="javascript:void(0)">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>;
  }
});
