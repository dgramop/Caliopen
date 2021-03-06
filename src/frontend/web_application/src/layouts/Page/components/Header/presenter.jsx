import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Button from '../../../../components/Button';
import Icon from '../../../../components/Icon';
import Brand from '../../../../components/Brand';
import SearchField from './components/SearchField';
import UserMenu from './components/UserMenu';
import './style.scss';

class Header extends Component {
  static propTypes = {
    __: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      searchAsDropdown: false,
    };
    this.handleClickToggleSearchAsDropdown = this.handleClickToggleSearchAsDropdown.bind(this);
  }

  handleClickToggleSearchAsDropdown() {
    this.setState({
      searchAsDropdown: !this.state.searchAsDropdown,
    });
  }
  render() {
    const { __ } = this.props;

    const searchClassName = classnames(
      'l-header__search',
      { 'l-header__search--as-dropdown': this.state.searchAsDropdown }
    );

    return (
      <div className="l-header">
        <div className="l-header__wrapper">
          <div className="l-header__brand">
            <span className="show-for-small-only">
              <button
                aria-label={__('header.menu.toggle-navigation')}
                data-toggle="left_off_canvas"
                type="button"
                className="l-header__menu-icon menu-icon"
              />
            </span>
            <Link to="/">
              <Brand className="l-header__brand-icon" />
            </Link>
          </div>
          <div className="l-header__search-toggler show-for-small-only">
            <Button
              aria-label={__('header.menu.toggle-search-form')}
              onClick={this.handleClickToggleSearchAsDropdown}
            ><Icon type="search" /></Button>
          </div>
          <div className={searchClassName}>
            <div className="l-header__m-search-field"><SearchField /></div>
          </div>
          <div className="l-header__user"><UserMenu /></div>
        </div>
      </div>
    );
  }
}

export default Header;
