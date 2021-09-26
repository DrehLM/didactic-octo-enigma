// Initializes the `edicoes-trilhas` service on path `/edicoes-trilhas`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { EdicoesTrilhas } from './edicoes-trilhas.class';
import createModel from '../../models/edicao-trilha.model';
import hooks from './edicoes-trilhas.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'edicoes-trilhas': EdicoesTrilhas & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/edicoes-trilhas', new EdicoesTrilhas(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('edicoes-trilhas');

  service.hooks(hooks);
}
