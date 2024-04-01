export enum Path {
  // Home
  HOME = '/',

  // JS
  JS = '/js',
  JS_INTERSECTION_OBSERVER = '/js/IntersectionObserver',

  // Errors
  NOT_FOUND = '/not-found',
  FORBIDDEN = '/forbidden',
}

export const PATH_LABEL: Record<Path, string> = {
  [Path.HOME]: 'Home',
  [Path.NOT_FOUND]: 'Not Found',
  [Path.FORBIDDEN]: 'Forbidden',
  [Path.JS]: 'Javascript',
  [Path.JS_INTERSECTION_OBSERVER]: 'Intersection Observer',
};
