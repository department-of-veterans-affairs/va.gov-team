import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Scroll from 'react-scroll';
import _ from 'lodash';

import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import Pagination from '@department-of-veterans-affairs/formation/Pagination';
import SortableTable from '@department-of-veterans-affairs/formation/SortableTable';
import { loadPrescriptions } from '../actions/prescriptions';
import { openGlossaryModal } from '../actions/modals';

import GlossaryLink from '../components/GlossaryLink';
import SortMenu from '../components/SortMenu';
import { rxStatuses } from '../config';
import { formatDate } from '../utils/helpers';
import { getScrollOptions } from '../../../platform/utilities/ui';

const ScrollElement = Scroll.Element;
const scroller = Scroll.scroller;

class History extends React.Component {
  constructor(props) {
    super(props);
    this.formattedSortParam = this.formattedSortParam.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handlePageSelect = this.handlePageSelect.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    if (!this.props.loading) {
      const query = _.pick(this.props.location.query, ['page', 'sort']);
      this.props.loadPrescriptions(query);
    }
  }

  componentDidUpdate(prevProps) {
    const currentPage = this.props.page;
    const currentSort = this.formattedSortParam(
      this.props.sort.value,
      this.props.sort.order
    );

    const query = _.pick(this.props.location.query, ['page', 'sort']);
    const requestedPage = +query.page || currentPage;
    const requestedSort = query.sort || currentSort;

    // Check if query params requested are different from state.
    const pageChanged = requestedPage !== currentPage;
    const sortChanged = requestedSort !== currentSort;

    if (pageChanged || sortChanged) {
      this.scrollToTop();
    }

    if (!this.props.loading) {
      if (pageChanged || sortChanged) {
        this.props.loadPrescriptions(query);
      }

      // Check if query params changed in state.
      const prevSort = this.formattedSortParam(
        prevProps.sort.value,
        prevProps.sort.order
      );
      const pageUpdated = prevProps.page !== currentPage;
      const sortUpdated = prevSort !== currentSort;

      if (pageUpdated || sortUpdated) {
        this.scrollToTop();
      }
    }
  }

  scrollToTop() {
    scroller.scrollTo('history', getScrollOptions());
  }

  formattedSortParam(value, order) {
    const formattedValue = _.snakeCase(value);
    const sort = order === 'DESC'
      ? `-${formattedValue}`
      : formattedValue;
    return sort;
  }

  handleSort(value, order) {
    const sort = this.formattedSortParam(value, order);
    this.context.router.push({
      ...this.props.location,
      query: { ...this.props.location.query, sort }
    });
  }

  handlePageSelect(page) {
    this.context.router.push({
      ...this.props.location,
      query: { ...this.props.location.query, page }
    });
  }

  render() {
    const items = this.props.prescriptions;
    let content;

    if (this.props.loading) {
      content = <LoadingIndicator message="Loading your prescriptions..."/>;
    } else if (items) {
      const currentSort = this.props.sort;

      const fields = [
        { label: 'Last submit date', value: 'refillSubmitDate' },
        { label: 'Last fill date', value: 'refillDate' },
        { label: 'Prescription', value: 'prescriptionName' },
        { label: 'Prescription status', value: 'refillStatus', nonSortable: true },
      ];

      const data = items.map(item => {
        const attrs = item.attributes;
        const status = rxStatuses[attrs.refillStatus];

        return {
          id: item.id,

          refillSubmitDate: formatDate(attrs.refillSubmitDate),

          refillDate: formatDate(attrs.refillDate, { validateInPast: true }),

          prescriptionName: (
            <Link to={`/${attrs.prescriptionId}`}>
              {attrs.prescriptionName}
            </Link>
          ),

          refillStatus: (
            <GlossaryLink
              term={status}
              onClick={this.props.openGlossaryModal}/>
          )
        };
      });

      content = (
        <div>
          <p className="rx-tab-explainer">Your VA prescription refill history</p>
          <div className="show-for-small-only">
            <SortMenu
              onClick={this.handleSort}
              onChange={this.handleSort}
              options={fields}
              selected={currentSort}/>
          </div>
          <SortableTable
            className="va-table-list rx-table rx-table-list"
            currentSort={currentSort}
            data={data}
            fields={fields}
            onSort={this.handleSort}/>
          <Pagination
            onPageSelect={this.handlePageSelect}
            page={this.props.page}
            pages={this.props.pages}/>
        </div>
      );
    } else {
      content = (
        <p className="rx-tab-explainer rx-loading-error">
          We couldn’t retrieve your prescriptions.
          Please refresh this page or try again later. If this problem persists, please call the Vets.gov Help Desk
          at <a href="tel:855-574-7286">1-855-574-7286</a>, TTY: <a href="tel:18008778339">1-800-877-8339</a>, Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET).
        </p>
      );
    }

    return (
      <ScrollElement
        id="rx-history"
        name="history"
        className="va-tab-content">
        {content}
      </ScrollElement>
    );
  }
}

History.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const rxState = state.health.rx;
  return {
    ...rxState.prescriptions.history,
    prescriptions: rxState.prescriptions.items
  };
};

const mapDispatchToProps = {
  loadPrescriptions,
  openGlossaryModal
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
