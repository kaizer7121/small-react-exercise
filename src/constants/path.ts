export enum Path {
  // Home
  HOME = '/',

  // JS
  JS = '/js',
  JS_INTERSECTION_OBSERVER = '/js/intersection-observer',
  JS_INTERSECTION_OBSERVER_RELATIVE = 'intersection-observer',
  JS_PROMISE_RACE = '/js/promice-race',
  JS_PROMISE_RACE_RELATIVE = 'promice-race',

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
  [Path.JS_PROMISE_RACE]: 'Promise race',
  [Path.JS_INTERSECTION_OBSERVER_RELATIVE]: 'Intersection Observer',
  [Path.JS_PROMISE_RACE_RELATIVE]: 'Promise Race',
};
