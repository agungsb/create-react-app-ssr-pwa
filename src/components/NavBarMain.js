import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LiNavLink from './LiNavLink';
import MainMenus from './../utils/mainMenus';

export default class NavBarMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: MainMenus
    };
    this.handleScroll = this._handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  _handleScroll() {
    const doc = document.documentElement;
    const st = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (st > 280) {
      this._navbarChange.className = 'navbar navbar-change navbar-fixed-top affix';
    } else {
      this._navbarChange.className = 'navbar navbar-change navbar-fixed-top affix-top';
    }
  }

  render() {
    const { menus } = this.state;
    return (
      <div>
        <div is off-canvas="menu-slidebar right push">
          <ul className="nav nav-pills nav-stacked">
            {menus.length > 0 && menus.map((menu) =>
              <LiNavLink
                to={menu.link}
                isIndexLink={menu.isIndexLink}
                isDropdown={menu.isDropdown}
                className="btn-default-color"
                key={menu.id}>{menu.label}</LiNavLink>
            )}
          </ul>
        </div>
        <nav
          is
          canvas=""
          class="navbar navbar-change navbar-fixed-top affix-top"
          ref={ref => { this._navbarChange = ref; }}>
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggle collapsed">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <NavLink
                className="navbar-brand logo"
                to="/">
                <span style={{ backgroundColor: '#005d63', backgroundImage: 'none' }} />
              </NavLink>
            </div>
            <div className="nav-show">
              <ul className="nav navbar-nav navbar-left">
                {menus.length > 0 && menus.map((menu) => {
                  let element = null;
                  if (!menu.mobile) {
                    element = (<LiNavLink
                      to={menu.link}
                      isIndexLink={menu.isIndexLink}
                      isDropdown={menu.isDropdown}
                      className="btn-default-color"
                      key={menu.id}>{menu.label}</LiNavLink>);
                  }
                  return element;
                }
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
