import React from 'react';
import PropTypes from 'prop-types';
import { fetchPreview } from '../helpers';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';

export default class PhotoPreview extends React.Component {
  constructor(props) {
    super(props);

    if (props.isLoggedIn && props.id && !props.src) {
      fetchPreview(props.id).then(src => {
        this.props.onUpdatePreview(src);
      }).catch(err => {
        this.props.onError(err);
      });
    }
  }

  render() {
    const { src, id, className, isLoggedIn, processing } = this.props;

    if (processing) {
      return (
        <div className="usa-alert usa-alert-warning vic-processing-warning">
          <div className="usa-alert-body">
            <h4 className="usa-alert-title">We’re still loading your photo</h4>
            You can continue working on the application while we finish loading your photo.
          </div>
        </div>
      );
    }

    if (!src && id && isLoggedIn) {
      return <LoadingIndicator message="We’re loading your photo..."/>;
    }

    if (!src && !id) {
      return <span>No photo chosen</span>;
    }

    return (
      <img
        className={className}
        src={src}
        alt="Photograph of you that will be displayed on the ID card"/>
    );
  }
}

PhotoPreview.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  processing: PropTypes.bool.isRequired,
  onError: PropTypes.func.isRequired,
  onUpdatePreview: PropTypes.func.isRequired
};
