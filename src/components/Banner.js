/* eslint-disable */
import React, { Component } from 'react';
import LiNavLink from './LiNavLink';
import BannerMenus from './../utils/bannerMenus';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: BannerMenus
    };
  }
  render() {
    const { menus } = this.state;
    return (
      <div className="banner" style={{ backgroundImage: `url(/img/pict_about.jpg)` }}>
        <div className="item-abs item-bottom">
          <nav className="navbar hidden-xs hidden-sm">
            <div className="container">
              <div className="text-center">
                <ul className="list-inline">
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
            </div>
          </nav>
        </div>
      </div>
    );
  }
}