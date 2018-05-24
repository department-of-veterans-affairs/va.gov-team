import _ from 'lodash';
import React from 'react';
import Cropper from 'react-cropper';
import classNames from 'classnames';

const MIN_SIZE = 350;
const CROP_BOX_SIZE = 240;
const LARGE_SCREEN = 1201;
const WARN_RATIO = 1.3;
const MAX_CROPPED_HEIGHT_WIDTH = 600;

const moveControlClass = ['cropper-control', 'cropper-control-label-container', 'va-button-link'];

function getMoveButtonsDisabled({ topBoundaryMet, bottomBoundaryMet, rightBoundaryMet, leftBoundaryMet }) {
  return {
    moveUpDisabled: bottomBoundaryMet,
    moveDownDisabled: topBoundaryMet,
    moveLeftDisabled: rightBoundaryMet,
    moveRightDisabled: leftBoundaryMet
  };
}

function getWarningMessage({ topBoundaryMet, bottomBoundaryMet, rightBoundaryMet, leftBoundaryMet, highZoom }) {
  if (highZoom) {
    return 'If you zoom in this close, your ID photo will be less clear.';
  }

  if ((topBoundaryMet && bottomBoundaryMet) || (leftBoundaryMet && rightBoundaryMet)) {
    return 'Your photo currently fits within the square frame. If you’d like to adjust the position of your photo, click Make larger.';
  }

  let direction = '';
  if (topBoundaryMet) {
    direction = 'down';
  }

  if (bottomBoundaryMet) {
    direction = 'up';
  }

  if (leftBoundaryMet) {
    direction = 'right';
  }

  if (rightBoundaryMet) {
    direction = 'left';
  }

  return direction ?
    `You have reached the edge of your photo and can't move it any farther ${direction}. To continue to edit your photo, click on the other arrows to move it or to make it larger.` :
    '';
}

function getPhotoBoundaries({ photoData, cropBoxData }) {
  const { width: photoWidth, height: photoHeight } =  photoData;
  const { left: cropBoxLeft, top: cropBoxTop, width: cropBoxWidth, height: cropBoxHeight } =  cropBoxData;

  return {
    leftMin: cropBoxLeft + cropBoxWidth - photoWidth,
    leftMax: cropBoxLeft,
    topMin: cropBoxTop + cropBoxHeight - photoHeight,
    topMax: cropBoxTop
  };
}

function getDefaultPhotoPosition({ photoData, cropBoxData, containerWidth }) {
  const { height: cropBoxHeight, width: cropBoxWidth, left: cropBoxLeft } =  cropBoxData;
  const { width: oldPhotoWidth, height: oldPhotoHeight, naturalHeight, naturalWidth } = photoData;

  // wide images are centered and set to the height of the crop box
  if (naturalHeight < naturalWidth) {
    return {
      height: cropBoxHeight,
      top: 0,
      left: (containerWidth - (cropBoxHeight / oldPhotoHeight * oldPhotoWidth)) / 2
    };
  }

  // narrow images are move to the top and set to the width of the cropbox
  return {
    width: cropBoxWidth,
    left: cropBoxLeft,
    top: 0
  };
}

function getNewPhotoPosition({ photoData, boundaries, x, y }) {
  const { left, top } =  photoData;

  const newPhotoPosition = {
    left: x ? x + left : left,
    top: y ? y + top : top,
  };

  if (boundaries.topMin === boundaries.topMax) {
    newPhotoPosition.top = boundaries.topMin;
  } else if (newPhotoPosition.top > boundaries.topMax) {
    newPhotoPosition.top = boundaries.topMax;
  } else if (newPhotoPosition.top  < boundaries.topMin) {
    newPhotoPosition.top = boundaries.topMin;
  }

  if (boundaries.leftMin === boundaries.leftMax) {
    newPhotoPosition.left = boundaries.leftMin;
  } else if (newPhotoPosition.left > boundaries.leftMax) {
    newPhotoPosition.left = boundaries.leftMax;
  } else if (newPhotoPosition.left < boundaries.leftMin) {
    newPhotoPosition.left = boundaries.leftMin;
  }

  return newPhotoPosition;
}

const MoveRotateButton = ({
  disabled = false,
  onClick,
  label,
  iconClassName
}) => (
  <button className={classNames(moveControlClass, { disabled })} type="button" onClick={onClick}>
    <span className="cropper-control-label">{label}<i className={iconClassName}></i></span>
  </button>);

export default class CropperControls extends React.Component {
  constructor(props) {
    super(props);

    const windowWidth = window.innerWidth;
    this.state = {
      windowWidth,
      zoomMin: 0.2,
      zoomMax: 1.7,
      zoomValue: 0
    };
  }

  componentDidMount() {
    // updating the width state triggers Cropper remount- debounce event to reduce jank during active resize
    this.debouncedDetectWidth = this.debouncedDetectWidth || _.debounce(this.detectWidth, 250);
    window.addEventListener('resize', this.debouncedDetectWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedDetectWidth);
    this.deboundedDetectWidth = null;
  }

  onCropstart = (e) => {
    // prevents dragging of crop box edges
    const action = e.detail.action;
    const allowedActions = ['crop', 'move', 'zoom', 'all'];

    if (!allowedActions.includes(action)) {
      e.preventDefault();
    }
  }

  onCropend = () => {
    // forces photo position in bounds
    window.requestAnimationFrame(() => {
      // move photo within bounds
      this.movePhoto();

      this.updateWarningAndButtonState();
    });
  }

  onDone = () => {
    const croppedCanvasOptions = this.cropper.getData().width > MAX_CROPPED_HEIGHT_WIDTH ?
      { width: MAX_CROPPED_HEIGHT_WIDTH, height: MAX_CROPPED_HEIGHT_WIDTH } :
      {};

    croppedCanvasOptions.imageSmoothingQuality = 'high';

    this.cropper.getCroppedCanvas(croppedCanvasOptions).toBlob(blob => {
      this.props.onPhotoCropped(blob);
    });
  }

  onSliderChange = (e) => {
    this.cropper.zoomTo(e.target.value);
  }

  // IE 10 requires explicit handling of slider control
  onSliderMouseMove = (e) => {
    if (this.mouseDown) {
      this.onSliderChange(e);
    }
  }

  // IE 10 requires explicit handling of slider control
  onSliderMouseDown = (e) => {
    this.mouseDown = true;
    if (e.target.value !== this.state.zoomValue) {
      this.onSliderChange(e);
    }
  }

  // IE 10 requires explicit handling of slider control
  onSliderMouseUp = () => {
    this.mouseDown = false;
  }

  onZoom = (e) => {
    // Cropper returns the attempted zoom value
    const zoomValue = e.detail.ratio;

    // check if zoom is out of bounds
    let zoomBoundaryValue;
    if (zoomValue < this.state.zoomMin) {
      zoomBoundaryValue = this.state.zoomMin;
    } else if (zoomValue > this.state.zoomMax) {
      zoomBoundaryValue = this.state.zoomMax;
    }

    // force zoom within zoom bounds
    if (zoomBoundaryValue) {
      this.cropper.zoomTo(zoomBoundaryValue); // force zoom within constraints
      e.preventDefault(); // prevents bad zoom attempt
      return; // don't update state until the subsequent zoom attempt
    }

    // zoom value is good- update the state / messaging
    this.setState({ zoomValue });

    window.requestAnimationFrame(() => {
      // move photo within bounds
      this.movePhoto();

      this.updateWarningAndButtonState();
    });
  }

  onMoveDown = () => {
    this.movePhoto({ y: 5 });
    window.requestAnimationFrame(() => this.updateWarningAndButtonState());
  }

  onMoveLeft = () => {
    this.movePhoto({ x: -5 });
    window.requestAnimationFrame(() => this.updateWarningAndButtonState());
  }

  onMoveRight = () => {
    this.movePhoto({ x: 5 });
    window.requestAnimationFrame(() => this.updateWarningAndButtonState());
  }

  onMoveUp = () => {
    this.movePhoto({ y: -5 });
    window.requestAnimationFrame(() => this.updateWarningAndButtonState());
  }

  onRotateLeft = () => {
    this.rotatePhoto(-90);
    this.movePhotoToDefaultPosition();

    window.requestAnimationFrame(() => {
      this.updateZoomToDefaultState();
      this.updateWarningAndButtonState();
    });
  }

  onRotateRight = () => {
    this.rotatePhoto(90);
    this.movePhotoToDefaultPosition();

    window.requestAnimationFrame(() => {
      this.updateZoomToDefaultState();
      this.updateWarningAndButtonState();
    });
  }

  onZoomIn = () => {
    this.zoomPhoto('IN');
  }

  onZoomOut = () => {
    this.zoomPhoto('OUT');
  }

  // examines photo and cropper positions to determine if photo is at any edges
  getBoundariesMet = () => {
    const photoData = this.cropper.getCanvasData();
    const cropBoxData = this.cropper.getCropBoxData();
    const boundaries = getPhotoBoundaries({ photoData, cropBoxData });
    const croppedPhotoWidth = this.cropper.getData().width;

    const highZoom = croppedPhotoWidth < MIN_SIZE || this.state.zoomValue > WARN_RATIO;

    const boundariesMet = {
      bottomBoundaryMet: false,
      topBoundaryMet: false,
      leftBoundaryMet: false,
      rightBoundaryMet: false,
      highZoom
    };

    if (boundaries.topMin === boundaries.topMax) {
      boundariesMet.topBoundaryMet = true;
      boundariesMet.bottomBoundaryMet = true;
    } else if (photoData.top >= boundaries.topMax) {
      boundariesMet.topBoundaryMet = true;
    } else if (photoData.top  <= boundaries.topMin) {
      boundariesMet.bottomBoundaryMet = true;
    }

    if (boundaries.leftMin === boundaries.leftMax) {
      boundariesMet.leftBoundaryMet = true;
      boundariesMet.rightBoundaryMet = true;
    } else if (photoData.left >= boundaries.leftMax) {
      boundariesMet.leftBoundaryMet = true;
    } else if (photoData.left <= boundaries.leftMin) {
      boundariesMet.rightBoundaryMet = true;
    }

    return boundariesMet;
  }

  // initialize cropbox
  setCropBox = () => {
    // use container and cropbox constants to set cropbox size
    const containerWidth = this.cropper.getContainerData().width;
    const heightWidth = CROP_BOX_SIZE;
    const left = (containerWidth / 2) - (heightWidth / 2);
    this.cropper.setCropBoxData({
      top: 0,
      left,
      height: heightWidth,
      width: heightWidth
    });

    this.movePhotoToDefaultPosition();

    window.requestAnimationFrame(() => {
      this.updateZoomToDefaultState();
      this.updateWarningAndButtonState();
    });
  }

  detectWidth = () => {
    const windowWidth = window.innerWidth;
    this.setState({
      windowWidth
    });
  }

  // explicit positioning
  movePhotoToPosition = (position) => {
    this.cropper.setCanvasData(position);
  }

  // explicit positioning
  movePhotoToDefaultPosition = () => {
    const defaultPhotoPosition = getDefaultPhotoPosition({
      photoData: this.cropper.getCanvasData(),
      cropBoxData: this.cropper.getCropBoxData(),
      containerWidth: this.cropper.getContainerData().width
    });
    this.movePhotoToPosition(defaultPhotoPosition);
  }

  // moves photo within bounds
  movePhoto = ({ x = 0, y = 0 } = {}) => {
    const photoData = this.cropper.getCanvasData();
    const cropBoxData = this.cropper.getCropBoxData();
    const boundaries = getPhotoBoundaries({ photoData, cropBoxData });

    const newPhotoPosition = getNewPhotoPosition({ photoData, boundaries, x, y });

    this.movePhotoToPosition(newPhotoPosition);
  }

  // relative positioning
  rotatePhoto = (degrees) => {
    this.cropper.rotate(degrees);
  }

  zoomPhoto = (direction) => {
    switch (direction) {
      case 'IN':
        if (this.state.zoomValue < this.state.zoomMax) {
          this.cropper.zoom(0.1);
        }
        break;
      case 'OUT':
        if (this.state.zoomValue > this.state.zoomMin) {
          this.cropper.zoom(-0.1);
        }
        break;
      default:
    }
  }

  updateWarningAndButtonState = () => {
    // update warnings and buttons enabled state
    const boundariesMet = this.getBoundariesMet();
    const warningMessage = getWarningMessage(boundariesMet);
    const buttonsDisabled = getMoveButtonsDisabled(boundariesMet);

    this.setState({
      warningMessage,
      ...buttonsDisabled
    });
  }

  updateZoomToDefaultState = () => {
    const photoData = this.cropper.getCanvasData();
    const zoomMin = photoData.width / photoData.naturalWidth;

    this.setState({
      zoomMin,
      zoomValue: zoomMin,
    });
  }

  // Cropper doesn't support changing width after componentDidMount
  // use the windowWidth as a key to for the component to remount when the window width changes
  render() {

    // prevent the cropper from re-mounting when width is in large screen range
    const cropperKey = this.state.windowWidth >= LARGE_SCREEN ? LARGE_SCREEN : this.state.windowWidth;

    return (
      <div className="cropper-container-outer">
        <Cropper
          ref={element => { this.cropper = element; }}
          key={cropperKey}
          ready={this.setCropBox}
          responsive
          src={this.props.src}
          aspectRatio={1}
          cropBoxMovable={false}
          cropstart={this.onCropstart}
          cropend={this.onCropend}
          cropmove={() => true}
          minContainerHeight={CROP_BOX_SIZE}
          toggleDragModeOnDblclick={false}
          dragMode="move"
          guides={false}
          viewMode={0}
          zoom={this.onZoom}/>
        <div className="cropper-zoom-container">
          <button className="cropper-control cropper-control-zoom cropper-control-zoom-out va-button va-button-link" type="button" onClick={this.onZoomOut}>
            <span className="cropper-control-label">
              <i className="fa fa-search-minus">
              </i>
            </span>
          </button>
          <input type="range"
            className="cropper-zoom-slider"
            min={this.state.zoomMin}
            max={this.state.zoomMax}
            step="0.01"
            aria-valuemin={this.state.zoomMin}
            aria-valuemax={this.state.zoomMax}
            aria-valuenow={this.state.zoomValue}
            onMouseDown={this.onSliderMouseDown}
            onMouseUp={this.onSliderMouseUp}
            onMouseMove={this.onSliderMouseMove}
            onChange={this.onSliderChange}
            value={this.state.zoomValue}/>
          <button className="cropper-control cropper-control-zoom cropper-control-zoom-in va-button va-button-link" type="button" onClick={this.onZoomIn}>
            <span className="cropper-control-label">
              <i className="fa fa-search-plus">
              </i>
            </span>
          </button>
        </div>
        <div className="cropper-control-container">
          <div className="cropper-control-row">
            <button className="cropper-control cropper-control-label-container va-button va-button-link" type="button" onClick={this.onZoomOut}>
              <span className="cropper-control-label">Make smaller</span>
            </button>
            <button className="cropper-control cropper-control-label-container va-button va-button-link" type="button" onClick={this.onZoomIn}>
              <span className="cropper-control-label">Make larger</span>
            </button>
          </div>
          <div className="cropper-control-row">
            <div>
              <MoveRotateButton disabled={this.state.moveUpDisabled} onClick={this.onMoveUp} label="Move up" iconClassName="fa fa-arrow-up"/>
              <MoveRotateButton disabled={this.state.moveDownDisabled} onClick={this.onMoveDown} label="Move down" iconClassName="fa fa-arrow-down"/>
            </div>
            <div>
              <MoveRotateButton disabled={this.state.moveLeftDisabled} onClick={this.onMoveLeft} label="Move left" iconClassName="fa fa-arrow-left"/>
              <MoveRotateButton disabled={this.state.moveRightDisabled} onClick={this.onMoveRight} label="Move right" iconClassName="fa fa-arrow-right"/>
            </div>
          </div>
          <div className="cropper-control-row">
            <MoveRotateButton onClick={this.onRotateLeft} label="Rotate left" iconClassName="fa fa-rotate-left"/>
            <MoveRotateButton onClick={this.onRotateRight} label="Rotate left" iconClassName="fa fa-rotate-right"/>
          </div>
        </div>
        {this.state.warningMessage && <div className="photo-warning">{this.state.warningMessage}</div>}
        <div className="crop-button-container">
          <button type="button" className="usa-button-primary" onClick={this.onDone}>
            I’m Done
          </button>
        </div>
      </div>
    );
  }
}

CropperControls.PropTypes = {
  onPhotoCropped: React.PropTypes.func.isRequired,
  src: React.PropTypes.string.isRequired
};
