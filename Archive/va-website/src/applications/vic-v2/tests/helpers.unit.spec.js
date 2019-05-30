import { expect } from 'chai';
import sinon from 'sinon';

import { mockFetch, resetFetch } from '../../../platform/testing/unit/helpers.js';

import fullSchemaVIC from 'vets-json-schema/dist/VIC-schema.json';
import fullFormConfig from '../config/form';
import { submit, prefillTransformer, transform } from '../helpers';

function setFetchResponse(stub, data) {
  const response = new Response();
  response.ok = true;
  response.json = () => Promise.resolve(data);
  stub.resolves(response);
}

function setFetchBlobResponse(stub, data) {
  const response = new Response();
  response.ok = true;
  response.blob = () => Promise.resolve(data);
  stub.resolves(response);
}

function setFailedBlobResponse(stub, error) {
  const response = new Response();
  response.ok = true;
  response.blob = () => Promise.reject(new Error(error));
  stub.resolves(response);
}

describe('VIC helpers:', () => {
  describe('submit', () => {
    beforeEach(() => {
      window.VetsGov = { pollTimeout: 1 };
      window.sessionStorage = { userToken: 'testing' };
      window.URL = {
        createObjectURL: sinon.stub().returns('test')
      };
    });
    it('should reject if initial request fails', () => {
      mockFetch(new Error('fake error'), false);
      const formConfig = {
        chapters: {}
      };
      const form = {
        data: {
          photo: {
            file: new Blob()
          }
        }
      };

      return submit(form, formConfig).then(() => {
        expect.fail();
      },
      err => {
        expect(err.message).to.equal('fake error');
      });
    });
    it('should resolve if polling state is success', () => {
      mockFetch();
      setFetchResponse(global.fetch.onFirstCall(), {
        data: {
          attributes: {
            guid: 'test'
          }
        }
      });
      setFetchResponse(global.fetch.onSecondCall(), {
        data: {
          attributes: {
            state: 'pending'
          }
        }
      });
      const response = {};
      setFetchResponse(global.fetch.onThirdCall(), {
        data: {
          attributes: {
            state: 'success',
            response
          }
        }
      });
      const formConfig = {
        chapters: {}
      };
      const form = {
        data: {
          photo: {
            file: new Blob()
          }
        }
      };

      return submit(form, formConfig).then((res) => {
        expect(res).to.deep.equal({
          photo: 'test'
        });
      });
    });
    it('should reject if polling state is failed', () => {
      mockFetch();
      setFetchResponse(global.fetch.onFirstCall(), {
        data: {
          attributes: {
            guid: 'test'
          }
        }
      });
      setFetchResponse(global.fetch.onSecondCall(), {
        data: {
          attributes: {
            state: 'pending'
          }
        }
      });
      setFetchResponse(global.fetch.onThirdCall(), {
        data: {
          attributes: {
            state: 'failed'
          }
        }
      });
      const formConfig = {
        chapters: {}
      };
      const form = {
        data: {
          photo: {
            file: new Blob()
          }
        }
      };

      return submit(form, formConfig).then(() => {
        expect.fail();
      },
      err => {
        expect(err.message).to.equal('vets_server_error_vic: status failed');
      });
    });
    it('should resolve with image request', () => {
      mockFetch();
      setFetchBlobResponse(global.fetch.onFirstCall(), {});
      setFetchResponse(global.fetch.onSecondCall(), {
        data: {
          attributes: {
            guid: 'test'
          }
        }
      });
      setFetchResponse(global.fetch.onThirdCall(), {
        data: {
          attributes: {
            state: 'pending'
          }
        }
      });
      const response = {};
      setFetchResponse(global.fetch.onCall(3), {
        data: {
          attributes: {
            state: 'success',
            response
          }
        }
      });
      const formConfig = {
        chapters: {}
      };
      const form = {
        data: {
          photo: {}
        }
      };

      return submit(form, formConfig).then((res) => {
        expect(res).to.deep.equal({
          photo: 'test'
        });
      });
    });
    it('should resolve with failed image request', () => {
      mockFetch();
      setFailedBlobResponse(global.fetch.onFirstCall(), 'Error');
      setFetchResponse(global.fetch.onSecondCall(), {
        data: {
          attributes: {
            guid: 'test'
          }
        }
      });
      const response = {};
      setFetchResponse(global.fetch.onCall(2), {
        data: {
          attributes: {
            state: 'success',
            response
          }
        }
      });
      const formConfig = {
        chapters: {}
      };
      const form = {
        data: {
          photo: {}
        }
      };

      return submit(form, formConfig).then((res) => {
        expect(res).to.deep.equal({
          photo: null
        });
      });
    });

    afterEach(() => {
      resetFetch();
      delete window.URL;
    });
  });
  describe('prefillTransformer', () => {
    it('should do nothing if there is no branch list', () => {
      const formData = {};
      const pages = {};
      const metadata = {};
      const state = {
        user: {
          profile: {
            services: []
          }
        }
      };

      const result = prefillTransformer(pages, formData, metadata, state);

      expect(result.formData).to.equal(formData);
      expect(result.pages).to.equal(pages);
      expect(result.metadata).to.equal(metadata);
    });
    it('should set serviceBranch to first branch and enum to list', () => {
      const formData = {
        serviceBranches: ['A', 'F']
      };
      const pages = {
        veteranInformation: {
          schema: {
            properties: {
              serviceBranch: fullSchemaVIC.properties.serviceBranch
            }
          }
        }
      };
      const metadata = {};
      const state = {
        user: {
          profile: {
            services: []
          }
        }
      };

      const result = prefillTransformer(pages, formData, metadata, state);
      expect(result.pages.veteranInformation.schema.properties.serviceBranch.enum)
        .to.deep.equal(formData.serviceBranches);
      expect(result.formData.serviceBranch).to.equal(formData.serviceBranches[0]);
      expect(result.formData.serviceBranches).to.be.undefined;
    });
    it('should filter out invalid branches', () => {
      const formData = {
        serviceBranches: ['A', 'B']
      };
      const pages = {
        veteranInformation: {
          schema: {
            properties: {
              serviceBranch: fullSchemaVIC.properties.serviceBranch
            }
          }
        }
      };
      const metadata = {};
      const state = {
        user: {
          profile: {
            services: []
          }
        }
      };

      const result = prefillTransformer(pages, formData, metadata, state);
      expect(result.pages.veteranInformation.schema.properties.serviceBranch.enum)
        .to.deep.equal(['A']);
      expect(result.formData.serviceBranch).to.equal(formData.serviceBranches[0]);
      expect(result.formData.serviceBranches).to.be.undefined;
    });
    it('should leave full list when no valid branches', () => {
      const formData = {
        serviceBranches: ['B']
      };
      const pages = {
        veteranInformation: {
          schema: {
            properties: {
              serviceBranch: fullSchemaVIC.properties.serviceBranch
            }
          }
        }
      };
      const metadata = {};
      const state = {
        user: {
          profile: {
            services: []
          }
        }
      };

      const result = prefillTransformer(pages, formData, metadata, state);
      expect(result.pages.veteranInformation.schema.properties.serviceBranch.enum)
        .to.deep.equal(fullSchemaVIC.properties.serviceBranch.enum);
      expect(result.formData.serviceBranch).to.be.undefined;
      expect(result.formData.serviceBranches).to.be.undefined;
    });
    it('should set id proofed flag and original user data', () => {
      const formData = {
        veteranFullName: {
          first: 'Test'
        },
        veteranSocialSecurityNumber: '123456789'
      };
      const pages = {
        veteranInformation: {
          schema: {
            properties: {}
          }
        }
      };
      const metadata = {};
      const state = {
        user: {
          profile: {
            services: ['identity-proofed']
          }
        }
      };

      const result = prefillTransformer(pages, formData, metadata, state);
      expect(result.formData.processAsIdProofed).to.be.true;
      expect(result.formData.originalUser.veteranFullName).to.equal(formData.veteranFullName);
      expect(result.formData.originalUser.veteranSocialSecurityNumber).to.equal(formData.veteranSocialSecurityNumber);
    });
  });
  describe('transform', () => {
    it('should remove identity fields', () => {
      const form = {
        data: {
          processAsIdProofed: true,
          veteranFullName: {
            first: 'Test'
          },
          veteranSocialSecurityNumber: '234',
          originalUser: {
            veteranSocialSecurityNumber: '234',
            veteranFullName: {
              first: 'Test'
            }
          }
        }
      };
      const result = JSON.parse(transform(form, fullFormConfig));

      expect(result.processAsAnonymous).to.be.false;
      expect(result.veteranSocialSecurityNumber).to.be.undefined;
      expect(result.veteranFullName).to.be.undefined;
    });
    it('should process as anonymous if fields are different', () => {
      const form = {
        data: {
          processAsIdProofed: true,
          veteranFullName: {
            first: 'Test1'
          },
          veteranSocialSecurityNumber: '234',
          originalUser: {
            veteranSocialSecurityNumber: '234',
            veteranFullName: {
              first: 'Test'
            }
          }
        }
      };
      const result = JSON.parse(transform(form, fullFormConfig));

      expect(result.processAsAnonymous).to.be.true;
      expect(result.veteranSocialSecurityNumber).not.to.be.undefined;
      expect(result.veteranFullName).not.to.be.undefined;
    });
  });
});
