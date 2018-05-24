import React from 'react';
import _ from 'lodash/fp';
import shallowEqual from 'recompose/shallowEqual';

import SegmentedProgressBar from '@department-of-veterans-affairs/formation/SegmentedProgressBar';

import { getActivePages } from '../../../../platform/forms/helpers';
import { createFormPageList, createPageList, expandArrayPages } from '../helpers';

export default class FormNav extends React.Component {
  // The formConfig transforming is a little heavy, so skip it if we can
  shouldComponentUpdate(newProps) {
    return !shallowEqual(this.props, newProps);
  }
  render() {
    const { formConfig, currentPath, formData } = this.props;

    // This is converting the config into a list of pages with chapter keys,
    // finding the current page, then getting the chapter name using the key
    const formPages = createFormPageList(formConfig);
    const pageList = createPageList(formConfig, formPages);

    // These lines are also in src/applications/common/schemaform/routing.js#getEligiblePages
    // TODO: Pull this logic out to be used in routing.js only
    const expandedPageList = expandArrayPages(pageList, formData);
    const eligiblePageList = getActivePages(expandedPageList, formData);

    const chapters = _.uniq(eligiblePageList
      .map(p => p.chapterKey)
      .filter(key => !!key)
    );

    let page = eligiblePageList.filter(p => p.path === currentPath)[0];
    // If the page isn’t active, it won’t be in the eligiblePageList
    // This is a fallback to still find the chapter name if you open the page directly
    // (the chapter index will probably be wrong, but this isn’t a scenario that happens in normal use)
    if (!page) {
      page = formPages.find(p => `${formConfig.urlPrefix}${p.path}` === currentPath);
    }

    let current;
    let chapterName;
    if (page) {
      current = chapters.indexOf(page.chapterKey) + 1;
      // The review page is always part of our forms, but isn’t listed in chapter list
      chapterName = page.chapterKey === 'review'
        ? 'Review Application'
        : formConfig.chapters[page.chapterKey].title;
      if (typeof chapterName === 'function') {
        chapterName = chapterName();
      }
    }

    return (
      <div>
        <SegmentedProgressBar total={chapters.length} current={current}/>
        <div className="schemaform-chapter-progress">
          <div
            role="progressbar"
            aria-valuenow={current}
            aria-valuemin="1"
            aria-valuetext={`Step ${current} of ${chapters.length}: ${chapterName}`}
            aria-valuemax={chapters.length}
            className="nav-header nav-header-schemaform">
            <h4><span className="form-process-step current">{current}</span> <span className="form-process-total">of {chapters.length}</span> {chapterName}</h4>
          </div>
        </div>
      </div>
    );
  }
}
