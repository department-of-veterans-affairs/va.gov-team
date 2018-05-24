import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { ReviewPage } from '../../../../src/applications/common/schemaform/review/ReviewPage';

describe('Schemaform review: ReviewPage', () => {
  const location = {
    pathname: '/testing/0'
  };

  it('should render chapters', () => {
    const formConfig = {
      chapters: {
        chapter1: {
          pages: {
            page1: {}
          }
        },
        chapter2: {
          pages: {
            page2: {}
          }
        }
      }
    };

    const pageList = [
      {
        path: 'previous-page'
      },
      {
        path: 'testing',
        pageKey: 'testPage'
      },
      {
        path: 'next-page'
      }
    ];

    const form = {
      submission: {
        hasAttemptedSubmit: false
      },
      data: {
        privacyAgreementAccepted: false
      }
    };

    const user = {
      profile: {
        savedForms: []
      },
      login: {
        currentlyLoggedIn: true
      }
    };

    const tree = shallow(
      <ReviewPage
        form={form}
        user={user}
        openChapters={[]}
        route={{ formConfig, pageList }}
        setEditMode={f => f}
        setPrivacyAgreement={f => f}
        location={location}/>
    );

    expect(tree.find('withRouter(Connect(ReviewChapters))')).to.have.length(1);
    expect(tree.find('withRouter(Connect(SubmitController))')).to.have.length(1);
  });
});
