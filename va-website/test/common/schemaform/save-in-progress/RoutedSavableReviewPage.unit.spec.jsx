import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { RoutedSavableReviewPage } from '../../../../src/applications/common/schemaform/save-in-progress/RoutedSavableReviewPage';

describe('Schemaform save in progress: RoutedSavableReviewPage', () => {
  const location = {
    pathname: '/testing/0'
  };

  it('should display SaveLink and SaveStatus for SiP enabled forms if user is logged in', () => {
    const setData = sinon.spy();
    const onSubmit = sinon.spy();
    const router = {
      push: sinon.spy()
    };
    const route = {
      path: 'testPage',
      pageList: [
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
      ],
      formConfig: {
        chapters: {
          chapter1: {
            pages: {
              page1: {
                schema: {}
              }
            }
          },
          chapter2: {
            pages: {
              page2: {
              }
            }
          }
        }
      }
    };
    const form = {
      disableSave: false,
      submission: {
        hasAttemptedSubmit: false
      },
      page1: {
        schema: {},
      },
      page2: {
        schema: {},
      },
      data: {
        privacyAgreementAccepted: true
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
      <RoutedSavableReviewPage
        router={router}
        setData={setData}
        openChapters={[]}
        form={form}
        user={user}
        onSubmit={onSubmit}
        setEditMode={f => f}
        setPrivacyAgreement={f => f}
        route={route}
        location={location}/>
    );

    expect(tree.find('SaveStatus').exists()).to.be.true;
    expect(tree.find('SaveFormLink').exists()).to.be.true;
  });

  it('should auto save after change', () => {
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

    const autoSave = sinon.spy();

    const tree = shallow(
      <RoutedSavableReviewPage
        form={form}
        user={user}
        route={{ formConfig, pageList }}
        setPrivacyAgreement={f => f}
        location={location}/>
    );

    const instance = tree.instance();
    instance.debouncedAutoSave = autoSave;

    instance.debouncedAutoSave();

    expect(autoSave.called).to.be.true;
  });
});
