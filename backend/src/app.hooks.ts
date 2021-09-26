// Application hooks that run for every service
import { disablePagination } from 'feathers-hooks-common';
// Don't remove this comment. It's needed to format import lines nicely.

export default {
  before: {
    all: [],
    find: [disablePagination()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
