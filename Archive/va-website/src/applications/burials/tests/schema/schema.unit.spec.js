import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { Validator } from 'jsonschema';

import { transform } from '../../helpers';
import formConfig from '../../config/form';
import fullSchema530 from 'vets-json-schema/dist/21P-530-schema.json';

describe('530 schema tests', () => {
  const v = new Validator();
  const files = fs.readdirSync(__dirname);
  files
    .filter(file => file.endsWith('json'))
    .forEach((file) => {
      const contents = JSON.parse(fs.readFileSync(path.join(__dirname, file), 'utf8'));
      const submitData = JSON.parse(transform(formConfig, contents)).burialClaim.form;
      it(`should validate ${file}`, () => {
        const result = v.validate(
          JSON.parse(submitData),
          fullSchema530
        );

        if (!result.valid) {
          console.log(result.errors); // eslint-disable-line
        }
        expect(result.valid).to.be.true;
      });
    });
});
