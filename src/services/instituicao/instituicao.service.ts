// Initializes the `instituicao` service on path `/instituicao`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Instituicao } from './instituicao.class';
import createModel from '../../models/instituicao.model';
import hooks from './instituicao.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'instituicao': Instituicao & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/instituicao', new Instituicao(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('instituicao');

  service.hooks(hooks);
}
