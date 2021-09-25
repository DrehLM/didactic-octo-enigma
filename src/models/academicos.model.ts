// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const academicos = sequelizeClient.define(
    'academicos',
    {
      nome: {
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
  (academicos as any).associate = function (
    models: typeof sequelizeClient.models
  ): void {
    academicos.hasOne(models.autores, {
      as: 'autor',
      foreignKey: 'academicoId',
    });
    academicos.hasOne(models.orientadores, {
      as: 'orientador',
      foreignKey: 'academicoId',
    });
  };

  return academicos;
}