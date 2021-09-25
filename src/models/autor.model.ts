// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const autor = sequelizeClient.define(
    'autor',
    {
      academicoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      genero: {
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
  (autor as any).associate = function (
    models: typeof sequelizeClient.models
  ): void {
    autor.belongsTo(models.academico, {
      as: 'academico',
      foreignKey: 'academicoId',
    });
    autor.belongsToMany(models.publicacao, {
      as: 'publicacoes',
      through: 'escrita',
      foreignKey: 'autorId',
    });
    autor.hasMany(models.escrita, {
      as: 'escritas',
      foreignKey: 'autorId',
    });
  };

  return autor;
}
