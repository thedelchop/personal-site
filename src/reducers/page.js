import { NOT_FOUND } from 'redux-first-router';

const components = {
  HOME: 'Home',
  LIST: 'List',
  [NOT_FOUND]: 'NotFound',
};

export default (state = 'HOME', action = {}) => components[action.type] || state;

// NOTES: this is the primary reducer demonstrating how RFR replaces the need
// for React Router's <Route /> component.
//
// ALSO:  Forget a switch, use a hash table for perf.
