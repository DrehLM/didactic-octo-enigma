// Initializes the `edicoes` service on path `/edicoes`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Edicoes } from './edicoes.class';
import createModel from '../../models/edicao.model';
import hooks from './edicoes.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'edicoes': Edicoes & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/edicoes', new Edicoes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('edicoes');

  service.hooks(hooks);
}
