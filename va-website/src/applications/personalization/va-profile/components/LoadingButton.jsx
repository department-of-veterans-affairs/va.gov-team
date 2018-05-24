import React from 'react';

export default function LoadingButton({ isLoading, children }) {
  const contents = isLoading ? <i className="fa fa-spinner fa-spin"/> : children;
  return <button disabled={isLoading} className="usa-button">{contents}</button>;
}
