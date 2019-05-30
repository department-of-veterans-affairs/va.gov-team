import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import DemographicField from '../../components/DemographicField';
import ObjectField from '../../../common/schemaform/fields/ObjectField';
import formConfig from '../../config/form';

describe('hca <DemographicField>', () => {
  it('should render ObjectField', () => {
    const registry = {
      fields: {
        ObjectField
      }
    };
    const formContext = {
      reviewMode: false
    };

    const tree = SkinDeep.shallowRender(<DemographicField formContext={formContext} registry={registry}/>);

    expect(tree.subTree('ObjectField')).not.to.be.false;
    expect(tree.subTree('ObjectField').props.formContext).to.equal(formContext);
  });
  it('should render review version', () => {
    const registry = {
      fields: {
        ObjectField
      }
    };
    const formContext = {
      reviewMode: true
    };
    const demographicInformation = formConfig.chapters.veteranInformation.pages.demographicInformation;

    const tree = SkinDeep.shallowRender(
      <DemographicField
        formContext={formContext}
        schema={demographicInformation.schema.properties['view:demographicCategories']}
        uiSchema={demographicInformation.uiSchema['view:demographicCategories']}
        formData={{
          isAsian: true,
          isSpanishHispanicLatino: true
        }}
        registry={registry}/>
    );

    const reviewRows = tree.everySubTree('.review-row');

    expect(reviewRows[0].subTree('dt').text())
      .to.equal(demographicInformation.uiSchema['view:demographicCategories']['ui:title']);
    expect(reviewRows[0].subTree('dd').text())
      .to.equal(demographicInformation.uiSchema['view:demographicCategories'].isSpanishHispanicLatino['ui:title']);
    expect(reviewRows[1].subTree('dd').text())
      .to.equal(demographicInformation.uiSchema['view:demographicCategories'].isAsian['ui:title']);
  });
});
