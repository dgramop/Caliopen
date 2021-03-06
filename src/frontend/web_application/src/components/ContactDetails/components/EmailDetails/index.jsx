import React, { Component, PropTypes } from 'react';
import Icon from '../../../Icon';
import Button from '../../../Button';
import RemoteIdentityEmail from '../RemoteIdentityEmail';
import './style.scss';

class EmailDetails extends Component {
  static propTypes = {
    email: PropTypes.shape({}),
    remoteIdentity: PropTypes.shape({}),
    editMode: PropTypes.bool,
    onDelete: PropTypes.func,
    allowConnectRemoteEntity: PropTypes.bool,
    onConnectRemoteIdentity: PropTypes.func,
    onDisconnectRemoteIdentity: PropTypes.func,
    __: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      connectIdentityEditMode: false,
    };
    this.renderConnectIdentityToggleButton = this.renderConnectIdentityToggleButton.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggleConnectIdentityForm = this.handleToggleConnectIdentityForm.bind(this);
    this.initTranslations();
  }

  handleToggleConnectIdentityForm() {
    this.setState(prevState => ({ connectIdentityEditMode: !prevState.connectIdentityEditMode }));
  }

  initTranslations() {
    const { __ } = this.props;
    this.emailTypesTranslations = {
      work: __('contact.email_type.work'),
      home: __('contact.email_type.home'),
      other: __('contact.email_type.other'),
    };
  }

  handleDelete() {
    const { onDelete, email } = this.props;
    onDelete({ email });
  }

  renderConnectIdentityToggleButton() {
    const { remoteIdentity, __ } = this.props;

    return (
      <Button
        onClick={this.handleToggleConnectIdentityForm}
        success={remoteIdentity && remoteIdentity.connected}
      >
        <Icon type="plug" />
        {' '}
        <Icon type={this.state.connectIdentityEditMode ? 'caret-up' : 'caret-down'} />
        <span className="show-for-sr">{__('account.action.connect_identity')}</span>
      </Button>
    );
  }

  renderDeleteButton() {
    const { __ } = this.props;

    return (
      <Button onClick={this.handleDelete} alert>
        <Icon type="remove" />
        <span className="show-for-sr">{__('contact.action.delete_contact_detail')}</span>
      </Button>
    );
  }

  render() {
    const {
      allowConnectRemoteEntity,
      email,
      remoteIdentity,
      editMode,
      onConnectRemoteIdentity,
      onDisconnectRemoteIdentity,
      __,
    } = this.props;

    const address = !email.is_primary ?
      email.address :
      (<strong title={__('contact.primary')}>{email.address}</strong>);

    return (
      <span className="m-email-details">
        <Icon className="m-email-details__icon" type="envelope" />
        {address}
        {' '}
        <small><em>{this.emailTypesTranslations[email.type]}</em></small>
        {allowConnectRemoteEntity && this.renderConnectIdentityToggleButton()}
        {editMode && this.renderDeleteButton()}
        {this.state.connectIdentityEditMode && (
          <RemoteIdentityEmail
            remoteIdentity={remoteIdentity}
            contactSubObjectId={email.email_id}
            onConnect={onConnectRemoteIdentity}
            onDisconnect={onDisconnectRemoteIdentity}
            __={__}
          />
        )}
      </span>
    );
  }
}

export default EmailDetails;
