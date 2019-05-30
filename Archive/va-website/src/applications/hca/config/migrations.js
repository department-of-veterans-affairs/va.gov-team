import _ from 'lodash/fp';

export default [
  // 0 -> 1, we had a bug where isSpanishHispanicLatino was defaulted in the wrong place
  // and this removes it and defaults it in the right spot if necessary
  (savedData) => {
    const newData = savedData;
    newData.formData = _.unset('isSpanishHispanicLatino', savedData.formData);

    if (typeof _.get('view:demographicCategories.isSpanishHispanicLatino', newData.formData) === 'undefined') {
      newData.formData = _.set('view:demographicCategories.isSpanishHispanicLatino', false, newData.formData);
      return newData;
    }

    return newData;
  },
  // 1 -> 2, we converted the children page to a dependents page, then updated
  // all the field names to not reference child/children anymore
  ({ formData, metadata }) => {
    let newData = formData;

    if (typeof newData['view:reportChildren'] !== 'undefined') {
      newData = _.unset('view:reportChildren', newData);
      newData['view:reportDependents'] = formData['view:reportChildren'];
    }

    if (newData.children) {
      newData = _.unset('children', newData);
      newData.dependents = formData.children.map(child => {
        const dependent = Object.keys(child).reduce((acc, field) => {
          if (field === 'view:childSupportDescription') {
            acc['view:dependentSupportDescription'] = child[field];
          } else if (field === 'childEducationExpenses') {
            acc.dependentEducationExpenses = child[field];
          } else if (field === 'childRelation') {
            acc.dependentRelation = child[field];
          } else if (field.startsWith('child')) {
            const newField = field.replace(/^child/, '');
            const [firstLetter, ...restOfField] = newField;
            acc[`${firstLetter.toLowerCase()}${restOfField.join('')}`] = child[field];
          } else {
            acc[field] = child[field];
          }

          return acc;
        }, {});

        return dependent;
      });
    }

    return { formData: newData, metadata };
  },
  // 2 -> 3, we're updating the url for the dependent info page since it's for dependents
  // and not just children anymore
  ({ formData, metadata }) => {
    const url = metadata.returnUrl || metadata.return_url;
    let newMetadata = metadata;

    if (url === '/household-information/child-information') {
      newMetadata = _.set('returnUrl', '/household-information/dependent-information', metadata);
    }

    return { formData, metadata: newMetadata };
  },
  ({ formData, metadata }) => {
    const {
      compensableVaServiceConnected = null,
      isVaServiceConnected = null,
      receivesVaPension = null
    } = formData;

    // Haven't gotten to this page yet
    if (compensableVaServiceConnected === null && isVaServiceConnected === null && receivesVaPension === null) {
      return { formData, metadata };
    }

    const newFormData = _.omit(['compensableVaServiceConnected', 'isVaServiceConnected', 'receivesVaPension'], formData);

    // We want to convert the data only when one option is true and the others are false
    // If more than one is true, we need to ask the user again
    if (compensableVaServiceConnected === false && isVaServiceConnected === false && receivesVaPension === false) {
      return {
        formData: _.set('vaCompensationType', 'none', newFormData),
        metadata
      };
    }

    if (compensableVaServiceConnected === true && isVaServiceConnected === false && receivesVaPension === false) {
      return {
        formData: _.set('vaCompensationType', 'lowDisability', newFormData),
        metadata
      };
    }

    if (compensableVaServiceConnected === false && isVaServiceConnected === true && receivesVaPension === false) {
      return {
        formData: _.set('vaCompensationType', 'highDisability', newFormData),
        metadata
      };
    }

    if (compensableVaServiceConnected === false && isVaServiceConnected === false && receivesVaPension === true) {
      return {
        formData: _.set('vaCompensationType', 'pension', newFormData),
        metadata
      };
    }

    // More than one option was chosen, or not all were filled out, so go back to the page and make the user pick again,
    // because we don't know for sure what they meant to pick
    return {
      formData: newFormData,
      metadata: metadata.prefill
        ? metadata
        : _.set('returnUrl', '/va-benefits/basic-information', metadata)
    };
  },
  // required strings can not pass validation with only spaces
  ({ formData, metadata }) => {
    let newFormData = formData;
    let newMetaData = metadata;
    const notBlankStringPattern = /^.*\S.*/;

    [
      { selector: 'veteranAddress.city', returnUrl: 'veteran-information/veteran-address' },
      { selector: 'veteranAddress.street', returnUrl: 'veteran-information/veteran-address' },
      { selector: 'veteranFullName.last', returnUrl: 'veteran-information/personal-information' },
      { selector: 'veteranFullName.first', returnUrl: 'veteran-information/personal-information' }
    ].forEach(({ selector, returnUrl }) => {
      if (!notBlankStringPattern.test(_.get(selector, newFormData))) {
        newFormData = _.unset(selector, newFormData);
        newMetaData = _.set('returnUrl', returnUrl, newMetaData);
      }
    });

    return {
      formData: newFormData,
      metadata: newMetaData
    };
  }
];
