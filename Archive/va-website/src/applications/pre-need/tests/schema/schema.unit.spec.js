import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { Validator } from 'jsonschema';

import { transform } from '../../utils/helpers';
import formConfig from '../../config/form';
import fullSchemaPreNeed from 'vets-json-schema/dist/40-10007-schema.json';

describe('pre-need schema tests', () => {
  const v = new Validator();
  const files = fs.readdirSync(__dirname);
  files
    .filter(file => file.endsWith('json'))
    .forEach((file) => {
      const contents = JSON.parse(fs.readFileSync(path.join(__dirname, file), 'utf8'));
      const submitData = transform(formConfig, contents);
      it(`should validate ${file}`, () => {
        const result = v.validate(
          JSON.parse(submitData),
          fullSchemaPreNeed
        );

        if (!result.valid) {
          console.log(result.errors); // eslint-disable-line
        }
        expect(result.valid).to.be.true;
      });
    });
});
