import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { Validator } from 'jsonschema';

import { transform } from '../../../5490/helpers';
import formConfig from '../../../5490/config/form';
import fullSchema5490 from 'vets-json-schema/dist/22-5490-schema.json';

describe('5490 schema tests', () => {
  const v = new Validator();
  const files = fs.readdirSync(__dirname);
  const expectedDataFiles = fs.readdirSync(path.join(__dirname, 'expected-data'));
  files
    .filter(file => file.endsWith('json'))
    .forEach((file) => {
      const contents = JSON.parse(fs.readFileSync(path.join(__dirname, file), 'utf8'));
      const submitData = JSON.parse(transform(formConfig, contents)).educationBenefitsClaim.form;
      it(`should validate ${file}`, () => {
        const result = v.validate(
          JSON.parse(submitData),
          fullSchema5490
        );

        if (!result.valid) {
          // console.log(result.errors); // eslint-disable-line
        }
        expect(result.valid).to.be.true;
      });
      // Expect the data to be what's found in expected-data/${file}
      // TODO: Switch back to .includes() when NodeJS gets updated on Jenkins
      if (expectedDataFiles.indexOf(file) !== -1) {
        it(`submitted data for ${file} should match expected data`, () => {
          // Parse and re-stringify to mimify spaces, etc.
          const expectedData = JSON.parse(fs.readFileSync(path.join(__dirname, 'expected-data', file), 'utf8'));
          expect(submitData).to.equal(JSON.stringify(expectedData));
        });
      }
    });
});
