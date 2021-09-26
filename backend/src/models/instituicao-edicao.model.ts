// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const instituicaoEdicao = sequelizeClient.define(
    'instituicaoEdicao',
    {
      instituicaoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      edicaoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      tableName: 'instituicao_edicao',
      hooks: {
        beforeCount(options: any): HookReturn {
          options.raw = true;
        },
      },
    }
  );

  (instituicaoEdicao as any).associate = function (
    models: typeof sequelizeClient.models
  ): void {
    instituicaoEdicao.belongsTo(models.instituicao, {
      as: 'instituicao',
      foreignKey: 'instituicaoId',
    });
    instituicaoEdicao.belongsTo(models.edicao, {
      as: 'edicao',
      foreignKey: 'edicaoId',
    });
  };

  return instituicaoEdicao;
}
