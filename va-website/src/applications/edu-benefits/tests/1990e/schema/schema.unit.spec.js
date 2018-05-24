import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { Validator } from 'jsonschema';

import { transform } from '../../../1990e/helpers';
import formConfig from '../../../1990e/config/form';
import fullSchema1990e from 'vets-json-schema/dist/22-1990E-schema.json';

describe('1990e schema tests', () => {
  const v = new Validator();
  const files = fs.readdirSync(__dirname);
  files
    .filter(file => file.endsWith('json'))
    .forEach((file) => {
      it(`should validate ${file}`, () => {
        const contents = JSON.parse(fs.readFileSync(path.join(__dirname, file), 'utf8'));
        const submitData = JSON.parse(transform(formConfig, contents)).educationBenefitsClaim.form;
        const result = v.validate(
          JSON.parse(submitData),
          fullSchema1990e
        );
        if (!result.valid) {
          console.log(result.errors); // eslint-disable-line
        }
        expect(result.valid).to.be.true;
      });
    });
});
