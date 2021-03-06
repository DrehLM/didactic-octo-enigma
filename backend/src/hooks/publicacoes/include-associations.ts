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
        { model: models.edicao, as: 'edicao' },
        { model: models.trilha, as: 'trilha' },
        { model: models.tag, as: 'tags' },
        {
          model: models.escrita,
          as: 'escritas',
          include: [
            { model: models.autor, as: 'autor' },
            { model: models.orientador, as: 'orientador' },
            { model: models.publicacao, as: 'publicacao' },
            { model: models.instituicao, as: 'instituicao' },
          ],
        },
        { model: models.palavraChave, as: 'palavrasChaves' },
      ],
    };

    return context;
  };
}
