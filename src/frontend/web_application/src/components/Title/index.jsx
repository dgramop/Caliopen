import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './style.scss';

const Title = ({ children, actions, hr, className, ...props }) => {
  const titleClassName = classnames('m-title', {
    'm-title--hr': hr,
  }, className);

  return (
    <div className={titleClassName} {...props}>
      <h2 className="m-title__text">{children}</h2>
      { actions && <span className="m-title__actions">{actions}</span> }
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.node,
  hr: PropTypes.bool,
  className: PropTypes.string,
};

export default Title;
