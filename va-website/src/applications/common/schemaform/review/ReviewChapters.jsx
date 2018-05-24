import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReviewCollapsibleChapter from './ReviewCollapsibleChapter';
import {
  createPageListByChapter,
  expandArrayPages,
  getActiveChapters,
  getPageKeys
} from '../helpers';
import {
  getReviewPageOpenChapters,
  getViewedPages
} from '../state/selectors';
import { getActivePages } from '../../../../platform/forms/helpers';
import {
  closeReviewChapter,
  openReviewChapter,
  setData,
  setEditMode,
  setViewedPages,
  uploadFile
} from '../actions';
import Scroll from 'react-scroll';

const scroller = Scroll.scroller;
class ReviewChapters extends React.Component {

  componentDidMount() {
    const {
      formData,
      pageList
    } = this.props;
    const viewedPages = new Set(getPageKeys(pageList, formData));
    this.props.setViewedPages(viewedPages);
  }

  handleToggleChapter({ name, open, pageKeys }) {
    if (open) {
      this.props.closeReviewChapter(name, pageKeys);
    } else {
      this.props.openReviewChapter(name);
      this.scrollToChapter(name);
    }
  }

  scrollToChapter = (chapterKey) => {
    scroller.scrollTo(`chapter${chapterKey}ScrollElement`, window.VetsGov.scroll || {
      duration: 500,
      delay: 2,
      smooth: true,
    });
  }

  handleEdit = (pageKey, editing, index = null) => {
    const fullPageKey = `${pageKey}${index === null ? '' : index}`;
    if (editing) {
      this.props.setViewedPages([fullPageKey]);
    }
    this.props.setEditMode(pageKey, editing, index);
  }

  handleSetData = (...args) => {
    this.props.setData(...args);
    if (this.props.onSetData) {
      this.props.onSetData();
    }
  }

  render() {
    const {
      chapters,
      form,
      formContext,
      setValid,
      viewedPages
    } = this.props;

    return (
      <div className="input-section">
        <div>
          {chapters.map(chapter => (
            <ReviewCollapsibleChapter
              expandedPages={chapter.expandedPages}
              chapterFormConfig={chapter.formConfig}
              chapterKey={chapter.name}
              form={form}
              formContext={formContext}
              key={chapter.name}
              onEdit={this.handleEdit}
              open={chapter.open}
              pageKeys={chapter.pageKeys}
              setData={(...args) => this.handleSetData(...args)}
              setValid={setValid}
              showUnviewedPageWarning={chapter.showUnviewedPageWarning}
              toggleButtonClicked={() => this.handleToggleChapter(chapter)}
              uploadFile={this.props.uploadFile}
              viewedPages={viewedPages}/>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  // from ownprops
  const {
    formConfig,
    formContext,
    pageList
  } = ownProps;

  // from redux state
  const form = state.form;
  const formData = state.form.data;
  const openChapters = getReviewPageOpenChapters(state);
  const viewedPages = getViewedPages(state);

  const chapterNames = getActiveChapters(formConfig, formData);
  const pagesByChapter = createPageListByChapter(formConfig);
  const chapters = chapterNames.map(chapterName => {
    const pages = pagesByChapter[chapterName];

    const activePages = getActivePages(pages, formData);
    const expandedPages = expandArrayPages(activePages, formData);
    const chapterFormConfig = formConfig.chapters[chapterName];
    const open = openChapters.includes(chapterName);
    const pageKeys = getPageKeys(pages, formData);
    const showUnviewedPageWarning = pageKeys.some(key => !viewedPages.has(key));

    return {
      expandedPages,
      formConfig: chapterFormConfig,
      name: chapterName,
      open,
      pageKeys,
      showUnviewedPageWarning
    };
  });

  return {
    chapters,
    form,
    formData,
    formConfig,
    formContext,
    pageList,
    viewedPages
  };
}

const mapDispatchToProps = {
  closeReviewChapter,
  openReviewChapter,
  setData,
  setEditMode,
  setViewedPages,
  uploadFile
};

ReviewChapters.propTypes = {
  chapters: PropTypes.array.isRequired,
  closeReviewChapter: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
  formConfig: PropTypes.object.isRequired,
  formContext: PropTypes.object,
  onSetData: PropTypes.func,
  openReviewChapter: PropTypes.func.isRequired,
  pageList: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  setEditMode: PropTypes.func.isRequired,
  setViewedPages: PropTypes.func.isRequired,
  uploadFile: PropTypes.func.isRequired,
  viewedPages: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewChapters));

// for tests
export { ReviewChapters };
