import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';
import classNames from 'classnames';

import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import SortableTable from '@department-of-veterans-affairs/formation/SortableTable';

import {
  fetchFolder,
  moveMessageToFolder,
  openAlert,
  openMoveToNewFolderModal,
  setDateRange,
  setSearchParam,
  toggleAdvancedSearch,
  toggleFolderMoveTo,
  toggleFolderNav
} from '../actions';

import ComposeButton from '../components/ComposeButton';
import MessageNav from '../components/MessageNav';
import MessageSearch from '../components/MessageSearch';
import MoveTo from '../components/MoveTo';
import { formattedDate } from '../utils/helpers';

export class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.buildSearchQuery = this.buildSearchQuery.bind(this);
    this.getQueryParams = this.getQueryParams.bind(this);
    this.getRequestedFolderId = this.getRequestedFolderId.bind(this);
    this.formattedSortParam = this.formattedSortParam.bind(this);
    this.handlePageSelect = this.handlePageSelect.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.makeMessageNav = this.makeMessageNav.bind(this);
    this.makeMessagesTable = this.makeMessagesTable.bind(this);
    this.makeSortMenu = this.makeSortMenu.bind(this);
  }

  componentDidMount() {
    if (!this.props.loading.folder) {
      const id = this.getRequestedFolderId();
      const query = this.getQueryParams();
      this.props.fetchFolder(id, query);
    }
  }

  componentDidUpdate() {
    const redirect = this.props.redirect;

    // In the typical case of redirects, we go to the most recent folder
    // and proceed with fetching its data. If that’s not the case,
    // go ahead to the URL specified in the redirect.
    if (redirect && redirect.url !== this.props.location.pathname) {
      this.context.router.push({
        pathname: redirect.url,
        state: { preserveAlert: true }
      });
      return;
    }

    if (!this.props.loading.folder) {
      const lastRequest = this.props.lastRequestedFolder;
      const requestedId = this.getRequestedFolderId();
      const query = this.getQueryParams();

      // Only proceed with fetching the requested folder
      // if a redirect has been set (as after moving a message)
      // or if it’s not the same as the most recent request.
      const shouldFetchFolder =
        redirect ||
        !lastRequest ||
        requestedId !== lastRequest.id ||
        !_.isEqual(query, lastRequest.query);

      if (shouldFetchFolder) {
        this.props.fetchFolder(requestedId, query);
      }
    }
  }

  getRequestedFolderId() {
    const folderName = this.props.params.folderName;
    const folder = this.props.folders.get(folderName);
    return folder ? folder.folderId : null;
  }

  getQueryParams() {
    const queryParams = [
      'page',
      'sort',
      'filter[[recipient_name][eq]]',
      'filter[[recipient_name][match]]',
      'filter[[sent_date][gteq]]',
      'filter[[sent_date][lteq]]',
      'filter[[sender_name][eq]]',
      'filter[[sender_name][match]]',
      'filter[[subject][eq]]',
      'filter[[subject][match]]'
    ];
    return _.pick(this.props.location.query, queryParams);
  }

  formattedSortParam(value, order) {
    const formattedValue = _.snakeCase(value);
    const sort = order === 'DESC'
      ? `-${formattedValue}`
      : formattedValue;
    return sort;
  }

  buildSearchQuery(object) {
    const filters = {};
    const fromValue = _.get(object, 'from.field.value');
    const toValue = _.get(object, 'to.field.value');
    const subjectValue = _.get(object, 'subject.field.value');
    const startDate = _.get(object, 'dateRange.start');
    const endDate = _.get(object, 'dateRange.end');

    if (fromValue) {
      const fromExact = object.from.exact ? 'eq' : 'match';
      filters[`filter[[sender_name][${fromExact}]]`] = fromValue;
    }

    if (toValue) {
      const fromExact = object.from.exact ? 'eq' : 'match';
      filters[`filter[[recipient_name][${fromExact}]]`] = toValue;
    }

    if (subjectValue) {
      const subjectExact = object.subject.exact ? 'eq' : 'match';
      filters[`filter[[subject][${subjectExact}]]`] = subjectValue;
    }

    if (startDate) {
      filters['filter[[sent_date][gteq]]'] = startDate.format();
    }

    if (endDate) {
      filters['filter[[sent_date][lteq]]'] = endDate.format();
    }

    return filters;
  }

  handlePageSelect(page) {
    this.context.router.push({
      ...this.props.location,
      query: { ...this.props.location.query, page }
    });
  }

  handleSort(value, order) {
    const sort = this.formattedSortParam(value, order);
    this.context.router.push({
      ...this.props.location,
      query: { ...this.props.location.query, sort }
    });
  }

  handleSearch(searchParams) {
    const filters = this.buildSearchQuery(searchParams);

    this.context.router.push({
      ...this.props.location,
      query: filters
    });
  }

  makeMessageNav() {
    const { pagination } = this.props;
    const { currentPage, perPage, totalEntries, totalPages } = pagination;

    if (_.isEmpty(pagination) || !totalEntries) return null;

    const startCount = 1 + (currentPage - 1) * perPage;
    const endCount = Math.min(totalEntries, currentPage * perPage);
    const currentRange = `${startCount} - ${endCount}`;

    return (
      <MessageNav
        currentRange={currentRange}
        messageCount={totalEntries}
        onItemSelect={this.handlePageSelect}
        itemNumber={currentPage}
        totalItems={totalPages}/>
    );
  }

  makeSortMenu() {
    if (!this.props.messages || this.props.messages.length === 0) {
      return null;
    }

    const fields = [
      { label: 'most recent', value: 'sentDate', order: 'DESC' },
      { label: 'subject line', value: 'subject', order: 'ASC' },
      { label: 'sender', value: 'senderName', order: 'ASC' }
    ];

    const folderName = this.props.attributes.name;
    const isDraftsFolder = folderName === 'Drafts';
    const isSentFolder = folderName === 'Sent';

    if (isDraftsFolder || isSentFolder) {
      fields[2] = { label: 'recipient', value: 'recipientName', order: 'ASC' };

      // Disable sorting by 'Date' for Drafts. There is no
      // save date available, and drafts don’t have sent dates.
      if (isDraftsFolder) {
        fields.splice(0, 1);
      }
    }

    const sortOptions = fields.map(field => {
      return (
        <option
          key={field.value}
          value={field.value}
          data-order={field.order}>
          Sort by {field.label}
        </option>
      );
    });

    const handleSort = (event) => {
      const menu = event.target;
      const selectedIndex = menu.selectedIndex;
      const sortValue = menu.value;
      const sortOrder = menu[selectedIndex].dataset.order;
      this.handleSort(sortValue, sortOrder);
    };

    return (
      <div className="msg-folder-sort-select">
        <label htmlFor="folderSort" className="usa-sr-only">Sort by</label>
        <select
          id="folderSort"
          value={this.props.sort.value}
          onChange={handleSort}>
          {sortOptions}
        </select>
      </div>
    );
  }

  makeMessagesTable() {
    const { attributes, filter, messages } = this.props;

    if (!messages || messages.length === 0) {
      if (filter) {
        return <p className="msg-nomessages">No messages found for your search.</p>;
      }
      return <p className="msg-nomessages">You have no messages in this folder.</p>;
    }

    // Create sortable table headers.

    const fields = [
      { label: 'From', value: 'senderName' },
      { label: 'Subject line', value: 'subject' },
      { label: '', value: 'hasAttachment', nonSortable: true },
      { label: 'Date', value: 'sentDate' }
    ];

    const { folderId, name: folderName } = attributes;
    const isDraftsFolder = folderName === 'Drafts';
    const isSentFolder = folderName === 'Sent';
    const markUnread = folderId >= 0;

    if (isDraftsFolder || isSentFolder) {
      fields[0] = { label: 'To', value: 'recipientName' };

      // Hide 'Date' column for Drafts. There is no save date
      // available, and drafts don’t have sent dates.
      if (isDraftsFolder) {
        fields.pop();
      }
    } else {
      fields.push({ label: '', value: 'moveToButton', nonSortable: true });
    }

    // Create sortable table rows.

    const folders = [];
    this.props.folders.forEach(v => {
      folders.push(v);
    });

    const makeMessageLink = (content, id) => {
      return <Link to={`/${this.props.params.folderName}/${id}`}>{content}</Link>;
    };

    const data = messages.map(message => {
      const id = message.messageId;
      const rowClass = classNames({
        'messaging-message-row': true,
        'messaging-message-row--unread':
          markUnread && message.readReceipt !== 'READ'
      });

      const moveToButton = (
        <MoveTo
          currentFolder={attributes}
          folders={folders}
          isOpen={id === this.props.moveToId}
          messageId={id}
          onChooseFolder={this.props.moveMessageToFolder}
          onCreateFolder={this.props.openMoveToNewFolderModal}
          onToggleMoveTo={() => this.props.toggleFolderMoveTo(id)}/>
      );

      const attachmentIcon = message.attachment ? (<i className="fa fa-paperclip" aria-label="Message has an attachment"></i>) : null;

      return {
        id,
        rowClass,
        hasAttachment: attachmentIcon,
        recipientName: makeMessageLink(message.recipientName, id),
        senderName: makeMessageLink(message.senderName, id),
        subject: makeMessageLink(message.subject, id),
        sentDate: makeMessageLink(formattedDate(message.sentDate), id),
        moveToButton
      };
    });

    return (
      <SortableTable
        className="usa-table-borderless va-table-list msg-table-list"
        currentSort={this.props.sort}
        data={data}
        fields={fields}
        onSort={this.handleSort}/>
    );
  }

  render() {
    if (this.props.loading.folder) {
      return <LoadingIndicator message="Loading the folder..."/>;
    }

    const { folderId, name: folderName } = this.props.attributes;
    let componentContent;

    if (folderId === undefined) {
      const lastRequest = this.props.lastRequestedFolder;

      if (lastRequest && lastRequest.id !== null) {
        const reloadFolder = () => {
          this.props.fetchFolder(lastRequest.id, lastRequest.query);
        };

        componentContent = (
          <div className="columns">
            <p className="msg-loading-error">
              Could not retrieve the folder.&nbsp;
              <a className="msg-reload" onClick={reloadFolder}>
                Click here to try again.
              </a>
            </p>
          </div>
        );
      } else {
        componentContent = (
          <div className="columns">
            <p className="msg-loading-error">
              Sorry, this folder does not exist.
            </p>
          </div>
        );
      }
    } else {
      const messageNav = this.makeMessageNav();
      const sortMenu = this.makeSortMenu();
      const folderMessages = this.makeMessagesTable();

      let messageSearch;
      if (this.props.messages && this.props.messages.length || this.props.filter) {
        messageSearch = (<MessageSearch
          hasRecipientField={folderName === 'Sent' || folderName === 'Drafts'}
          isAdvancedVisible={this.props.isAdvancedVisible}
          onAdvancedSearch={this.props.toggleAdvancedSearch}
          onDateChange={this.props.setDateRange}
          onError={this.props.openAlert}
          onFieldChange={this.props.setSearchParam}
          onSubmit={this.handleSearch}
          params={this.props.searchParams}/>);
      }

      componentContent = (
        <div>
          <div id="messaging-folder-controls">
            <ComposeButton/>
            {messageSearch}
            {messageNav}
          </div>
          {sortMenu}
          {folderMessages}
        </div>
      );
    }

    return (
      <div>
        <div
          id="messaging-content-header"
          className="messaging-folder-header">
          <button
            className="messaging-menu-button"
            type="button"
            onClick={this.props.toggleFolderNav}>
            Menu
          </button>
          <h3>{folderName}</h3>
        </div>
        {componentContent}
      </div>
    );
  }
}

Folder.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const msgState = state.health.msg;
  const folder = msgState.folders.data.currentItem;
  const { attributes, filter, messages, pagination, sort } = folder;
  const { lastRequestedFolder, moveToId, redirect } = msgState.folders.ui;

  return {
    attributes,
    filter,
    folders: msgState.folders.data.items,
    isAdvancedVisible: msgState.search.advanced.visible,
    lastRequestedFolder,
    loading: msgState.loading,
    messages,
    moveToId,
    pagination,
    redirect,
    searchParams: msgState.search.params,
    sort
  };
};

const mapDispatchToProps = {
  fetchFolder,
  moveMessageToFolder,
  openAlert,
  openMoveToNewFolderModal,
  setDateRange,
  setSearchParam,
  toggleAdvancedSearch,
  toggleFolderMoveTo,
  toggleFolderNav
};

export default connect(mapStateToProps, mapDispatchToProps)(Folder);
