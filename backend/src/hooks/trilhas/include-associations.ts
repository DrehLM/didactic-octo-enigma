// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function includeAssociations(): Hook {
  return async (context) => {
    const { models } = context.app.get('sequelizeClient');

    context.params.sequelize = {
      ...(context.params.sequelize ?? {}),
      raw: false,
      include: [
        ...(context.params.sequelize?.include ?? []),
        { model: models.edicao, as: 'edicoes' },
        { model: models.publicacao, as: 'publicacoes' },
      ],
    };

    return context;
  };
}
