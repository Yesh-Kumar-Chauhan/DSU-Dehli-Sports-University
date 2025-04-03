// utils/findBreadcrumb.js

import breadcrumbsData from './breadCrumb.json';

export const findBreadcrumb = (pathname) => {
  return breadcrumbsData.find(item => item.path === pathname);
};
