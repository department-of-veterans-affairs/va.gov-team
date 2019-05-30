import {
  createPageList,
  createFormPageList,
  createRoutes
} from '../helpers';
import RoutedSavablePage from './RoutedSavablePage';
import RoutedSavableReviewPage from './RoutedSavableReviewPage';
import FormSaved from './FormSaved';
import SaveInProgressErrorPage from './SaveInProgressErrorPage';

export function createRoutesWithSaveInProgress(formConfig) {
  const protectedRoutes = new Set(['introduction', 'review-and-submit', 'confirmation', '*']);
  const formPages = createFormPageList(formConfig);
  const pageList = createPageList(formConfig, formPages);
  const newRoutes = createRoutes(formConfig);

  newRoutes.forEach((route, index) => {
    let newRoute;

    // rewrite page component
    if (!protectedRoutes.has(route.path)) {
      newRoute = Object.assign({}, route, { component: RoutedSavablePage });
      newRoutes[index] = newRoute;
    }

    // rewrite review page component
    if (route.path === 'review-and-submit') {
      newRoute = Object.assign({}, route, { component: RoutedSavableReviewPage });
      newRoutes[index] = newRoute;
    }
  });

  if (!formConfig.disableSave) {
    newRoutes.splice(newRoutes.length - 1, 0, {
      path: 'form-saved',
      component: FormSaved,
      pageList,
      formConfig
    });

    newRoutes.splice(newRoutes.length - 1, 0, {
      path: 'error',
      component: SaveInProgressErrorPage,
      pageList, // In case we need it for startOver?
      formConfig
    });

    newRoutes.splice(newRoutes.length - 1, 0, {
      path: 'resume',
      pageList,
      formConfig
    });
  }

  return newRoutes;
}
