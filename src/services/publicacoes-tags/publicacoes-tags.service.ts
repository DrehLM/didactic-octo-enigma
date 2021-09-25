// Initializes the `publicacoes-tags` service on path `/publicacoes-tags`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { PublicacoesTags } from './publicacoes-tags.class';
import createModel from '../../models/publicacao-tag.model';
import hooks from './publicacoes-tags.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'publicacoes-tags': PublicacoesTags & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/publicacoes-tags', new PublicacoesTags(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('publicacoes-tags');

  service.hooks(hooks);
}
