// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const edicaoTrilha = sequelizeClient.define(
    'edicaoTrilha',
    {
      edicaoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      trilhaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      tableName: 'edicao_trilha',
      hooks: {
        beforeCount(options: any): HookReturn {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (edicaoTrilha as any).associate = function (
    models: typeof sequelizeClient.models
  ): void {
    edicaoTrilha.belongsTo(models.edicao, {
      as: 'edicoes',
      foreignKey: 'edicaoId',
    });
    edicaoTrilha.belongsTo(models.trilha, {
      as: 'trilhas',
      foreignKey: 'trilhaId',
    });
  };

  return edicaoTrilha;
}
