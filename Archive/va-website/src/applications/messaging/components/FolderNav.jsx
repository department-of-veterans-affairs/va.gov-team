import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import ButtonCreateFolder from './buttons/ButtonCreateFolder';
import ButtonManageFolders from './buttons/ButtonManageFolders';
import ButtonSettings from './buttons/ButtonSettings';
import { folderUrl } from '../utils/helpers';

class FolderNav extends React.Component {
  constructor(props) {
    super(props);
    this.makeFolderLink = this.makeFolderLink.bind(this);
    this.makeMyFolders = this.makeMyFolders.bind(this);
    this.handleCreateNewFolder = this.handleCreateNewFolder.bind(this);
  }

  handleCreateNewFolder() {
    this.props.toggleFolderNav();
    this.props.onCreateNewFolder();
  }

  makeFolderLink(folder) {
    let count;

    if (folder.name === 'Inbox' && folder.unreadCount > 0) {
      count = ` (${folder.unreadCount})`;
    } else if (folder.name === 'Drafts' && folder.count > 0) {
      count = ` (${folder.count})`;
    }

    const linkClass = classNames({
      'messaging-folder-nav-link': true,
      'usa-current': this.props.currentFolderId === folder.folderId
    });

    return (
      <Link
        activeClassName="usa-current"
        className={linkClass}
        data-folderid={folder.folderId}
        to={folderUrl(folder.name)}
        onClick={this.props.onFolderChange}>
        {folder.name}
        {count}
      </Link>
    );
  }

  makeMyFolders(folderList) {
    // All folders with ids greater than 0 should be under 'My folders',
    // so set this section to active if the current folder matches.
    const myFolderLinks = folderList.map(this.makeFolderLink);
    const myFoldersClass = classNames({
      'messaging-my-folders': true,
      'usa-current': this.props.currentFolderId > 0
    });

    /* Render 'My folders' as expanded or collapsed. */

    let myFoldersList;

    if (this.props.isExpanded) {
      const myFolderListItems = folderList.map((folder, i) => {
        return <li key={folder.folderId}>{myFolderLinks[i]}</li>;
      });

      myFoldersList = (
        <ul className="messaging-folder-subnav usa-sidenav-sub_list">
          {myFolderListItems}
        </ul>
      );
    }

    const iconClass = classNames({
      fa: true,
      'fa-caret-down': !this.props.isExpanded,
      'fa-caret-up': this.props.isExpanded
    });

    return (
      <li key="myFolders">
        <a role="button" tabIndex="0" className={myFoldersClass} onClick={this.props.onToggleFolders}>
          <span>My folders</span>
          <i className={iconClass}></i>
        </a>
        {myFoldersList}
      </li>
    );
  }

  render() {
    let folderList = this.props.folders;
    let myFolders;

    // If there are more than 5 folders, move all the non-default folders
    // into a expandable sublist called 'My folders'.
    if (folderList.length > 5) {
      myFolders = this.makeMyFolders(folderList.slice(4));
      folderList = folderList.slice(0, 4);
    }

    folderList = folderList.map(folder => {
      return (
        <li key={folder.folderId}>
          {this.makeFolderLink(folder)}
        </li>
      );
    });

    folderList.push(myFolders);

    const folderActions = (
      <li className="messaging-folder-nav-actions">
        <ButtonManageFolders onClick={this.props.toggleFolderNav}/>
        <ButtonCreateFolder onClick={this.handleCreateNewFolder}/>
        <ButtonSettings onClick={this.props.toggleFolderNav}/>
      </li>
    );

    return (
      <ul className="messaging-folder-nav usa-sidenav-list">
        {folderList}
        {folderActions}
      </ul>
    );
  }
}

FolderNav.propTypes = {
  currentFolderId: PropTypes.number,
  folders: PropTypes.arrayOf(
    PropTypes.shape({
      folderId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      unreadCount: PropTypes.number.isRequired
    })
  ).isRequired,
  isExpanded: PropTypes.bool,
  onCreateNewFolder: PropTypes.func,
  onToggleFolders: PropTypes.func,
  toggleFolderNav: PropTypes.func,
};

export default FolderNav;
