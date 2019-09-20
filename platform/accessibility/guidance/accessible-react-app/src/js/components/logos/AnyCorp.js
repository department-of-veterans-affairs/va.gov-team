import React from 'react';
import PropTypes from 'prop-types';

const AnyCorp = props => {
  const styleOne = {
    fill: '#002e3d',
  };

  const styleTwo = {
    fill: '#fff',
  };

  const { height, width } = props;

  return (
    <svg
      data-name="Layer 1"
      focusable="false"
      height={height}
      id="Layer_1"
      role="presentation"
      viewBox="0 0 144 144"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Untitled-1</title>
      <rect style={styleOne} width="144" height="144" rx="12" />
      <path
        style={styleTwo}
        d="M45.09,74.68c0,18.47,12.61,27.36,27,27.36a29.3,29.3,0,0,0,13.09-2.66l1.08,2.52a35.41,35.41,0,0,1-15.91,3.65c-16.9,0-30.46-10.14-30.46-30.23,0-20.65,16-37.11,36.95-37.11,17.06,0,27.31,11.18,27.31,27.19,0,16.35-10.76,23.54-18.5,23.54-5.2,0-8.37-3.39-8.73-7.71L76.53,80l4.74-24.82L85.64,53l1.63,1.35-4.82,24C81.6,82.6,83.33,85,87,85c5.78,0,12.13-5.8,12.13-20.41S89.26,41.71,76.3,41.71C57.77,41.71,45.09,57.52,45.09,74.68Zm34.79,2,.45,1.29c-4.61,6.06-9.24,11-15,11-4.58,0-9-3.24-9-11a28,28,0,0,1,7-17.92C67,55.58,71.44,53,76,53c3.13,0,5.62,1.26,8.5,5.12L81.94,62c-2.1-3.88-4.26-5.13-6.68-5.13S69.46,58.3,66.81,62a23,23,0,0,0-4.64,13.91c0,5.37,1.87,8,5.84,8C71,83.92,73.9,82.33,79.88,76.64Z"
      />
    </svg>
  );
};

AnyCorp.defaultProps = {
  height: 48,
  width: 48,
};

AnyCorp.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default AnyCorp;
