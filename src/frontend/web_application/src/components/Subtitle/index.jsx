import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './style.scss';

const Subtitle = ({ children, actions, hr, className, ...props }) => (
  <div className={classnames('m-subtitle', { 'm-subtitle--hr': hr }, className)} {...props}>
    <h3 className="m-subtitle__text">{children}</h3>
    { actions && <span className="m-subtitle__actions">{actions}</span> }
  </div>
);

Subtitle.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.node,
  hr: PropTypes.bool,
  className: PropTypes.string,
};

export default Subtitle;
