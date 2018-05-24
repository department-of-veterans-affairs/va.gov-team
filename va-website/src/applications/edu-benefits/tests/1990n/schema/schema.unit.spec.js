import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { Validator } from 'jsonschema';

import { transform } from '../../../1990n/helpers';
import formConfig from '../../../1990n/config/form';
import fullSchema1990n from 'vets-json-schema/dist/22-1990N-schema.json';

describe('1990n schema tests', () => {
  const v = new Validator();
  const files = fs.readdirSync(__dirname);
  let expectedDataFiles;
  try {
    expectedDataFiles = fs.readdirSync(path.join(__dirname, 'expected-data'));
  } catch (e) {
    // No expeced data files
  }

  files
    .filter(file => file.endsWith('json'))
    .forEach((file) => {
      const contents = JSON.parse(fs.readFileSync(path.join(__dirname, file), 'utf8'));
      const submitData = JSON.parse(transform(formConfig, contents)).educationBenefitsClaim.form;
      it(`should validate ${file}`, () => {
        const result = v.validate(
          JSON.parse(submitData),
          fullSchema1990n
        );

        if (!result.valid) {
          console.log(result.errors); // eslint-disable-line
        }
        expect(result.valid).to.be.true;
      });
      // Expect the data to be what's found in expected-data/${file}
      // TODO: Switch back to .includes() when NodeJS gets updated on Jenkins
      if (expectedDataFiles && expectedDataFiles.indexOf(file) !== -1) {
        it(`submitted data for ${file} should match expected data`, () => {
          // Parse and re-stringify to mimify spaces, etc.
          const expectedData = JSON.parse(fs.readFileSync(path.join(__dirname, 'expected-data', file), 'utf8'));
          expect(submitData).to.equal(JSON.stringify(expectedData));
        });
      }
    });
});
