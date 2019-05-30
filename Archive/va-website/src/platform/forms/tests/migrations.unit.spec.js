import { expect } from 'chai';

import fullSchema1010ez from '../../../applications/hca/config/form';
import fullSchema1990 from '../../../applications/edu-benefits/1990/config/form';
import fullSchema1990e from '../../../applications/edu-benefits/1990e/config/form';
import fullSchema1990n from '../../../applications/edu-benefits/1990n/config/form';
import fullSchema1995 from '../../../applications/edu-benefits/1995/config/form';
import fullSchema5490 from '../../../applications/edu-benefits/5490/config/form';
import fullSchema5495 from '../../../applications/edu-benefits/5495/config/form';
import fullSchema527EZ from '../../../applications/pensions/config/form';
import fullSchema530 from '../../../applications/burials/config/form';
import fullSchema10007 from '../../../applications/pre-need/config/form';
import fullSchema686 from '../../../applications/disability-benefits/686/config/form';

import schemas from 'vets-json-schema/dist/schemas';

// Maps schema id to config id
const mappedIds = [
  '10-10EZ',
  '21-686C',
  '21P-527EZ',
  '21P-530',
  '22-1990',
  '22-1990E',
  '22-1990N',
  '22-1995',
  '22-5490',
  '22-5495',
  '40-10007',
  'definitions'
];

const configs = [
  fullSchema1010ez,
  fullSchema686,
  fullSchema527EZ,
  fullSchema530,
  fullSchema1990,
  fullSchema1990e,
  fullSchema1990n,
  fullSchema1995,
  fullSchema5490,
  fullSchema5495,
  fullSchema10007
];

const excludedForms = new Set([
  '28-1900',
  '21-526EZ',
  '28-8832',
  '24-0296',
  'VIC'
]);

describe('form migrations:', () => {
  it('should check all forms', () => {
    const allFormIds = Object.keys(schemas).filter(formId => !excludedForms.has(formId));
    const reformattedIds = mappedIds.slice(0);
    reformattedIds.splice(0, 1, '1010ez');
    reformattedIds.pop();
    const includedFormIds = configs.map(form => form.formId);
    expect(allFormIds).to.deep.equal(mappedIds);
    expect(includedFormIds).to.deep.equal(reformattedIds);
  });
  it('should have a length equal to the version number', () => {
    configs.forEach(form => {
      if (form.migrations || form.version > 0) {
        expect(form.migrations.length).to.equal(form.version);
      }
    });
  });
});

