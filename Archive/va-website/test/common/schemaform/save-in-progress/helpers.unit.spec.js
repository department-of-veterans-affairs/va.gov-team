import { expect } from 'chai';
import { createRoutesWithSaveInProgress } from '../../../../src/applications/common/schemaform/save-in-progress/helpers';

describe('createRoutes', () => {
  it('should create routes with save enabled', () => {
    const formConfig = {
      chapters: {
        firstChapter: {
          pages: {
            testPage: {
              path: 'test-page'
            }
          }
        }
      }
    };

    const routes = createRoutesWithSaveInProgress(formConfig);

    expect(routes[0].path).to.equal('test-page');
    expect(routes[1].path).to.equal('review-and-submit');
    expect(routes[2].path).to.equal('confirmation');
    expect(routes[3].path).to.equal('form-saved');
    expect(routes[4].path).to.equal('error');
    expect(routes[5].path).to.equal('resume');
  });
});
