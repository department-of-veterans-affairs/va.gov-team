import { UPDATE_ROUTE } from '../utils/constants';

export * from './alert';
export * from './compose';
export * from './folders';
export * from './messages';
export * from './modals';
export * from './preferences';
export * from './search';

export function updateRoute(location) {
  return { type: UPDATE_ROUTE, location };
}
