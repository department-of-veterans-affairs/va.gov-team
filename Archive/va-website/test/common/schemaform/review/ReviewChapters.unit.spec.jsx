import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { ReviewChapters } from '../../../../src/applications/common/schemaform/review/ReviewChapters';

describe('Schemaform review: ReviewChapters', () => {
  it('should handle editing', () => {

    const chapters = [{
      expandedPages: [],
      formConfig: {},
      name: 'chapter1',
      open: false,
      pageKeys: ['page1']
    }, {
      expandedPages: [],
      formConfig: {},
      name: 'chapter2',
      open: false,
      pageKeys: ['page2']
    }];

    const pageList = [
      {
        path: 'previous-page'
      },
      {
        path: 'next-page'
      }
    ];

    const setEditMode = sinon.spy();
    const setViewedPages = sinon.spy();

    const tree = mount(
      <ReviewChapters
        chapters={chapters}
        pageList={pageList}
        setEditMode={setEditMode}
        setViewedPages={setViewedPages}/>
    ).instance();

    tree.handleEdit('testPage', true);
    expect(setViewedPages.calledWith(['testPage']));
    expect(setEditMode.calledWith('testPage', true, null));
  });

  it('should handle toggling', () => {
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

    const chapters = [{
      expandedPages: [],
      formConfig: {},
      name: 'chapter1',
      open: false,
      pageKeys: ['page1']
    }, {
      expandedPages: [],
      formConfig: {},
      name: 'chapter2',
      open: false,
      pageKeys: ['page2']
    }];

    const openReviewChapter = sinon.spy();
    const closeReviewChapter = sinon.spy();

    const instance = mount(
      <ReviewChapters
        chapters={chapters}
        closeReviewChapter={closeReviewChapter}
        openReviewChapter={openReviewChapter}
        pageList={pageList}
        route={{ formConfig, pageList }}
        viewedPages={['page1', 'page2']}
        setViewedPages={f => f}/>
    ).instance();

    instance.handleToggleChapter({ name: 'chapter1', open: false });
    expect(openReviewChapter.calledWith('chapter1')).to.be.true;
    instance.handleToggleChapter({ name: 'chapter3', open: true, pageKeys: 0 });
    expect(closeReviewChapter.calledWith('chapter3', 0)).to.be.true;
  });
});
