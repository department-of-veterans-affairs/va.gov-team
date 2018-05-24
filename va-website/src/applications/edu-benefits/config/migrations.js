import _ from 'lodash/fp';

export function urlMigration(urlPrefix) {
  // 0 -> 1, we have split the edu bundle into form-specific bundles with a new urlPrefix
  // and this replaces the saved return_url if necessary
  return (savedData) => {
    const savedReturnUrl = (_.get('returnUrl', savedData.metadata)
      || _.get('return_url', savedData.metadata)).toLowerCase();

    if (savedReturnUrl.includes(urlPrefix)) {
      const newData = _.set('metadata.returnUrl', savedReturnUrl.replace(urlPrefix, ''), savedData);
      return newData;
    }
    return savedData;
  };
}
