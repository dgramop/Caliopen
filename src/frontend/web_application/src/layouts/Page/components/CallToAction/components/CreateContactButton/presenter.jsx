import React, { PropTypes } from 'react';
import { withTranslator } from '@gandi/react-translate';
import ActionButton from '../ActionButton';
import Icon from '../../../../../../components/Icon';

const Presenter = ({ translator: { __ }, ...props }) => (
  <ActionButton {...props}>
    <Icon type="user" /> {__('call-to-action.action.create_contact')}
  </ActionButton>
);

Presenter.propTypes = {
  translator: PropTypes.shape({ __: PropTypes.func.isRequired }),
};

export default withTranslator({ propsNamespace: 'translator' })(Presenter);
