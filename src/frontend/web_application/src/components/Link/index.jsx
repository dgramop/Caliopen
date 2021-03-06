import React, { PropTypes } from 'react';
import { Link as BaseLink } from 'react-router';
import classnames from 'classnames';
import './style.scss';

const Link = ({ noDecoration, className, button, expanded, active = false, ...props }) => {
  const linkProps = {
    ...props,
    className: classnames(
      className,
      'm-link',
      {
        'm-link--button': button,
        'm-link--expanded': expanded,
        'm-link--text': !button && !noDecoration,
        'm-link--active': active,
      }
    ),
  };

  return <BaseLink {...linkProps} />;
};

Link.propTypes = {
  noDecoration: PropTypes.bool,
  className: PropTypes.string,
  button: PropTypes.bool,
  expanded: PropTypes.bool,
  active: PropTypes.bool,
};

export default Link;
