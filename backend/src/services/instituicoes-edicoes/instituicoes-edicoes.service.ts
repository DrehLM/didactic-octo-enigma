// Initializes the `instituicoes-edicoes` service on path `/instituicoes-edicoes`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { InstituicoesEdicoes } from './instituicoes-edicoes.class';
import createModel from '../../models/instituicao-edicao.model';
import hooks from './instituicoes-edicoes.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'instituicoes-edicoes': InstituicoesEdicoes & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/instituicoes-edicoes', new InstituicoesEdicoes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('instituicoes-edicoes');

  service.hooks(hooks);
}
