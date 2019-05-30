import React from 'react';
import { expect } from 'chai';
import SkinDeep from 'skin-deep';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { SubmitController } from '../../../../src/applications/common/schemaform/review/SubmitController';

describe('Schemaform review: SubmitController', () => {
  it('should route to confirmation page after submit', () => {
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

    const form = {
      submission: {
        hasAttemptedSubmit: false,
      },
      data: {
        privacyAgreementAccepted: false
      }
    };

    const router = {
      push: sinon.spy()
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

    const tree = SkinDeep.shallowRender(
      <SubmitController
        form={form}
        route={{ formConfig, pageList }}
        router={router}/>
    );

    tree.getMountedInstance().componentWillReceiveProps({
      route: {
        formConfig: {}
      },
      form: {
        submission: {
          status: 'applicationSubmitted'
        },
        data: {
          privacyAgreementAccepted: false
        }
      },
      formConfig: {
        urlPrefix: '/'
      }
    });

    expect(router.push.calledWith('confirmation'));
  });
  it('should not submit when privacy agreement not accepted', () => {
    const form = {
      submission: {
        hasAttemptedSubmit: false
      },
      pages: {
        page1: {},
        page2: {},
      },
      data: {
        privacyAgreementAccepted: false
      }
    };

    const pagesByChapter = {
      chapter1: [{
        chapterKey: 'chapter1',
        pageKey: 'page1'
      }],
      chapter2: [{
        chapterKey: 'chapter2',
        pageKey: 'page2'
      }]
    };

    const submitForm = sinon.spy();
    const setSubmission = sinon.spy();

    const tree = SkinDeep.shallowRender(
      <SubmitController
        setSubmission={setSubmission}
        submitForm={submitForm}
        form={form}
        pagesByChapter={pagesByChapter}
        privacyAgreementAccepted={false}/>
    );

    tree.getMountedInstance().handleSubmit();

    expect(submitForm.called).to.be.false;
    expect(setSubmission.called).to.be.true;
  });
  it('should not submit when invalid', () => {
    const formConfig = {
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
              schema: {}
            }
          }
        }
      }
    };

    const pagesByChapter = {
      chapter1: [{
        chapterKey: 'chapter1',
        pageKey: 'page1'
      }],
      chapter2: [{
        chapterKey: 'chapter2',
        pageKey: 'page2'
      }]
    };

    const form = {
      submission: {
        hasAttemptedSubmit: false
      },
      pages: {
        page1: {},
        page2: {},
      },
      data: {
        privacyAgreementAccepted: false
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

    const submitForm = sinon.spy();
    const setSubmission = sinon.spy();

    const tree = SkinDeep.shallowRender(
      <SubmitController
        setSubmission={setSubmission}
        submitForm={submitForm}
        form={form}
        pagesByChapter={pagesByChapter}
        pageList={pageList}
        route={{ formConfig, pageList }}/>
    );

    tree.getMountedInstance().handleSubmit();

    expect(submitForm.called).to.be.false;
    expect(setSubmission.called).to.be.true;
  });
  it('should submit when valid', () => {
    const formConfig = {
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
    };

    const pagesByChapter = {
      chapter1: [{
        chapterKey: 'chapter1',
        pageKey: 'page1'
      }],
      chapter2: [{
        chapterKey: 'chapter2',
        pageKey: 'page2'
      }]
    };

    const form = {
      submission: {
        hasAttemptedSubmit: false
      },
      pages: {
        page1: {
          schema: {},
        },
        page2: {
          schema: {},
        },
      },
      data: {
        privacyAgreementAccepted: true
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

    const submitForm = sinon.spy();

    const tree = SkinDeep.shallowRender(
      <SubmitController
        submitForm={submitForm}
        form={form}
        pagesByChapter={pagesByChapter}
        pageList={pageList}
        route={{ formConfig, pageList }}/>
    );

    tree.getMountedInstance().handleSubmit();

    expect(submitForm.called).to.be.true;
  });
  it('should go back', () => {
    const router = {
      push: sinon.spy()
    };
    const formConfig = {
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
    };
    const submission = {
      hasAttemptedSubmit: false
    };
    const form = {
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

    const tree = mount(
      <SubmitController
        form={form}
        formConfg={formConfig}
        pageList={['chapter1', 'chatper2']}
        router={router}
        submission={submission}/>
    ).instance();

    tree.goBack();

    expect(router.push.calledWith('previous-page'));
  });
});
