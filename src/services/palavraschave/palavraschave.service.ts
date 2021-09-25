// Initializes the `palavraschave` service on path `/palavraschave`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Palavraschave } from './palavraschave.class';
import createModel from '../../models/palavrachave.model';
import hooks from './palavraschave.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'palavraschave': Palavraschave & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/palavraschave', new Palavraschave(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('palavraschave');

  service.hooks(hooks);
}
