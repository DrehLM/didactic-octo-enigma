// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const instituicao = sequelizeClient.define(
    'instituicao',
    {
      nome: {
        type: DataTypes.STRING,
      },
      sigla: {
        type: DataTypes.STRING,
      },
      cidade: {
        type: DataTypes.STRING,
      },
      estado: {
        type: DataTypes.STRING,
      },
      pais: {
        type: DataTypes.STRING,
      },
    },
    {
      hooks: {
        beforeCount(options: any): HookReturn {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (instituicao as any).associate = function (
    models: typeof sequelizeClient.models
  ): void {
    instituicao.belongsToMany(models.edicao, {
      as: 'edicoes',
      through: 'instituicaoEdicao',
    });
    instituicao.hasMany(models.instituicaoEdicao, {
      as: 'instituicoesEdicoes',
      foreignKey: 'instituicaoId',
    });
    instituicao.hasMany(models.escrita, {
      as: 'escritas',
      foreignKey: 'instituicaoId',
    });
  };

  return instituicao;
}
