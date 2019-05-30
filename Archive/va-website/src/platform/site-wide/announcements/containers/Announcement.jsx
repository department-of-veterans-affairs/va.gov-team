import React from 'react';
import { connect } from 'react-redux';

import { isLoggedIn, selectProfile } from '../../../user/selectors';
import { selectAnnouncement } from '../selectors';

import {
  initDismissedAnnouncements,
  dismissAnnouncement
} from '../actions';

class Announcement extends React.Component {
  componentDidMount() {
    this.props.initDismissedAnnouncements();
  }
  dismiss = () => {
    const {
      announcement: {
        name: announcementName,
        relatedAnnouncements = []
      }
    } = this.props;

    this.props.dismissAnnouncement(announcementName);

    relatedAnnouncements
      .filter(relatedAnnouncementName => !this.props.dismissed.includes(relatedAnnouncementName))
      .forEach(relatedAnnouncementName => {
        this.props.dismissAnnouncement(relatedAnnouncementName);
      });
  }
  render() {
    const {
      announcement
    } = this.props;

    if (announcement) {
      return (
        <announcement.component
          announcement={announcement}
          isLoggedIn={this.props.isLoggedIn}
          profile={this.props.profile}
          dismiss={this.dismiss}/>
      );
    }
    return <div/>;
  }
}

const mapStateToProps = (state) => {
  return {
    announcement: selectAnnouncement(state),
    isLoggedIn: isLoggedIn(state),
    profile: selectProfile(state),
    ...state.announcements
  };
};

const mapDispatchToProps = {
  initDismissedAnnouncements,
  dismissAnnouncement
};

export { Announcement };
export default connect(mapStateToProps, mapDispatchToProps)(Announcement);
