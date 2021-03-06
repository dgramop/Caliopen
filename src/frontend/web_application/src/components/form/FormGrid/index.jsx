import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './style.scss';

export const FormColumn = ({ className, bottomSpace, size, fluid = false, ...props }) => {
  const colClassName = classnames('m-form-grid__column', {
    'm-form-grid__column--fluid': fluid,
    'm-form-grid__column--bottom-space': bottomSpace,
    'm-form-grid__column--shrink': size === 'shrink',
    'm-form-grid__column--small': size === 'small',
    'm-form-grid__column--medium': size === 'medium',
    'm-form-grid__column--large': size === 'large',
  }, className);

  return (
    <div className={colClassName} {...props} />
  );
};

FormColumn.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['shrink', 'small', 'medium', 'large']),
  fluid: PropTypes.bool,
  bottomSpace: PropTypes.bool,
};

export const FormRow = ({ className, reverse, ...props }) => {
  const rowClassName = classnames('m-form-grid__row', {
    'm-form-grid__row--reverse': reverse,
  }, className);

  return (
    <div className={rowClassName} {...props} />
  );
};

FormRow.propTypes = {
  className: PropTypes.string,
  reverse: PropTypes.bool,
};

const Form = ({ className, ...props }) => (
  <form className={classnames('m-form-grid', className)} {...props} />
);

Form.propTypes = {
  className: PropTypes.string,
};

export default Form;
