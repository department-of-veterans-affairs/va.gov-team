import _ from 'lodash';

export function getPageList(routes, prefix = '') {
  return routes.map(route => {
    const obj = {
      name: `${prefix}${route.path}`,
      label: route.name
    };
    if (route.depends) {
      obj.depends = route.depends;
    }
    return obj;
  }).filter(page => page.name !== '/submit-message');
}

export function groupPagesIntoChapters(routes, prefix = '') {
  const pageList = routes
    .filter(route => route.chapter)
    .map(page => {
      const obj = {
        name: page.name,
        chapter: page.chapter,
        path: `${prefix}${page.path}`,
      };

      if (page.depends) {
        obj.depends = page.depends;
      }

      return obj;
    });

  const pageGroups = _.groupBy(pageList, page => page.chapter);

  return Object.keys(pageGroups).map(chapter => {
    return {
      name: chapter,
      pages: pageGroups[chapter]
    };
  });
}

export function isInProgress(pathName) {
  const trimmedPathname = pathName.replace(/\/$/, '');
  return !(
    trimmedPathname.endsWith('introduction')
    || trimmedPathname.endsWith('confirmation')
    || trimmedPathname.endsWith('form-saved')
    || trimmedPathname.endsWith('error')
  );
}

export function isActivePage(page, data) {
  if (typeof page.depends === 'function') {
    return page.depends(data, page.index);
  }

  if (Array.isArray(page.depends)) {
    return page.depends.some(condition => _.matches(condition)(data));
  }

  return page.depends === undefined || _.matches(page.depends)(data);
}

export function getActivePages(pages, data) {
  return pages.filter(page => isActivePage(page, data));
}

export function getInactivePages(pages, data) {
  return pages.filter(page => !isActivePage(page, data));
}

export function getCurrentFormStep(chapters, path) {
  let step;
  chapters.forEach((chapter, index) => {
    if (chapter.pages.some(page => page.path === path)) {
      step = index + 1;
    }
  });

  return step;
}

export function getCurrentPageName(chapters, path) {
  let name;
  chapters.forEach((chapter) => {
    if (chapter.pages.some(page => page.path === path)) {
      name = chapter.name;
    }
  });

  return name;
}

export function sanitizeForm(formData) {
  try {
    const suffixes = ['vaFileNumber', 'first', 'last', 'accountNumber', 'socialSecurityNumber', 'dateOfBirth'];
    return JSON.stringify(formData, (key, value) => {
      if (value && suffixes.some(suffix => key.toLowerCase().endsWith(suffix.toLowerCase()))) {
        return 'removed';
      }

      return value;
    });
  } catch (e) {
    return null;
  }
}
