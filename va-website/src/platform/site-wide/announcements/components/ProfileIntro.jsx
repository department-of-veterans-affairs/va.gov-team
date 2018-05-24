import React from 'react';
import Modal from '@department-of-veterans-affairs/formation/Modal';

export default function ProfileIntro({ dismiss, profile }) {
  if (!profile.loading) return <div/>;
  if (profile.loa.current !== 3) return <div/>;

  return (
    <Modal
      visible
      onClose={dismiss}
      id="modal-announcement">
      <div className="announcement-heading">
        <img alt="profile icon" src="/img/profile-announcement.svg"/>
      </div>
      <h3 className="announcement-title">Welcome to your new Vets.gov profile</h3>
      <p>Review your contact, personal, and military service information—and find out how to update it as needed.</p>
      <button type="button" onClick={dismiss}>Continue</button>
    </Modal>
  );
}
