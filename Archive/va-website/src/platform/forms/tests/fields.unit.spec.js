import { expect } from 'chai';

import { dirtyAllFields, makeField } from '../fields';

describe('fields model', () => {
  it('field creation method defaults to clean', () => {
    const field = makeField('hi');
    expect(field).to.have.property('value').and.eq('hi');
    expect(field).to.have.property('dirty').and.be.false;
  });

  describe('dirtyAllFields', () => {
    it('handles base cases', () => {
      const result = dirtyAllFields(
        { a: makeField(1),
          b: makeField(''),
          c: makeField('str'),
          d: makeField(true),
          f: 5,
          g: false,
          h: null,
          i: undefined,
        });
      expect(result).to.deep.equal(
        { a: makeField(1, true),
          b: makeField('', true),
          c: makeField('str', true),
          d: makeField(true, true),
          f: 5,
          g: false,
          h: null,
          i: undefined,
        });
      expect(dirtyAllFields(makeField(1))).to.eql(makeField(1, true));
      expect(dirtyAllFields([])).to.eql([]);
      expect(dirtyAllFields({ a: [1] })).to.eql({ a: [1] });
    });

    it('handles nested objects', () => {
      const result = dirtyAllFields(
        { a: { foo: makeField('1'),
          bar: makeField(''),
          baz: makeField(3),
          qux: 5,
          quux: false,
          corge: null,
          grault: undefined,
        },
        b: { foo: makeField(1) }  // Ensure multiple objects get processed.
        });
      expect(result).to.eql(
        { a: { foo: makeField('1', true),
          bar: makeField('', true),
          baz: makeField(3, true),
          qux: 5,
          quux: false,
          corge: null,
          grault: undefined,
        },
        b: { foo: makeField(1, true) }
        });
    });

    it('handles arrays', () => {
      const result = dirtyAllFields(
        { a: [{ foo: makeField('1') },
          { bar: makeField('') },
          { baz: makeField(3) },
          { qux: 5 },
          { quux: false },
          { corge: null },
          { grault: undefined }],
        b: [{ foo: makeField(1) }]  // ensure multiple arrays get processed.
        });
      expect(result).to.eql(
        { a: [{ foo: makeField('1', true) },
          { bar: makeField('', true) },
          { baz: makeField(3, true) },
          { qux: 5 },
          { quux: false },
          { corge: null },
          { grault: undefined }],
        b: [{ foo: makeField(1, true) }]
        });
    });
  });
});
