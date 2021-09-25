// Initializes the `autores` service on path `/autores`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Autores } from './autores.class';
import createModel from '../../models/autor.model';
import hooks from './autores.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'autores': Autores & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/autores', new Autores(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('autores');

  service.hooks(hooks);
}
