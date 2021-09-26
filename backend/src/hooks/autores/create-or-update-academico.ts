import { Hook } from '@feathersjs/feathers';
import { Application } from '../../declarations';

export default function createOrUpdateAcademico(): Hook {
  return async (context) => {
    const { models } = context.app.get('sequelizeClient');
    const existingAcademico = await models.academico.findOne({
      where: {
        nome: context.data.nome,
      },
    });
    if (existingAcademico) {
      context.data.academicoId = existingAcademico.id;
    } else {
      const app = context.app as Application;
      const academico = await app.service('academicos').create({
        nome: context.data.nome,
      });
      context.data.academicoId = academico.id;
    }
    return context;
  };
}
