import { expect } from 'chai';
import React from 'react';
import SkinDeep from 'skin-deep';
import sinon from 'sinon';

import { fileHelp, submit } from '../helpers.jsx';

import { mockFetch, resetFetch } from '../../../platform/testing/unit/helpers.js';

function setFetchResponse(stub, data) {
  const response = new Response();
  response.ok = true;
  response.json = () => Promise.resolve(data);
  stub.resolves(response);
}

describe('Pensions helpers', () => {
  const FileHelp = fileHelp;
  describe('fileHelp', () => {
    it('should render', () => {
      const formData = {
        'view:aidAttendance': true
      };
      const tree = SkinDeep.shallowRender(
        <FileHelp
          formData={formData}/>
      );

      expect(tree.text()).to.contain('Please upload all doc');
      expect(tree.everySubTree('li').length).to.equal(2);
    });
    it('should show disabled child bullet', () => {
      const formData = {
        dependents: [{
          disabled: true
        }]
      };
      const tree = SkinDeep.shallowRender(
        <FileHelp
          formData={formData}/>
      );

      expect(tree.everySubTree('li').length).to.equal(3);
    });
    it('should show school child bullet', () => {
      const formData = {
        dependents: [{
          attendingCollege: true
        }]
      };
      const tree = SkinDeep.shallowRender(
        <FileHelp
          formData={formData}/>
      );

      expect(tree.everySubTree('li').length).to.equal(3);
    });
  });
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
        }
      };

      return submit(form, formConfig).then((res) => {
        expect(res).to.deep.equal(response);
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
        }
      };

      return submit(form, formConfig).then(() => {
        expect.fail();
      },
      err => {
        expect(err.message).to.equal('vets_server_error_pensions: status failed');
      });
    });
    afterEach(() => {
      resetFetch();
      delete window.URL;
    });
  });
});
