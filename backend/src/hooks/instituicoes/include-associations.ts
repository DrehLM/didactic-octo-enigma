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
        {
          model: models.escrita,
          as: 'escritas',
          include: [
            {
              model: models.autor,
              as: 'autor',
              include: [{ model: models.academico, as: 'academico' }],
            },
            {
              model: models.orientador,
              as: 'orientador',
              include: [{ model: models.academico, as: 'academico' }],
            },
            {
              model: models.publicacao,
              as: 'publicacao',
              include: [
                { model: models.edicao, as: 'edicao' },
                { model: models.trilha, as: 'trilha' },
                { model: models.tag, as: 'tags' },
                { model: models.palavraChave, as: 'palavrasChaves' },
              ],
            },
          ],
        },
      ],
    };

    return context;
  };
}
