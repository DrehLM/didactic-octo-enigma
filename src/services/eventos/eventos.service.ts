// Initializes the `eventos` service on path `/eventos`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Eventos } from './eventos.class';
import createModel from '../../models/eventos.model';
import hooks from './eventos.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'eventos': Eventos & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/eventos', new Eventos(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('eventos');

  service.hooks(hooks);
}
