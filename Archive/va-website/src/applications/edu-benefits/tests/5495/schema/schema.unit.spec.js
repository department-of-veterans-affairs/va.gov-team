import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { Validator } from 'jsonschema';

import { transform } from '../../../5495/helpers';
import formConfig from '../../../5495/config/form';
import fullSchema5495 from 'vets-json-schema/dist/22-5495-schema.json';

describe('5495 schema tests', () => {
  const v = new Validator();
  const files = fs.readdirSync(__dirname);
  files
    .filter(file => file.endsWith('json'))
    .forEach((file) => {
      const contents = JSON.parse(fs.readFileSync(path.join(__dirname, file), 'utf8'));
      const submitData = JSON.parse(transform(formConfig, contents)).educationBenefitsClaim.form;
      it(`should validate ${file}`, () => {
        const result = v.validate(
          JSON.parse(submitData),
          fullSchema5495
        );

        if (!result.valid) {
          console.log(result.errors); // eslint-disable-line
        }
        expect(result.valid).to.be.true;
      });
    });
});
