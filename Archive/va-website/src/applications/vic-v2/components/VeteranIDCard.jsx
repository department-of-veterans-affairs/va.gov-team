import React from 'react';
import { branchCodeLabels } from '../labels';

const FONT_FAMILY = 'Arial, Helvetica, sans-serif';
// sets the aspect ratio of svg
const VIEW_BOX = '0 0 2048 1284';
// height of font top to bottom bounding box in the viewbox
const X_LARGE_FONT_SIZE = 90;
const LARGE_FONT_SIZE = 80;
const SMALL_FONT_SIZE = 60;
const X_SMALL_FONT_SIZE = 55;

// this is a canvas size (not a viewbox size)
const MAX_NAME_WIDTH = 120;

const imagePaths = {
  A: '/img/vic-army-symbol.png',
  C: '/img/vic-cg-emblem.png',
  F: '/img/vic-air-force-coat-of-arms.png',
  N: '/img/vic-navy-emblem.png',
  M: '/img/vic-usmc-emblem.png',
  previewBackground: '/img/vic-preview-background.svg',
  VASeal: '/img/vic-va-seal.png'
};

function isLongName(name) {
  try {
    return document
      .createElement('canvas')
      .getContext('2d')
      .measureText(name)
    // manually determined max width
      .width > MAX_NAME_WIDTH;
  } catch (e) {
    return true;
  }
}

function getTopAndBottomName([firstPart, nextPart, ...rest]) {
  // name is short enough to fit on first line
  if (!nextPart) {
    return {
      top: firstPart,
      bottom: ''
    };
  }

  const newFirstPart = `${firstPart} ${nextPart}`;

  // name must be split
  if (isLongName(newFirstPart)) {
    return {
      top: firstPart,
      bottom: `${nextPart} ${rest.join(' ')}`
    };
  }

  // keep testing length of combined name parts
  return getTopAndBottomName([newFirstPart, ...rest]);
}

function getFullNameDisplay(fullName) {
  const { top, bottom } = getTopAndBottomName(fullName.split(' '));

  if (bottom) {
    return [
      <text fontSize={X_LARGE_FONT_SIZE} key="firstName" x="6.5%" y="50.6%">
        {top}
      </text>,
      <text fontSize={X_LARGE_FONT_SIZE} key="lastName" x="6.5%" y="58.8%">
        {bottom}
      </text>
    ];
  }

  return (<text fontSize={X_LARGE_FONT_SIZE} x="6.5%" y="55.2%">
    {top}
  </text>);
}

const VeteranIDCard = ({
  veteranBranchCode,
  veteranFullName,
  caseId,
  veteranPhotoUrl
}) => (
  // svg preserves aspect ratio
  <svg
    fill="white"
    fontFamily={FONT_FAMILY}
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    stroke="none"
    viewBox={VIEW_BOX}
    width="100%">

    <image href={imagePaths.previewBackground} width="100%" height="100%"></image>

    <image height="28.5%" width="18.1%" href={imagePaths.VASeal} x="6.5%" y="7.3%"></image>

    <text fontSize={LARGE_FONT_SIZE - 1} x="70%" y="12.5%">
      TEMPORARY
    </text>

    <text fontSize={X_LARGE_FONT_SIZE} x="26.3%" y="24.3%">
      Veteran Identification Card
    </text>

    {getFullNameDisplay(veteranFullName)}

    <image height="21.1%" width="13.6%" href={imagePaths[veteranBranchCode]} x="6.5%" y="70%"></image>
    <text fontSize={SMALL_FONT_SIZE} x="22.8%" y="82.05%">
      {branchCodeLabels[veteranBranchCode]} Veteran
    </text>

    <image height="51.8%" width="32.8%" href={veteranPhotoUrl} x="62.1%" y="34.1%"></image>
    <text fontSize={X_SMALL_FONT_SIZE} x="62.1%" y="91.9%">
      ID no: {caseId}
    </text>
  </svg>
);

VeteranIDCard.propTypes = {
  veteranBranchCode: React.PropTypes.oneOf(['F', 'A', 'C', 'M', 'N']),
  veteranFullName: React.PropTypes.string.isRequired,
  caseId: React.PropTypes.string.isRequired,
  veteranPhotoUrl: React.PropTypes.string.isRequired
};

export default VeteranIDCard;
