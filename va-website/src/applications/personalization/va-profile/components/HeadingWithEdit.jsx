import React from 'react';

function HeadingWithEdit({ children, onEditClick }) {
  return (
    <div>
      <h3 style={{ display: 'inline-block' }}>{ children }</h3> {onEditClick && <button onClick={onEditClick} className="va-button-link va-profile-btn">Edit</button>}
    </div>
  );
}

export default HeadingWithEdit;
