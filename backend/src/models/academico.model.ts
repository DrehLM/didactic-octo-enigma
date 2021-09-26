// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const academico = sequelizeClient.define(
    'academico',
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
  (academico as any).associate = function (
    models: typeof sequelizeClient.models
  ): void {
    academico.hasOne(models.autor, {
      as: 'autor',
      foreignKey: 'academicoId',
    });
    academico.hasOne(models.orientador, {
      as: 'orientador',
      foreignKey: 'academicoId',
    });
  };

  return academico;
}
