import React from 'react';

import { AdditionalResourcesLinks } from './AdditionalResources';

class VideoSidebar extends React.Component {
  render() {
    return (
      <div className="video-sidebar">
        <h4 className="highlight">What’s your plan?</h4>
        <p>
          Transitioning to civilian life takes preparation, research, planning, and the right tools.
          We’re here to help you make the right decisions on where to use your hard earned benefits!
        </p>
        <iframe width="100%" src="https://www.youtube.com/embed/Z1ttkv9oRI4"
          title="Know Before You Go" frameBorder="0" allowFullScreen></iframe>
        <AdditionalResourcesLinks/>
      </div>
    );
  }
}

export default VideoSidebar;
