// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const trilha = sequelizeClient.define(
    'trilha',
    {
      trilha: {
        type: DataTypes.STRING,
        allowNull: false,
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
  (trilha as any).associate = function (
    models: typeof sequelizeClient.models
  ): void {
    trilha.belongsToMany(models.edicao, {
      as: 'edicoes',
      through: 'edicaoTrilha',
      foreignKey: 'edicaoId',
    });
    trilha.hasMany(models.edicaoTrilha, {
      as: 'edicoesTrilhas',
      foreignKey: 'trilhaId',
    });
  };

  return trilha;
}
