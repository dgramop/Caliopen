import React, { Component, PropTypes } from 'react';
import { Link } from '../Navbar';
import BaseLink from '../../../../../../components/Link';
import Icon from '../../../../../../components/Icon';
import Button from '../../../../../../components/Button';
import Dropdown, { withDropdownControl } from '../../../../../../components/Dropdown';
import VerticalMenu, { VerticalMenuItem } from '../../../../../../components/VerticalMenu';
import { getLabels } from '../../../../../../services/application-manager';
import './style.scss';

const DropdownControl = withDropdownControl(Button);

class ApplicationSwitcher extends Component {
  static propTypes = {
    applications: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    currentApplication: PropTypes.shape({
      route: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    __: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
    };
  }

  render() {
    const onDropdownToggle = () => {
      this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
    };

    const { __ } = this.props;
    const applicationLabels = getLabels(__);

    return (
      <div className="m-application-switcher">
        <Link to={this.props.currentApplication.route}>
          <Icon type={this.props.currentApplication.icon} />
          {' '}
          {applicationLabels[this.props.currentApplication.name]}
        </Link>
        <DropdownControl
          toggle="co-application-switcher"
          className="dropdown-float-right m-application-switcher__toggler"
        >
          <span className="show-for-sr">{__('application_switcher.action.choose')}</span>
          <Icon type={this.state.isDropdownOpen ? 'caret-up' : 'caret-down'} />
        </DropdownControl>
        <Dropdown
          id="co-application-switcher"
          closeOnClick
          position="bottom"
          className="m-application-switcher__dropdown"
          onToggle={onDropdownToggle}
        >
          <VerticalMenu>
            {
              this.props.applications.filter(app => app !== this.props.currentApplication)
                .map(application => (
                  <VerticalMenuItem key={application.route}>
                    <BaseLink to={application.route} button expanded>
                      <Icon type={application.icon} />
                      {' '}
                      {applicationLabels[application.name]}
                    </BaseLink>
                  </VerticalMenuItem>
                ))
            }
          </VerticalMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ApplicationSwitcher;
