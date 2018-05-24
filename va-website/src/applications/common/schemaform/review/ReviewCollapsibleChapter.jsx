import PropTypes from 'prop-types';
import React from 'react';
import Scroll from 'react-scroll';
import _ from 'lodash/fp';
import classNames from 'classnames';

import { focusElement } from '../../../../platform/utilities/ui';
import SchemaForm from '../components/SchemaForm';
import {
  getArrayFields,
  getNonArraySchema,
} from '../helpers';
import ArrayField from './ArrayField';
import ProgressButton from '@department-of-veterans-affairs/formation/ProgressButton';

const Element = Scroll.Element;
const scroller = Scroll.scroller;

/*
 * Displays all the pages in a chapter on the review page
 */
export default class ReviewCollapsibleChapter extends React.Component {
  constructor() {
    super();
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount() {
    this.id = _.uniqueId();
  }

  onChange(formData, path = null, index = null) {
    let newData = formData;
    if (path) {
      newData = _.set([path, index], formData, this.props.form.data);
    }
    this.props.setData(newData);
  }

  focusOnPage(key) {
    const pageDiv = document.querySelector(`#${key}`);
    focusElement(pageDiv);
  }

  handleEdit(key, editing, index = null) {
    this.props.onEdit(key, editing, index);
    this.scrollToPage(`${key}${index === null ? '' : index}`);
    this.focusOnPage(`${key}${index === null ? '' : index}`);
  }

  handleSubmit = (formData, key, path = null, index = null) => {
    // This makes sure defaulted data on a page with no changes is saved
    // Probably safe to do this for regular pages, too, but it hasn’t been necessary
    if (path) {
      const newData = _.set([path, index], formData, this.props.form.data);
      this.props.setData(newData);
    }

    this.handleEdit(key, false, index);
  }

  scrollToPage(key) {
    scroller.scrollTo(`${key}ScrollElement`, window.VetsGov.scroll || {
      duration: 500,
      delay: 2,
      smooth: true,
    });
  }

  render() {
    let pageContent = null;

    const {
      chapterFormConfig,
      expandedPages,
      form,
      formContext,
      pageKeys,
      showUnviewedPageWarning,
      viewedPages
    } = this.props;

    const ChapterDescription = chapterFormConfig.reviewDescription;
    let chapterTitle = chapterFormConfig.title;
    if (typeof chapterFormConfig.title === 'function') {
      chapterTitle = chapterFormConfig.title(true);
    }
    if (chapterFormConfig.reviewTitle) {
      chapterTitle = chapterFormConfig.reviewTitle;
    }

    if (this.props.open) {
      pageContent = (
        <div className="usa-accordion-content schemaform-chapter-accordion-content" aria-hidden="false">
          {ChapterDescription &&
            <ChapterDescription
              viewedPages={viewedPages}
              pageKeys={pageKeys}
              formData={form.data}/>}
          {expandedPages.map(page => {
            const pageState = form.pages[page.pageKey];
            let pageSchema;
            let pageUiSchema;
            let pageData;
            let arrayFields;
            let editing;
            let fullPageKey;

            if (page.showPagePerItem) {
              editing = pageState.editMode[page.index];
              pageSchema = pageState.schema.properties[page.arrayPath].items[page.index];
              pageUiSchema = pageState.uiSchema[page.arrayPath].items;
              pageData = _.get([page.arrayPath, page.index], form.data);
              arrayFields = [];
              fullPageKey = `${page.pageKey}${page.index}`;
            } else {
              editing = pageState.editMode;
              // TODO: support array fields inside of an array page?
              // Our pattern is to separate out array fields (growable tables) from
              // the normal page and display them separately. The review version of
              // ObjectField will hide them in the main section.
              arrayFields = getArrayFields(pageState, page);
              // This will be undefined if there are no fields other than an array
              // in a page, in which case we won’t render the form, just the array
              pageSchema = getNonArraySchema(pageState.schema, pageState.uiSchema);
              pageUiSchema = pageState.uiSchema;
              pageData = form.data;
              fullPageKey = page.pageKey;
            }

            const classes = classNames('form-review-panel-page', {
              'schemaform-review-page-warning': !viewedPages.has(fullPageKey)
            });

            return (
              <div key={`${fullPageKey}`} className={classes}>
                <Element name={`${fullPageKey}ScrollElement`}/>
                {pageSchema &&
                  <SchemaForm
                    name={page.pageKey}
                    title={page.reviewTitle || page.title}
                    data={pageData}
                    schema={pageSchema}
                    uiSchema={pageUiSchema}
                    hideHeaderRow={page.hideHeaderRow}
                    hideTitle={expandedPages.length === 1}
                    pagePerItemIndex={page.index}
                    onBlur={this.props.onBlur}
                    onEdit={() => this.handleEdit(page.pageKey, !editing, page.index)}
                    onSubmit={({ formData }) => this.handleSubmit(formData, page.pageKey, page.arrayPath, page.index)}
                    onChange={(formData) => this.onChange(formData, page.arrayPath, page.index)}
                    uploadFile={this.props.uploadFile}
                    reviewMode={!editing}
                    formContext={formContext}
                    editModeOnReviewPage={page.editModeOnReviewPage}>
                    {!editing ? <div/> : <ProgressButton
                      submitButton
                      buttonText="Update Page"
                      buttonClass="usa-button-primary"/>}
                  </SchemaForm>}
                {arrayFields.map(arrayField => (
                  <div key={arrayField.path} className="form-review-array">
                    <ArrayField
                      pageKey={page.pageKey}
                      pageTitle={page.title}
                      arrayData={_.get(arrayField.path, form.data)}
                      formData={form.data}
                      formContext={formContext}
                      pageConfig={page}
                      onBlur={this.props.onBlur}
                      schema={arrayField.schema}
                      uiSchema={arrayField.uiSchema}
                      setData={this.props.setData}
                      path={arrayField.path}/>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      );
    }

    const classes = classNames('usa-accordion-bordered', 'form-review-panel', {
      'schemaform-review-chapter-warning': showUnviewedPageWarning
    });

    return (
      <div id={`${this.id}-collapsiblePanel`} className={classes}>
        <Element name={`chapter${this.props.chapterKey}ScrollElement`}/>
        <ul className="usa-unstyled-list">
          <li>
            <div className="accordion-header clearfix schemaform-chapter-accordion-header">
              <button
                className="usa-button-unstyled"
                aria-expanded={this.props.open ? 'true' : 'false'}
                aria-controls={`collapsible-${this.id}`}
                onClick={this.props.toggleButtonClicked}>
                {chapterTitle}
              </button>
              {showUnviewedPageWarning && <span className="schemaform-review-chapter-warning-icon"/>}
            </div>
            <div id={`collapsible-${this.id}`}>
              {pageContent}
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

// TODO: refactor to pass form.data instead of the entire form object
ReviewCollapsibleChapter.propTypes = {
  chapterFormConfig: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired
};
