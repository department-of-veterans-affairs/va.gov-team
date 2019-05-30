import _ from 'lodash/fp';
import { getActivePages } from '../../../platform/forms/helpers';
import { expandArrayPages } from './helpers';

/*
 * Returns the page list without conditional pages that have not satisfied
 * their dependencies and therefore should be skipped.
 */
function getEligiblePages(pageList, data, pathname) {
  // Any `showPagePerItem` pages are expanded to create items for each array item.
  // We update the `path` for each of those pages to replace `:index` with the current item index.
  const expandedPageList = expandArrayPages(pageList, data);
  const eligiblePageList = getActivePages(expandedPageList, data);
  const pageIndex = _.findIndex(item => item.path === pathname, eligiblePageList);
  return { pages: eligiblePageList, pageIndex };
}

export function getNextPagePath(pageList, data, pathname) {
  const { pages, pageIndex } = getEligiblePages(pageList, data, pathname);
  return pages[pageIndex + 1].path;
}

export function getPreviousPagePath(pageList, data, pathname) {
  const { pages, pageIndex } = getEligiblePages(pageList, data, pathname);
  // if we found the current page, go to previous one
  // if not, go back to the beginning because they shouldn’t be here
  const page = pageIndex >= 0 ? pageIndex - 1 : 0;
  return pages[page].path;
}
