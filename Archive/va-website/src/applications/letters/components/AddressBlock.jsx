import React from 'react';

const AddressBlock = ({ children }) => (
  <div>
    <div className="address-block">
      {children}
    </div>
    <p>
      When you download a letter, it will show this address. If this address is incorrect you may want to update it, but your letter will still be valid even with the incorrect address.
    </p>
  </div>
);

export default AddressBlock;
