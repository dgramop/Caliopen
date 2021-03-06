import React, { PropTypes } from 'react';
import classnames from 'classnames';
import BaseLink from '../../../../../../../../components/Link';
import './style.scss';

const Link = ({ className, ...props }) => {
  const linkProps = {
    ...props,
    className: classnames('m-navbar-link', className),
  };

  return (
    <BaseLink noDecoration {...linkProps} />
  );
};

Link.propTypes = {
  className: PropTypes.string,
};

export default Link;
