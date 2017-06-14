import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default class LiNavLink extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    isDropdown: PropTypes.bool.isRequired,
    isIndexLink: PropTypes.bool.isRequired,
    to: PropTypes.string.isRequired
  }

  static defaultProps = {
    isDrodpown: false,
    isIndexLink: false
  }

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      openDropdown: false,
    };
    this.handleChange = this._handleChange.bind(this);
    this.toggleDropdown = this._toggleDropdown.bind(this);
    this.renderNav = this._renderNav.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (this.state.openDropdown) {
        this.setState({ openDropdown: false });
      }
    });
  }

  _handleChange = () => alert('change!');

  _toggleDropdown(event) {
    event.preventDefault();
    this.setState({ openDropdown: !this.state.openDropdown });
  }

  _renderNav() {
    const { children, isDropdown, isIndexLink } = this.props;
    const { openDropdown } = this.state;
    let element;
    if (isDropdown) {
      element = (
        <div className={`dropdown btn-group ${openDropdown ? 'open' : ''}`}>
          <a
            href=""
            className="btn-default-color"
            onClick={this.toggleDropdown}>
            {children}
          </a>
          <ul className="dropdown-menu dropdown-menu-right">
            <li>
              <NavLink to="/subunit">Subunit Band</NavLink>
              <NavLink to="/subunitSanggar">Subunit Sanggar</NavLink>
            </li>
          </ul>
        </div>
      );
    } else {
      if (isIndexLink) { // eslint-disable-line
        element = (<NavLink {...this.props} exact>{children}</NavLink>);
      } else {
        element = (<NavLink {...this.props}>{children}</NavLink>);
      }
    }
    return element;
  }

  render() {
    const isActive = this.context.router.route.location.pathname === this.props.to;
    const className = isActive ? 'active' : '';

    return (
      <li className={className}>
        {this.renderNav()}
      </li>
    );
  }
}
