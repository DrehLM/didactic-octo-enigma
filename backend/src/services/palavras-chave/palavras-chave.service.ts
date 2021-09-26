// Initializes the `palavraschave` service on path `/palavraschave`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { PalavrasChave } from './palavras-chave.class';
import createModel from '../../models/palavra-chave.model';
import hooks from './palavras-chave.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'palavras-chave': PalavrasChave & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/palavras-chave', new PalavrasChave(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('palavras-chave');

  service.hooks(hooks);
}
