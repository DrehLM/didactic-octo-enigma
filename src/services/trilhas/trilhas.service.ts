// Initializes the `trilhas` service on path `/trilhas`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Trilhas } from './trilhas.class';
import createModel from '../../models/trilha.model';
import hooks from './trilhas.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'trilhas': Trilhas & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/trilhas', new Trilhas(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('trilhas');

  service.hooks(hooks);
}
