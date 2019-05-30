import { compact } from 'lodash';

export function buildAddressArray(facility) {
  const { address: { physical: address } } = facility.attributes;

  return compact([
    address.address1,
    address.address2,
    address.address3,
    `${address.city}, ${address.state} ${address.zip}`
  ]);
}
