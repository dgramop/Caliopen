import React, { Component } from 'react';
import ContactList from './components/ContactList';
import ContactFilters from './components/ContactFilters';
import TagList from './components/TagList';
import Spinner from '../../components/Spinner';

import './style.scss';

const defaultSortDir = 'ASC';
const defaultSortView = 'given_name';
const contacts = [
  /* eslint-disable */
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "92d3727a-eefc-4537-b879-85f1c9d197bb", "date_insert": "2016-05-09T15:01:42.381000", "identities": [], "user_id": "124489c3-fc63-4e41-b490-5f4dd317aa50", "title": "Bender", "additional_name": "", "date_update": null, "organizations": [], "ims": [], "given_name": "Bender Bending", "name_prefix": null, "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Robots', 'Planet Express'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-00000001", "is_primary": 0, "date_update": null, "label": null, "address": "bender@caliopen.local", "date_insert": "2016-05-09T15:01:42.116000", "type": "other"}], "family_name": "Rodriguez", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "0ba2e346-e4f8-4c45-9adc-eeb1d42fuie0", "date_insert": "2016-05-09T15:01:43.381000", "identities": [], "user_id": "344489c3-fc63-4e41-b490-5f4dd317aa51", "title": "Zoidberg", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "John", "name_prefix": "Dr", "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Planet Express', 'Aliens'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-00000002", "is_primary": 0, "date_update": null, "label": null, "address": "zoidberg@caliopen.local", "date_insert": "2016-05-09T15:01:43.116000", "type": "other"}], "family_name": "Zoidberg", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "19c3ui42-e3ba-46e7-984f-4c3e8de11c05", "date_insert": "2016-05-09T15:01:40.034000", "identities": [], "user_id": "344489c3-tref-4e41-b490-5f4dd317aa52", "title": "Leela", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "Leela", "name_prefix": null, "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Planet Express'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-00000100", "is_primary": 0, "date_update": null, "label": null, "address": "leela@john.doe", "date_insert": "2016-05-09T15:01:43.116000", "type": "other"}], "family_name": "Turanga", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "92d3907a-eeui-4537-b229-85f1c9d197bb", "date_insert": "2016-05-09T15:01:42.381000", "identities": [], "user_id": "344489c3-fc63-4e41-b490-5f4dd1234553", "title": "Fry", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "Philip J.", "name_prefix": null, "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Humans', 'Planet Express'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-00002001", "is_primary": 0, "date_update": null, "label": null, "address": "fry@caliopen.local", "date_insert": "2016-05-09T15:01:42.116000", "type": "other"}], "family_name": "Fry", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "0ba2e346-e4f8-4c45-999c-eeb1d42f07e0", "date_insert": "2016-05-09T15:01:43.381000", "identities": [], "user_id": "344489c3-gtpu-4e41-b490-5f4dd317aa54", "title": "Amy", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "Amy", "name_prefix": null, "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Humans', 'Planet Express'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-00000022", "is_primary": 0, "date_update": null, "label": null, "address": "amy@caliopen.local", "date_insert": "2016-05-09T15:01:43.116000", "type": "other"}], "family_name": "Wong", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "19c3ce42-e3ba-46e7-902f-4cui8de11c05", "date_insert": "2016-05-09T15:01:40.034000", "identities": [], "user_id": "344489c3-hyzc-4e41-b490-5f4dd317aa55", "title": "Farnsworth", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "Hubert J.", "name_prefix": "Professor", "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Humans', 'Planet Express'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-00000120", "is_primary": 0, "date_update": null, "label": null, "address": "professor@planet.express", "date_insert": "2016-05-09T15:01:43.116000", "type": "other"}], "family_name": "Farnsworth", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "9ui3907a-eefc-4537-b229-85f1c9d197bb", "date_insert": "2016-05-09T15:01:42.381000", "identities": [], "user_id": "344489c3-bjsq-4e41-b490-5f4dd317aa53", "title": "Lrrr", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "Lrrr", "name_prefix": "Emperor", "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Aliens'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-02000001", "is_primary": 0, "date_update": null, "label": null, "address": "lrrr@caliopen.local", "date_insert": "2016-05-09T15:01:42.116000", "type": "other"}], "family_name": "", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "98o3907a-eefc-6724-bv28-85f1c9d197bb", "date_insert": "2016-05-09T15:01:42.381000", "identities": [], "user_id": "344489c3-olds-4e41-b490-5f4dd317aa53", "title": "Stephen Hawking", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "Stephen", "name_prefix": "Dr", "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Humans'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-20020001", "is_primary": 0, "date_update": null, "label": null, "address": "stephen@caliopen.local", "date_insert": "2016-05-09T15:01:42.116000", "type": "other"}], "family_name": "Hawking", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "0327707a-eefc-6724-bv28-85f1c9d197bb", "date_insert": "2016-05-09T15:01:42.381000", "identities": [], "user_id": "355489c3-olds-4e41-b490-5f4dd317aa53", "title": "Kif", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "Kif", "name_prefix": null, "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Aliens'], "infos": {}, "emails": [{"email_id": "0327707a-4398-4bd4-9bd5-20020001", "is_primary": 0, "date_update": null, "label": null, "address": "kroker@caliopen.local", "date_insert": "2016-05-09T15:01:42.116000", "type": "other"}], "family_name": "Kroker", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "5488707a-eefc-6724-bv28-85f1c9d197bb", "date_insert": "2016-05-09T15:01:42.381000", "identities": [], "user_id": "356489c3-olds-4e41-b490-5f4dd317aa53", "title": "Zapp Brannigan", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "Zapp", "name_prefix": null, "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Humans'], "infos": {}, "emails": [{"email_id": "5488707a-4398-4bd4-9bd5-20020001", "is_primary": 0, "date_update": null, "label": null, "address": "zapp@caliopen.local", "date_insert": "2016-05-09T15:01:42.116000", "type": "other"}], "family_name": "Brannigan", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "19c3ce42-e3ba-46e7-902f-4cui8d", "date_insert": "2016-05-09T15:01:40.034000", "identities": [], "user_id": "340089c3-hyzc-4e41-b490-5f4dd317a", "title": "Chef Elzar", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "Elzar", "name_prefix": null, "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Aliens'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-00000120", "is_primary": 0, "date_update": null, "label": null, "address": "francine@doop", "date_insert": "2016-05-09T15:01:43.116000", "type": "other"}], "family_name": "", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "a3ce42-e3ba-46e7-902f-4cfdsfsui8d", "date_insert": "d016-05-09T15:01:40.034000", "identities": [], "user_id": "40489c3-hyzc-4e41-b490-5f4dd317a", "title": "Scruffy", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "Scruffy", "name_prefix": null, "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Humans', 'Planet Express'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-00000120", "is_primary": 0, "date_update": null, "label": null, "address": "algore@caliopen.local", "date_insert": "2016-05-09T15:01:43.116000", "type": "other"}], "family_name": "Scruffington", "name_suffix": null, "avatar": "avatar.png", "public_keys": [],}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "a3ce42-e3ba-46e7-dfsd902f-4cui8d", "date_insert": "d016-05-09T15:01:40.034000", "identities": [], "user_id": "04489c3-hyzc-4e41-b490-5f4dd317a", "title": "Hermès", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "Hermès", "name_prefix": null, "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Humans', 'Planet Express'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-00000120", "is_primary": 0, "date_update": null, "label": null, "address": "Conrad@caliopen.local", "date_insert": "2016-05-09T15:01:43.116000", "type": "other"}], "family_name": "Conrad", "name_suffix": null, "avatar": "avatar.png", "public_keys": [],}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "92d3727a-eefc-4537-b879-85f1c7bb", "date_insert": "2016-05-09T15:01:42.381000", "identities": [], "user_id": "124489c3-fc63-4e41-b490-5f4dd317aa50", "title": "Flexo", "additional_name": "", "date_update": null, "organizations": [], "ims": [], "given_name": "Flexo", "name_prefix": null, "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Robots'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-00900001", "is_primary": 0, "date_update": null, "label": null, "address": "flexo@caliopen.local", "date_insert": "2016-05-09T15:01:42.116000", "type": "other"}], "family_name": "", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "0ba2e346-e4f8-4c45-9adc-eeb1die0", "date_insert": "2016-05-09T15:01:43.381000", "identities": [], "user_id": "344489c3-fc63-4e41-b490-5f4dd317aa51", "title": "Calculon", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "Antonio", "name_prefix": "", "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Robots'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-90000002", "is_primary": 0, "date_update": null, "label": null, "address": "calc@caliopen.local", "date_insert": "2016-05-09T15:01:43.116000", "type": "other"}], "family_name": "Calculon", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "19c3ui42-e3ba-46e7-984f-4c3e8c05", "date_insert": "2016-05-09T15:01:40.034000", "identities": [], "user_id": "344489c3-tref-4e41-b490-5f4dd317aa52", "title": "Mom", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "Carol", "name_prefix": null, "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Humans'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-00900100", "is_primary": 0, "date_update": null, "label": null, "address": "mom@john.doe", "date_insert": "2016-05-09T15:01:43.116000", "type": "other"}], "family_name": "", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "92d3907a-eeui-4537-b229-85f197bb", "date_insert": "2016-05-09T15:01:42.381000", "identities": [], "user_id": "344489c3-fc63-4e41-b490-5f4dd1234553", "title": "Morbo the Annihilator", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "Morbo", "name_prefix": null, "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Aliens'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-00002901", "is_primary": 0, "date_update": null, "label": null, "address": "morbo@caliopen.local", "date_insert": "2016-05-09T15:01:42.116000", "type": "other"}], "family_name": "", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "0ba2e346-e4f8-4c45-999c-eeb107e0", "date_insert": "2016-05-09T15:01:43.381000", "identities": [], "user_id": "344489c3-gtpu-4e41-b490-5f4dd317aa54", "title": "Mr. Panucci", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "", "name_prefix": null, "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Humans'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-00900022", "is_primary": 0, "date_update": null, "label": null, "address": "Panucci@caliopen.local", "date_insert": "2016-05-09T15:01:43.116000", "type": "other"}], "family_name": "Panucci", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "19c3ce42-e3ba-46e7-902f-4cuie11c05", "date_insert": "2016-05-09T15:01:40.034000", "identities": [], "user_id": "344489c3-hyzc-4e41-b490-5f4dd317aa55", "title": "Nibbler", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "Nibbler", "name_prefix": "Lord", "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Aliens'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-0009120", "is_primary": 0, "date_update": null, "label": null, "address": "nib@planet.express", "date_insert": "2016-05-09T15:01:43.116000", "type": "other"}], "family_name": "", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "9ui3907a-eefc-4537-b229-f1c9d19b", "date_insert": "2016-05-09T15:01:42.381000", "identities": [], "user_id": "344489c3-bjsq-4e41-b490-5f4dd317aa53", "title": "Hypnotoad", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "", "name_prefix": "", "tags": [], "deleted": 0, "privacy_index": 0, "tags": [], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-02000901", "is_primary": 0, "date_update": null, "label": null, "address": "Hypnotoad@caliopen.local", "date_insert": "2016-05-09T15:01:42.116000", "type": "other"}], "family_name": "", "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  {"contact": {"addresses": [], "privacy_features": {}, "phones": [], "contact_id": "98o3907a-eefc-6724-bv28-85d197bb", "date_insert": "2016-05-09T15:01:42.381000", "identities": [], "user_id": "344489c3-olds-4e41-b490-5f4dd317aa53", "title": "Animatronio", "additional_name": null, "date_update": null, "organizations": [], "ims": [], "given_name": "Animatronio", "name_prefix": "", "tags": [], "deleted": 0, "privacy_index": 0, "tags": ['Robots'], "infos": {}, "emails": [{"email_id": "93f03145-4398-4bd4-9bd5-29020001", "is_primary": 0, "date_update": null, "label": null, "address": "animatronio@caliopen.local", "date_insert": "2016-05-09T15:01:42.116000", "type": "other"}], "family_name": null, "name_suffix": null, "avatar": "avatar.png", "public_keys": []}},
  /* eslint-enable */
];

function getOrderedContacts(contactList, sortView, sortDir) {
  const sortContacts = contactList.filter(c => c.contact[sortView] != null);
  const sortNullContacts = contactList.filter(c => c.contact[sortView] == null);

  if (sortDir === 'ASC') {
    sortContacts.sort((a, b) =>
      a.contact[sortView].localeCompare(b.contact[sortView]));
  }
  if (sortDir === 'DESC') {
    sortContacts.sort((a, b) =>
      b.contact[sortView].localeCompare(a.contact[sortView]));
  }

  return sortNullContacts.concat(sortContacts);
}

function getFilteredContacts(contactList, activeTag) {
  let filteredContacts = contactList.filter(c => c.contact.tags.includes(activeTag));
  if (activeTag === '') { filteredContacts = contactList; }

  return filteredContacts;
}

class ContactBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contactList: [],
      tags: [],
      activeTag: '',
      sortDir: '',
      sortView: '',
      isFetching: true,
    };
  }

  componentDidMount() {
    this.loadTags();
    setTimeout(() => {
      this.loadContacts();
    }, 200);
  }

  loadContacts() {
    this.setState({
      contactList: contacts,
      sortDir: defaultSortDir,
      sortView: defaultSortView,
      isFetching: false,
    });
  }

  loadTags() {
    const tags = [];
    contacts.map(c => c.contact.tags.map(tag => tags.push(tag)));
    this.setState({
      tags,
    });
  }

  render() {
    const handleTagClick = (event) => {
      this.setState({
        activeTag: event.target.id,
      });
    };

    const handleSortDirChange = (event) => {
      this.setState({
        sortDir: event.target.value,
      });
    };

    const handleSortViewChange = (event) => {
      this.setState({
        sortView: event.target.value,
      });
    };

    const noop = str => str;

    return (
      <div className="l-contact-book">
        <div className="l-contact-book__filters">
          <ContactFilters
            onSortDirChange={handleSortDirChange}
            onSortViewChange={handleSortViewChange}
            sortDir={this.state.sortDir}
            sortView={this.state.sortView}
            __={noop}
          />
        </div>
        <div className="l-contact-book__contacts">
          <div className="l-contact-book__tags">
            <TagList
              tags={this.state.tags}
              activeTag={this.state.activeTag}
              onTagClick={handleTagClick}
              nbContactsAll={contacts.length}
            />
          </div>
          <div className="l-contact-book__contact-list">
            <Spinner isLoading={this.state.isFetching} />
            <ContactList
              contacts={
                getOrderedContacts(
                  getFilteredContacts(this.state.contactList, this.state.activeTag),
                  this.state.sortView,
                  this.state.sortDir
              )}
              sortView={this.state.sortView}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactBook;
