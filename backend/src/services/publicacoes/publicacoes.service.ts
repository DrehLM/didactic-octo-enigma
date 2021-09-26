// Initializes the `publicacoes` service on path `/publicacoes`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Publicacoes } from './publicacoes.class';
import createModel from '../../models/publicacao.model';
import hooks from './publicacoes.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'publicacoes': Publicacoes & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/publicacoes', new Publicacoes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('publicacoes');

  service.hooks(hooks);
}
