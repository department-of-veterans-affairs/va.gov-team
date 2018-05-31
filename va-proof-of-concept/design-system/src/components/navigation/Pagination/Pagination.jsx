/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import range from 'lodash/fp/range';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.last = this.last.bind(this);
    this.pageNumbers = this.pageNumbers.bind(this);
  }

  next() {
    let nextPage;
    if (this.props.pages > this.props.page) {
      nextPage = (
        <a aria-label="Next page" onClick={() => {this.props.onPageSelect(this.props.page + 1);}}>
          Next
        </a>
      );
    }
    return nextPage;
  }

  prev() {
    let prevPage;
    if (this.props.page > 1) {
      prevPage = (
        <a aria-label="Previous page" onClick={() => {this.props.onPageSelect(this.props.page - 1);}}>
          <abbr title="Previous">Prev</abbr>
        </a>
      );
    }
    return prevPage;
  }

  last() {
    const {
      maxPageListLength,
      page: currentPage,
      pages: totalPages,
      showLastPage
    } = this.props;

    let lastPage;
    if (showLastPage && currentPage < totalPages - maxPageListLength + 1) {
      lastPage = (
        <span>
          <a aria-label="...">
            ...
          </a>
          <a aria-label="Last page" onClick={() => {this.props.onPageSelect(totalPages);}}>
            {totalPages}
          </a>
        </span>
      );
    }
    return lastPage;
  }

  pageNumbers() {
    const {
      maxPageListLength,
      page: currentPage,
      pages: totalPages,
      showLastPage
    } = this.props;

    // Make space for "... (last page number)" if not in range of the last page.
    const showEllipsisAndLastPage =
      showLastPage &&
      currentPage < totalPages - maxPageListLength + 1;

    const limit = showEllipsisAndLastPage
      ? maxPageListLength - 2
      : maxPageListLength;

    let end;
    let start;

    // If there are more pages returned than the limit to show
    // cap the upper range at limit + the page number.
    if (totalPages > limit) {
      start = currentPage;
      end = limit + currentPage;
      // treat the last pages specially
      if (start >= totalPages - limit + 1) {
        start = totalPages - limit + 1;
        end = totalPages + 1;
      }
    } else {
      start = 1;
      end = totalPages + 1;
    }

    return range(start, end);
  }

  render() {
    if (this.props.pages === 1) {
      return <div/>;
    }

    const pageList = this.pageNumbers().map((pageNumber) => {
      const pageClass = classNames({
        'va-pagination-active': this.props.page === pageNumber
      });

      return (
        <a
          key={pageNumber}
          className={pageClass}
          aria-label={`Page ${pageNumber}`}
          onClick={() => this.props.onPageSelect(pageNumber)}>
          {pageNumber}
        </a>
      );
    });

    return (
      <div className="va-pagination">
        <span className="va-pagination-prev">{this.prev()}</span>
        <div className="va-pagination-inner">
          {pageList} {this.last()}
        </div>
        <span className="va-pagination-next">{this.next()}</span>
      </div>
    );
  }
}

Pagination.propTypes = {
  onPageSelect: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  maxPageListLength: PropTypes.number.isRequired,
  showLastPage: PropTypes.bool,
};

Pagination.defaultProps = {
  maxPageListLength: 10,
};

export default Pagination;
