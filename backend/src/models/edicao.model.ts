// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const edicao = sequelizeClient.define(
    'edicao',
    {
      edicao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      eventoId: {
        type: DataTypes.INTEGER,
      },
      instituicaoId: {
        type: DataTypes.INTEGER,
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
  (edicao as any).associate = function (
    models: typeof sequelizeClient.models
  ): void {
    edicao.belongsToMany(models.instituicao, {
      as: 'instituicoes',
      through: 'instituicaoEdicao',
    });
    edicao.hasMany(models.instituicaoEdicao, {
      as: 'instituicoesEdicoes',
      foreignKey: 'edicaoId',
    });
    edicao.belongsTo(models.evento, {
      as: 'evento',
      foreignKey: 'eventoId',
    });
    edicao.belongsToMany(models.trilha, {
      as: 'trilhas',
      through: 'edicaoTrilha',
    });
    edicao.hasMany(models.edicaoTrilha, {
      as: 'edicoesTrilhas',
      foreignKey: 'edicaoId',
    });
    edicao.hasMany(models.publicacao, {
      as: 'publicacoes',
      foreignKey: 'edicaoId',
    });
  };

  return edicao;
}
