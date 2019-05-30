import { expect } from 'chai';

import _ from '../data';
import deconstructPath from '../data/deconstructPath';
import checkValidPath from '../data/checkValidPath';


// Could split these out into separate files...
describe('data utils (lodash replacements)', () => {
  describe('deconstructPath', () => {
    it('should deconstruct a string path', () => {
      const strPath = 'a.b.c';
      expect(deconstructPath(strPath)).to.eql(['a', 'b', 'c']);
    });

    it('should handle array notation', () => {
      const strPath = 'a.b[4].c';
      expect(deconstructPath(strPath)).to.eql(['a', 'b', 4, 'c']);
    });

    it('should handle array indexes using dot notation', () => {
      const strPath = 'a.b.4.c.123abc';
      expect(deconstructPath(strPath)).to.eql(['a', 'b', 4, 'c', '123abc']);
    });
  });


  describe('clone', () => {
    it('should return an object with the same data but different reference', () => {
      const obj = {
        a: 1,
        b: 2
      };
      const cloned = _.clone(obj);
      expect(cloned).to.eql(obj);
      expect(cloned).to.not.equal(obj);
    });

    it('should clone a set', () => {
      const s = new Set([{ sub: 'original' }]);
      const cloned = _.clone(s);
      expect(cloned).to.eql(s);
      expect(cloned).to.not.equal(s);
    });
  });


  describe('cloneDeep', () => {
    const obj = {
      'int': 1,
      obj: {
        foo: 'bar',
        nestedObj: {
          nestedArray: [0, 2, 4]
        }
      },
      string: 'string!',
      array: ['0', 1, null, { s: 'thing', o: { k: 'I am nested' } }],
      func: function() { return this.int; }, // eslint-disable-line
      arrowFunction: () => this.int
    };

    const cloned = _.cloneDeep(obj);

    it('should return an object with a different reference', () => {
      expect(cloned).to.eql(obj);
      expect(cloned).to.not.equal(obj);
    });

    it('should handle an array as the root "object"', () => {
      const arr = ['foo', 'bar', 0];
      const clonedArr = _.cloneDeep(arr);

      expect(clonedArr).to.eql(arr);
      expect(clonedArr).to.not.equal(arr);
    });

    it('should clone all sub-objects', () => {
      expect(cloned.obj).to.eql(obj.obj);
      expect(cloned.obj).to.not.equal(obj.obj);
    });

    it('should clone all sub-arrays', () => {
      expect(cloned.array).to.eql(obj.array);
      expect(cloned.array).to.not.equal(obj.array);
      expect(cloned.obj.nestedObj.nestedArray).to.eql(obj.obj.nestedObj.nestedArray);
      expect(cloned.obj.nestedObj.nestedArray).to.not.equal(obj.obj.nestedObj.nestedArray);
    });

    it('should clone all objects in arrays', () => {
      expect(cloned.array[3]).to.eql(obj.array[3]);
      expect(cloned.array[3]).to.not.equal(obj.array[3]);
    });
  });


  describe('get', () => {
    const o = {
      a: 'a',
      b: { c: 'c' },
      k: { a: { y: 'f' } },
      g: ['h', 'i', 'j']
    };

    it('should get a value one level deep', () => {
      expect(_.get('a', o)).to.equal(o.a);
    });

    it('should get a value n levels deep', () => {
      expect(_.get('b.c', o)).to.equal(o.b.c);
      expect(_.get('k.a.y', o)).to.equal(o.k.a.y);
    });

    it('should handle array indexes', () => {
      expect(_.get('g[2]', o)).to.equal(o.g[2]);
    });

    it('should handle dot-notated array indexes', () => {
      expect(_.get('g.2', o)).to.equal(o.g[2]);
    });

    it('should handle an array path', () => {
      expect(_.get(['k', 'a', 'y'], o)).to.equal(o.k.a.y);
    });

    it('should return a default value if not found', () => {
      expect(_.get('does.not.exist', o, 'default')).to.equal('default');
    });

    it('should return undefined if not found and no default is provided', () => {
      expect(_.get('does.not.exist', o)).to.equal();
    });
  });


  describe('set', () => {
    it('should set the value of an existing path', () => {
      const o = {
        a: 'a',
        b: { c: 'c' },
        k: { a: { y: 'f' } },
        g: ['h', 'i', 'j']
      };

      const newObj = _.set('b.c', 'd', o);
      expect(newObj.b.c).to.equal('d');
      // Expect everything else to be deeply equal
      Object.keys(o).forEach(key => {
        if (key !== 'b') {
          expect(o[key]).to.eql(newObj[key]);
        }
      });
    });

    it('should create nested objects as needed', () => {
      const o = {
        a: 'a',
        b: { c: 'c' },
        k: { a: { y: 'f' } },
        g: ['h', 'i', 'j']
      };

      const newObj = _.set('new.path', ['foo', 'bar'], o);
      expect(newObj.new.path).to.eql(['foo', 'bar']);
    });

    it('should create nested arrays as needed', () => {
      const o = {
        a: 'a',
        b: { c: 'c' },
        k: { a: { y: 'f' } },
        g: ['h', 'i', 'j']
      };

      const newObj = _.set(['array', 1], 'first', o);
      expect(newObj.array).to.eql([undefined, 'first']);
    });

    it('should handle an array path', () => {
      const o = {
        a: 'a',
        b: { c: 'c' },
        k: { a: { y: 'f' } },
        g: ['h', 'i', 'j']
      };

      const newObj = _.set(['new', 'path'], ['foo', 'bar'], o);
      expect(newObj.new.path).to.eql(['foo', 'bar']);
    });

    it('should not change the array path provided', () => {
      const o = {};
      const arrayPath = ['path', 0];
      _.set(arrayPath, 'foo', o);
      expect(arrayPath).to.eql(['path', 0]);
    });

    it('should not modify original object when adding a new property', () => {
      const o = {
        a: 'a',
        b: { c: 'c' },
        k: { a: { y: 'f' } },
        g: ['h', 'i', 'j']
      };

      // Perhaps using cloneDeep in here is in bad taste?
      const oCopy = _.cloneDeep(o);

      _.set(['new', 'path'], ['foo', 'bar'], o);
      expect(o).to.eql(oCopy);
    });

    it('should not modify original object when changing an existing property', () => {
      const o = {
        a: 'a',
        b: { c: 'c' },
        k: { a: { y: 'f' } },
        g: ['h', 'i', 'j']
      };

      // Perhaps using cloneDeep in here is in bad taste?
      const oCopy = _.cloneDeep(o);

      _.set('b.c', 'd', o);
      expect(o).to.eql(oCopy);
    });

    it('should not maintain the same refs to sub-objects which were changed', () => {
      const o = {
        a: 'a',
        b: { c: 'c' },
        k: { a: { y: 'f' } },
        g: ['h', 'i', 'j']
      };

      const newObj = _.set('k.a.y', 'd', o);
      expect(newObj.k.a).to.not.equal(o.k.a);
      expect(newObj.k.a).to.not.eql(o.k.a);
    });

    // Objects outside the given path should remain the same
    it('should maintain the same refs to objects not touched', () => {
      const old = {
        a: {
          prop: 1
        },
        b: {
          prop2: {
            other: 5
          },
          c: {
            prop3: 3
          }
        }
      };

      const changed = _.set('b.c', { prop4: 4 }, old);

      expect(changed).to.not.equal(old);
      expect(old.a).to.equal(changed.a);
      expect(old.b).to.not.equal(changed.b);
      expect(old.b.c).to.not.equal(changed.b.c);
      expect(old.b.prop2).to.equal(changed.b.prop2);
    });

    it('should throw an error if a segment of the path is not a string or number', () => {
      const o = {
        a: 'a',
        b: { c: 'c' },
        k: { a: { y: 'f' } },
        g: ['h', 'i', 'j']
      };

      try {
        _.set(['new', [0, 1]], ['foo', 'bar'], o);
        // Shouldn't get here; should throw an error
        throw new Error('Should have failed if path is not a string or number.');
      } catch (e) {
        // There's gotta be a better way to do this...
        if (e.message === 'Should have failed if path is not a string or number.') {
          throw e;
        }

        // Public service announcement: Arrays are objects too!
        expect(e.message).to.contain('Unrecognized path element type: object.');
      }
    });
  });

  describe('checkValidPath', () => {
    it('should throw an error if a path segment is undefined', () => {
      expect(() => checkValidPath(['asdf', undefined])).to.throw;
    });

    it('should throw an error if a path segment is null', () => {
      expect(() => checkValidPath(['asdf', null])).to.throw;
    });
  });

  describe('omit', () => {
    // So properties can be compared with ===
    // Useful in shouldComponentUpdate, for instance
    it('should not return a deep clone of an object', () => {
      const obj = {
        a: 'a',
        b: {
          c: 'c'
        }
      };

      const newObj = _.omit(['a'], obj);
      expect(newObj.b).to.equal(obj.b);
    });

    it('should omit all the fields passed in', () => {
      const obj = {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd'
      };
      const omittedFields = ['a', 'c', 'd'];
      const newObj = _.omit(omittedFields, obj);
      omittedFields.forEach(f => expect(newObj[f]).to.be.undefined);
    });

    it('should retain all fields not passed in', () => {
      const obj = {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd'
      };
      const omittedFields = ['a', 'c', 'd'];
      const newObj = _.omit(omittedFields, obj);
      Object.keys(newObj).forEach(f => {
        if (!omittedFields.includes(f)) {
          expect(newObj[f]).to.eql(obj[f]);
        }
      });
    });
  });
});

