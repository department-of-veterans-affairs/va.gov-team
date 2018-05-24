import React from 'react';

export default function PhotoDescription() {
  return (
    <div className="feature">
      <h3>What makes a good photo?</h3>
      <div>
        <p>To meet the requirements for a Veteran ID Card, your photo should follow the guidance listed below. It must:</p>
        <ul>
          <li>Show a full front view of your face and neck, (with no hat, head covering, or headphones covering or casting shadows on your hairline or face), <strong>and</strong></li>
          <li>Be cropped from your shoulders up (much like a passport photo), <strong>and</strong></li>
          <li>Show you with your eyes open and a neutral expression, <strong>and</strong></li>
          <li>Be taken in clothing you’d wear for a driver’s license photo, <strong>and</strong></li>
          <li>Be a square size and have a white or plain-color background (with no scenery or other people in the photo), <strong>and</strong></li>
          <li>Show what you look like now (a photo taken sometime in the last 10 years), <strong>and</strong></li>
          <li>Be uploaded as a .jpeg, .png, .bmp, or .tiff file</li>
        </ul>
        <h3>Examples of good ID photos</h3>
        <img className="example-photo" alt="placeholder" src="/img/example-photo-1.png"/>
        <img className="example-photo" alt="placeholder" src="/img/example-photo-2.png"/>
        <p>
          <a href="/veteran-id-card/how-to-upload-photo" target="_blank">Learn more about uploading a photo for your Veteran ID Card</a>.
        </p>
      </div>
    </div>
  );
}
