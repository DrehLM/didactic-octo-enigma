import createOrUpdateAcademico from '../../hooks/autores/create-or-update-academico';
import includeAssociations from '../../hooks/autores/include-associations';

export default {
  before: {
    all: [],
    find: [includeAssociations()],
    get: [includeAssociations()],
    create: [createOrUpdateAcademico()],
    update: [createOrUpdateAcademico()],
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
