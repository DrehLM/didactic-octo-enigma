// Initializes the `orientadores` service on path `/orientadores`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Orientadores } from './orientadores.class';
import createModel from '../../models/orientador.model';
import hooks from './orientadores.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'orientadores': Orientadores & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/orientadores', new Orientadores(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('orientadores');

  service.hooks(hooks);
}
