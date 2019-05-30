import { expect } from 'chai';

import formConfig from '../../config/form';

const migrations = formConfig.migrations;

describe('HCA migrations', () => {
  describe('first migration', () => {
    it('should remove hispanic property and add in view: object', () => {
      const data = {
        formData: {
          isSpanishHispanicLatino: false
        }
      };

      expect(migrations[0](data)).to.eql({
        formData: {
          'view:demographicCategories': {
            isSpanishHispanicLatino: false
          }
        }
      });
    });
    it('should not remove existing hispanic choice', () => {
      const data = {
        formData: {
          isSpanishHispanicLatino: false,
          'view:demographicCategories': {
            isSpanishHispanicLatino: true
          }
        }
      };

      expect(migrations[0](data)).to.eql({
        formData: {
          'view:demographicCategories': {
            isSpanishHispanicLatino: true
          }
        }
      });
    });
  });
  describe('second migration', () => {
    const migration = migrations[1];
    it('should convert report children field', () => {
      const data = {
        formData: {
          'view:reportChildren': false
        }
      };

      expect(migration(data).formData).to.eql({
        'view:reportDependents': data.formData['view:reportChildren']
      });
    });
    it('should change name of empty children array', () => {
      const data = {
        formData: {
          children: []
        }
      };

      expect(migration(data).formData).to.eql({
        dependents: []
      });
    });
    it('should change field names inside children items', () => {
      const data = {
        formData: {
          children: [{
            childFullName: 'test',
            childRelation: 'Son',
            childEducationExpenses: 34,
            income: 2,
            'view:childSupportDescription': {}
          }]
        }
      };

      expect(migration(data).formData).to.eql({
        dependents: [{
          fullName: data.formData.children[0].childFullName,
          dependentRelation: data.formData.children[0].childRelation,
          dependentEducationExpenses: data.formData.children[0].childEducationExpenses,
          income: data.formData.children[0].income,
          'view:dependentSupportDescription': data.formData.children[0]['view:childSupportDescription']
        }]
      });
    });
  });
  describe('third migration', () => {
    const migration = migrations[2];
    it('should update url when it matches', () => {
      const data = {
        formData: {
          'view:reportChildren': false
        },
        metadata: {
          returnUrl: '/household-information/child-information'
        }
      };

      const { formData, metadata } = migration(data);
      expect(metadata.returnUrl).to.equal('/household-information/dependent-information');
      expect(formData).to.equal(data.formData);
    });
    it('should leave url alone when it does not match', () => {
      const data = {
        formData: {
          'view:reportChildren': false
        },
        metadata: {
          returnUrl: '/household-information/spouse-information'
        }
      };

      const { formData, metadata } = migration(data);
      expect(metadata.returnUrl).to.equal(data.metadata.returnUrl);
      expect(formData).to.equal(data.formData);
    });
  });
  describe('fourth migration', () => {
    const migration = migrations[3];
    it('should leave data alone if not set', () => {
      const data = {
        formData: {
        },
        metadata: {
          returnUrl: '/household-information/spouse-information'
        }
      };

      const { formData, metadata } = migration(data);
      expect(metadata).to.equal(data.metadata);
      expect(formData).to.equal(data.formData);
    });
    it('should set to none if all false', () => {
      const data = {
        formData: {
          compensableVaServiceConnected: false,
          receivesVaPension: false,
          isVaServiceConnected: false
        },
        metadata: {
          returnUrl: '/household-information/spouse-information'
        }
      };

      const { formData, metadata } = migration(data);
      expect(metadata).to.equal(data.metadata);
      expect(formData.vaCompensationType).to.equal('none');
      expect(formData.compensableVaServiceConnected).to.be.undefined;
      expect(formData.receivesVaPension).to.be.undefined;
      expect(formData.isVaServiceConnected).to.be.undefined;
    });
    it('should set to highDisability if isVaServiceConnected', () => {
      const data = {
        formData: {
          compensableVaServiceConnected: false,
          receivesVaPension: false,
          isVaServiceConnected: true
        },
        metadata: {
          returnUrl: '/household-information/spouse-information'
        }
      };

      const { formData, metadata } = migration(data);
      expect(metadata).to.equal(data.metadata);
      expect(formData.vaCompensationType).to.equal('highDisability');
      expect(formData.compensableVaServiceConnected).to.be.undefined;
      expect(formData.receivesVaPension).to.be.undefined;
      expect(formData.isVaServiceConnected).to.be.undefined;
    });
    it('should set to lowDisability if compensableVaServiceConnected', () => {
      const data = {
        formData: {
          compensableVaServiceConnected: true,
          receivesVaPension: false,
          isVaServiceConnected: false
        },
        metadata: {
          returnUrl: '/household-information/spouse-information'
        }
      };

      const { formData, metadata } = migration(data);
      expect(metadata).to.equal(data.metadata);
      expect(formData.vaCompensationType).to.equal('lowDisability');
      expect(formData.compensableVaServiceConnected).to.be.undefined;
      expect(formData.receivesVaPension).to.be.undefined;
      expect(formData.isVaServiceConnected).to.be.undefined;
    });
    it('should set to pension if receivesVaPension', () => {
      const data = {
        formData: {
          compensableVaServiceConnected: false,
          receivesVaPension: true,
          isVaServiceConnected: false
        },
        metadata: {
          returnUrl: '/household-information/spouse-information'
        }
      };

      const { formData, metadata } = migration(data);
      expect(metadata).to.equal(data.metadata);
      expect(formData.vaCompensationType).to.equal('pension');
      expect(formData.compensableVaServiceConnected).to.be.undefined;
      expect(formData.receivesVaPension).to.be.undefined;
      expect(formData.isVaServiceConnected).to.be.undefined;
    });
    it('should set url if any other combination of choices', () => {
      const data = {
        formData: {
          compensableVaServiceConnected: true,
          receivesVaPension: true,
          isVaServiceConnected: false
        },
        metadata: {
          returnUrl: '/household-information/spouse-information'
        }
      };

      const { formData, metadata } = migration(data);
      expect(metadata.returnUrl).to.equal('/va-benefits/basic-information');
      expect(formData.vaCompensationType).to.be.undefined;
      expect(formData.compensableVaServiceConnected).to.be.undefined;
      expect(formData.receivesVaPension).to.be.undefined;
      expect(formData.isVaServiceConnected).to.be.undefined;
    });
    it('should not set url if prefill', () => {
      const data = {
        formData: {
          compensableVaServiceConnected: true,
          receivesVaPension: true,
          isVaServiceConnected: false
        },
        metadata: {
          prefill: true,
          returnUrl: '/household-information/spouse-information'
        }
      };

      const { metadata } = migration(data);
      expect(metadata.returnUrl).to.equal('/household-information/spouse-information');
    });
  });
  describe('fifth migration', () => {
    const migration = migrations[4];
    it('should unset required fields that are blank strings', () => {
      const data = {
        formData: {
          veteranFullName: {
            first: '   ',
            last: ' '
          },
          veteranAddress: {
            street: '                    ',
            city: ' '
          }
        }
      };

      const { formData } = migration(data);
      expect(formData.veteranFullName).to.eql({});
      expect(formData.veteranAddress).to.eql({});
    });
    it('set the return URL to veteran address when address updated', () => {
      const data = {
        formData: {
          veteranAddress: {
            street: '                    ',
            city: ' '
          }
        }
      };

      const { formData, metadata } = migration(data);
      expect(formData.veteranAddress).to.eql({});
      expect(metadata.returnUrl).to.equal('veteran-information/veteran-address');
    });
    it('set the return URL to veteran information when veteranFullName updated', () => {
      const data = {
        formData: {
          veteranFullName: {
            first: '   ',
            last: ' '
          }
        }
      };

      const { formData, metadata } = migration(data);
      expect(formData.veteranFullName).to.eql({});
      expect(metadata.returnUrl).to.equal('veteran-information/personal-information');
    });
  });
});
