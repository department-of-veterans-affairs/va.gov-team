import { expect } from 'chai';

import migrations from '../migrations';

describe('Pension migrations', () => {
  it('should set url to service history if validation error', () => {
    const { formData, metadata } = migrations[0]({
      formData: {
        servicePeriods: [{
          activeServiceDateRange: {
            from: '2012-01-01'
          }
        }],
        veteranDateOfBirth: '2013-01-01'
      },
      metadata: {
        returnUrl: 'asdf'
      }
    });

    expect(metadata.returnUrl).to.equal('/military/history');
    expect(formData).to.be.an('object');
  });
  it('should set url to marriage page if dates are invalid', () => {
    const { formData, metadata } = migrations[0]({
      formData: {
        marriages: [{
          dateOfMarriage: '2012-01-01',
          'view:pastMarriage': {
            dateOfSeparation: '2011-01-01'
          }
        }]
      },
      metadata: {
        returnUrl: 'asdf'
      }
    });

    expect(metadata.returnUrl).to.equal('/household/marriages/0');
    expect(formData).to.be.an('object');
  });
  it('should set url to spouse marriage page if dates are invalid', () => {
    const { formData, metadata } = migrations[0]({
      formData: {
        spouseMarriages: [{
          dateOfMarriage: '2012-01-01',
          dateOfSeparation: '2011-01-01'
        }]
      },
      metadata: {
        returnUrl: 'asdf'
      }
    });

    expect(metadata.returnUrl).to.equal('/household/spouse-marriages/0');
    expect(formData).to.be.an('object');
  });
  it('should leave return url alone if no validation issues are found', () => {
    const { formData, metadata } = migrations[0]({
      formData: {
        spouseMarriages: [{
          dateOfMarriage: '2010-01-01',
          dateOfSeparation: '2011-01-01'
        }],
        marriages: [{
          dateOfMarriage: '2010-01-01',
          'view:pastMarriage': {
            dateOfSeparation: '2011-01-01'
          }
        }],
        servicePeriods: [{
          activeServiceDateRange: {
            from: '2014-01-01'
          }
        }],
        veteranDateOfBirth: '2013-01-01'
      },
      metadata: {
        returnUrl: 'test'
      }
    });

    expect(metadata.returnUrl).to.equal('test');
    expect(formData).to.be.an('object');
  });
  it('should leave return url alone if no matching data exists', () => {
    const { formData, metadata } = migrations[0]({
      formData: {
        veteranDateOfBirth: '2013-01-01'
      },
      metadata: {
        returnUrl: 'test'
      }
    });

    expect(metadata.returnUrl).to.equal('test');
    expect(formData).to.be.an('object');
  });
});

