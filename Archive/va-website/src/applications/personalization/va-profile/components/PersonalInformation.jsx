import React from 'react';
import DowntimeNotification, { services } from '../../../../platform/monitoring/DowntimeNotification';
import moment from '../../../../platform/startup/moment-setup';
import LoadFail from './LoadFail';
import LoadingSection from './LoadingSection';
import { handleDowntimeForSection } from './DowntimeBanner';

function Gender({ gender }) {
  return <span>{gender === 'M' ? 'Male' : 'Female'}</span>;
}

function BirthDate({ birthDate }) {
  return <span>{moment(birthDate).format('MMM D, YYYY')}</span>;
}

class PersonalInformationContent extends React.Component {
  componentDidMount() {
    this.props.fetchPersonalInformation();
  }
  renderContent = () => {
    const {
      gender,
      birthDate,
      error
    } = this.props.personalInformation;

    if (error) return <LoadFail information="personal"/>;

    return (
      <div>
        <h3>Gender</h3>
        <Gender gender={gender}/>
        <h3>Birth date</h3>
        <BirthDate birthDate={birthDate}/>
      </div>
    );
  }
  render() {
    return (
      <div>
        <p>If you need to make any updates or corrections, call the Vets.gov Help Desk at  <a href="tel:+18555747286">1-855-574-7286</a> (TTY: <a href="tel:+18008778339">1-800-877-8339</a>). We're here Monday-Friday, 8 a.m. - 8 p.m. (ET).</p>
        <LoadingSection
          isLoading={!this.props.personalInformation}
          message="Loading personal information..."
          render={this.renderContent}/>
      </div>
    );
  }
}

export default function PersonalInformation(props) {
  return (
    <div>
      <h2 className="va-profile-heading">Personal Information</h2>
      <DowntimeNotification render={handleDowntimeForSection('personal')} dependencies={[services.mvi]}>
        <PersonalInformationContent {...props}/>
      </DowntimeNotification>
    </div>
  );
}

