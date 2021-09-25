// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const orientadores = sequelizeClient.define(
    'orientadores',
    {
      academicoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      titulacao: {
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
  (orientadores as any).associate = function (
    models: typeof sequelizeClient.models
  ): void {
    orientadores.belongsTo(models.academicos, {
      as: 'academico',
      foreignKey: 'academicoId',
    });
  };

  return orientadores;
}
