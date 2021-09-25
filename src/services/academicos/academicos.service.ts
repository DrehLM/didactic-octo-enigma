// Initializes the `academicos` service on path `/academicos`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Academicos } from './academicos.class';
import createModel from '../../models/academicos.model';
import hooks from './academicos.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'academicos': Academicos & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/academicos', new Academicos(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('academicos');

  service.hooks(hooks);
}
