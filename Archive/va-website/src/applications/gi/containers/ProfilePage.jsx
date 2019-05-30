/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
import _ from 'lodash';

import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import { getScrollOptions } from '../../../platform/utilities/ui';
import { fetchProfile, setPageTitle, showModal } from '../actions';
import AccordionItem from '../components/AccordionItem';
import If from '../components/If';
import HeadingSummary from '../components/profile/HeadingSummary';
import Programs from '../components/profile/Programs';
import Outcomes from '../components/profile/Outcomes';
import Calculator from '../components/profile/Calculator';
import CautionaryInformation from '../components/profile/CautionaryInformation';
import AdditionalInformation from '../components/profile/AdditionalInformation';
import { outcomeNumbers } from '../selectors/outcomes';

const { Element: ScrollElement, scroller } = Scroll;

export class ProfilePage extends React.Component {

  constructor(props) {
    super(props);
    this.handleViewWarnings = this.handleViewWarnings.bind(this);
  }

  componentDidMount() {
    this.props.fetchProfile(
      this.props.params.facilityCode,
      this.props.location.query.version
    );
  }

  componentDidUpdate(prevProps) {
    const {
      location: { query: { version: uuid } },
      params: { facilityCode },
      profile
    } = this.props;

    const institutionName = _.get(profile, 'attributes.name');
    const shouldUpdateTitle = !_.isEqual(
      institutionName,
      _.get(prevProps.profile, 'attributes.name'),
    );

    if (shouldUpdateTitle) {
      this.props.setPageTitle(`${institutionName} - GI Bill® Comparison Tool`);
    }

    if (profile.inProgress !== prevProps.profile.inProgress) {
      scroller.scrollTo('profilePage', getScrollOptions());
    }

    if (prevProps.location.query.version !== uuid) {
      this.props.fetchProfile(facilityCode, uuid);
    }
  }

  handleViewWarnings() {
    this._cautionaryInfo.setState({ expanded: true });
  }

  render() {
    const { constants, outcomes, profile } = this.props;

    let content;

    if (profile.inProgress || _.isEmpty(profile.attributes)) {
      content = <LoadingIndicator message="Loading your profile..."/>;
    } else {
      const isOJT = profile.attributes.type.toLowerCase() === 'ojt';

      content = (
        <div>
          <HeadingSummary
            institution={profile.attributes}
            onLearnMore={this.props.showModal.bind(this, 'gibillstudents')}
            onViewWarnings={this.handleViewWarnings}/>
          <div className="usa-accordion">
            <ul>
              <AccordionItem button="Estimate your benefits">
                <Calculator/>
              </AccordionItem>
              {
                !isOJT &&
                (<AccordionItem button="Veteran programs">
                  <Programs
                    institution={profile.attributes}
                    onShowModal={this.props.showModal}/>
                </AccordionItem>)
              }
              {
                !isOJT &&
                (<AccordionItem button="Student outcomes">
                  <If condition={!!profile.attributes.facilityCode && !!constants} comment="TODO">
                    <Outcomes
                      graphing={outcomes}
                      onShowModal={this.props.showModal}/>
                  </If>
                </AccordionItem>)
              }
              <AccordionItem
                button="Cautionary information"
                ref={c => { this._cautionaryInfo = c; }}>
                <a name="viewWarnings"></a>
                <CautionaryInformation
                  institution={profile.attributes}
                  onShowModal={this.props.showModal}/>
              </AccordionItem>
              <AccordionItem button="Additional information">
                <AdditionalInformation
                  institution={profile.attributes}
                  onShowModal={this.props.showModal}/>
              </AccordionItem>
            </ul>
          </div>
        </div>
      );
    }

    return (
      <ScrollElement name="profilePage" className="profile-page">
        {content}
      </ScrollElement>
    );
  }

}

const mapStateToProps = (state) => {
  const { constants: { constants }, profile } = state;
  const outcomes = constants ? outcomeNumbers(state) : null;
  return { constants, outcomes, profile };
};

const mapDispatchToProps = {
  fetchProfile,
  setPageTitle,
  showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
