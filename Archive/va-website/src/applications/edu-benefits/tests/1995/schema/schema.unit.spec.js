import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { Validator } from 'jsonschema';

import { transform } from '../../../1995/helpers';
import formConfig from '../../../1995/config/form';
import fullSchema1995 from 'vets-json-schema/dist/22-1995-schema.json';

describe('1995 schema tests', () => {
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
          fullSchema1995
        );

        if (!result.valid) {
          console.log(result.errors); // eslint-disable-line
        }
        expect(result.valid).to.be.true;
      });
    });
});
