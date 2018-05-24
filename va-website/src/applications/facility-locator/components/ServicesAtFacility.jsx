import { isEmpty } from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';
import { vetCenterServices } from '../config';

class ServicesAtFacility extends Component {

  renderService(service) {
    const label = service.replace(/([A-Z])/g, ' $1');

    return (
      <li key={service} className="service-block">
        <span className="l1-services">
          {label}
        </span>
      </li>
    );
  }

  renderServiceBlock(serviceArray) {
    const subServicesList = (subServices) => {
      if (subServices.length > 0) {
        return (
          <ul>
            {subServices.map((ss, i) => <li key={i}>{ss.replace(/([A-Z])/g, ' $1')}</li>)}
          </ul>
        );
      }
      return null;
    };

    return (
      <div key={serviceArray[0]} className="mb2">
        <h5>{serviceArray[0].replace(/([A-Z])/g, ' $1')}</h5>
        {subServicesList(serviceArray[1])}
      </div>
    );
  }

  // TODO: Use this method to render separate lists for each L1 service
  renderServiceLists() {
    const { facility: { attributes: { services } } } = this.props;

    if (!services) {
      return null;
    }

    return (
      <div>
        {services.map(this.renderServiceBlock)}
      </div>
    );
  }

  renderServices() {
    const { facility } = this.props;

    switch (facility.attributes.facilityType) {
      case 'va_health_facility':
        return this.renderHealthServices();
      case 'va_benefits_facility':
        return this.renderBenefitsServices();
      case 'vet_center':
        return this.renderVetCenterServices();
      default:
        return null;
    }
  }

  renderVetCenterServices() {
    return (
      <div className="mb2">
        <ul>
          {vetCenterServices.map(s => {
            return <li key={s}>{s}</li>;
          })}
        </ul>
      </div>
    );
  }

  renderBenefitsServices() {
    const { facility: { attributes: { services } } } = this.props;

    if (!services.benefits || isEmpty(services.benefits.standard)) {
      return null;
    }

    return (
      <div className="mb2">
        <ul>
          {services.benefits.standard.map(s => {
            return this.renderService(s);
          })}
        </ul>
      </div>
    );
  }

  renderHealthServices() {
    const { facility: { attributes: { services } } } = this.props;

    if (!services.health) {
      return null;
    }

    const alertHeading = (<h4>This list may not include all of the services available at this location.</h4>);
    const alertContent = (<div>Please check on the facility’s website or call them for this information.</div>);

    return (
      <div>
        <p style={{ margin: '0 0 0.5em' }}>Services current as of <strong>{moment(services.last_updated).format('MMMM D, YYYY')}</strong></p>

        <div className="mb2">
          <AlertBox
            isVisible
            status="warning"
            headline={alertHeading}
            content={alertContent}/>
        </div>

        <div className="mb2">
          <ul>
            {services.health.map(s => {
              return this.renderService(s.sl1[0]);
            })}
          </ul>
        </div>
      </div>
    );
  }

  render() {
    const { facility } = this.props;

    if (!facility) {
      return null;
    }

    const services = this.renderServices();

    if (!services) {
      return null;
    }

    return (
      <div>
        <h2 className="highlight">Services</h2>
        {services}
      </div>
    );
  }
}

export default ServicesAtFacility;
